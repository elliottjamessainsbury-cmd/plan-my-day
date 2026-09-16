# Plan My Day

A working prototype of an agentic daily-planning surface for a B2B SaaS product — and, more to the point, an argument about how one should be built.

An example of an AI tool built for clients who want an internal, agentic dashboard to move fast with their daily work.

**[Try the live demo](https://elliottjamessainsbury-cmd.github.io/plan-my-day/)** — or open `index.html` in any browser. No build step, no install, no API key.

---

## The problem

An account director at a marketing agency starts the day with the same unpaid task: reassembling their own context. Slack has four threads where they were tagged and never replied. Outlook has eighteen threads, four of which actually need them. Calendar has seven meetings, two of which they are walking into without knowing what changed since last week. Drive has a file someone revised at 08:02 that materially affects the 11:00 review.

Nobody is short of information. They are short of the ten minutes it takes to work out **which four things matter and what connects them**.

That connective work is the product. Any one of those tools can list its own contents; none of them can tell you that the Slack question from yesterday evening, the client email from Friday, and the document revised last night are all the same unresolved decision — and that it is on the agenda of a call in twenty minutes.

## The user

Alex Bennett, Account Director at Entente, a marketing agency that takes French brands into the UK and British brands into France. Three live accounts, a team split across London and Paris, and roughly four hundred inbound messages a week.

The product is built for one specific window: **the ten minutes before the first meeting.** Not a workspace someone lives in all day — a briefing they read once and then close.

## What it does

**Your day, assembled** — a synthesised brief at the top. Not a count of unread items; a claim about what today actually is and what is most likely to go wrong.

**Today** — an Outlook-style day timeline with a live time marker, past meetings dimmed, and overlapping blocks rendered side by side, so a double-booking looks like a double-booking. Selecting a meeting shows the agenda, who is in it, and *what is unresolved going into it*.

**Open discussions** — Slack threads where the user was tagged and has not replied, aged and ranked. Not "unread" — unread is a fact about a mail client. "Waiting on you" is a fact about an obligation.

**Emails to reply to** — the four Outlook threads that need a reply, out of eighteen. The newsletter is left in the list on purpose: triage means deciding what *doesn't* need you, and a list that surfaces everything has made no decision at all.

**Ask Entente** — a query console over the same four sources, which cites what it read.

## Product principles

**Show what is waiting on you, not everything you have.** The value is subtraction. A dashboard that mirrors four inboxes has moved the problem, not solved it.

**Provenance over confidence.** Every answer names the messages, files and emails it drew from, and every citation links back to the item in the dashboard above. A fluent answer nobody can check is a liability in a B2B context — the first time it is confidently wrong about a client commitment, trust in the product is gone and does not come back. Citations are what make an answer *actionable* rather than merely impressive.

**Triage, not autonomy.** The prototype reads and reasons; it does not send. The "Reply" buttons are deliberately inert. Autonomy is worth building toward, but it must be earned by a track record the user can see, and the first version of a product like this should not be allowed to speak in the user's voice to their clients.

**Admit ignorance.** Ask the console something outside the corpus and it says what it searched and found nothing, rather than assembling a plausible answer from the nearest match. Try it: *"who owns the pistachio supply chain?"*

## Why retrieval and tool use, not fine-tuning

The obvious framing for this product is "an AI fine-tuned on the company's data." That framing is wrong, and the distinction matters enough to be the main technical position of this repo.

**Supervised fine-tuning (SFT) adjusts model weights on a fixed dataset.** It is a training run against a snapshot. The moment someone posts a Slack message, the snapshot is stale — and you cannot retrain on every message. Worse, facts encoded in weights cannot be cited, cannot be permission-checked per user, and cannot be deleted when a client offboards or someone exercises a GDPR erasure request. You would be baking confidential, per-customer, rapidly-changing facts into a model artefact. In a B2B product, that is not just inefficient; it is a compliance problem you have designed in from the start.

**Retrieval plus tool use is the right mechanism.** The model holds no company facts. At query time it calls tools — an MCP server per source — searches live data, and reasons over what comes back. Data stays in the systems that own it, and their permission models keep working. Answers cite sources because the model genuinely read those sources a second ago. When a document changes, the next answer changes with it, with no retraining.

**Where fine-tuning genuinely earns its place** is *behaviour*, not facts: house tone of voice, a rigid output format, domain vocabulary a base model handles badly. Those are stable, and they belong in weights. "What did Marie say yesterday?" does not.

This prototype implements the retrieval side honestly. `index.html` builds a corpus from every Slack message, email, document revision and calendar entry in `data.js`, then at query time it tokenises the question, scores records on term overlap, entity matching and recency, applies a relevance cutoff, and composes an answer from what survives. It is a deliberately simple retriever — a real one would use embeddings and a reranker — but the *shape* is the shape a real implementation has, and no answer in this repo is pre-written.

## What a real build looks like

An MCP server per source (Slack, Google Drive, Google Calendar, Outlook), a retrieval layer over them, and a model with tool access. The interesting engineering is not the connectors — those largely exist. It is the three things that decide whether a product like this can be sold:

**Permission inheritance.** The agent must see exactly what the signed-in user can see and nothing more. The moment a retrieval index is built with service-account credentials, it will eventually surface a private channel or a restricted document to someone who should not have it. Permissions have to be enforced at query time, per user, against the source of truth — which is slower and harder than pre-indexing everything, and is not optional.

**Data residency.** A Franco-British agency is a convenient example because it makes the problem concrete: UK and EU clients, data crossing the Channel, and enterprise buyers whose procurement teams ask where inference happens before they ask what the product does.

**Audit trail.** Every retrieval logged — what was searched, what was returned, what informed the answer. Needed for debugging, for incident response, and for the security review that gates every enterprise deal.

## Deliberately out of scope

Authentication, real connectors, write actions, mobile layouts beyond a responsive stack, multi-day and multi-user views, and any model inference. This is a prototype for arguing about product decisions, not a product.

## What v2 would earn

- **Write actions behind confirmation** — drafted replies the user approves, never sends automatically. The draft is the unit of trust.
- **Learned prioritisation** — the ranking here is hand-tuned. Real ranking learns from which items the user actually opens, replies to, and ignores.
- **A team view** — the same triage across an account team, so a director can see what is waiting on *their people*, which is a different and more valuable product.
- **Proactive interrupts** — the brief is pull, read once a day. The higher-value version notices at 10:40 that a decision is about to be made without the user and says so.

## Running it

```bash
open index.html
```

Or serve the folder over HTTP if you prefer. There is no build step and no dependency beyond two Google Fonts.

```
index.html    UI, styles, retrieval logic
data.js       the sample corpus
```

## A note on the data

Every person, client, message, meeting and file is fictional. Entente, Lemaire, Bramble & Co, Château de Rêve and everyone quoted were invented for this prototype. Nothing is connected to a live service.
