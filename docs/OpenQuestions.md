---
sidebar_position: 28
title: Open Questions
---

<!--
Grounded in: proposed spec §4 (Open decisions for the SSWG); Clauses 7.1, 7.3, 7.5, 7.6, 6.1, 5.5 and 10, where the questions arise.
Migrated from: original draft §8.3 (bundled CDN example), §8.7 (device embodied defaults), §8.8 (network-intensive presumption and review), §7.4 (discouraged functional units), §9 (implementation tiers), §11 (worked examples), where the questions originate.
-->

**In short:** these are questions the SSWG has not yet settled. No other
page on this site answers them. Where a page touches one, it explains the
debate and links back here.

This is a **living tracker**, not a snapshot. It should shrink over time
as the SSWG decides each item.

| # | Question | Status | Owner |
| --- | --- | --- | --- |
| 1 | [Implementation tiers](./DataQuality/index.md#tiers-are-guidance-not-a-requirement): guidance only (the proposal, as for SWI), or kept as an optional disclosure label in Clause 8? | Open | SSWG |
| 2 | [Numeric thresholds](./M/Network.md#declaring-m_network-unpopulated): should the 5 % `M_network` materiality threshold (Clause 7.5) and the 1 % [third-party cut-off](./ThirdParty/index.md#small-services) (Clause 7.6) stay normative values, or should the specification require a disclosed threshold with recommended values given here? | Open | SSWG |
| 3 | [Optional `O_network` and two-score reporting](./FormulaWalkthrough.md#why-o_network-is-optional): confirm that the score without `O_network` is always reported and the score with it optional (Clause 7.1), noting that the parent ISO/IEC 21031:2024 names networking among significant contributors to software emissions. | Open | SSWG |
| 4 | [Bundled CDN energy when `O_network` is not reported](./O/Network.md#the-split-is-not-score-neutral-when-o_network-is-omitted): a transmission-basis share of a bundled CDN figure leaves the reported score if `O_network` is omitted, which is the energy displacement Clause 10 says cannot reduce the score. Should the specification require that share to be kept in `O_server`, or reported in the limitations, or something else? | Open | SSWG |
| 5 | [Network-intensive presumption for `M_network`](./M/Network.md#declaring-m_network-unpopulated): the original draft presumed `M_network` material for streaming, real-time collaboration and large file transfer, and made annual review of an unpopulated declaration mandatory for them. Clause 7.5 already requires at-least-annual review of every unpopulated declaration, but carries no presumption. Should the presumption be restored? | Open | SSWG |
| 6 | [Discouraged functional units](./R/index.md#technical-units-acceptable-with-justification): page views, API calls, data transferred and server requests were "discouraged" in the original draft, while the parent SCI lists API calls as a valid example and Clause 6.1 allows technical units with disclosed justification. How strongly should the guidelines discourage them? | Open | SSWG |
| 7 | [Source for default device embodied values](./ReferenceValues/index.md#device-embodied-emissions-draft-defaults): the 400 / 300 / 100 / 80 kg CO2eq defaults carry no source. Confirm a published source, replace the values, or remove the table. | Open | SSWG |
| 8 | [Location of worked examples](./QuickGuide.md): in the guidelines (as SWI does, and as proposed) or in the specification (as SCI for AI does)? | Open | SSWG |

## Why these live here, and not in the specification

The specification does not take a position on these questions beyond its
current text, and these guidelines do not either. Presenting an open
question as settled, even implicitly, would misrepresent where the SSWG
stands. Each linked page explains the question in context and flags it as
open where a reader would otherwise expect a definitive answer.

Some questions also affect the specification text itself (1, 2, 3, 4, 5
and 8). Those are decided through the SSWG's specification process; this
page records them so that implementers can see what may change.

## Updating this page

When the SSWG resolves a question, update its **Status** here and update
the linked page(s) to reflect the decided position. Do not remove a
resolved row silently: record the resolution and its date, so the history
of how the method settled stays visible.

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/sci-for-web-guidelines/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+Open+Questions).
