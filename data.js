/* Sample corpus for the Plan My Day prototype.
   Everything here is fictional. In a real build each block would arrive from an
   MCP server (Slack, Google Drive, Google Calendar, Outlook) scoped to the
   signed-in user's own permissions. */

window.ENTENTE_DATA = {
  viewer: {
    name: "Alex Bennett",
    role: "Account Director",
    company: "Entente",
    initials: "AB"
  },

  today: {
    iso: "2026-09-15",
    label: "Tuesday 15 September 2026",
    nowMinutes: 10 * 60 + 40
  },

  sources: [
    { id: "slack", name: "Slack", detail: "4 channels · synced 2 min ago", state: "live" },
    { id: "drive", name: "Google Drive", detail: "12 files · synced 6 min ago", state: "live" },
    { id: "calendar", name: "Google Calendar", detail: "7 events today", state: "live" },
    { id: "outlook", name: "Outlook", detail: "18 threads · synced 1 min ago", state: "live" }
  ],

  brief: {
    headline: "Two things need you before 11:00.",
    body: "Camille needs a steer on the three French tagline routes for Bramble &amp; Co — the creative review starts in 20 minutes and she asked at 08:15. Marie's question about the Lemaire packaging shoot moving to the 24th has been open since yesterday evening, and Hélène raised the same date with the retailer on Friday, so it will surface on the 09:30 status call whether or not you answer it first.",
    footnote: "Your 16:30 is double-booked — Château de Rêve retail prep overlaps the press event walkthrough."
  },

  events: [
    {
      id: "ev-huddle",
      title: "Daily huddle — UK/FR pods",
      start: 9 * 60,
      end: 9 * 60 + 15,
      location: "Google Meet",
      organiser: "Yusuf Okonkwo",
      attendees: ["Yusuf Okonkwo", "Marie Dubois", "Camille Roussel", "Tom Whitfield", "+5"],
      kind: "internal",
      status: "confirmed",
      agenda: "Standing 15. Blockers only — anything longer goes to a breakout.",
      notes: "You flagged the Lemaire timeline here yesterday. No resolution yet."
    },
    {
      id: "ev-lemaire",
      title: "Lemaire weekly status",
      start: 9 * 60 + 30,
      end: 10 * 60 + 15,
      location: "Zoom · client call",
      organiser: "Hélène Fabre (Lemaire)",
      attendees: ["Hélène Fabre", "Marie Dubois", "Alex Bennett", "Camille Roussel"],
      kind: "client",
      status: "confirmed",
      agenda: "1. Retailer feedback from Friday  2. Packaging shoot date  3. UK launch timeline sign-off  4. Q4 media plan (if time)",
      notes: "Hélène's email on retailer feedback is still unanswered. Timeline doc was revised by Marie yesterday — v4.",
      docs: ["doc-lemaire-timeline"]
    },
    {
      id: "ev-bramble",
      title: "Creative review — Bramble &amp; Co French adaptation",
      start: 11 * 60,
      end: 11 * 60 + 45,
      location: "Studio 2 · Bermondsey",
      organiser: "Camille Roussel",
      attendees: ["Camille Roussel", "Yusuf Okonkwo", "Alex Bennett"],
      kind: "internal",
      status: "confirmed",
      agenda: "Three tagline routes for the FR market, plus the revised email copy (v7).",
      notes: "Camille is waiting on your steer in #creative-bramble before this starts.",
      docs: ["doc-bramble-email"]
    },
    {
      id: "ev-lunch",
      title: "Lunch",
      start: 12 * 60 + 30,
      end: 13 * 60,
      location: "—",
      organiser: "Alex Bennett",
      attendees: [],
      kind: "hold",
      status: "confirmed",
      agenda: "Held, not booked.",
      notes: ""
    },
    {
      id: "ev-allhands",
      title: "Company all-hands",
      start: 14 * 60,
      end: 15 * 60,
      location: "London studio + Paris dial-in",
      organiser: "Operations",
      attendees: ["Everyone"],
      kind: "company",
      status: "confirmed",
      agenda: "Q3 numbers, the Paris office move, and Q4 client roster.",
      notes: "Deck was circulated this morning. You are not presenting.",
      docs: ["doc-allhands"]
    },
    {
      id: "ev-1to1",
      title: "1:1 — Yusuf Okonkwo",
      start: 15 * 60 + 30,
      end: 16 * 60,
      location: "Meet",
      organiser: "Yusuf Okonkwo",
      attendees: ["Yusuf Okonkwo", "Alex Bennett"],
      kind: "internal",
      status: "confirmed",
      agenda: "Rolling agenda doc. Yusuf added 'FR creative capacity for Q4'.",
      notes: ""
    },
    {
      id: "ev-chateau",
      title: "Château de Rêve — retail listing prep",
      start: 16 * 60 + 30,
      end: 17 * 60 + 15,
      location: "Meet",
      organiser: "Tom Whitfield",
      attendees: ["Tom Whitfield", "Alex Bennett", "Marie Dubois"],
      kind: "client",
      status: "confirmed",
      agenda: "Retailer listing pack, Q4 budget split, and the tasting event date.",
      notes: "Clashes with the press event walkthrough. One of these needs moving.",
      docs: ["doc-chateau-plan"]
    },
    {
      id: "ev-press",
      title: "Press event walkthrough — 30 Sept",
      start: 16 * 60 + 30,
      end: 17 * 60,
      location: "Meet · Sophie Laurent (Maison Relations)",
      organiser: "Sophie Laurent",
      attendees: ["Sophie Laurent", "Alex Bennett"],
      kind: "external",
      status: "tentative",
      agenda: "Run of show, guest list, and press pack sign-off.",
      notes: "Tentative — accepted provisionally before the Château de Rêve session was booked."
    }
  ],

  slack: [
    {
      id: "sl-lemaire-shoot",
      channel: "#client-lemaire",
      author: "Marie Dubois",
      role: "Strategy Lead, Paris",
      time: "Yesterday 17:42",
      waitingHours: 17,
      severity: "overdue",
      entities: ["lemaire"],
      preview: "@alex the packaging shoot moved to the 24th — does that still clear the UK launch timeline, or do we tell Hélène now?",
      body: "@alex the packaging shoot moved to the 24th — does that still clear the UK launch timeline, or do we tell Hélène now?\n\nThe retoucher needs five working days, which puts finished assets at the 1st. Retailer deadline is the 3rd. It works on paper but there's no slack in it at all.",
      replies: [
        { author: "Camille Roussel", time: "Yesterday 17:58", text: "Copy is locked either way, so nothing blocks on my side." },
        { author: "Tom Whitfield", time: "Yesterday 18:20", text: "Paid assets are separate, we're fine. It's purely the retailer pack." }
      ],
      link: "Related: Lemaire weekly status at 09:30, and Hélène's email on retailer feedback."
    },
    {
      id: "sl-bramble-tagline",
      channel: "#creative-bramble",
      author: "Camille Roussel",
      role: "Copy Lead, FR",
      time: "Today 08:15",
      waitingHours: 2,
      severity: "urgent",
      entities: ["bramble"],
      preview: "@alex three tagline routes for the French adaptation — need your steer before the 11:00.",
      body: "@alex three tagline routes for the French adaptation — need your steer before the 11:00.\n\n1. « Un goût d'ailleurs » — leans into the British-import angle\n2. « Depuis 1904, tout simplement » — heritage, closest to the UK line\n3. « La pause anglaise » — makes the ritual the product\n\nMy preference is 3, but it's the furthest from the UK brand book and Yusuf will push back.",
      replies: [
        { author: "Yusuf Okonkwo", time: "Today 08:31", text: "I'll take the pushback, but route 3 needs a visual system that doesn't exist yet. Worth the conversation." }
      ],
      link: "Related: Creative review at 11:00 — starts in 20 minutes."
    },
    {
      id: "sl-chateau-budget",
      channel: "#paid-media",
      author: "Tom Whitfield",
      role: "Paid Media",
      time: "Yesterday 14:03",
      waitingHours: 21,
      severity: "waiting",
      entities: ["chateau"],
      preview: "@alex Q4 budget split for Château de Rêve — holding at 60/40 UK/FR unless you say otherwise.",
      body: "@alex Q4 budget split for Château de Rêve — holding at 60/40 UK/FR unless you say otherwise.\n\nI'd argue for 70/30 toward UK given the retail listing lands in October and the FR side is already well covered by the on-trade work. Need to confirm by Thursday for the buy.",
      replies: [],
      link: "Related: Château de Rêve retail listing prep at 16:30."
    },
    {
      id: "sl-expenses",
      channel: "#general",
      author: "Priya Shah",
      role: "Finance",
      time: "Friday 11:20",
      waitingHours: 95,
      severity: "overdue",
      entities: [],
      preview: "@alex Paris trip expenses still unfiled — Q3 closes Friday.",
      body: "@alex Paris trip expenses still unfiled — Q3 closes Friday.\n\nThis is the third nudge. If they miss Q3 they land in Q4 and the Lemaire account gets charged in the wrong quarter, which finance will ask you about.",
      replies: [],
      link: "Related: Priya's email thread on Q3 expenses."
    }
  ],

  emails: [
    {
      id: "em-lemaire-retailer",
      from: "Hélène Fabre",
      org: "Lemaire",
      external: true,
      subject: "Re: UK launch — retailer feedback on the 24th",
      time: "Friday 16:08",
      waitingLabel: "4 days",
      severity: "overdue",
      entities: ["lemaire"],
      preview: "They've come back on the packaging date and I'd rather we agree a line before Tuesday's call.",
      body: "Alex,\n\nThe retailer came back yesterday. They can hold the listing slot if finished assets arrive by the 3rd, but they want confirmation in writing this week — they've been burned by a late delivery on another launch.\n\nI'd rather we agree a line before Tuesday's call rather than work it out live in front of my MD. Can you tell me whether the 24th shoot date genuinely clears it, or whether we should be asking for a week?\n\nHélène",
      thread: 4,
      link: "Related: Marie's question in #client-lemaire, and the 09:30 status call."
    },
    {
      id: "em-bramble-legal",
      from: "James Carter",
      org: "Bramble &amp; Co",
      external: true,
      subject: "French copy — legal came back with two changes",
      time: "Yesterday 09:14",
      waitingLabel: "1 day",
      severity: "waiting",
      entities: ["bramble"],
      preview: "Neither is a problem, but one affects the tagline, so flagging before you go to creative.",
      body: "Hi Alex,\n\nLegal have been through the French adaptation. Two changes:\n\n1. We can't use \"depuis 1904\" without the qualifier — the 1904 date refers to the company, not the recipe, and French advertising rules are stricter on this than ours.\n2. The allergen line needs to sit above the fold on the email, not in the footer.\n\nNeither is a problem, but the first affects one of the tagline routes, so flagging before you go to creative.\n\nJames",
      thread: 2,
      link: "Related: Camille's tagline routes in #creative-bramble, and the 11:00 review."
    },
    {
      id: "em-press-guestlist",
      from: "Sophie Laurent",
      org: "Maison Relations, Paris",
      external: true,
      subject: "Press event 30 Sept — guest list sign-off by Thursday",
      time: "Yesterday 15:47",
      waitingLabel: "1 day",
      severity: "waiting",
      entities: ["press"],
      preview: "62 confirmed, 18 tentative. I need your cut of the tentative list by Thursday to close catering.",
      body: "Alex,\n\n62 confirmed, 18 tentative. I need your cut of the tentative list by Thursday so I can close catering numbers and the venue can confirm the room layout.\n\nAlso — are we still on for the walkthrough this afternoon? Your calendar shows tentative and I want to make sure I'm not holding a slot you've given away.\n\nSophie",
      thread: 3,
      link: "Related: your 16:30 walkthrough, which currently clashes with Château de Rêve prep."
    },
    {
      id: "em-finance-q3",
      from: "Priya Shah",
      org: "Entente · Finance",
      external: false,
      subject: "Q3 expenses — final call Friday",
      time: "Friday 11:31",
      waitingLabel: "4 days",
      severity: "waiting",
      entities: [],
      preview: "Paris trip receipts outstanding. Anything not filed by Friday lands in Q4.",
      body: "Alex,\n\nStill missing the Paris trip receipts — flights, two nights, and the client dinner on the 2nd.\n\nAnything not filed by Friday lands in Q4 and gets charged against the wrong account. Twenty minutes of your time saves me an hour of reconciliation.\n\nPriya",
      thread: 3,
      link: "Related: Priya's nudge in #general."
    },
    {
      id: "em-newsletter",
      from: "Campaign",
      org: "Newsletter",
      external: true,
      subject: "The week in UK adland — agency moves, pitches, and results",
      time: "Today 06:00",
      waitingLabel: "—",
      severity: "low",
      entities: [],
      preview: "Weekly roundup. No action needed — shown so you can see what triage left out.",
      body: "Weekly industry roundup.\n\nThis one is in the sample data on purpose: it is the control case. Triage means deciding what does not need you, and a list that surfaces everything has made no decision at all.",
      thread: 1,
      link: ""
    }
  ],

  docs: [
    {
      id: "doc-lemaire-timeline",
      title: "Lemaire — UK Launch Timeline",
      version: "v4",
      editedBy: "Marie Dubois",
      editedAt: "Yesterday 16:55",
      entities: ["lemaire"],
      summary: "Shoot moved to the 24th, retouching window narrowed to five days, retailer delivery held at the 3rd.",
      changes: "v4 changed the shoot date from the 18th to the 24th and removed the two-day buffer before retailer delivery."
    },
    {
      id: "doc-bramble-email",
      title: "Bramble &amp; Co — Marketing Email Copy",
      version: "v7",
      editedBy: "Camille Roussel",
      editedAt: "Today 08:02",
      entities: ["bramble"],
      summary: "New subject lines and a rewritten CTA for the French adaptation.",
      changes: "v7 replaced all three subject line options, rewrote the CTA from « Découvrir » to « Goûter la différence », and left the allergen line in the footer — which James's email says legal wants moved above the fold."
    },
    {
      id: "doc-chateau-plan",
      title: "Château de Rêve — Q4 Retail Plan",
      version: "v2",
      editedBy: "Tom Whitfield",
      editedAt: "Friday 17:10",
      entities: ["chateau"],
      summary: "Retail listing pack and Q4 media split, currently modelled at 60/40 UK/FR.",
      changes: "v2 added the October listing dates and the tasting event budget line."
    },
    {
      id: "doc-allhands",
      title: "Entente — Q3 All-Hands",
      version: "v1",
      editedBy: "Operations",
      editedAt: "Today 07:40",
      entities: [],
      summary: "Q3 numbers, Paris office move, Q4 client roster.",
      changes: "Circulated this morning ahead of the 14:00."
    }
  ],

  entityAliases: {
    lemaire: ["lemaire", "hélène", "helene", "fabre", "skincare", "packaging", "shoot"],
    bramble: ["bramble", "biscuit", "james", "carter", "camille", "tagline", "adaptation"],
    chateau: ["château", "chateau", "rêve", "reve", "wine", "retail", "listing", "tom"],
    press: ["press", "sophie", "laurent", "guest", "event", "walkthrough", "maison"]
  },

  suggestedPrompts: [
    "What are people saying about the Lemaire account?",
    "Has anyone updated the Marketing Email file with new copy?",
    "What's happening with the Paris press event?",
    "What's been waiting on me the longest?"
  ]
};
