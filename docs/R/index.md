---
sidebar_position: 13
title: Choosing a Functional Unit
---

<!--
Grounded in: proposed spec Clause 6.1–6.5 (Functional unit); Clause 7.7 (Functional unit conversion); Clause 8 item 4.
Migrated from: original draft §7.1 (General guidance, multiple FUs, comparability); §7.2 (Example FU table); §7.3 (Selection criteria); §7.4 (Discouraged FUs); §7.5 (Reporting expectations); §7.6 (Bot traffic and engagement thresholds); Appendix A.1.2 (FU selection template).
Corrections applied: C9 (technical units acceptable with disclosed justification, not prohibited).
-->

**In short:** the functional unit, `R`, is what you divide by: "per
purchase", "per article read", "per task completed". Pick something your
users would recognise as getting value, not a technical event like a
request. A good functional unit makes the score fall only when the
application genuinely becomes more efficient.

## What the specification asks

- **Delivered functionality.** Clause 6.1 requires `R` to represent
  delivered functionality, such as a completed transaction, a content item
  consumed or a task completed, rather than a technical operation. Where a
  technical operation is used, the justification is disclosed.
- **One `R` across the boundary.** Clause 6.2 requires the same `R` for
  every component, objectively measurable, and recommends keeping its
  definition stable between reporting periods. If a component is
  quantified against a different unit, Clause 7.7 requires it to be
  converted as ISO/IEC 21031:2024 specifies, with the conversion factors
  disclosed.
- **Several units are fine.** Clause 6.3 allows a functional unit per
  distinct user journey, each with its own score, never aggregated.
- **Disclosure.** Clauses 6.4, 6.5 and 8 item 4 cover engagement
  thresholds, automated traffic and how `R` is measured.

Units of delivered value resist gaming: a team cannot improve its score
by degrading quality or by splitting one piece of value into many
technical events.

## Examples by application type

These are indicative examples, not an exhaustive or prescribed list:

| Application type | Example functional unit | Why it works |
| --- | --- | --- |
| Content and media websites | Content item consumed (article read, video watched) | Captures delivered value; resists page-splitting |
| E-commerce platforms | Completed transaction | Aligns with business value; scales with real use |
| SaaS applications | Task completed (document created, report generated) | Measures delivered functionality, not login frequency |
| Collaboration tools | Active collaboration session or user-hour | Captures sustained engagement |
| API-driven applications with a browser interface | User workflow completed | Measures end-to-end value, not individual API calls |
| Marketing and informational websites | User session, with an engagement threshold | Fits short content-consumption patterns |
| Real-time applications | Active user-minute | Captures ongoing resource use proportionally |

## Selection criteria

When comparing candidates, we recommend asking:

1. **Scaling**: does it grow in proportion to resource use?
2. **Value**: does it represent value to users rather than an
   implementation detail?
3. **Measurability**: can you count it objectively from analytics or
   instrumentation? (Clause 6.2 requires this.)
4. **Stability**: will the definition stay the same over time, so scores
   can be compared?
5. **Gaming resistance**: would improving the score ever reward reducing
   functionality or quality?

## Technical units: acceptable with justification

Technical units are the weaker choice, but they are not prohibited.
Clause 6.1 allows a page view, request or volume of data where the
justification is disclosed, and the parent SCI itself lists API calls as
a valid example functional unit. The trade-offs to weigh:

| Unit | Weakness to address in your justification |
| --- | --- |
| Raw page views | Do not reflect page complexity or the value delivered |
| API calls | Can change by consolidating or splitting calls without any change in value |
| Data transferred | Rewards reducing content quality rather than improving efficiency |
| Server requests | A back-end metric disconnected from user value |

A technical unit can be the right choice when it genuinely represents
delivered value, for example where each request is the user's task. Say
why in your disclosure. How strongly the guidelines should discourage
these units is [Open Question 6](../OpenQuestions.md).

## Engagement thresholds

An engagement threshold qualifies a unit, for example "a session counts
only if it lasts at least 30 seconds" or "at least one interaction".
Clause 6.4 requires any threshold you use to be disclosed.

There is no universal threshold: legitimate session shapes vary too much
between applications. **Examples on this site, including the 30-second
and 5-minute thresholds in the [Worked Examples](../QuickGuide.md), are
illustrations only. Do not treat them as informal defaults.** Choose a
threshold from your users' actual behaviour. A 30-second minimum would be
wrong for a marketing or content-discovery site where short sessions are
legitimate.

## Automated (bot) traffic

Clause 6.5 requires you to disclose how automated traffic is treated
(included in `R`, excluded, or reported under its own functional unit),
the detection method and the estimated share of total traffic. Exclusion
is allowed only where a detection method is applied and disclosed.

The original draft ranked the options:

- **Preferred**: separate functional units, for example `R_human` for
  human page views and `R_bot` for automated access, each with its own
  score.
- **Combined**: acceptable where reliable separation is not feasible,
  with the detection limitations and estimated bot share disclosed.
- **Exclusion**: reserve for reliable detection with a justification,
  such as malicious bot traffic, and disclose the method.

Neither inclusion nor exclusion is inherently correct: comparability
comes from transparency.

## Comparability

Comparability works at two levels. Scores for the same functional unit
can be compared across applications ("purchase completed" across
e-commerce sites). And organisations that track more, and more specific,
functional units show deeper integration of the method. Comparability
weakens as units become more application-specific; that is expected.

## Template: several user journeys

Adapted from the original draft's Appendix A.1.2. Use it when an
application serves distinctly different user journeys.

```
Application overview:
  - Primary value-delivery pathways:
     1. [journey name — e.g. "purchase completed"]
     2. [journey name — e.g. "search performed"]
     3. [journey name — e.g. "account management session"]

Per-journey functional unit:
  For each journey above:
    - Name:                     [FU name]
    - Measurement source:       [analytics event / server log / synthetic]
    - Engagement threshold:     [if applicable, with rationale]
    - Automated traffic:        [included / excluded / separate FU; detection method]
    - First-party / third-party attribution approach: [method]
    - Expected comparability:   [cross-organisation at per-FU level / internal only]

Reporting plan:
  [ ] Report a separate SCI for Web score for each journey (Clause 6.3)
  [ ] Do not aggregate them into a single headline score (Clause 6.3)
  [ ] Note how many functional units are tracked

Governance:
  - Owner(s) of each FU definition:   [product / engineering / sustainability]
  - Review cadence:                   [e.g. quarterly]
```

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/sci-for-web-guidelines/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+Choosing+a+Functional+Unit).
