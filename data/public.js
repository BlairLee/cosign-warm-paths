// A hand-curated graph of PUBLIC professional relationships around the
// Cosign team and its a16z neighbourhood. Every edge cites the public page
// it was taken from.
//
// Rules for this file:
//   - Only facts the person has stated publicly (bios, posts, Wikipedia, press).
//   - No private contact info, no inferred relationships, no scraping.
//   - "verified": false means a human has not re-checked the source yet.
//     Edges were cross-checked against public coverage on 2026-10-27, but
//     re-check every row before publishing the demo.
//
// The point of this graph is not coverage; it is to show that the same
// path-finding logic reads naturally on relationships people recognise.

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
  "met_at_event":   {"base": 0.25, "label": "appeared together"}
 },
 "nodes": [
  // --- Cosign / a16z New Media team ---
  {"id":"erik_torenberg","kind":"person","name":"Erik Torenberg","role":"investor","skills":["growth","recruiting","gtm"],"city":"San Francisco","url":"https://a16z.com/author/erik-torenberg/"},
  {"id":"david_booth","kind":"person","name":"David Booth","role":"operator","skills":["recruiting","gtm","growth"],"city":"San Francisco","url":"https://www.a16z.news/p/david-booth-im-joining-a16z"},
  {"id":"katie_kirsch","kind":"person","name":"Katie Kirsch","role":"operator","skills":["gtm","growth","recruiting"],"city":"San Francisco","url":"https://katiekirsch.com/"},
  {"id":"dani_grant","kind":"person","name":"Dani Grant","role":"founder","skills":["product design","devtools","growth"],"city":"New York","url":"https://www.crunchbase.com/person/dani-grant"},
  {"id":"brooke_martin","kind":"person","name":"Brooke Martin","role":"operator","skills":["recruiting","gtm","growth"],"city":"San Francisco","url":"https://a16z.com/author/brooke-martin/"},
  {"id":"dhruv_gupta","kind":"person","name":"Dhruv Gupta","role":"engineer","skills":["agents","frontend","product design"],"city":"San Francisco","url":"https://x.com/droovg"},

  // --- a16z partners who appeared at the Cosign launch ---
  {"id":"josh_elman","kind":"person","name":"Josh Elman","role":"investor","skills":["product design","growth","mobile"],"city":"San Francisco","url":"https://a16z.com/author/josh-elman/"},
  {"id":"olivia_moore","kind":"person","name":"Olivia Moore","role":"investor","skills":["agents","growth","product design"],"city":"San Francisco","url":"https://a16z.com/author/olivia-moore/"},

  // --- wider a16z neighbourhood ---
  {"id":"marc_andreessen","kind":"person","name":"Marc Andreessen","role":"investor","skills":["fundraising","product design","ai infra"],"city":"San Francisco","url":"https://en.wikipedia.org/wiki/Marc_Andreessen"},
  {"id":"ben_horowitz","kind":"person","name":"Ben Horowitz","role":"investor","skills":["fundraising","gtm","ai infra"],"city":"San Francisco","url":"https://en.wikipedia.org/wiki/Ben_Horowitz"},
  {"id":"chris_dixon","kind":"person","name":"Chris Dixon","role":"investor","skills":["fundraising","security","fintech"],"city":"New York","url":"https://en.wikipedia.org/wiki/Chris_Dixon"},
  {"id":"martin_casado","kind":"person","name":"Martin Casado","role":"investor","skills":["ai infra","distributed systems","security"],"city":"San Francisco","url":"https://en.wikipedia.org/wiki/Martin_Casado"},
  {"id":"andrew_chen","kind":"person","name":"Andrew Chen","role":"investor","skills":["growth","mobile","gtm"],"city":"San Francisco","url":"https://a16z.com/author/andrew-chen/"},
  {"id":"katherine_boyle","kind":"person","name":"Katherine Boyle","role":"investor","skills":["fundraising","robotics","gtm"],"city":"Miami","url":"https://a16z.com/author/katherine-boyle/"},
  {"id":"alex_rampell","kind":"person","name":"Alex Rampell","role":"investor","skills":["fintech","gtm","growth"],"city":"San Francisco","url":"https://a16z.com/author/alex-rampell/"},
  {"id":"anjney_midha","kind":"person","name":"Anjney Midha","role":"investor","skills":["ai infra","agents","robotics"],"city":"San Francisco","url":"https://a16z.com/author/anjney-midha/"},
  {"id":"peter_levine","kind":"person","name":"Peter Levine","role":"investor","skills":["devtools","ai infra","distributed systems"],"city":"San Francisco","url":"https://a16z.com/author/peter-levine/"},
  {"id":"vijay_pande","kind":"person","name":"Vijay Pande","role":"investor","skills":["biotech","ai infra","data eng"],"city":"San Francisco","url":"https://en.wikipedia.org/wiki/Vijay_Pande"},
  {"id":"ryan_hoover","kind":"person","name":"Ryan Hoover","role":"founder","skills":["product design","growth","gtm"],"city":"San Francisco","url":"https://en.wikipedia.org/wiki/Product_Hunt"},
  {"id":"ben_casnocha","kind":"person","name":"Ben Casnocha","role":"investor","skills":["recruiting","fundraising","gtm"],"city":"San Francisco","url":"https://en.wikipedia.org/wiki/Ben_Casnocha"},
  {"id":"reid_hoffman","kind":"person","name":"Reid Hoffman","role":"investor","skills":["recruiting","fundraising","agents"],"city":"San Francisco","url":"https://en.wikipedia.org/wiki/Reid_Hoffman"},
  {"id":"mohd_irtefa","kind":"person","name":"Mohd Irtefa","role":"founder","skills":["backend","devtools","product design"],"city":"New York","url":"https://techcrunch.com/2024/02/06/jams-out-to-revitalize-and-enhance-internal-bug-reporting/"},

  // --- companies ---
  {"id":"cosign","kind":"company","name":"Cosign","stage":"pre-seed","focus":["recruiting","growth"],"city":"San Francisco","url":"https://cosign.co"},
  {"id":"a16z","kind":"company","name":"Andreessen Horowitz (a16z)","stage":"growth","focus":["fundraising","ai infra"],"city":"San Francisco","url":"https://en.wikipedia.org/wiki/Andreessen_Horowitz"},
  {"id":"on_deck","kind":"company","name":"On Deck","stage":"series a","focus":["recruiting","growth"],"city":"San Francisco","url":"https://www.beondeck.com/"},
  {"id":"jam","kind":"company","name":"Jam (jam.dev)","stage":"series a","focus":["devtools","product design"],"city":"New York","url":"https://jam.dev"},
  {"id":"cloudflare","kind":"company","name":"Cloudflare","stage":"growth","focus":["security","distributed systems"],"city":"San Francisco","url":"https://en.wikipedia.org/wiki/Cloudflare"},
  {"id":"village_global","kind":"company","name":"Village Global","stage":"seed","focus":["fundraising","recruiting"],"city":"San Francisco","url":"https://www.villageglobal.vc/"},
  {"id":"product_hunt","kind":"company","name":"Product Hunt","stage":"series a","focus":["product design","growth"],"city":"San Francisco","url":"https://en.wikipedia.org/wiki/Product_Hunt"},
  {"id":"netscape","kind":"company","name":"Netscape","stage":"growth","focus":["frontend","security"],"city":"Mountain View","url":"https://en.wikipedia.org/wiki/Netscape"},
  {"id":"opsware","kind":"company","name":"Loudcloud / Opsware","stage":"growth","focus":["devtools","distributed systems"],"city":"Sunnyvale","url":"https://en.wikipedia.org/wiki/Opsware"},
  {"id":"nicira","kind":"company","name":"Nicira","stage":"growth","focus":["distributed systems","security"],"city":"Palo Alto","url":"https://en.wikipedia.org/wiki/Nicira"},
  {"id":"hunch","kind":"company","name":"Hunch","stage":"series a","focus":["ml ranking","product design"],"city":"New York","url":"https://en.wikipedia.org/wiki/Hunch_(website)"},
  {"id":"trialpay","kind":"company","name":"TrialPay","stage":"growth","focus":["fintech","gtm"],"city":"Mountain View","url":"https://en.wikipedia.org/wiki/TrialPay"},
  {"id":"greylock","kind":"company","name":"Greylock Partners","stage":"growth","focus":["fundraising","recruiting"],"city":"Menlo Park","url":"https://en.wikipedia.org/wiki/Greylock_Partners"},
  {"id":"linkedin","kind":"company","name":"LinkedIn","stage":"growth","focus":["recruiting","ml ranking"],"city":"Sunnyvale","url":"https://en.wikipedia.org/wiki/LinkedIn"},
  {"id":"coinbase","kind":"company","name":"Coinbase","stage":"growth","focus":["fintech","security"],"city":"San Francisco","url":"https://en.wikipedia.org/wiki/Coinbase"},
  {"id":"github","kind":"company","name":"GitHub","stage":"growth","focus":["devtools","backend"],"city":"San Francisco","url":"https://en.wikipedia.org/wiki/GitHub"},
  {"id":"databricks","kind":"company","name":"Databricks","stage":"growth","focus":["data eng","ai infra"],"city":"San Francisco","url":"https://en.wikipedia.org/wiki/Databricks"},
  {"id":"uber","kind":"company","name":"Uber","stage":"growth","focus":["growth","mobile"],"city":"San Francisco","url":"https://en.wikipedia.org/wiki/Uber"},
  {"id":"ubiquity6","kind":"company","name":"Ubiquity6","stage":"series b","focus":["robotics","ai infra"],"city":"San Francisco","url":"https://a16z.com/author/anjney-midha/"},
  {"id":"inflection","kind":"company","name":"Inflection AI","stage":"growth","focus":["agents","ai infra"],"city":"Palo Alto","url":"https://en.wikipedia.org/wiki/Inflection_AI"}
 ],
 "edges": [
  // --- the Cosign team itself ---
  {"source":"erik_torenberg","target":"cosign","type":"cofounded","year":2026,"reason":"Put together a16z's New Media product team; Cosign is its first product. He and David Booth began the idea seven years earlier.","src":"https://a16z.com/podcast/the-reputation-graph-of-silicon-valley-introducing-cosign/","verified":false},
  {"source":"david_booth","target":"cosign","type":"cofounded","year":2026,"reason":"Introduced Cosign with Torenberg on the launch podcast; the two started the idea seven years before.","src":"https://x.com/a16z/status/2103512267186745464","verified":false},
  {"source":"erik_torenberg","target":"david_booth","type":"cofounded","year":2019,"reason":"Co-founded On Deck together; reunited at a16z where Booth is Partner and Head of Ecosystem.","src":"https://www.a16z.news/p/david-booth-im-joining-a16z","verified":false},
  {"source":"david_booth","target":"erik_torenberg","type":"cofounded","year":2019,"reason":"Co-founded On Deck together; Booth wrote he was 'teaming up with Erik Torenberg for a second round'.","src":"https://x.com/david__booth/status/1981377270792253847","verified":false},
  {"source":"david_booth","target":"on_deck","type":"cofounded","year":2019,"reason":"Co-founded On Deck and was its CEO until 2024.","src":"https://www.a16z.news/p/david-booth-im-joining-a16z","verified":false},
  {"source":"david_booth","target":"a16z","type":"worked_with","year":2025,"reason":"Partner and Head of Ecosystem at a16z since October 2025.","src":"https://www.a16z.news/p/david-booth-im-joining-a16z","verified":false},
  {"source":"katie_kirsch","target":"a16z","type":"worked_with","year":2025,"reason":"Partner focused on ecosystem growth on a16z's New Media team.","src":"https://katiekirsch.com/","verified":false},
  {"source":"katie_kirsch","target":"cosign","type":"worked_with","year":2026,"reason":"On the team that launched Cosign and announced it publicly.","src":"https://x.com/katiekirsch/status/2103501141900410918","verified":false},
  {"source":"katie_kirsch","target":"erik_torenberg","type":"worked_with","year":2026,"reason":"Says she works alongside Erik Torenberg and the New Media team at a16z.","src":"https://katiekirsch.com/","verified":false},
  {"source":"katie_kirsch","target":"david_booth","type":"worked_with","year":2026,"reason":"Says she works alongside David Booth and the New Media team at a16z.","src":"https://katiekirsch.com/","verified":false},
  {"source":"dani_grant","target":"cosign","type":"worked_with","year":2026,"reason":"One of the four who introduced Cosign at launch.","src":"https://lionherald.com/andreessen-horowitz-launches-cosign-a-network-that-ranks-tech-talent-by-who-vouches-for-them/","verified":false},
  {"source":"dani_grant","target":"a16z","type":"worked_with","year":2026,"reason":"Former CEO of Jam, now at a16z working with founders.","src":"https://www.linkedin.com/in/danigrant/","verified":false},
  {"source":"dani_grant","target":"jam","type":"cofounded","year":2020,"reason":"Co-founded Jam (jam.dev) and led it as CEO through its Series A.","src":"https://www.crunchbase.com/person/dani-grant","verified":false},
  {"source":"mohd_irtefa","target":"jam","type":"cofounded","year":2020,"reason":"Co-founded Jam with Dani Grant.","src":"https://techcrunch.com/2024/02/06/jams-out-to-revitalize-and-enhance-internal-bug-reporting/","verified":false},
  {"source":"dani_grant","target":"mohd_irtefa","type":"cofounded","year":2020,"reason":"Co-founded Jam together after meeting at Cloudflare.","src":"https://techcrunch.com/2024/02/06/jams-out-to-revitalize-and-enhance-internal-bug-reporting/","verified":false},
  {"source":"mohd_irtefa","target":"dani_grant","type":"cofounded","year":2020,"reason":"Co-founded Jam together after meeting at Cloudflare.","src":"https://techcrunch.com/2024/02/06/jams-out-to-revitalize-and-enhance-internal-bug-reporting/","verified":false},
  {"source":"dani_grant","target":"cloudflare","type":"worked_with","year":2018,"reason":"Product manager at Cloudflare (1.1.1.1 resolver, Spectrum, DNSSEC).","src":"https://ai.engineer/speakers/dani-grant","verified":false},
  {"source":"mohd_irtefa","target":"cloudflare","type":"worked_with","year":2018,"reason":"Worked at Cloudflare before co-founding Jam.","src":"https://techcrunch.com/2024/02/06/jams-out-to-revitalize-and-enhance-internal-bug-reporting/","verified":false},
  {"source":"brooke_martin","target":"a16z","type":"worked_with","year":2025,"reason":"Ecosystem growth partner on a16z's New Media team.","src":"https://a16z.com/author/brooke-martin/","verified":false},
  {"source":"brooke_martin","target":"cosign","type":"worked_with","year":2026,"reason":"Co-wrote the post introducing Cosign.","src":"https://a16zjobs.substack.com/p/introducing-cosign-a-new-space-to","verified":false},
  {"source":"dhruv_gupta","target":"cosign","type":"worked_with","year":2026,"reason":"Cosign's main engineer; his bio says he built Cosign for a16z.","src":"https://x.com/droovg","verified":false},
  {"source":"dhruv_gupta","target":"brooke_martin","type":"worked_with","year":2026,"reason":"Appear together in the Cosign launch post with David Booth.","src":"https://a16zjobs.substack.com/p/introducing-cosign-a-new-space-to","verified":false},
  {"source":"david_booth","target":"dhruv_gupta","type":"worked_with","year":2026,"reason":"Work together on Cosign at a16z's New Media team.","src":"https://a16zjobs.substack.com/p/introducing-cosign-a-new-space-to","verified":false},
  {"source":"dhruv_gupta","target":"david_booth","type":"worked_with","year":2026,"reason":"Work together on Cosign at a16z's New Media team.","src":"https://a16zjobs.substack.com/p/introducing-cosign-a-new-space-to","verified":false},
  {"source":"a16z","target":"cosign","type":"invested_in","year":2026,"reason":"Cosign was built and launched by a16z's New Media product team on 2026-09-25.","src":"https://app.dealroom.co/news/note/a16z-launches-cosign-a-curated-professional-network-for-the-startup-community","verified":false},
  {"source":"josh_elman","target":"cosign","type":"met_at_event","year":2026,"reason":"Discussed Cosign on the a16z Podcast launch episode.","src":"https://a16z.com/podcast/the-reputation-graph-of-silicon-valley-introducing-cosign/","verified":false},
  {"source":"olivia_moore","target":"cosign","type":"met_at_event","year":2026,"reason":"Discussed Cosign on the a16z Podcast launch episode.","src":"https://a16z.com/podcast/the-reputation-graph-of-silicon-valley-introducing-cosign/","verified":false},
  {"source":"erik_torenberg","target":"josh_elman","type":"worked_with","year":2026,"reason":"Co-hosted the Cosign launch episode.","src":"https://a16z.com/podcast/the-reputation-graph-of-silicon-valley-introducing-cosign/","verified":false},
  {"source":"erik_torenberg","target":"olivia_moore","type":"worked_with","year":2026,"reason":"Co-hosted the Cosign launch episode.","src":"https://a16z.com/podcast/the-reputation-graph-of-silicon-valley-introducing-cosign/","verified":false},

  // --- Erik Torenberg's history ---
  {"source":"erik_torenberg","target":"a16z","type":"worked_with","year":2024,"reason":"General partner at a16z; hosts the a16z Podcast.","src":"https://a16z.com/author/erik-torenberg/","verified":false},
  {"source":"erik_torenberg","target":"village_global","type":"cofounded","year":2017,"reason":"Co-founded Village Global with Ben Casnocha and Anne Dwane.","src":"https://www.villageglobal.vc/","verified":false},
  {"source":"ben_casnocha","target":"village_global","type":"cofounded","year":2017,"reason":"Co-founded Village Global.","src":"https://en.wikipedia.org/wiki/Ben_Casnocha","verified":false},
  {"source":"erik_torenberg","target":"ben_casnocha","type":"cofounded","year":2017,"reason":"Co-founded Village Global together.","src":"https://www.villageglobal.vc/","verified":false},
  {"source":"ben_casnocha","target":"erik_torenberg","type":"cofounded","year":2017,"reason":"Co-founded Village Global together.","src":"https://www.villageglobal.vc/","verified":false},
  {"source":"erik_torenberg","target":"on_deck","type":"cofounded","year":2019,"reason":"Co-founded On Deck.","src":"https://www.beondeck.com/","verified":false},
  {"source":"erik_torenberg","target":"product_hunt","type":"worked_with","year":2014,"reason":"Early team member at Product Hunt.","src":"https://a16z.com/author/erik-torenberg/","verified":false},
  {"source":"ryan_hoover","target":"product_hunt","type":"cofounded","year":2013,"reason":"Founded Product Hunt.","src":"https://en.wikipedia.org/wiki/Product_Hunt","verified":false},
  {"source":"ryan_hoover","target":"erik_torenberg","type":"worked_with","year":2014,"reason":"Worked together on the early Product Hunt team.","src":"https://en.wikipedia.org/wiki/Product_Hunt","verified":false},
  {"source":"erik_torenberg","target":"ryan_hoover","type":"worked_with","year":2014,"reason":"Worked together on the early Product Hunt team.","src":"https://en.wikipedia.org/wiki/Product_Hunt","verified":false},
  {"source":"a16z","target":"product_hunt","type":"invested_in","year":2014,"reason":"a16z led Product Hunt's Series A.","src":"https://en.wikipedia.org/wiki/Product_Hunt","verified":false},
  {"source":"ben_casnocha","target":"reid_hoffman","type":"worked_with","year":2012,"reason":"Co-authored The Start-up of You and The Alliance with Reid Hoffman.","src":"https://en.wikipedia.org/wiki/Ben_Casnocha","verified":false},
  {"source":"reid_hoffman","target":"ben_casnocha","type":"cosigned_skill","year":2012,"reason":"Co-authored two books with Casnocha.","src":"https://en.wikipedia.org/wiki/Ben_Casnocha","verified":false},
  {"source":"reid_hoffman","target":"linkedin","type":"cofounded","year":2002,"reason":"Co-founded LinkedIn.","src":"https://en.wikipedia.org/wiki/Reid_Hoffman","verified":false},
  {"source":"reid_hoffman","target":"greylock","type":"worked_with","year":2009,"reason":"Partner at Greylock.","src":"https://en.wikipedia.org/wiki/Reid_Hoffman","verified":false},
  {"source":"reid_hoffman","target":"inflection","type":"cofounded","year":2022,"reason":"Co-founded Inflection AI.","src":"https://en.wikipedia.org/wiki/Inflection_AI","verified":false},

  // --- a16z founders & partners ---
  {"source":"marc_andreessen","target":"ben_horowitz","type":"cofounded","year":2009,"reason":"Co-founded Andreessen Horowitz in 2009, and before that Loudcloud/Opsware.","src":"https://en.wikipedia.org/wiki/Andreessen_Horowitz","verified":false},
  {"source":"ben_horowitz","target":"marc_andreessen","type":"cofounded","year":2009,"reason":"Co-founded Andreessen Horowitz in 2009, and before that Loudcloud/Opsware.","src":"https://en.wikipedia.org/wiki/Andreessen_Horowitz","verified":false},
  {"source":"marc_andreessen","target":"a16z","type":"cofounded","year":2009,"reason":"Co-founder and general partner.","src":"https://en.wikipedia.org/wiki/Andreessen_Horowitz","verified":false},
  {"source":"ben_horowitz","target":"a16z","type":"cofounded","year":2009,"reason":"Co-founder and general partner.","src":"https://en.wikipedia.org/wiki/Andreessen_Horowitz","verified":false},
  {"source":"marc_andreessen","target":"netscape","type":"cofounded","year":1994,"reason":"Co-founded Netscape.","src":"https://en.wikipedia.org/wiki/Marc_Andreessen","verified":false},
  {"source":"marc_andreessen","target":"opsware","type":"cofounded","year":1999,"reason":"Co-founded Loudcloud, later Opsware.","src":"https://en.wikipedia.org/wiki/Opsware","verified":false},
  {"source":"ben_horowitz","target":"opsware","type":"cofounded","year":1999,"reason":"Co-founded Loudcloud and was CEO of Opsware.","src":"https://en.wikipedia.org/wiki/Ben_Horowitz","verified":false},
  {"source":"ben_horowitz","target":"databricks","type":"invested_in","year":2013,"reason":"a16z invested in Databricks; Horowitz serves on its board.","src":"https://en.wikipedia.org/wiki/Databricks","verified":false},
  {"source":"josh_elman","target":"a16z","type":"worked_with","year":2024,"reason":"Partner at a16z (consumer).","src":"https://a16z.com/author/josh-elman/","verified":false},
  {"source":"josh_elman","target":"greylock","type":"worked_with","year":2011,"reason":"Previously a partner at Greylock.","src":"https://a16z.com/author/josh-elman/","verified":false},
  {"source":"josh_elman","target":"linkedin","type":"worked_with","year":2005,"reason":"Worked on product at LinkedIn earlier in his career.","src":"https://a16z.com/author/josh-elman/","verified":false},
  {"source":"josh_elman","target":"reid_hoffman","type":"worked_with","year":2011,"reason":"Overlapped at Greylock and earlier at LinkedIn.","src":"https://a16z.com/author/josh-elman/","verified":false},
  {"source":"olivia_moore","target":"a16z","type":"worked_with","year":2024,"reason":"Partner at a16z (consumer AI).","src":"https://a16z.com/author/olivia-moore/","verified":false},
  {"source":"chris_dixon","target":"a16z","type":"worked_with","year":2013,"reason":"General partner; leads a16z crypto.","src":"https://en.wikipedia.org/wiki/Chris_Dixon","verified":false},
  {"source":"chris_dixon","target":"hunch","type":"cofounded","year":2007,"reason":"Co-founded Hunch, acquired by eBay.","src":"https://en.wikipedia.org/wiki/Chris_Dixon","verified":false},
  {"source":"chris_dixon","target":"coinbase","type":"invested_in","year":2013,"reason":"Led a16z's investment in Coinbase and sat on its board.","src":"https://en.wikipedia.org/wiki/Chris_Dixon","verified":false},
  {"source":"martin_casado","target":"a16z","type":"worked_with","year":2016,"reason":"General partner (infrastructure).","src":"https://en.wikipedia.org/wiki/Martin_Casado","verified":false},
  {"source":"martin_casado","target":"nicira","type":"cofounded","year":2007,"reason":"Co-founded Nicira, acquired by VMware.","src":"https://en.wikipedia.org/wiki/Nicira","verified":false},
  {"source":"a16z","target":"nicira","type":"invested_in","year":2010,"reason":"a16z was an investor in Nicira.","src":"https://en.wikipedia.org/wiki/Nicira","verified":false},
  {"source":"andrew_chen","target":"a16z","type":"worked_with","year":2018,"reason":"General partner (consumer).","src":"https://a16z.com/author/andrew-chen/","verified":false},
  {"source":"andrew_chen","target":"uber","type":"worked_with","year":2015,"reason":"Led rider growth at Uber before joining a16z.","src":"https://a16z.com/author/andrew-chen/","verified":false},
  {"source":"katherine_boyle","target":"a16z","type":"worked_with","year":2021,"reason":"General partner; leads American Dynamism.","src":"https://a16z.com/author/katherine-boyle/","verified":false},
  {"source":"alex_rampell","target":"a16z","type":"worked_with","year":2015,"reason":"General partner (fintech).","src":"https://a16z.com/author/alex-rampell/","verified":false},
  {"source":"alex_rampell","target":"trialpay","type":"cofounded","year":2006,"reason":"Co-founded TrialPay.","src":"https://en.wikipedia.org/wiki/TrialPay","verified":false},
  {"source":"anjney_midha","target":"a16z","type":"worked_with","year":2022,"reason":"General partner (AI infrastructure).","src":"https://a16z.com/author/anjney-midha/","verified":false},
  {"source":"anjney_midha","target":"ubiquity6","type":"cofounded","year":2017,"reason":"Founded Ubiquity6.","src":"https://a16z.com/author/anjney-midha/","verified":false},
  {"source":"peter_levine","target":"a16z","type":"worked_with","year":2011,"reason":"General partner.","src":"https://a16z.com/author/peter-levine/","verified":false},
  {"source":"peter_levine","target":"github","type":"invested_in","year":2012,"reason":"Led a16z's 2012 investment in GitHub.","src":"https://en.wikipedia.org/wiki/GitHub","verified":false},
  {"source":"vijay_pande","target":"a16z","type":"worked_with","year":2015,"reason":"General partner; founded a16z Bio + Health.","src":"https://en.wikipedia.org/wiki/Vijay_Pande","verified":false},
  {"source":"marc_andreessen","target":"erik_torenberg","type":"worked_with","year":2024,"reason":"Both general partners at a16z.","src":"https://a16z.com/author/erik-torenberg/","verified":false},
  {"source":"ben_horowitz","target":"erik_torenberg","type":"worked_with","year":2024,"reason":"Both general partners at a16z.","src":"https://a16z.com/author/erik-torenberg/","verified":false},
  {"source":"marc_andreessen","target":"chris_dixon","type":"worked_with","year":2013,"reason":"Both general partners at a16z.","src":"https://en.wikipedia.org/wiki/Chris_Dixon","verified":false},
  {"source":"marc_andreessen","target":"martin_casado","type":"worked_with","year":2016,"reason":"Both general partners at a16z.","src":"https://en.wikipedia.org/wiki/Martin_Casado","verified":false},
  {"source":"ben_horowitz","target":"peter_levine","type":"worked_with","year":2011,"reason":"Both general partners at a16z.","src":"https://a16z.com/author/peter-levine/","verified":false},
  {"source":"martin_casado","target":"anjney_midha","type":"worked_with","year":2022,"reason":"Both general partners on a16z's infrastructure/AI practice.","src":"https://a16z.com/author/anjney-midha/","verified":false},
  {"source":"andrew_chen","target":"olivia_moore","type":"worked_with","year":2024,"reason":"Both on a16z's consumer team.","src":"https://a16z.com/author/olivia-moore/","verified":false},
  {"source":"andrew_chen","target":"josh_elman","type":"worked_with","year":2024,"reason":"Both on a16z's consumer team.","src":"https://a16z.com/author/josh-elman/","verified":false}
 ]
};
