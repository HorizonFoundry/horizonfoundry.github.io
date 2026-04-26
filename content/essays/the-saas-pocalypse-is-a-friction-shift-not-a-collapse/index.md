---
title: "The SaaS-pocalypse Is a Friction Shift, Not a Collapse"
date: 2026-04-26
author: "Charles Villarreal"
description: "AI is not erasing enterprise software. It is compressing visible friction and pushing hidden friction into context, control, governance, and security."
tags: ["systems-thinking", "ai", "enterprise-software", "leadership", "governance"]
draft: false
featured_image: "/images/essays/saas-pocalypse-friction-shift/saas-pocalypse-friction-shift-hero.png"
images:
  - "/images/essays/saas-pocalypse-friction-shift/saas-pocalypse-friction-shift-hero.png"
---
![Hero illustration: a shifting horizon line representing where pressure on enterprise software is moving](/images/essays/saas-pocalypse-friction-shift/saas-pocalypse-friction-shift-hero.png)

For a while, the AI disruption story around enterprise software was simple enough to fit in a headline.

Copilots and coding agents were going to hollow out SaaS. Enterprise software would be compressed into a thin layer of UI. Incumbents would be stranded while models and agents absorbed the value.

That story is losing force, at least in its cleanest form.

The more useful conversation now is not whether SaaS survives. It is what kind of software earns the right to keep existing.

Recent industry discussion has started moving in that direction. Andreessen Horowitz framed the “SaaS Apocalypse” conversation around a more nuanced question: why not all software companies face the same AI-driven risks, and how enterprise software may shift from records toward processes, agents, and trustable workflows.

That framing is closer to where I think the real issue sits.

I do not believe the SaaS-pocalypse is simply collapse. I also do not believe it is over because enterprise software proved immune. Both stories are too shallow.

The first story mistook visible friction for total friction. It assumed that if AI made the front end feel lighter, the whole stack had become less necessary.

The second story risks overcorrecting. It treats the survival of incumbent software as evidence that the underlying shift was overstated.

The shift is real. We just misunderstood where the pressure would land.

![Quote card: “The shift is real. We just misunderstood where the pressure would land.”](/images/essays/saas-pocalypse-friction-shift/saas-pocalypse-quote-pressure-landing.png)

## Software Was Never Just the Screen

For years, much of enterprise software was valued around its ability to structure work through interfaces.

Forms. Workflows. Approvals. Reports. Dashboards. Permissions. Notifications. System handoffs.

All of that became visible through screens people could navigate. When large language models arrived, it became easy to imagine those layers collapsing. If a user can state intent in natural language and have an agent handle the rest, why keep paying for software built around clicks, menus, and rigid workflow paths?

Because those systems were never only interfaces.

They carried the operating burden of the enterprise.

They enforced permissions. They preserved state. They coordinated handoffs. They embedded policy. They kept records. They supported auditability. They managed exceptions. They absorbed complexity that the interface merely exposed.

An LLM can reduce the pain of interacting with those systems. Replacing the system itself is a different class of problem.

The original SaaS-pocalypse thesis missed that deeper architecture. It treated software as if most of its value lived in the user experience layer. In practice, much of enterprise software earns its keep by carrying organizational friction that does not disappear when the interface gets easier.

That is where the real story begins.

AI is very good at compressing interaction friction. Enterprises still have to absorb execution friction.

## Visible Friction Is Getting Compressed

Old friction often lived in places users could feel immediately.

Searching across systems. Filling out forms. Navigating approval chains. Writing basic queries. Pulling reports. Translating intent into clicks. Moving from one tool to another just to complete a basic task.

These activities are painful, repetitive, and obvious. LLMs and agents are genuinely strong here. They can accelerate drafting, summarize context, answer questions, route work, and reduce the cognitive tax of moving through badly designed systems.

Herbert Simon saw the outline of this problem decades before enterprise AI existed. In an information-rich world, he argued, attention becomes the scarce resource. His line about “a wealth of information” creating “a poverty of attention” feels unusually relevant right now.

A lot of enterprise software has been asking people to spend attention on translation work, navigation work, reconciliation work, and tool choreography. AI can help reclaim some of that attention.

I would not minimize that. For people doing the work every day, reducing that burden can be a real operational improvement.

But once visible friction compresses, the deeper friction becomes harder to ignore.

![Concept diagram contrasting visible friction (clicks, forms, navigation) with hidden friction (context, control, verification, governance, security, adoption)](/images/essays/saas-pocalypse-friction-shift/saas-pocalypse-visible-vs-hidden-friction.png)

