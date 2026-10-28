// A hand-curated graph of PUBLIC professional relationships around the
// Cosign team and its a16z neighbourhood. Every edge cites the public page
// it was taken from.
//
// Format: nodes are PEOPLE only. Org affiliations live on each person
// ("orgs"), and relationship context lives on the edges ("via"). The app
// synthesizes weak "colleagues" edges between people who share an org but
// have no explicit endorsement, so the graph stays connected without org
// nodes.
//
// Rules for this file:
//   - Only facts the person has stated publicly (bios, posts, Wikipedia, press).
//   - No private contact info, no inferred relationships, no scraping.
//   - "verified": false means a human has not re-checked the source yet.
//     Edges were cross-checked against public coverage on 2026-10-27, but
//     re-check every row before publishing the demo.

window.COSIGN_PUBLIC = {
 "meta": {
  "name": "Real graph: Cosign team & a16z neighbourhood",
  "note": "Hand-curated from public bios, posts and press. Cosign launched 2026-09-25 as the first product of a16z's New Media team.",
  "verified": false
 },
 "edgeTypes": {
  "cofounded":      {"base": 0.95, "label": "co-founded"},
  "worked_with":    {"base": 0.80, "label": "worked together"},
  "cosigned_skill": {"base": 0.70, "label": "publicly vouched for"},
  "invested_in":    {"base": 0.65, "label": "invested in / board"},
  "mentored":       {"base": 0.60, "label": "mentored"},
  "colleagues":     {"base": 0.50, "label": "at the same org as"},
  "met_at_event":   {"base": 0.25, "label": "appeared together"}
 },
 "nodes": [
  // --- Cosign / a16z New Media team ---
  {"id":"erik_torenberg","kind":"person","name":"Erik Torenberg","role":"investor","skills":["growth","recruiting","gtm"],"city":"San Francisco","url":"https://a16z.com/author/erik-torenberg/",
   "orgs":[{"name":"Cosign","stage":"pre-seed","url":"https://cosign.co"},{"name":"Andreessen Horowitz (a16z)","stage":"growth","url":"https://en.wikipedia.org/wiki/Andreessen_Horowitz"},{"name":"Turpentine","stage":"seed","url":"https://pulse2.com/a16z-acquires-turpentine-and-names-erik-torenberg-as-partner/"},{"name":"On Deck","stage":"series a","url":"https://www.beondeck.com/"},{"name":"Village Global","stage":"seed","url":"https://www.villageglobal.vc/"},{"name":"Product Hunt","stage":"series a","url":"https://en.wikipedia.org/wiki/Product_Hunt"}]},
  {"id":"david_booth","kind":"person","name":"David Booth","role":"operator","skills":["recruiting","gtm","growth"],"city":"San Francisco","url":"https://www.a16z.news/p/david-booth-im-joining-a16z",
   "orgs":[{"name":"Cosign","stage":"pre-seed","url":"https://cosign.co"},{"name":"Andreessen Horowitz (a16z)","stage":"growth","url":"https://www.a16z.news/p/david-booth-im-joining-a16z"},{"name":"On Deck","stage":"series a","url":"https://www.beondeck.com/"}]},
  {"id":"katie_kirsch","kind":"person","name":"Katie Kirsch","role":"operator","skills":["gtm","growth","recruiting"],"city":"San Francisco","url":"https://katiekirsch.com/",
   "orgs":[{"name":"Cosign","stage":"pre-seed","url":"https://x.com/katiekirsch/status/2103501141900410918"},{"name":"Andreessen Horowitz (a16z)","stage":"growth","url":"https://katiekirsch.com/"}]},
  {"id":"dani_grant","kind":"person","name":"Dani Grant","role":"founder","skills":["product design","devtools","growth"],"city":"New York","url":"https://www.crunchbase.com/person/dani-grant",
   "orgs":[{"name":"Cosign","stage":"pre-seed","url":"https://lionherald.com/andreessen-horowitz-launches-cosign-a-network-that-ranks-tech-talent-by-who-vouches-for-them/"},{"name":"Andreessen Horowitz (a16z)","stage":"growth","url":"https://www.linkedin.com/in/danigrant/"},{"name":"Jam (jam.dev)","stage":"series a","url":"https://jam.dev"},{"name":"Cloudflare","stage":"growth","url":"https://ai.engineer/speakers/dani-grant"}]},
  {"id":"brooke_martin","kind":"person","name":"Brooke Martin","role":"operator","skills":["recruiting","gtm","growth"],"city":"San Francisco","url":"https://a16z.com/author/brooke-martin/",
   "orgs":[{"name":"Cosign","stage":"pre-seed","url":"https://a16zjobs.substack.com/p/introducing-cosign-a-new-space-to"},{"name":"Andreessen Horowitz (a16z)","stage":"growth","url":"https://a16z.com/author/brooke-martin/"}]},
  {"id":"dhruv_gupta","kind":"person","name":"Dhruv Gupta","role":"engineer","skills":["agents","frontend","product design"],"city":"San Francisco","url":"https://x.com/droovg",
   "orgs":[{"name":"Cosign","stage":"pre-seed","url":"https://x.com/droovg"},{"name":"Andreessen Horowitz (a16z)","stage":"growth","url":"https://a16zjobs.substack.com/p/introducing-cosign-a-new-space-to"}]},
  {"id":"katie_schwartz","kind":"person","name":"Katie Schwartz","role":"operator","skills":["recruiting","gtm","growth"],"city":"","url":"https://x.com/katiekschwartz",
   "orgs":[{"name":"Cosign","stage":"pre-seed","url":"https://a16zjobs.substack.com/p/introducing-cosign-a-new-space-to"},{"name":"Andreessen Horowitz (a16z)","stage":"growth","url":"https://x.com/katiekschwartz"}]},

  // --- a16z partners who appeared at the Cosign launch ---
  {"id":"josh_elman","kind":"person","name":"Josh Elman","role":"investor","skills":["product design","growth","mobile"],"city":"San Francisco","url":"https://a16z.com/author/josh-elman/",
   "orgs":[{"name":"Andreessen Horowitz (a16z)","stage":"growth","url":"https://a16z.com/author/josh-elman/"},{"name":"Greylock Partners","stage":"growth","url":"https://a16z.com/author/josh-elman/"},{"name":"LinkedIn","stage":"growth","url":"https://a16z.com/author/josh-elman/"}]},
  {"id":"olivia_moore","kind":"person","name":"Olivia Moore","role":"investor","skills":["agents","growth","product design"],"city":"San Francisco","url":"https://a16z.com/author/olivia-moore/",
   "orgs":[{"name":"Andreessen Horowitz (a16z)","stage":"growth","url":"https://a16z.com/author/olivia-moore/"}]},

  // --- wider a16z neighbourhood ---
  {"id":"marc_andreessen","kind":"person","name":"Marc Andreessen","role":"investor","skills":["fundraising","product design","ai infra"],"city":"San Francisco","url":"https://en.wikipedia.org/wiki/Marc_Andreessen",
   "orgs":[{"name":"Andreessen Horowitz (a16z)","stage":"growth","url":"https://en.wikipedia.org/wiki/Andreessen_Horowitz"},{"name":"Netscape","stage":"growth","url":"https://en.wikipedia.org/wiki/Netscape"},{"name":"Loudcloud / Opsware","stage":"growth","url":"https://en.wikipedia.org/wiki/Opsware"}]},
  {"id":"ben_horowitz","kind":"person","name":"Ben Horowitz","role":"investor","skills":["fundraising","gtm","ai infra"],"city":"San Francisco","url":"https://en.wikipedia.org/wiki/Ben_Horowitz",
   "orgs":[{"name":"Andreessen Horowitz (a16z)","stage":"growth","url":"https://en.wikipedia.org/wiki/Andreessen_Horowitz"},{"name":"Loudcloud / Opsware","stage":"growth","url":"https://en.wikipedia.org/wiki/Ben_Horowitz"},{"name":"Databricks","stage":"growth","url":"https://en.wikipedia.org/wiki/Databricks"}]},
  {"id":"chris_dixon","kind":"person","name":"Chris Dixon","role":"investor","skills":["fundraising","security","fintech"],"city":"New York","url":"https://en.wikipedia.org/wiki/Chris_Dixon",
   "orgs":[{"name":"Andreessen Horowitz (a16z)","stage":"growth","url":"https://en.wikipedia.org/wiki/Chris_Dixon"},{"name":"Hunch","stage":"series a","url":"https://en.wikipedia.org/wiki/Hunch_(website)"},{"name":"Coinbase","stage":"growth","url":"https://en.wikipedia.org/wiki/Chris_Dixon"}]},
  {"id":"martin_casado","kind":"person","name":"Martin Casado","role":"investor","skills":["ai infra","distributed systems","security"],"city":"San Francisco","url":"https://en.wikipedia.org/wiki/Martin_Casado",
   "orgs":[{"name":"Andreessen Horowitz (a16z)","stage":"growth","url":"https://en.wikipedia.org/wiki/Martin_Casado"},{"name":"Nicira","stage":"growth","url":"https://en.wikipedia.org/wiki/Nicira"}]},
  {"id":"andrew_chen","kind":"person","name":"Andrew Chen","role":"investor","skills":["growth","mobile","gtm"],"city":"San Francisco","url":"https://a16z.com/author/andrew-chen/",
   "orgs":[{"name":"Andreessen Horowitz (a16z)","stage":"growth","url":"https://a16z.com/author/andrew-chen/"},{"name":"Uber","stage":"growth","url":"https://a16z.com/author/andrew-chen/"}]},
  {"id":"katherine_boyle","kind":"person","name":"Katherine Boyle","role":"investor","skills":["fundraising","robotics","gtm"],"city":"Miami","url":"https://a16z.com/author/katherine-boyle/",
   "orgs":[{"name":"Andreessen Horowitz (a16z)","stage":"growth","url":"https://a16z.com/author/katherine-boyle/"}]},
  {"id":"alex_rampell","kind":"person","name":"Alex Rampell","role":"investor","skills":["fintech","gtm","growth"],"city":"San Francisco","url":"https://a16z.com/author/alex-rampell/",
   "orgs":[{"name":"Andreessen Horowitz (a16z)","stage":"growth","url":"https://a16z.com/author/alex-rampell/"},{"name":"TrialPay","stage":"growth","url":"https://en.wikipedia.org/wiki/TrialPay"}]},
  {"id":"anjney_midha","kind":"person","name":"Anjney Midha","role":"investor","skills":["ai infra","agents","robotics"],"city":"San Francisco","url":"https://a16z.com/author/anjney-midha/",
   "orgs":[{"name":"Andreessen Horowitz (a16z)","stage":"growth","url":"https://a16z.com/author/anjney-midha/"},{"name":"Ubiquity6","stage":"series b","url":"https://a16z.com/author/anjney-midha/"}]},
  {"id":"peter_levine","kind":"person","name":"Peter Levine","role":"investor","skills":["devtools","ai infra","distributed systems"],"city":"San Francisco","url":"https://a16z.com/author/peter-levine/",
   "orgs":[{"name":"Andreessen Horowitz (a16z)","stage":"growth","url":"https://a16z.com/author/peter-levine/"},{"name":"GitHub","stage":"growth","url":"https://en.wikipedia.org/wiki/GitHub"}]},
  {"id":"vijay_pande","kind":"person","name":"Vijay Pande","role":"investor","skills":["biotech","ai infra","data eng"],"city":"San Francisco","url":"https://en.wikipedia.org/wiki/Vijay_Pande",
   "orgs":[{"name":"Andreessen Horowitz (a16z)","stage":"growth","url":"https://en.wikipedia.org/wiki/Vijay_Pande"}]},
  {"id":"ryan_hoover","kind":"person","name":"Ryan Hoover","role":"founder","skills":["product design","growth","gtm"],"city":"San Francisco","url":"https://en.wikipedia.org/wiki/Product_Hunt",
   "orgs":[{"name":"Product Hunt","stage":"series a","url":"https://en.wikipedia.org/wiki/Product_Hunt"}]},
  {"id":"ben_casnocha","kind":"person","name":"Ben Casnocha","role":"investor","skills":["recruiting","fundraising","gtm"],"city":"San Francisco","url":"https://en.wikipedia.org/wiki/Ben_Casnocha",
   "orgs":[{"name":"Village Global","stage":"seed","url":"https://www.villageglobal.vc/"}]},
  {"id":"reid_hoffman","kind":"person","name":"Reid Hoffman","role":"investor","skills":["recruiting","fundraising","agents"],"city":"San Francisco","url":"https://en.wikipedia.org/wiki/Reid_Hoffman",
   "orgs":[{"name":"LinkedIn","stage":"growth","url":"https://en.wikipedia.org/wiki/Reid_Hoffman"},{"name":"Greylock Partners","stage":"growth","url":"https://en.wikipedia.org/wiki/Reid_Hoffman"},{"name":"Inflection AI","stage":"growth","url":"https://en.wikipedia.org/wiki/Inflection_AI"}]},
  {"id":"mohd_irtefa","kind":"person","name":"Mohd Irtefa","role":"founder","skills":["backend","devtools","product design"],"city":"New York","url":"https://techcrunch.com/2024/02/06/jams-out-to-revitalize-and-enhance-internal-bug-reporting/",
   "orgs":[{"name":"Jam (jam.dev)","stage":"series a","url":"https://jam.dev"},{"name":"Cloudflare","stage":"growth","url":"https://techcrunch.com/2024/02/06/jams-out-to-revitalize-and-enhance-internal-bug-reporting/"}]},
  {"id":"packy_mccormick","kind":"person","name":"Packy McCormick","role":"investor","skills":["fundraising","growth","gtm"],"city":"New York","url":"https://www.notboring.co/p/a16z-the-power-brokers",
   "orgs":[{"name":"Not Boring","stage":"seed","url":"https://www.notboring.co/"}]},
  {"id":"anu_atluru","kind":"person","name":"Anu Atluru","role":"founder","skills":["growth","product design","biotech"],"city":"","url":"https://every.to/@anu.atluru",
   "orgs":[{"name":"Clubhouse","stage":"growth","url":"https://every.to/p/what-i-learned-at-clubhouse"}]},

  // --- frontier labs ---
  {"id":"sam_altman","kind":"person","name":"Sam Altman","role":"founder","skills":["fundraising","agents","ai infra"],"city":"San Francisco","url":"https://en.wikipedia.org/wiki/Sam_Altman",
   "orgs":[{"name":"OpenAI","stage":"growth","url":"https://en.wikipedia.org/wiki/OpenAI"},{"name":"Y Combinator","stage":"growth","url":"https://en.wikipedia.org/wiki/Sam_Altman"}]},
  {"id":"greg_brockman","kind":"person","name":"Greg Brockman","role":"engineer","skills":["ai infra","backend","devtools"],"city":"San Francisco","url":"https://en.wikipedia.org/wiki/Greg_Brockman",
   "orgs":[{"name":"OpenAI","stage":"growth","url":"https://en.wikipedia.org/wiki/OpenAI"},{"name":"Stripe","stage":"growth","url":"https://en.wikipedia.org/wiki/Greg_Brockman"}]},
  {"id":"mira_murati","kind":"person","name":"Mira Murati","role":"founder","skills":["ai infra","agents","product design"],"city":"San Francisco","url":"https://en.wikipedia.org/wiki/Mira_Murati",
   "orgs":[{"name":"Thinking Machines Lab","stage":"seed","url":"https://en.wikipedia.org/wiki/Mira_Murati"},{"name":"OpenAI","stage":"growth","url":"https://en.wikipedia.org/wiki/Mira_Murati"}]},
  {"id":"dario_amodei","kind":"person","name":"Dario Amodei","role":"founder","skills":["llm eval","ai infra","agents"],"city":"San Francisco","url":"https://en.wikipedia.org/wiki/Dario_Amodei",
   "orgs":[{"name":"Anthropic","stage":"growth","url":"https://en.wikipedia.org/wiki/Anthropic"},{"name":"OpenAI","stage":"growth","url":"https://en.wikipedia.org/wiki/Dario_Amodei"}]},
  {"id":"daniela_amodei","kind":"person","name":"Daniela Amodei","role":"founder","skills":["recruiting","gtm","growth"],"city":"San Francisco","url":"https://en.wikipedia.org/wiki/Daniela_Amodei",
   "orgs":[{"name":"Anthropic","stage":"growth","url":"https://en.wikipedia.org/wiki/Anthropic"},{"name":"OpenAI","stage":"growth","url":"https://en.wikipedia.org/wiki/Daniela_Amodei"},{"name":"Stripe","stage":"growth","url":"https://en.wikipedia.org/wiki/Daniela_Amodei"}]},
  {"id":"demis_hassabis","kind":"person","name":"Demis Hassabis","role":"researcher","skills":["agents","llm eval","biotech"],"city":"London","url":"https://en.wikipedia.org/wiki/Demis_Hassabis",
   "orgs":[{"name":"Google DeepMind","stage":"growth","url":"https://en.wikipedia.org/wiki/Google_DeepMind"}]},
  {"id":"mustafa_suleyman","kind":"person","name":"Mustafa Suleyman","role":"founder","skills":["agents","product design","gtm"],"city":"","url":"https://en.wikipedia.org/wiki/Mustafa_Suleyman",
   "orgs":[{"name":"Microsoft","stage":"growth","url":"https://en.wikipedia.org/wiki/Mustafa_Suleyman"},{"name":"Inflection AI","stage":"growth","url":"https://en.wikipedia.org/wiki/Inflection_AI"},{"name":"Google DeepMind","stage":"growth","url":"https://en.wikipedia.org/wiki/Mustafa_Suleyman"}]},

  // --- big tech ---
  {"id":"satya_nadella","kind":"person","name":"Satya Nadella","role":"operator","skills":["gtm","ai infra","growth"],"city":"Seattle","url":"https://en.wikipedia.org/wiki/Satya_Nadella",
   "orgs":[{"name":"Microsoft","stage":"growth","url":"https://en.wikipedia.org/wiki/Microsoft"}]},
  {"id":"sundar_pichai","kind":"person","name":"Sundar Pichai","role":"operator","skills":["product design","growth","ai infra"],"city":"San Francisco","url":"https://en.wikipedia.org/wiki/Sundar_Pichai",
   "orgs":[{"name":"Google","stage":"growth","url":"https://en.wikipedia.org/wiki/Google"}]},
  {"id":"mark_zuckerberg","kind":"person","name":"Mark Zuckerberg","role":"founder","skills":["product design","growth","mobile"],"city":"San Francisco","url":"https://en.wikipedia.org/wiki/Mark_Zuckerberg",
   "orgs":[{"name":"Meta (Facebook)","stage":"growth","url":"https://en.wikipedia.org/wiki/Meta_Platforms"}]},
  {"id":"jeff_bezos","kind":"person","name":"Jeff Bezos","role":"founder","skills":["growth","gtm","robotics"],"city":"Miami","url":"https://en.wikipedia.org/wiki/Jeff_Bezos",
   "orgs":[{"name":"Amazon","stage":"growth","url":"https://en.wikipedia.org/wiki/Amazon_(company)"}]},
  {"id":"andy_jassy","kind":"person","name":"Andy Jassy","role":"operator","skills":["devtools","gtm","sales"],"city":"Seattle","url":"https://en.wikipedia.org/wiki/Andy_Jassy",
   "orgs":[{"name":"Amazon","stage":"growth","url":"https://en.wikipedia.org/wiki/Amazon_(company)"}]}
 ],
 "edges": [
  // --- the Cosign team itself ---
  {"source":"erik_torenberg","target":"david_booth","type":"cofounded","year":2019,"via":"On Deck","reason":"Co-founded On Deck together; reunited at a16z, where they started Cosign, an idea they began seven years earlier.","src":"https://www.a16z.news/p/david-booth-im-joining-a16z","verified":false},
  {"source":"david_booth","target":"erik_torenberg","type":"cofounded","year":2019,"via":"On Deck","reason":"Co-founded On Deck together; Booth wrote he was 'teaming up with Erik Torenberg for a second round'.","src":"https://x.com/david__booth/status/1981377270792253847","verified":false},
  {"source":"katie_kirsch","target":"erik_torenberg","type":"worked_with","year":2026,"via":"Andreessen Horowitz (a16z)","reason":"Says she works alongside Erik Torenberg and the New Media team at a16z.","src":"https://katiekirsch.com/","verified":false},
  {"source":"katie_kirsch","target":"david_booth","type":"worked_with","year":2026,"via":"Andreessen Horowitz (a16z)","reason":"Says she works alongside David Booth and the New Media team at a16z.","src":"https://katiekirsch.com/","verified":false},
  {"source":"david_booth","target":"dhruv_gupta","type":"worked_with","year":2026,"via":"Cosign","reason":"Work together on Cosign at a16z's New Media team.","src":"https://a16zjobs.substack.com/p/introducing-cosign-a-new-space-to","verified":false},
  {"source":"dhruv_gupta","target":"david_booth","type":"worked_with","year":2026,"via":"Cosign","reason":"Work together on Cosign at a16z's New Media team.","src":"https://a16zjobs.substack.com/p/introducing-cosign-a-new-space-to","verified":false},
  {"source":"dhruv_gupta","target":"brooke_martin","type":"worked_with","year":2026,"via":"Cosign","reason":"Pictured together as part of the Cosign team in the launch post, with David Booth.","src":"https://a16zjobs.substack.com/p/introducing-cosign-a-new-space-to","verified":false},
  {"source":"katie_schwartz","target":"erik_torenberg","type":"worked_with","year":2026,"via":"Cosign","reason":"Co-authored the Cosign launch post with Torenberg, Booth and Grant; writes the a16z jobs newsletter.","src":"https://a16zjobs.substack.com/p/introducing-cosign-a-new-space-to","verified":false},
  {"source":"erik_torenberg","target":"josh_elman","type":"worked_with","year":2026,"via":"Cosign","reason":"Co-hosted the Cosign launch episode of the a16z Podcast.","src":"https://a16z.com/podcast/the-reputation-graph-of-silicon-valley-introducing-cosign/","verified":false},
  {"source":"erik_torenberg","target":"olivia_moore","type":"worked_with","year":2026,"via":"Cosign","reason":"Co-hosted the Cosign launch episode of the a16z Podcast.","src":"https://a16z.com/podcast/the-reputation-graph-of-silicon-valley-introducing-cosign/","verified":false},

  // --- Cosign's public early neighbours ---
  {"source":"erik_torenberg","target":"packy_mccormick","type":"cosigned_skill","year":2026,"via":"Cosign","reason":"The Cosign launch post he co-authored features McCormick's public list of companies as the example to follow.","src":"https://a16zjobs.substack.com/p/introducing-cosign-a-new-space-to","verified":false},
  {"source":"marc_andreessen","target":"packy_mccormick","type":"invested_in","year":2021,"via":"Not Boring","reason":"Invested in Not Boring Capital Fund 1.","src":"https://www.alexanderjarvis.com/vc-pitch-deck-not-boring-capital-fund-1/","verified":false},
  {"source":"chris_dixon","target":"packy_mccormick","type":"invested_in","year":2021,"via":"Not Boring","reason":"Invested in Not Boring Capital Fund 1.","src":"https://www.alexanderjarvis.com/vc-pitch-deck-not-boring-capital-fund-1/","verified":false},
  {"source":"packy_mccormick","target":"chris_dixon","type":"worked_with","year":2022,"via":"Andreessen Horowitz (a16z)","reason":"Advisor to a16z crypto, the practice Dixon leads, for over two years by his own account.","src":"https://www.a16z.news/p/the-power-brokers","verified":false},
  {"source":"anu_atluru","target":"erik_torenberg","type":"met_at_event","year":2026,"via":"Cosign","reason":"Her post on taking early bets on people was quoted in the Cosign launch post, which Torenberg co-authored.","src":"https://a16zjobs.substack.com/p/introducing-cosign-a-new-space-to","verified":false},

  // --- Jam / Cloudflare ---
  {"source":"dani_grant","target":"mohd_irtefa","type":"cofounded","year":2020,"via":"Jam (jam.dev)","reason":"Co-founded Jam together after meeting at Cloudflare; Grant led it as CEO through its Series A.","src":"https://techcrunch.com/2024/02/06/jams-out-to-revitalize-and-enhance-internal-bug-reporting/","verified":false},
  {"source":"mohd_irtefa","target":"dani_grant","type":"cofounded","year":2020,"via":"Jam (jam.dev)","reason":"Co-founded Jam together after meeting at Cloudflare.","src":"https://techcrunch.com/2024/02/06/jams-out-to-revitalize-and-enhance-internal-bug-reporting/","verified":false},

  // --- Erik Torenberg's history ---
  {"source":"erik_torenberg","target":"ben_casnocha","type":"cofounded","year":2017,"via":"Village Global","reason":"Co-founded Village Global together, with Anne Dwane.","src":"https://www.villageglobal.vc/","verified":false},
  {"source":"ben_casnocha","target":"erik_torenberg","type":"cofounded","year":2017,"via":"Village Global","reason":"Co-founded Village Global together.","src":"https://www.villageglobal.vc/","verified":false},
  {"source":"erik_torenberg","target":"ryan_hoover","type":"worked_with","year":2014,"via":"Product Hunt","reason":"Worked together on the early Product Hunt team, which Hoover founded.","src":"https://en.wikipedia.org/wiki/Product_Hunt","verified":false},
  {"source":"ryan_hoover","target":"erik_torenberg","type":"worked_with","year":2014,"via":"Product Hunt","reason":"Worked together on the early Product Hunt team.","src":"https://en.wikipedia.org/wiki/Product_Hunt","verified":false},
  {"source":"ben_casnocha","target":"reid_hoffman","type":"worked_with","year":2012,"reason":"Co-authored The Start-up of You and The Alliance with Reid Hoffman.","src":"https://en.wikipedia.org/wiki/Ben_Casnocha","verified":false},
  {"source":"reid_hoffman","target":"ben_casnocha","type":"cosigned_skill","year":2012,"reason":"Co-authored two books with Casnocha.","src":"https://en.wikipedia.org/wiki/Ben_Casnocha","verified":false},

  // --- a16z founders & partners ---
  {"source":"marc_andreessen","target":"ben_horowitz","type":"cofounded","year":2009,"via":"Andreessen Horowitz (a16z)","reason":"Co-founded Andreessen Horowitz in 2009, and before that Loudcloud/Opsware.","src":"https://en.wikipedia.org/wiki/Andreessen_Horowitz","verified":false},
  {"source":"ben_horowitz","target":"marc_andreessen","type":"cofounded","year":2009,"via":"Andreessen Horowitz (a16z)","reason":"Co-founded Andreessen Horowitz in 2009, and before that Loudcloud/Opsware.","src":"https://en.wikipedia.org/wiki/Andreessen_Horowitz","verified":false},
  {"source":"marc_andreessen","target":"erik_torenberg","type":"worked_with","year":2025,"via":"Andreessen Horowitz (a16z)","reason":"Both general partners at a16z, where Torenberg joined in April 2025 when a16z acquired his Turpentine podcast network.","src":"https://a16z.com/introducing-erik-torenberg/","verified":false},
  {"source":"ben_horowitz","target":"erik_torenberg","type":"worked_with","year":2025,"via":"Andreessen Horowitz (a16z)","reason":"Both general partners at a16z.","src":"https://a16z.com/introducing-erik-torenberg/","verified":false},
  {"source":"marc_andreessen","target":"chris_dixon","type":"worked_with","year":2013,"via":"Andreessen Horowitz (a16z)","reason":"Both general partners at a16z, where Dixon leads a16z crypto.","src":"https://en.wikipedia.org/wiki/Chris_Dixon","verified":false},
  {"source":"marc_andreessen","target":"martin_casado","type":"worked_with","year":2016,"via":"Andreessen Horowitz (a16z)","reason":"Both general partners at a16z; Casado co-founded Nicira before joining.","src":"https://en.wikipedia.org/wiki/Martin_Casado","verified":false},
  {"source":"ben_horowitz","target":"peter_levine","type":"worked_with","year":2011,"via":"Andreessen Horowitz (a16z)","reason":"Both general partners at a16z; Levine led the 2012 GitHub investment.","src":"https://a16z.com/author/peter-levine/","verified":false},
  {"source":"martin_casado","target":"anjney_midha","type":"worked_with","year":2022,"via":"Andreessen Horowitz (a16z)","reason":"Both general partners on a16z's infrastructure/AI practice; Midha founded Ubiquity6 before joining.","src":"https://a16z.com/author/anjney-midha/","verified":false},
  {"source":"andrew_chen","target":"olivia_moore","type":"worked_with","year":2024,"via":"Andreessen Horowitz (a16z)","reason":"Both on a16z's consumer team; Chen led rider growth at Uber before joining.","src":"https://a16z.com/author/olivia-moore/","verified":false},
  {"source":"andrew_chen","target":"josh_elman","type":"worked_with","year":2024,"via":"Andreessen Horowitz (a16z)","reason":"Both on a16z's consumer team.","src":"https://a16z.com/author/josh-elman/","verified":false},
  {"source":"josh_elman","target":"reid_hoffman","type":"worked_with","year":2011,"via":"Greylock Partners","reason":"Overlapped at Greylock as partners, and earlier at LinkedIn, which Hoffman co-founded.","src":"https://a16z.com/author/josh-elman/","verified":false},

  // --- frontier labs ---
  {"source":"sam_altman","target":"greg_brockman","type":"cofounded","year":2015,"via":"OpenAI","reason":"Co-founded OpenAI in 2015; Altman as CEO, Brockman as CTO and later president.","src":"https://en.wikipedia.org/wiki/OpenAI","verified":false},
  {"source":"greg_brockman","target":"sam_altman","type":"cofounded","year":2015,"via":"OpenAI","reason":"Co-founded OpenAI in 2015.","src":"https://en.wikipedia.org/wiki/OpenAI","verified":false},
  {"source":"mira_murati","target":"sam_altman","type":"worked_with","year":2022,"via":"OpenAI","reason":"CTO of OpenAI under Altman before leaving to found Thinking Machines Lab.","src":"https://en.wikipedia.org/wiki/Mira_Murati","verified":false},
  {"source":"dario_amodei","target":"sam_altman","type":"worked_with","year":2019,"via":"OpenAI","reason":"VP of Research at OpenAI before leaving to co-found Anthropic in 2021.","src":"https://en.wikipedia.org/wiki/Dario_Amodei","verified":false},
  {"source":"dario_amodei","target":"daniela_amodei","type":"cofounded","year":2021,"via":"Anthropic","reason":"Co-founded Anthropic; Dario as CEO, Daniela as president.","src":"https://en.wikipedia.org/wiki/Anthropic","verified":false},
  {"source":"daniela_amodei","target":"dario_amodei","type":"cofounded","year":2021,"via":"Anthropic","reason":"Co-founded Anthropic together.","src":"https://en.wikipedia.org/wiki/Anthropic","verified":false},
  {"source":"daniela_amodei","target":"greg_brockman","type":"worked_with","year":2014,"via":"Stripe","reason":"Both worked at Stripe before OpenAI.","src":"https://en.wikipedia.org/wiki/Daniela_Amodei","verified":false},
  {"source":"demis_hassabis","target":"mustafa_suleyman","type":"cofounded","year":2010,"via":"Google DeepMind","reason":"Co-founded DeepMind in 2010, acquired by Google in 2014.","src":"https://en.wikipedia.org/wiki/Google_DeepMind","verified":false},
  {"source":"mustafa_suleyman","target":"demis_hassabis","type":"cofounded","year":2010,"via":"Google DeepMind","reason":"Co-founded DeepMind together.","src":"https://en.wikipedia.org/wiki/Google_DeepMind","verified":false},
  {"source":"mustafa_suleyman","target":"reid_hoffman","type":"cofounded","year":2022,"via":"Inflection AI","reason":"Co-founded Inflection AI with Reid Hoffman.","src":"https://en.wikipedia.org/wiki/Inflection_AI","verified":false},
  {"source":"reid_hoffman","target":"mustafa_suleyman","type":"cofounded","year":2022,"via":"Inflection AI","reason":"Co-founded Inflection AI together.","src":"https://en.wikipedia.org/wiki/Inflection_AI","verified":false},
  {"source":"reid_hoffman","target":"sam_altman","type":"invested_in","year":2019,"via":"OpenAI","reason":"Early OpenAI donor and board member, until stepping down in March 2023.","src":"https://en.wikipedia.org/wiki/Reid_Hoffman","verified":false},
  {"source":"sam_altman","target":"ryan_hoover","type":"invested_in","year":2014,"via":"Y Combinator","reason":"Y Combinator backed Product Hunt; Altman led YC as president from 2014.","src":"https://en.wikipedia.org/wiki/Product_Hunt","verified":false},

  // --- big tech ---
  {"source":"reid_hoffman","target":"satya_nadella","type":"worked_with","year":2017,"via":"Microsoft","reason":"Has served on Microsoft's board of directors since 2017.","src":"https://en.wikipedia.org/wiki/Reid_Hoffman","verified":false},
  {"source":"mustafa_suleyman","target":"satya_nadella","type":"worked_with","year":2024,"via":"Microsoft","reason":"CEO of Microsoft AI, reporting to Nadella, since 2024.","src":"https://en.wikipedia.org/wiki/Mustafa_Suleyman","verified":false},
  {"source":"satya_nadella","target":"sam_altman","type":"invested_in","year":2023,"via":"Microsoft","reason":"Microsoft, under Nadella, invested more than $13B in OpenAI.","src":"https://en.wikipedia.org/wiki/OpenAI","verified":false},
  {"source":"sundar_pichai","target":"demis_hassabis","type":"worked_with","year":2023,"via":"Google","reason":"Hassabis leads Google DeepMind within Pichai's Alphabet.","src":"https://en.wikipedia.org/wiki/Google_DeepMind","verified":false},
  {"source":"reid_hoffman","target":"mark_zuckerberg","type":"invested_in","year":2004,"via":"Meta (Facebook)","reason":"Angel investor in Facebook's first funding round in 2004.","src":"https://en.wikipedia.org/wiki/Reid_Hoffman","verified":false},
  {"source":"jeff_bezos","target":"andy_jassy","type":"worked_with","year":2021,"via":"Amazon","reason":"Jassy joined Amazon in 1997, founded AWS under Bezos, and succeeded him as CEO in 2021.","src":"https://en.wikipedia.org/wiki/Andy_Jassy","verified":false},
  {"source":"andy_jassy","target":"jeff_bezos","type":"worked_with","year":2021,"via":"Amazon","reason":"Founded AWS under Bezos and succeeded him as Amazon CEO.","src":"https://en.wikipedia.org/wiki/Andy_Jassy","verified":false},
  {"source":"jeff_bezos","target":"mark_zuckerberg","type":"met_at_event","year":2025,"reason":"Seated together at the January 2025 presidential inauguration.","src":"https://en.wikipedia.org/wiki/Second_inauguration_of_Donald_Trump","verified":false},
  {"source":"jeff_bezos","target":"sundar_pichai","type":"met_at_event","year":2025,"reason":"Seated together at the January 2025 presidential inauguration.","src":"https://en.wikipedia.org/wiki/Second_inauguration_of_Donald_Trump","verified":false},
  {"source":"mark_zuckerberg","target":"sundar_pichai","type":"met_at_event","year":2025,"reason":"Seated together at the January 2025 presidential inauguration.","src":"https://en.wikipedia.org/wiki/Second_inauguration_of_Donald_Trump","verified":false}
 ]
};
