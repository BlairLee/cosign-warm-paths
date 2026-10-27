#!/usr/bin/env python3
"""Generate a synthetic endorsement graph for cosign-paths.

Every person, company and endorsement here is invented. Names are drawn from
a small word list so nothing collides with a real public figure by design.

Usage:
    python3 scripts/generate_synthetic.py            # writes data/synthetic.js
    python3 scripts/generate_synthetic.py --seed 7   # different graph
"""
import argparse
import json
import random

# --- vocabulary ------------------------------------------------------------

FIRST = [
    "Ada", "Bram", "Cleo", "Dev", "Esme", "Finn", "Gia", "Hale", "Ines", "Jory",
    "Kai", "Lior", "Mira", "Nico", "Orla", "Pax", "Quin", "Rhea", "Soren", "Tova",
    "Ulla", "Vida", "Wren", "Xan", "Yara", "Zev", "Amara", "Bodhi", "Cira", "Dax",
    "Elio", "Fia", "Gus", "Hana", "Idris", "Juno", "Kael", "Lena", "Milo", "Nia",
    "Oren", "Pia", "Reza", "Sana", "Teo", "Uma", "Vik", "Wes", "Yuki", "Zara",
]
LAST = [
    "Arbor", "Brook", "Calder", "Dune", "Ember", "Fjord", "Glen", "Harbor", "Isle",
    "Juniper", "Kestrel", "Lark", "Moss", "North", "Oak", "Pine", "Quarry", "Ridge",
    "Shore", "Thorn", "Vale", "Wilde", "Yarrow", "Zephyr", "Ashby", "Birch", "Cove",
    "Delta", "Elm", "Flint", "Grove", "Heath", "Ivory", "Jade", "Knoll", "Loch",
]
COMPANY_A = ["Lumen", "Vector", "Harbor", "Quill", "Atlas", "Nimbus", "Forge", "Relay",
             "Signal", "Meridian", "Tandem", "Verge", "Orbit", "Cinder", "Beacon", "Prism"]
COMPANY_B = ["Labs", "AI", "Systems", "Health", "Robotics", "Data", "Cloud", "Bio",
             "Finance", "Security", "Works", "Infra"]

SKILLS = [
    "ai infra", "llm eval", "agents", "distributed systems", "ml ranking", "product design",
    "growth", "fundraising", "recruiting", "sales", "devtools", "security", "data eng",
    "mobile", "backend", "frontend", "biotech", "fintech", "robotics", "gtm",
]
ROLES = ["founder", "engineer", "designer", "investor", "operator", "researcher", "pm"]
STAGES = ["pre-seed", "seed", "series a", "series b", "growth"]
CITIES = ["San Francisco", "New York", "Los Angeles", "Seattle", "Austin", "London"]

# Endorsement types. `base` is the trust prior; the UI explains each type.
EDGE_TYPES = {
    "cofounded":      {"base": 0.95, "label": "co-founded"},
    "worked_with":    {"base": 0.80, "label": "worked together"},
    "cosigned_skill": {"base": 0.70, "label": "cosigned a skill"},
    "invested_in":    {"base": 0.65, "label": "invested in"},
    "mentored":       {"base": 0.60, "label": "mentored"},
    "met_at_event":   {"base": 0.25, "label": "met at an event"},
}


def make_people(n, rng):
    people, used = [], set()
    while len(people) < n:
        name = f"{rng.choice(FIRST)} {rng.choice(LAST)}"
        if name in used:
            continue
        used.add(name)
        role = rng.choices(ROLES, weights=[3, 6, 2, 2, 3, 2, 2])[0]
        k = 2 if rng.random() < 0.6 else 3
        people.append({
            "id": f"p{len(people):03d}",
            "kind": "person",
            "name": name,
            "role": role,
            "skills": rng.sample(SKILLS, k),
            "city": rng.choice(CITIES),
        })
    return people


def make_companies(n, rng):
    out, used = [], set()
    while len(out) < n:
        name = f"{rng.choice(COMPANY_A)} {rng.choice(COMPANY_B)}"
        if name in used:
            continue
        used.add(name)
        out.append({
            "id": f"c{len(out):03d}",
            "kind": "company",
            "name": name,
            "stage": rng.choice(STAGES),
            "focus": rng.sample(SKILLS, 2),
            "city": rng.choice(CITIES),
        })
    return out