## Hidden Friction Moves to the Operating Layer

Context quality becomes more important. If retrieval is weak, memory is stale, or underlying records are incomplete, a polished natural-language layer only makes bad execution feel smoother on the way to being wrong.

Control becomes more important. Who can do what, under what conditions, and with what level of autonomy becomes central once a system can act instead of merely suggest.

Verification becomes more important. A workflow that moves faster but requires constant human skepticism has relocated the burden into review overhead.

Governance becomes more important. If decisions are shaped by models, prompts, routing logic, tool calls, or multi-step agent behavior, leaders need to know what happened, why it happened, and who owns the outcome.

Security becomes more important. A world with more agents and more automated actions creates more opportunities for excessive permissions, excessive autonomy, and unintended downstream effects. OWASP’s 2025 Top 10 for LLM Applications explicitly names “excessive agency” as a risk, rooted in too much functionality, too much permission, or too much autonomy being granted to LLM-based systems.

Adoption becomes more important. Leadership alignment, employee trust, workflow redesign, training, and operating discipline all become part of the value equation. The technology can be impressive and still fail inside the organization.

That is why I do not find either extreme very useful.

“AI will kill SaaS” is too blunt.

“SaaS is safe” is too comforting.

The better question is this: how much hidden friction was the software actually carrying?

## Some SaaS Was More Exposed Than We Thought

Some products were mostly interface convenience wrapped around relatively shallow process depth. Those categories are exposed.

If the value proposition was largely “we make this easier to click through,” natural-language interaction and agentic workflows can compress a meaningful share of that value.

Other products carry much heavier burdens. They absorb regulatory constraints, security requirements, messy operational handoffs, system-of-record integrity, organizational memory, and exception-heavy real-world workflows.

Those categories can still be disrupted, but the disruption will not come from software suddenly becoming irrelevant. It will come from a new definition of good software.

The center of gravity moves from interface control to orchestration, trust, policy, measurement, and reliability.

That is the redistribution of software value.

![Framework diagram showing where software value moves: from interface control toward orchestration, trust, policy, measurement, and reliability](/images/essays/saas-pocalypse-friction-shift/saas-pocalypse-software-value-moves.png)

## The SMB Risk Is Easy to Underestimate

This conversation often defaults to enterprise software because large companies have the biggest budgets, the most visible vendors, and the most obvious AI transformation narratives.

But small and mid-sized businesses may face a sharper version of the risk.

Large enterprises have their own problems. Their architecture processes can be slow. Procurement can be frustrating. Compliance reviews can feel detached from the speed of the work.

Still, large companies often have security teams, legal teams, architecture review, procurement controls, compliance functions, incident response practices, and vendor management disciplines. Those controls may be imperfect, but they exist.

A smaller business may look at AI-assisted software development and see a cleaner equation.

Why pay for a SaaS platform when a capable internal person, a contractor, or an AI coding tool can build something tailored to the business at a fraction of the cost?

Sometimes that will be the right decision.

But custom software is not only a build decision. It is a maintenance decision.

Someone has to patch it. Someone has to monitor dependencies. Someone has to update libraries. Someone has to handle authentication, authorization, logging, backups, incident response, privacy obligations, data retention, data deletion, and vulnerability remediation.

Someone has to know what happens when the person who built it leaves.

The up-front savings can be real. So can the downstream exposure.

![SMB risk matrix: when building your own software becomes dangerous, plotting custom-build risk against operating burden and data sensitivity](/images/essays/saas-pocalypse-friction-shift/saas-pocalypse-smb-risk-matrix.png)

That risk gets sharper in sensitive data environments, and I would argue most customer data deserves to be treated as sensitive. Names, emails, phone numbers, addresses, order history, payment-adjacent data, health-adjacent data, employee records, behavioral data, and support conversations all create obligations.

A business may believe it built a simple internal workflow tool. From a risk perspective, it may have created a poorly governed customer data system.

NIST’s Cybersecurity Framework 2.0 Small Business Quick-Start Guide is useful here because it frames cybersecurity as an operating discipline for organizations with limited resources, not a luxury reserved for large enterprises. The guide is explicitly aimed at small-to-medium sized businesses with modest or no cybersecurity plans in place.

NIST has also extended secure software development guidance into generative AI and dual-use foundation model contexts through SP 800-218A, reinforcing that AI-enabled development still needs secure development practices across the software development life cycle.

This part of the SaaS-pocalypse conversation deserves more attention.

