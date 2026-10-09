---
sidebar_position: 27
title: Where Did It Go? (Decoupling Map)
---

<!--
Grounded in: proposed spec §3 (Decoupling map, 32 rows), all clauses.
Migrated from: all sections of the original draft, via the decoupling map. The Notes column records the corrections applied during migration and the draft requirements awaiting an SSWG decision.
-->

**In short:** the original SCI for Web draft mixed requirements with
explanation. The proposed specification keeps the requirements; this site
holds the explanation. This table shows, for each of the draft's 32
parts, where its content now lives.

How to read it:

- **Destination**: *Specification* (moved whole into the specification),
  *Guidelines* (moved whole to this site), *Split* (requirement kept in
  the specification, method moved here) or *Removed*.
- **Proposed clause**: the clause of the proposed specification that now
  holds the requirement.
- **Guideline page**: where the explanation lives on this site. For parts
  that moved wholly into the specification, it is the page that explains
  that clause.
- **Notes**: corrections made during migration (C1–C12), and draft
  requirements that appear in neither the specification nor the original
  map, which await an SSWG decision ("SSWG decision").

Of the 32 parts, 5 moved whole into the specification, 5 moved whole into
the guidelines, 21 were split and 1 was removed.

| Original draft | Destination | Proposed clause | Guideline page | What moves to the guidelines | Notes |
| --- | --- | --- | --- | --- | --- |
| §1 Introduction | Split | Introduction | [Getting Started](./index.mdx) | Tier narrative, comparison aims | |
| §2 Scope (2.1–2.3) | Split | 1 | [Scope and Application Types](./Scope/index.md) | Application-type and architecture-pattern lists | |
| §3 Normative references | Specification | 2 | [Terminology and Language Guide](./Terminology/index.md) | None | |
| §4 Terms (T.1–T.10) | Split | 3 | [Terminology and Language Guide](./Terminology/index.md) | T.6 operational serving, T.7, T.8 tier, T.9 reference device | Also the `O_dev` abbreviation (C12) |
| §5 Architecture components | Split | 3.2–3.5 | [Formula Walkthrough](./FormulaWalkthrough.md) | Component inventories (servers, CDN, scripts, devices) | |
| §6.1–6.3 Persona boundaries | Guidelines | None | [Personas and Responsibilities](./Personas/index.md) | All; personas assign responsibility, not separate scores | |
| §6.3.1 First / third-party | Split | 5.4, 7.6 | [Third-Party Attribution](./ThirdParty/index.md) | Browser APIs and RUM techniques for attribution | C6: attribution by where a service executes; "decision maker" moved to [Personas](./Personas/index.md#who-introduced-a-dependency) |
| §6.4 Consolidated boundary | Specification | 5.1–5.3 | [Scope and Application Types](./Scope/index.md) | None | |
| §6.7 O_dev | Split | 5.3 | [Development Lifecycle Emissions](./DevLifecycle/index.md) | Amortisation approaches | C12: a separate ISO/IEC 21031 assessment, not a component |
| §7.1, §7.3 Functional unit principles | Split | 6.1–6.3 | [Choosing a Functional Unit](./R/index.md) | Comparability discussion | |
| §7.2, §7.4 FU table, discouraged units | Split | 6.1 | [Choosing a Functional Unit](./R/index.md#technical-units-acceptable-with-justification) | Example table, discouraged list | C9: technical units acceptable with disclosed justification; [Open Question 6](./OpenQuestions.md) |
| §7.5, §7.6 FU reporting, bot traffic | Split | 6.4, 6.5, 8 | [Choosing a Functional Unit](./R/index.md#engagement-thresholds) | Threshold examples | |
| §8.1 General formula | Split | 7.1 | [Formula Walkthrough](./FormulaWalkthrough.md#why-o_network-is-optional) | Rationale for optional `O_network` | |
| §8.2 O_server | Split | 7.2 | [Server-Side Emissions](./O/Server.md) | PUE and regional-weighting formulas | |
| §8.3 O_network | Split | 5.5, 7.3 | [Network Emissions](./O/Network.md) | SWDM rules, connection-type weighting, CDN example (duplicates removed) | C3, C4. SSWG decision: disclosing whether connection-type weighting was applied; fallback disclosures (b) weak proxy and (d) high uncertainty; data-transfer measurement scope |
| §8.4 O_client | Split | 7.4 | [Client-Side Emissions](./O/Client.md) | Measurement approaches (draft "Tier 1–3") | C5: renamed reference-device, device-mix, real-user monitoring |
| §8.5 Third-party methods A–C | Split | 7.6 | [Third-Party Attribution](./ThirdParty/index.md#estimation-methods) | Methods A–C | SSWG decision: listing third-party services as measured or estimated (Clause 7.6 lists only excluded ones) |
| §8.6–§8.7 M_server, M_client | Split | 7.5 | [Embodied Emissions: Server and Device](./M/ServerAndClient.md); [Reference Values](./ReferenceValues/index.md) | Data sources, default device embodied table | C11: defaults labelled "source to be confirmed"; [Open Question 7](./OpenQuestions.md) |
| §8.8 M_network | Split | 7.5 | [Embodied Emissions: Network](./M/Network.md) | Tier-by-tier implementation | C7, C8; [Open Question 5](./OpenQuestions.md) |
| §9 Implementation tiers | Guidelines | None | [Implementation Tiers and Data Quality](./DataQuality/index.md) | All | C5, C7, C10; [Open Question 1](./OpenQuestions.md) |
| §10 Procedure | Specification | 4 | [Worked Examples](./QuickGuide.md) | Tier-selection step dropped | |
| §11 Implementation examples | Guidelines | None | [Worked Examples](./QuickGuide.md) | All; §11.4 data-volume allocation of `M_network` fixed | C1, C2; [Open Question 8](./OpenQuestions.md) |
| §12 Disclosure | Split | 8 | [Disclosure Template](./Disclosure/index.md) | §12.2 recommended disclosures | SSWG decision: calculation date (§12.1 item 11) |
| §13 Edge cases | Guidelines | None | [Architecture Patterns](./ArchitecturePatterns/index.md) | SSG, SPA, PWA, serverless, API-first | |
| §14 Measurement period | Split | 8 (item 9), 9 | [Measurement Periods and Traffic](./MeasurementPeriods/index.md) | 7- and 30-day minimums | Minimums converted to recommendations |
| §15 Carbon intensity sources | Split | 7.1, 8 (item 7) | [Carbon Intensity and Data Sources](./DataSources/index.md) | Named providers, granularity by tier | |
| §16 Reference devices | Split | 8 (item 8) | [Reference Devices](./ReferenceDevices/index.md) | Device class table | |
| §17 Core characteristics | Specification | 10 | [Getting Started](./index.mdx) | None | |
| §18–§19 Exclusions, baseline | Specification | 9, 11 | [Measurement Periods and Traffic](./MeasurementPeriods/index.md#comparing-against-a-baseline); [Development Lifecycle Emissions](./DevLifecycle/index.md) | Duplicate dev-infrastructure list removed | SSWG decision: §19 items 5 (document what changed) and 6 (disclose both scores) |
| §20 Bibliography | Split | Bibliography | [Carbon Intensity and Data Sources](./DataSources/index.md#models-and-reference-datasets) | Tool and model references | |
| Appendices A, A.1, B–D | Guidelines | None | [Implementation Templates](./Disclosure/Templates.md); [Disclosure Template](./Disclosure/index.md); [Worked Examples](./QuickGuide.md); [Reference Values](./ReferenceValues/index.md); [Tools Directory](./DataSources/Tools.md) | All | Appendix A YAML template drafted; Appendix D starter table built only from tools the draft names |
| Document history | Removed | None | [CHANGELOG.md](https://github.com/Green-Software-Foundation/sci-for-web-guidelines/blob/dev/CHANGELOG.md) | Kept in the repository changelog | |

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/sci-for-web-guidelines/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+Where+Did+It+Go%3F).