def reason_for(etype, a, b, company, rng):
    skill = rng.choice(a["skills"]) if a["kind"] == "person" else None
    if etype == "cofounded":
        return f"{a['name']} and {b['name']} co-founded {company['name']}."
    if etype == "worked_with":
        yrs = rng.choice(["two", "three", "four"])
        return f"{a['name']} and {b['name']} worked together at {company['name']} for {yrs} years."
    if etype == "cosigned_skill":
        s = rng.choice(b["skills"]) if b["kind"] == "person" else "the product"
        return f"{a['name']} cosigned {b['name']} for {s}."
    if etype == "invested_in":
        return f"{a['name']} invested in {b['name']} ({b.get('stage', 'seed')})."
    if etype == "mentored":
        return f"{a['name']} mentored {b['name']} through an accelerator cohort."
    if etype == "met_at_event":
        return f"{a['name']} and {b['name']} met at a founder dinner in {a['city']}."
    return ""


def build(seed, n_people, n_companies):
    rng = random.Random(seed)
    people = make_people(n_people, rng)
    companies = make_companies(n_companies, rng)
    nodes = people + companies
    by_id = {n["id"]: n for n in nodes}

    # Assign people to companies (current / past) to create realistic clusters.
    membership = {}
    for p in people:
        n_jobs = 1 if rng.random() < 0.55 else 2
        membership[p["id"]] = rng.sample(companies, n_jobs)

    edges, seen = [], set()

    def add(a, b, etype, company=None, year=None):
        key = (a["id"], b["id"], etype)
        if key in seen or a["id"] == b["id"]:
            return
        seen.add(key)
        year = year or rng.randint(2016, 2026)
        edges.append({
            "source": a["id"],
            "target": b["id"],
            "type": etype,
            "year": year,
            "reason": reason_for(etype, a, b, company or rng.choice(companies), rng),
        })

    # worked_with / cofounded inside each company cluster
    for c in companies:
        members = [p for p in people if c in membership[p["id"]]]
        founders = [p for p in members if p["role"] == "founder"]
        for i, f1 in enumerate(founders):
            for f2 in founders[i + 1:]:
                add(f1, f2, "cofounded", c)
                add(f2, f1, "cofounded", c)
        for i, a in enumerate(members):
            for b in members[i + 1:]:
                if rng.random() < 0.35:
                    add(a, b, "worked_with", c)
                    if rng.random() < 0.6:
                        add(b, a, "worked_with", c)
        # company node links: current employees "work at"
        for m in members[:6]:
            add(m, c, "worked_with", c)

    # cosigned_skill: directed, mostly inside clusters, some across
    for p in people:
        n_cosigns = rng.choices([0, 1, 2, 3], weights=[2, 5, 3, 1])[0]
        mine = {c["id"] for c in membership[p["id"]]}
        pool = [q for q in people if q is not p and mine & {c["id"] for c in membership[q["id"]]}]
        for _ in range(n_cosigns):
            q = rng.choice(pool) if pool and rng.random() < 0.7 else rng.choice(people)
            add(p, q, "cosigned_skill")

    # investors invest in companies and mentor founders
    for inv in [p for p in people if p["role"] == "investor"]:
        for c in rng.sample(companies, rng.randint(2, 5)):
            add(inv, c, "invested_in", c)
            founders = [p for p in people if c in membership[p["id"]] and p["role"] == "founder"]
            for f in founders[:2]:
                add(inv, f, "mentored", c)

    # weak ties: event meetings across clusters
    for _ in range(int(len(people) * 0.8)):
        a, b = rng.sample(people, 2)
        add(a, b, "met_at_event")

    return {
        "meta": {
            "name": "Synthetic endorsement graph",
            "note": "Every person, company and endorsement is invented.",
            "seed": seed,
        },
        "edgeTypes": EDGE_TYPES,
        "nodes": nodes,
        "edges": edges,
    }


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--seed", type=int, default=42)
    ap.add_argument("--people", type=int, default=220)
    ap.add_argument("--companies", type=int, default=40)
    ap.add_argument("--out", default="data/synthetic.js")
    args = ap.parse_args()
    g = build(args.seed, args.people, args.companies)
    with open(args.out, "w") as f:
        f.write("// Generated by scripts/generate_synthetic.py. Do not edit by hand.\n")
        f.write("window.COSIGN_SYNTHETIC = ")
        json.dump(g, f, indent=1)
        f.write(";\n")
    print(f"wrote {args.out}: {len(g['nodes'])} nodes, {len(g['edges'])} edges")


if __name__ == "__main__":
    main()