AI can make software creation feel dramatically cheaper. It can also make unmanaged software sprawl dramatically easier.

A small business may not be hurt most by a SaaS vendor bill. It may be hurt worse by a custom application nobody maintains, nobody audits, nobody patches, and nobody fully understands.

That does not mean every company should default back to SaaS.

It means build-versus-buy has to include operating burden, not just feature fit and subscription cost.

## The Leadership Questions Get Harder

When organizations look at AI through a pure efficiency lens, they tend to ask thin questions.

How many hours did we save?

How many prompts did people run?

How many features can we remove from the old interface?

Can we reduce headcount?

Can we replace the workflow with an agent?

Those questions are not useless. They are incomplete.

The better questions are less comfortable.

What friction did we remove?

What new friction did we introduce?

What behavior changed?

What KPI moved?

Who owns the system when the model is wrong?

What review burden now exists downstream?

What new governance requirement was created by the appearance of speed?

What must remain intentionally slow?

That last question is the one leaders often want to skip.

In philosophy and systems thinking, there is a familiar warning often associated with Chesterton’s fence: do not tear something down until you understand why it was put there. Chesterton’s point was not a defense of every old structure. It was a warning against confusing ignorance of purpose with proof of uselessness.

The same idea applies to enterprise workflows.

Some friction exists because the system is poorly designed.

Some friction exists because the organization learned, often painfully, that certain actions need verification, authorization, segregation of duties, or audit trails.

AI should absolutely help remove waste. It should not blindly erase institutional scar tissue.

That is where the conversation moves from technology strategy into leadership judgment.

In my experience leading data and analytics work, the hardest part is rarely spotting the obviously broken process. People usually know where the pain is. The harder part is distinguishing between a step that exists because nobody has cleaned it up and a step that exists because the business once learned an expensive lesson.

Good leaders do not preserve friction out of fear. They also do not remove it just because a tool made removal look easy.

The real opportunity is to distinguish wasteful friction from protective structure.

That requires knowing the work. It requires listening to the people closest to the process. It requires enough humility to ask why a step exists before celebrating its removal. It requires courage to simplify and discipline to preserve controls when those controls are doing real work.

## Smoother Interaction Can Hide Messy Execution

For enterprise leaders, the next wave of AI adoption cannot be treated as feature decoration.

A chatbot on top of yesterday’s product will not be enough. A coding agent pointed at a backlog will not be enough. A procurement strategy based only on lower software spend will not be enough.

The firms that win this next stretch will understand where friction moved.

They will know which parts of the old workflow deserved compression and which parts still require durable structure. They will invest in the surrounding system, not just the visible demo. They will treat AI adoption as operating model redesign. They will instrument outcomes. They will define ownership. They will govern autonomy before they scale it.

Most of all, they will resist confusing smoother interaction with solved execution.

A cleaner interface can create the illusion that a messy system has become coherent. Sometimes it has. Often it has not.

The complexity is still there, only now it is hiding behind a more conversational layer, waiting to show up as bad decisions, weak controls, review bottlenecks, brittle maintenance, or security gaps.

That is why I keep coming back to friction as the starting point.

Not all friction is bad.

Some of it is waste. Some of it is structure.

Some friction reflects poor workflow design, bloated interfaces, and unnecessary translation work. That friction should be removed aggressively.

Some friction reflects the legitimate need for verification, authorization, accountability, and safe execution. That friction should be designed intentionally.

The future belongs to teams that can tell the difference.

![Friction Audit Checklist: a closing artifact for distinguishing wasteful friction from protective structure](/images/essays/saas-pocalypse-friction-shift/saas-pocalypse-friction-audit-checklist.png)

## The Real Test After the Apocalypse Headline

So no, I do not think the SaaS-pocalypse was pure collapse. I do not think it is simply over because enterprise software proved immune.

The risks were real. They still are.

But both versions of the story have been too shallow.

The first mistook visible friction for total friction, assuming that if AI made the front end feel lighter, the whole stack had become less necessary.

The second risks treating the survival of incumbent software as proof that the pressure was overstated.

The shift is real.

The burden is moving into the layers that make AI usable inside real organizations: context, control, verification, governance, security, adoption, and maintenance.

That is where the next round of value will be built.

That is where the next round of failure will happen too.

AI is not erasing software. It is forcing software, and the leaders who shape it, to become more honest about what problem they were solving in the first place.

For many companies, that will be a harder test than the apocalypse headline suggested. The work now is more disciplined than chasing the next abstraction layer: engineer with intent, move from friction to value, and build systems that endure.
