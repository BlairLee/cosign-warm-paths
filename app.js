/* Cosign Paths — trust-weighted intro paths over an endorsement graph.
 * No build step, no backend, no API keys. Everything runs in the browser.
 */
(() => {
  const YEAR_NOW = 2026;
  const HOP_DISCOUNT = 0.85;   // each extra hop costs 15% of trust
  const REVERSE_PENALTY = 0.8; // walking an endorsement against its direction
  const MAX_HOPS = 4;
  const TOP_K = 3;

  // ---------- intent parsing (rule-based; swap for an LLM if you like) ----------
  const SKILL_SYNONYMS = {
    "ai infra": ["ai infra", "ai infrastructure", "ml infra", "gpu", "inference", "training infra", "llm infra"],
    "llm eval": ["eval", "evals", "evaluation", "benchmark", "llm eval"],
    "agents": ["agent", "agents", "agentic", "copilot", "assistant"],
    "distributed systems": ["distributed", "distributed systems", "scalability", "consensus"],
    "ml ranking": ["ranking", "recommendation", "recsys", "search", "retrieval"],
    "product design": ["design", "designer", "ux", "ui", "product design"],
    "growth": ["growth", "marketing", "acquisition"],
    "fundraising": ["fundraising", "raise", "investor", "investors", "vc", "fund"],
    "recruiting": ["recruiting", "hiring", "talent", "recruiter"],
    "sales": ["sales", "selling", "account"],
    "devtools": ["devtools", "developer tools", "dev tools", "sdk", "api"],
    "security": ["security", "infosec", "crypto", "cryptography"],
    "data eng": ["data eng", "data engineering", "pipelines", "warehouse"],
    "mobile": ["mobile", "ios", "android", "app"],
    "backend": ["backend", "server", "platform"],
    "frontend": ["frontend", "front-end", "web", "react"],
    "biotech": ["bio", "biotech", "health", "medical", "clinical"],
    "fintech": ["fintech", "payments", "banking", "finance", "financial"],
    "robotics": ["robotics", "robot", "hardware", "physical ai"],
    "gtm": ["gtm", "go-to-market", "go to market", "bd", "partnerships"],
  };
  const ROLE_SYNONYMS = {
    founder: ["founder", "founders", "ceo", "cofounder", "co-founder"],
    engineer: ["engineer", "engineers", "developer", "swe", "builder", "technical"],
    designer: ["designer", "designers"],
    investor: ["investor", "investors", "vc", "angel", "partner at", "gp"],
    operator: ["operator", "operators", "coo", "chief of staff"],
    researcher: ["researcher", "scientist", "phd", "research"],
    pm: ["pm", "product manager", "product lead"],
  };
  const STAGE_SYNONYMS = {
    "pre-seed": ["pre-seed", "preseed"], seed: ["seed", "seed-stage", "seed stage", "early-stage", "early stage"],
    "series a": ["series a"], "series b": ["series b"], growth: ["growth-stage", "late-stage", "public", "big company"],
  };

  function parseIntent(text) {
    const t = ` ${text.toLowerCase().replace(/[^a-z0-9\- ]/g, " ")} `;
    const has = (phrase) => t.includes(` ${phrase} `) || t.includes(` ${phrase}-`) || t.includes(`-${phrase} `);
    const skills = Object.entries(SKILL_SYNONYMS).filter(([, syns]) => syns.some(has)).map(([k]) => k);
    const roles = Object.entries(ROLE_SYNONYMS).filter(([, syns]) => syns.some(has)).map(([k]) => k);
    const stages = Object.entries(STAGE_SYNONYMS).filter(([, syns]) => syns.some(has)).map(([k]) => k);
    const cities = ["san francisco", "new york", "los angeles", "seattle", "austin", "london", "miami"].filter(has);
    const wantsCompany = /\b(company|startup|startups|firm|lab|labs)\b/.test(t) && roles.length === 0;
    // Named entities: any node whose name (or a short alias) appears in the query.
    const named = (data?.nodes || []).filter((n) => aliasesOf(n).some((a) => t.includes(` ${a} `)));
    return { skills, roles, stages, cities, wantsCompany, named };
  }
  function aliasesOf(n) {
    const full = n.name.toLowerCase().replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();
    const out = [full];
    const m = n.name.match(/\(([^)]+)\)/); if (m) out.push(m[1].toLowerCase());
    if (n.kind === "company") out.push(full.split(" ")[0]); // "cosign", "product", "databricks"
    return out.filter((a) => a.length > 3);
  }

  // Score how well a node matches the intent. 0 = not a target.
  function targetScore(node, intent, adj) {
    // A named entity in the query wins: the entity itself, or the people attached to a named company.
    if (intent.named.length) {
      for (const n of intent.named) {
        if (n.id === node.id) return 1.5;
        if (n.kind === "company" && node.kind === "person" &&
            (adj.get(node.id) || []).some((x) => x.to === n.id && (x.edge.type === "cofounded" || x.edge.type === "worked_with"))) return 1.2;
      }
      return 0;
    }
    let s = 0;
    const tags = node.kind === "person" ? node.skills : node.focus;
    const hit = intent.skills.filter((k) => tags.includes(k)).length;
    if (intent.skills.length) {
      if (!hit) return 0;
      s += hit / intent.skills.length;
    }
    if (node.kind === "person") {
      if (intent.roles.length) { if (!intent.roles.includes(node.role)) return 0; s += 0.5; }
      if (intent.wantsCompany) s -= 0.2;
    } else {
      if (intent.roles.length && !intent.wantsCompany) return 0; // asked for a person
      if (intent.stages.length) { if (!intent.stages.includes(node.stage)) return 0; s += 0.5; }
    }
    if (intent.cities.length) s += intent.cities.includes((node.city || "").toLowerCase()) ? 0.3 : -0.1;
    return Math.max(s, 0.05);
  }

  // ---------- graph + trust ----------
  function recency(year) {
    const age = Math.max(0, YEAR_NOW - (year || YEAR_NOW));
    return 0.6 + 0.4 * Math.exp(-age / 6);
  }
  function edgeTrust(e, types) {
    return (types[e.type]?.base ?? 0.3) * recency(e.year);
  }

  function buildAdjacency(data) {
    const adj = new Map();
    const push = (a, b, e, reverse) => {
      if (!adj.has(a)) adj.set(a, []);
      adj.get(a).push({ to: b, edge: e, reverse });
    };
    for (const e of data.edges) {
      push(e.source, e.target, e, false);
      push(e.target, e.source, e, true);
    }
    return adj;
  }

  // Best (highest-trust) path from origin to every node: Dijkstra on -log(trust).
  function bestPaths(data, adj, origin, mode) {
    const cost = new Map([[origin, 0]]);
    const prev = new Map();
    const hops = new Map([[origin, 0]]);
    const done = new Set();
    const pq = [[0, origin]];
    while (pq.length) {
      pq.sort((a, b) => a[0] - b[0]);
      const [c, u] = pq.shift();
      if (done.has(u)) continue;
      done.add(u);
      if ((hops.get(u) || 0) >= MAX_HOPS) continue;
      for (const { to, edge, reverse } of adj.get(u) || []) {
        let w;
        if (mode === "hops") w = 1;                        // baseline: every edge equal
        else {
          let t = edgeTrust(edge, data.edgeTypes);
          if (reverse && edge.type !== "worked_with" && edge.type !== "cofounded") t *= REVERSE_PENALTY;
          w = -Math.log(t * HOP_DISCOUNT);
        }
        const nc = c + w;
        if (nc < (cost.get(to) ?? Infinity)) {
          cost.set(to, nc); prev.set(to, { from: u, edge, reverse }); hops.set(to, (hops.get(u) || 0) + 1);
          pq.push([nc, to]);
        }
      }
    }
    return { cost, prev, hops };
  }

  function unwind(prev, origin, target) {
    const steps = [];
    let cur = target;
    while (cur !== origin) {
      const p = prev.get(cur);
      if (!p) return null;
      steps.unshift({ from: p.from, to: cur, edge: p.edge, reverse: p.reverse });
      cur = p.from;
    }
    return steps;
  }

  function pathTrust(steps, types) {
    let t = 1;
    for (const s of steps) {
      let w = edgeTrust(s.edge, types);
      if (s.reverse && s.edge.type !== "worked_with" && s.edge.type !== "cofounded") w *= REVERSE_PENALTY;
      t *= w;
    }
    return t * Math.pow(HOP_DISCOUNT, Math.max(0, steps.length - 1));
  }

  function findIntroPaths(data, adj, origin, intent, mode) {
    const byId = Object.fromEntries(data.nodes.map((n) => [n.id, n]));
    const { prev } = bestPaths(data, adj, origin, mode);
    const out = [];
    for (const n of data.nodes) {
      if (n.id === origin) continue;
      const ts = targetScore(n, intent, adj);
      if (!ts) continue;
      const steps = unwind(prev, origin, n.id);
      if (!steps) continue;
      const trust = pathTrust(steps, data.edgeTypes);
      out.push({ target: n, steps, trust, score: trust * (0.5 + ts), hops: steps.length, ts });
    }
    // Baseline ranks by hop count first (what a plain "connections" graph does); trust mode by trust × fit.
    if (mode === "hops") out.sort((a, b) => a.hops - b.hops || b.ts - a.ts || b.trust - a.trust);
    else out.sort((a, b) => b.score - a.score);
    return { paths: out.slice(0, TOP_K), byId };
  }

  // ---------- UI ----------
  const $ = (s) => document.querySelector(s);
  const datasets = { synthetic: window.COSIGN_SYNTHETIC, public: window.COSIGN_PUBLIC };
  let data, adj, byId, sim, svg, gEdges, gNodes, current = { paths: [], active: 0 };

  const EXAMPLES = {
    synthetic: [
      "I want to meet an engineer working on AI infra at a seed-stage startup",
      "Looking for a designer in New York who has done mobile",
      "Who can introduce me to investors in fintech?",
      "I need a researcher who knows LLM eval and agents",
      "Find a Series A company doing robotics in Los Angeles",
    ],
    public: [
      "I want to meet someone on the Cosign team",
      "Who can introduce me to an investor focused on AI infra?",
      "Looking for a founder who has built in recruiting",
      "I want to reach someone working on consumer AI at a16z",
    ],
  };
  let exampleIdx = 0;

  function loadDataset(key) {
    const src = datasets[key];
    data = { ...src, nodes: src.nodes.map((n) => ({ ...n })), edges: src.edges.map((e) => ({ ...e })) };
    byId = Object.fromEntries(data.nodes.map((n) => [n.id, n]));
    adj = buildAdjacency(data);
    $("#dsnote").textContent = data.meta.note + (data.meta.verified === false ? " Sources are cited per edge and still need a human re-check." : "");
    fillOrigin();
    $("#query").value = EXAMPLES[key][0];
    exampleIdx = 0;
    current = { paths: [], active: 0 };
    $("#results").innerHTML = "";
    $("#intent").innerHTML = "";
    $("#draft-section").hidden = true;
    $("#hint").hidden = false;
    document.querySelector('input[name="mode"][value="trust"]').checked = true;
    renderGraph();
  }

  function fillOrigin() {
    const sel = $("#origin");
    sel.innerHTML = "";
    const people = data.nodes.filter((n) => n.kind === "person").sort((a, b) => a.name.localeCompare(b.name));
    for (const p of people) {
      const o = document.createElement("option");
      o.value = p.id; o.textContent = `${p.name} · ${p.role}`;
      sel.appendChild(o);
    }
    const you = data.nodes.find((n) => n.id === "you");
    sel.value = you ? "you" : (people.find((p) => p.role === "engineer") || people[0]).id;
  }

  function renderIntent(intent) {
    const chips = [];
    intent.skills.forEach((s) => chips.push(`<span class="chip k-skill">skill <b>${s}</b></span>`));
    intent.roles.forEach((r) => chips.push(`<span class="chip">role <b>${r}</b></span>`));
    intent.stages.forEach((s) => chips.push(`<span class="chip">stage <b>${s}</b></span>`));
    intent.cities.forEach((c) => chips.push(`<span class="chip">city <b>${c}</b></span>`));
    if (intent.wantsCompany) chips.push(`<span class="chip">target <b>company</b></span>`);
    intent.named.forEach((n) => chips.push(`<span class="chip k-skill">${n.kind === "company" ? "people at" : "person"} <b>${n.name}</b></span>`));
    $("#intent").innerHTML = chips.length ? `<span class="chip">parsed as →</span>` + chips.join("") : `<span class="chip">no constraints parsed; ranking everyone by trust</span>`;
  }

  function stepLine(s) {
    const a = byId[s.from], b = byId[s.to];
    const t = data.edgeTypes[s.edge.type]?.label || s.edge.type;
    const dir = s.reverse ? `${b.name} ${t} ${a.name}` : `${a.name} ${t} ${b.name}`;
    const w = pathTrust([s], data.edgeTypes).toFixed(2);
    const src = s.edge.src ? ` <a href="${s.edge.src}" target="_blank" rel="noopener">source ↗</a>` : "";
    return `<li><b>${b.name}</b> <span class="w">trust ${w}</span><span class="why">${dir} · ${s.edge.year}. ${s.edge.reason}${src}</span></li>`;
  }

  function renderResults() {
    const box = $("#results");
    if (!current.paths.length) { box.innerHTML = `<p class="empty">No reachable match within ${MAX_HOPS} hops. Loosen the query or pick a different origin.</p>`; return; }
    box.innerHTML = current.paths.map((p, i) => `
      <div class="path ${i === current.active ? "active" : ""}" data-i="${i}">
        <div class="head"><b>${p.target.name}</b><span class="score">${(p.trust * 100).toFixed(0)}% trust</span></div>
        <div class="hops">${p.hops} hop${p.hops > 1 ? "s" : ""} · ${p.target.kind === "person" ? p.target.role : p.target.stage} · ${p.target.city || ""}</div>
        <ol>${p.steps.map(stepLine).join("")}</ol>
      </div>`).join("");
    box.querySelectorAll(".path").forEach((el) => el.addEventListener("click", () => { current.active = +el.dataset.i; renderResults(); highlight(); renderDraft(); }));
  }

  function renderDraft() {
    const p = current.paths[current.active];
    if (!p) { $("#draft-section").hidden = true; return; }
    const me = byId[$("#origin").value];
    const target = p.target;
    const goal = ($("#query").value || "").trim().replace(/[.?!]+$/, "");
    const firstName = (n) => n.name.split(" ")[0];
    // The person you actually write to: the first *person* on the path (a company can't reply).
    const firstStep = p.steps.find((s) => byId[s.to].kind === "person");
    if (!firstStep) {
      $("#draft").value = `You already have a direct tie to ${target.name} (${p.steps[0].edge.reason}). Reach out to someone there you know, or add yourself with the people you know to find a warmer path.`;
      $("#draft-section").hidden = false; return;
    }
    const first = byId[firstStep.to];
    const why = firstStep.edge.reason.replace(/\.$/, "");
    let body;
    if (first.id === target.id) {
      // Direct: no intro needed, just a warm note.
      body = `We're connected through this: "${why}." So I hope it's fine to reach out directly. What I'm after: ${goal}. I'd value 20 minutes of your time if you're open to it.`;
    } else {
      const rest = p.steps.slice(p.steps.indexOf(firstStep) + 1);
      const chain = rest.length === 1 ? ` From what I can see, you know ${target.name} directly.`
        : rest.length > 1 ? ` From what I can see, you're ${rest.length} steps from ${target.name} (${rest.map((s) => byId[s.to].name).join(" → ")}).` : "";
      const askWhom = target.kind === "person" ? target.name : `someone at ${target.name}`;
      body = `You came to mind because of this: "${why}."${chain} Would you be open to a short intro to ${askWhom}? What I'm after: ${goal}.`;
    }
    $("#draft").value = `Hi ${firstName(first)},\n\n${body}\n\nHappy to send a two-line blurb you can forward, and no worries at all if it's not a fit.\n\n${me.name}`;
    $("#draft-section").hidden = false;
  }

  function run() {
    const origin = $("#origin").value;
    const intent = parseIntent($("#query").value);
    const mode = document.querySelector('input[name="mode"]:checked').value;
    renderIntent(intent);
    const { paths } = findIntroPaths(data, adj, origin, intent, mode);
    current = { paths, active: 0 };
    renderResults();
    renderDraft();
    highlight();
    $("#hint").hidden = true;
  }

  // ---------- D3 graph ----------
  function renderGraph() {
    svg = d3.select("#graph");
    svg.selectAll("*").remove();
    const small = data.nodes.length < 80;
    svg.classed("small", small);
    const box = svg.node().getBoundingClientRect();
    const W = box.width || 800, H = box.height || 600;
    const root = svg.append("g");
    svg.call(d3.zoom().scaleExtent([0.3, 4]).on("zoom", (ev) => root.attr("transform", ev.transform)));

    const nodes = data.nodes;
    const links = data.edges.map((e) => ({ ...e, source: e.source, target: e.target }));
    gEdges = root.append("g").selectAll("line").data(links).join("line")
      .attr("class", "edge").attr("stroke-width", (d) => 0.6 + 2 * (data.edgeTypes[d.type]?.base ?? 0.3));
    gNodes = root.append("g").selectAll("g").data(nodes, (d) => d.id).join("g")
      .attr("class", (d) => `node ${d.id === "you" ? "you" : d.kind}`)
      .call(d3.drag()
        .on("start", (ev, d) => { if (!ev.active) sim.alphaTarget(0.3).restart(); d.fx = d.x; d.fy = d.y; })
        .on("drag", (ev, d) => { d.fx = ev.x; d.fy = ev.y; })
        .on("end", (ev, d) => { if (!ev.active) sim.alphaTarget(0); d.fx = null; d.fy = null; }));
    gNodes.append("circle").attr("r", (d) => d.kind === "company" ? 7 : (d.id === "you" ? 9 : 4.5));
    gNodes.append("text").attr("dx", 9).attr("dy", 3).text((d) => d.name);
    gNodes.append("title").text((d) => `${d.name}\n${d.kind === "person" ? d.role + " · " + d.skills.join(", ") : d.stage + " · " + d.focus.join(", ")}`);
    gNodes.on("click", (ev, d) => { if (d.kind === "person") { $("#origin").value = d.id; run(); } });

    sim = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id((d) => d.id).distance((d) => (small ? 70 : 30) + 40 * (1 - (data.edgeTypes[d.type]?.base ?? 0.3))).strength(0.4))
      .force("charge", d3.forceManyBody().strength(small ? -400 : -60))
      .force("center", d3.forceCenter(W / 2, H / 2))
      .force("collide", d3.forceCollide(9))
      .on("tick", () => {
        gEdges.attr("x1", (d) => d.source.x).attr("y1", (d) => d.source.y).attr("x2", (d) => d.target.x).attr("y2", (d) => d.target.y);
        gNodes.attr("transform", (d) => `translate(${d.x},${d.y})`);
      });

    $("#legend").innerHTML = Object.entries(data.edgeTypes).map(([k, v]) =>
      `<span><i style="background:var(--muted);height:${1 + 3 * v.base}px"></i>${v.label} · ${v.base}</span>`).join("");
  }

  function highlight() {
    const p = current.paths[current.active];
    const lit = new Set(), litEdges = new Set();
    if (p) {
      lit.add($("#origin").value);
      p.steps.forEach((s) => { lit.add(s.to); litEdges.add(s.edge); });
    }
    const mode = document.querySelector('input[name="mode"]:checked').value;
    gNodes.classed("lit", (d) => lit.has(d.id)).classed("dim", (d) => p && !lit.has(d.id));
    gEdges.classed("lit", (d) => [...litEdges].some((e) => e.source === d.source.id && e.target === d.target.id && e.type === d.type))
      .classed("base", mode === "hops")
      .classed("dim", (d) => p && ![...litEdges].some((e) => e.source === d.source.id && e.target === d.target.id && e.type === d.type));
  }

  // ---------- "add me" ----------
  function meRow() {
    const row = document.createElement("div");
    row.className = "me-row";
    const list = data.nodes.filter((n) => n.kind === "person").sort((a, b) => a.name.localeCompare(b.name)).map((n) => `<option value="${n.id}">${n.name}</option>`).join("");
    const types = Object.entries(data.edgeTypes).map(([k, v]) => `<option value="${k}">${v.label}</option>`).join("");
    row.innerHTML = `<select class="me-who">${list}</select><select class="me-type">${types}</select>`;
    $("#me-rows").appendChild(row);
  }
  function saveMe() {
    const name = $("#me-name").value.trim() || "You";
    data.nodes = data.nodes.filter((n) => n.id !== "you");
    data.edges = data.edges.filter((e) => e.source !== "you" && e.target !== "you");
    data.nodes.push({ id: "you", kind: "person", name, role: "engineer", skills: [], city: "" });
    $("#me-rows").querySelectorAll(".me-row").forEach((r) => {
      const who = r.querySelector(".me-who").value, type = r.querySelector(".me-type").value;
      const other = byId[who];
      data.edges.push({ source: "you", target: who, type, year: YEAR_NOW, reason: `${name} says: ${data.edgeTypes[type].label} ${other.name}.`, src: "" });
    });
    byId = Object.fromEntries(data.nodes.map((n) => [n.id, n]));
    adj = buildAdjacency(data);
    fillOrigin();
    renderGraph();
    $("#addme").open = false;
    run();
  }

  // ---------- wire up ----------
  document.querySelectorAll('input[name="ds"]').forEach((r) => r.addEventListener("change", (e) => { loadDataset(e.target.value); $("#me-rows").innerHTML = ""; meRow(); }));
  document.querySelectorAll('input[name="mode"]').forEach((r) => r.addEventListener("change", run));
  $("#run").addEventListener("click", run);
  $("#query").addEventListener("keydown", (e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); run(); } });
  $("#example").addEventListener("click", () => {
    const key = document.querySelector('input[name="ds"]:checked').value;
    exampleIdx = (exampleIdx + 1) % EXAMPLES[key].length;
    $("#query").value = EXAMPLES[key][exampleIdx];
    run();
  });
  $("#origin").addEventListener("change", () => { if (current.paths.length) run(); });
  $("#me-add-row").addEventListener("click", meRow);
  $("#me-save").addEventListener("click", saveMe);
  $("#copy").addEventListener("click", () => { navigator.clipboard?.writeText($("#draft").value); $("#copy").textContent = "Copied"; setTimeout(() => ($("#copy").textContent = "Copy"), 1200); });
  window.addEventListener("resize", () => { if (sim) { const b = svg.node().getBoundingClientRect(); sim.force("center", d3.forceCenter(b.width / 2, b.height / 2)).alpha(0.3).restart(); } });

  loadDataset("synthetic");
  meRow();
})();
