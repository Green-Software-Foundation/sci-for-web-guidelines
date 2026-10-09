# SCI for Web — Proposed Lightweight Specification

2026-10-07 · Sean

## 1. Evaluation

The current SCI for Web draft is roughly three times the length of the parent SCI and about two-thirds of it is implementer guidance, not requirements. Stripping that guidance out leaves a specification of around 2,400 words that preserves every consensus decision from the assembly.

**Source evaluated.** The latest draft available to me is the public snapshot shared with the W3C Sustainable Web Interest Group ([sci-web/spec-snapshot.md, v0.2.0-draft, snapshot branch 2026-05-07](https://github.com/thegreenwebfoundation/sustainableweb-wsg/blob/ca-sci-web-snapshot-2026-05-07/sci-web/spec-snapshot.md)). It was not in the Project files, so the closed-group working draft may have moved on; the method below still applies.

| Measure | Current SCI for Web draft | SCI (ISO/IEC 21031) | Proposed SCI for Web |
|---|---|---|---|
| Words | 9,209 | 2,997 | ~2,400 |
| Numbered clauses | 20 + 4 appendices | 13 | 11 |
| shall / must statements | 61 | ~25 | ~50 |
| Named tools, vendors or products in normative text | 19 | 0 | 0 |
| Default numeric values in normative text | Device embodied table, 5% materiality, 7/30-day periods, 1% third-party cut-off | 0 | 2 (5% and 1%, flagged in §4) |

### What makes it too big

- **Guidance written as requirements.** Implementation tiers (§9), reference-device classes (§16), minimum measurement periods (§14), data-source lists (§15) and edge-case handling (§13) explain how to comply rather than what compliance is.
- **Content that will date.** Default device embodied values (§8.7), named tools (SWDM, CO2.js, Boavizta, ElectricityMaps, WattTime, Long Task API) and device brands (MacBook, iPad, Chromebook) would force an ISO revision every time a coefficient or product changes.
- **Examples, templates and unfinished appendices.** §11 worked examples, Appendix A.1 templates and Appendices A–D (four marked "to be developed") belong in a living guideline site.
- **Duplication.** In §8.3 the CDN double-counting rule, connection-type weighting and SWDM rule each appear twice, word for word.

### Internal inconsistencies the cut also fixes

- §6.4 and §10 list network transfer as a mandatory inclusion, while §8.1 and §8.3 make O_network optional.
- §11.4 allocates M_network "proportional to data volume", which §8.8 prohibits.
- §6.4 and §18.2 exclude development infrastructure, while §6.7 introduces it as an optional supplementary component.
- Clause numbering jumps from §6.4 to §6.7, and the draft mixes MUST with SHALL; ISO drafting uses shall / should / may only.

### Design rules applied to the cut

1. **The specification states the principle; the guidelines explain how to fulfil it.** This is the framing the SSWG adopted for SWI, applied here unchanged.
2. **Inherit, don't restate.** Anything already defined in ISO/IEC 21031 (embodied allocation, market-based measures, granularity) is referenced, not repeated.
3. **No tools, vendors, products or default coefficients in normative text.** The specification requires that sources be disclosed; the guidelines say which sources exist.
4. **Every assembly decision survives.** The six-component formula, optional O_network, the bytes-transferred prohibition for M_network, first-party / third-party disclosure, the development-infrastructure exclusion and bot-traffic disclosure all stay normative.
5. **One clause order across the family.** The structure follows SCI, SCI for AI and SWI: Introduction, Scope, Normative references, Terms, Procedure, Boundary, Functional unit, Methodology, Reporting, Baseline, Core characteristics, Exclusions, Bibliography.

## 2. Proposed specification text

The text below is the proposed normative specification in the SCI family clause order. Every clause is a requirement or a definition needed to state one; explanation and examples now live in the guidelines (see §3).

### Software Carbon Intensity for Web (SCI for Web) Specification

#### Introduction

Web applications cause emissions across infrastructure that no single party fully controls: servers and edge nodes, the networks between them, third-party services, and the end-user devices on which browsers render and run code. This document extends the Software Carbon Intensity (SCI) methodology specified in ISO/IEC 21031:2024 to that distributed architecture.

This document is intended to:

- provide a consistent method for calculating the carbon intensity of web applications;
- make client-side and third-party emissions visible alongside server-side emissions;
- prevent apparent improvements achieved by displacing energy from one component to another;
- incentivize genuine emission reductions in web application design, development and operation.

As in ISO/IEC 21031:2024, an SCI for Web score is a rate, not a total. It can be reduced only by eliminating emissions; market-based measures do not reduce it.

#### 1 Scope

This document specifies a method for calculating and reporting the carbon intensity of web applications. A software system is in scope when all three of the following apply:

1. content and functionality are delivered over HTTP or HTTPS;
2. rendering and execution occur primarily in a web browser or equivalent web rendering engine;
3. the interface is designed for direct human interaction.

This includes static, dynamic, server-rendered, single-page, progressive and hybrid web applications, regardless of hosting model.

This document does not apply to:

- machine-to-machine APIs serving only programmatic clients, which should be assessed using ISO/IEC 21031:2024 directly;
- native mobile and desktop applications, including those that embed a web view;
- browser extensions, plug-ins and assistive technologies.

#### 2 Normative references

The following documents are referred to in the text in such a way that some or all of their content constitutes requirements of this document. For dated references, only the edition cited applies.

- ISO/IEC 21031:2024, Information technology — Software Carbon Intensity (SCI) specification

#### 3 Terms and definitions

For the purposes of this document, the terms and definitions given in ISO/IEC 21031:2024 and the following apply. ISO and IEC maintain terminology databases at the ISO Online browsing platform (https://www.iso.org/obp) and IEC Electropedia (http://www.electropedia.org/).

**3.1 web application** — software system that delivers functional value to human users primarily through a browser-based interface accessed over HTTP or HTTPS

**3.2 server-side infrastructure** — origin, application, database, storage, caching, edge, serverless and supporting systems that generate and deliver web application responses, up to data-centre facility egress

**3.3 network transfer** — transmission of data between data-centre facility egress and the network interface of the end-user device

**3.4 client-side execution** — computation on an end-user device to render and run a web application, including layout, painting, script execution, asset decoding and service-worker activity

**3.5 end-user device** — desktop computer, laptop computer, tablet or smartphone on which a browser renders a web application

**3.6 third-party service** — service integrated into a web application that is not under the operational control of the web application provider

**3.7 energy displacement** — shifting of computation from a measured component to an unmeasured component without reducing total system energy

**3.8 Symbols and abbreviated terms**

| Symbol | Meaning |
|---|---|
| O_server | Operational emissions of server-side infrastructure |
| O_network | Operational emissions of network transfer (optional, see 7.3) |
| O_client | Operational emissions of client-side execution |
| M_server | Embodied emissions of server-side hardware |
| M_network | Embodied emissions of network hardware |
| M_client | Embodied emissions of end-user devices |
| PUE | Power usage effectiveness |

#### 4 Procedure

An SCI for Web score shall be calculated and reported in five steps:

1. **Bound** — define the software boundary (Clause 5).
2. **Scale** — select the functional unit or units (Clause 6).
3. **Define** — for each component, select measurement or calculation, as specified for quantification methods in ISO/IEC 21031:2024.
4. **Quantify** — calculate each component per functional unit and sum them (Clause 7).
5. **Report** — disclose the score and methodology (Clause 8).

#### 5 Software boundary

**5.1 Mandatory components.** The calculation shall include the operational emissions of server-side infrastructure and client-side execution, and the embodied emissions of server-side hardware, network hardware and end-user devices.

**5.2 Optional components.** Operational emissions of network transfer may be included, as specified in 7.3. Monitoring, observability, redundancy and failover infrastructure shall be included where material; any exclusion and its rationale shall be disclosed.

**5.3 Exclusions.** The following shall be excluded from the SCI for Web score:

- development and build infrastructure, including developer workstations, CI/CD pipelines, build processes, automated testing and staging environments;
- processing that occurs after delivery and is not triggered by the user's interaction with the web application;
- software installed on the end-user device by the user, including browser extensions.

Development and build infrastructure may be assessed separately using ISO/IEC 21031:2024. Such a result shall be reported separately and shall not be added to the SCI for Web score.

**5.4 Third-party services.** A third-party service integrated by the web application provider is within the boundary. Its emissions shall be attributed to the component in which it executes: O_server, O_network or O_client.

**5.5 Component boundaries.** The boundary between server-side infrastructure and network transfer is data-centre facility egress. Edge and CDN energy measured as facility energy shall be attributed to O_server; energy allocated on a transmission basis shall be attributed to O_network. Where a supplier provides a single bundled figure, the allocation between components shall be disclosed. Energy shall not be counted in more than one component.

#### 6 Functional unit

**6.1** The functional unit (R) shall represent delivered functionality, such as a completed transaction, a content item consumed or a task completed, rather than a technical operation. Where a technical operation such as a page view, request or volume of data is used, the justification shall be disclosed.

**6.2** R shall be the same across all components within the boundary and shall be objectively measurable. The definition of R should remain stable between reporting periods.

**6.3** Multiple functional units may be defined for distinct user journeys. Each shall have its own SCI for Web score. Scores for different functional units shall not be aggregated.

**6.4** Any engagement threshold that qualifies a unit of R, such as a minimum session duration, shall be disclosed.

**6.5** The treatment of automated (non-human) traffic shall be disclosed: whether it is included in R, excluded, or reported under a separate functional unit, together with the detection method and the estimated proportion of total traffic. Automated traffic may be excluded only where a detection method is applied and disclosed.

#### 7 Methodology

**7.1 General.** The SCI for Web score is calculated as:

```latex
SCI_{Web} = \frac{O_{server} + O_{client} + M_{server} + M_{network} + M_{client}}{R}
```

This score shall always be reported. Where O_network is quantified (7.3), a second score that adds O_network to the numerator may be reported alongside it, clearly labelled.

Each operational component shall be calculated as energy multiplied by location-based carbon intensity (O = E × I), as specified in ISO/IEC 21031:2024. Each embodied component shall be calculated as total embodied emissions multiplied by time-share and resource-share (M = TE × TS × RS), as specified in ISO/IEC 21031:2024. Market-based measures shall not be applied to any component.

**7.2 Server-side operational emissions (O_server).** Energy shall include all hardware reserved or provisioned for the web application, including idle capacity, and data-centre facility overhead. Energy on shared infrastructure shall be allocated by resource share, and the allocation method shall be disclosed. Where infrastructure spans several grid regions, carbon intensity shall be applied to the energy consumed in each region.

**7.3 Network operational emissions (O_network) — optional.** Where O_network is reported, the most direct available method shall be used, in this order of preference:

1. measured energy for the traffic attributable to the web application;
2. measured or supplier-disclosed energy for some network segments, with the remainder modelled;
3. a model based on data transferred, used only where neither of the above is available.

The method used, and the reason a more direct method was not used, shall be disclosed. Reductions in O_network estimated solely from data transferred should not be presented as evidence of emission reductions.

**7.4 Client-side operational emissions (O_client).** Energy shall be quantified on, or for, end-user devices representative of the web application's users, and the basis for the device distribution shall be disclosed. Carbon intensity shall reflect the geographic distribution of users where it is known; otherwise the assumed value and its basis shall be disclosed. Telemetry collected from real users shall be privacy-preserving.

**7.5 Embodied emissions.**

- **M_server** shall be calculated as specified in ISO/IEC 21031:2024.
- **M_client** shall be calculated for each device type in the device distribution. Time-share is the device time attributable to the functional unit divided by the device's expected lifespan; resource-share is the share of device resources used during that time.
- **M_network** shall be included. Data volume transferred shall not be used as its allocation basis; the basis used shall be consistent with time-share and resource-share and shall be disclosed. M_network may be declared unpopulated only where a documented materiality assessment shows it is below 5 % of total embodied emissions (M_server + M_network + M_client). Such a declaration shall be disclosed with its assessment and reviewed at least annually.

**7.6 First-party and third-party attribution.** Each reported operational component shall be disclosed with separate first-party and third-party sub-totals. Where they cannot be separated, the component shall be reported as undifferentiated, with that limitation disclosed. A third-party service estimated to contribute less than 1 % of total energy may be excluded, but shall be listed in the disclosure.

**7.7 Functional unit conversion.** Where a component is quantified against a different functional unit, it shall be converted as specified in ISO/IEC 21031:2024, and the conversion factors shall be disclosed.

#### 8 Reporting

An SCI for Web report shall disclose:

1. the SCI for Web score in gCO2eq per R, and the score including O_network where reported;
2. the version of this document applied;
3. the software boundary: included, optional and excluded components, with the rationale for each exclusion;
4. the functional unit: its definition, rationale, measurement source, any engagement threshold and the treatment of automated traffic;
5. for each component, whether it was measured or calculated, and the data sources, models, coefficients and allocation methods used;
6. the first-party and third-party sub-totals for each operational component;
7. the carbon intensity sources and their spatial and temporal granularity;
8. the end-user devices used for client-side quantification, by type, model, operating system and browser version;
9. the measurement period and traffic characterization, including volumes and geographic and device distribution;
10. the population status of M_network, with the materiality assessment where unpopulated;
11. limitations, data gaps, exclusions and uncertainty.

Disclosures should be provided in a machine-readable format in addition to a human-readable one.

#### 9 Comparing an SCI for Web score to a baseline

When an action is evaluated, the baseline shall be calculated with the same boundary, functional unit, component set (including whether O_network is included), data sources and methods as the comparison. Only the action being evaluated shall differ. Where traffic volumes or patterns differ between the two periods, the normalization applied shall be disclosed.

#### 10 Core characteristics

The core characteristics of ISO/IEC 21031:2024 apply. In addition, as this document develops, the following shall remain true:

- an action that reduces emissions in any component, including client-side and third-party components, reduces the SCI for Web score;
- energy displacement does not reduce the score, because the boundary spans servers, networks, third-party services and end-user devices;
- the score can be calculated without cost, using modelled data where measured data is unavailable, provided the method is disclosed.

#### 11 Exclusions

The exclusion of market-based measures specified in ISO/IEC 21031:2024 applies. In addition, claims of renewable or "green" hosting based solely on energy attribute purchases shall not reduce an SCI for Web score.

#### Bibliography

1. Green Software Foundation, *SCI for Web Assembly Report*, 2026, [greensoftware.foundation](https://greensoftware.foundation/policy/research/sci-web-assembly-report/)
2. W3C, *Web Sustainability Guidelines*, [w3.org](https://www.w3.org/TR/web-sustainability-guidelines/)
3. Science Based Targets initiative, *The Net-Zero Standard*, [sciencebasedtargets.org](https://sciencebasedtargets.org/net-zero)
4. Green Software Foundation, *SCI for Web Guidelines* (non-normative companion; in preparation)

## 3. Decoupling map

Of the 32 parts of the current draft, 5 move whole into the specification, 5 move whole into the guidelines, 21 are split (requirement kept, method moved) and 1 is removed. The Guideline page column is a proposed page list for the SCI for Web Guidelines, modelled on the SWI Guidance site.

| Current draft | Destination | Proposed clause | Guideline page | What moves to the guidelines |
|---|---|---|---|---|
| §1 Introduction | Split | Introduction | Getting started | Tier narrative, comparison aims |
| §2 Scope (2.1–2.3) | Split | 1 | Scope and application types | Application-type and architecture-pattern lists |
| §3 Normative references | Specification | 2 | — | — |
| §4 Terms (T.1–T.10) | Split | 3 | Terminology | T.6 operational serving, T.7, T.8 tier, T.9 reference device |
| §5 Architecture components | Split | 3.2–3.5 | Formula walkthrough | Component inventories (servers, CDN, scripts, devices) |
| §6.1–6.3 Persona boundaries | Guidelines | — | Personas and responsibilities | All; personas assign responsibility, not separate scores |
| §6.3.1 First / third-party | Split | 5.4, 7.6 | Third-party attribution | Browser APIs and RUM techniques for attribution |
| §6.4 Consolidated boundary | Specification | 5.1–5.3 | — | — |
| §6.7 O_dev | Split | 5.3 | Development lifecycle emissions | Amortisation approaches |
| §7.1, §7.3 Functional unit principles | Split | 6.1–6.3 | Choosing a functional unit | Comparability discussion |
| §7.2, §7.4 FU table, discouraged units | Split | 6.1 | Choosing a functional unit | Example table, discouraged list |
| §7.5, §7.6 FU reporting, bot traffic | Split | 6.4, 6.5, 8 | Choosing a functional unit | Threshold examples |
| §8.1 General formula | Split | 7.1 | Formula walkthrough | Rationale for optional O_network |
| §8.2 O_server | Split | 7.2 | Server-side emissions | PUE and regional-weighting formulas |
| §8.3 O_network | Split | 5.5, 7.3 | Network emissions | SWDM rules, connection-type weighting, CDN example (duplicates removed) |
| §8.4 O_client | Split | 7.4 | Client-side emissions | Tier 1–3 measurement approaches |
| §8.5 Third-party methods A–C | Split | 7.6 | Third-party attribution | Methods A–C |
| §8.6–§8.7 M_server, M_client | Split | 7.5 | Embodied emissions; Reference values | Data sources, default device embodied table |
| §8.8 M_network | Split | 7.5 | Embodied emissions | Tier-by-tier implementation |
| §9 Implementation tiers | Guidelines | — | Implementation tiers and data quality | All |
| §10 Procedure | Specification | 4 | — | Tier-selection step dropped |
| §11 Implementation examples | Guidelines | — | Worked examples | All; fix §11.4 data-volume allocation of M_network |
| §12 Disclosure | Split | 8 | Disclosure template | §12.2 recommended disclosures |
| §13 Edge cases | Guidelines | — | Architecture patterns | SSG, SPA, PWA, serverless, API-first |
| §14 Measurement period | Split | 8 (item 9), 9 | Measurement periods | 7- and 30-day minimums |
| §15 Carbon intensity sources | Split | 7.1, 8 (item 7) | Data sources | Named providers, granularity by tier |
| §16 Reference devices | Split | 8 (item 8) | Reference devices | Device class table |
| §17 Core characteristics | Specification | 10 | — | — |
| §18–§19 Exclusions, baseline | Specification | 9, 11 | — | Duplicate dev-infrastructure list removed |
| §20 Bibliography | Split | Bibliography | Data sources | Tool and model references |
| Appendices A, A.1, B–D | Guidelines | — | Templates; Worked examples; Reference values; Tools directory | All |
| Document history | Removed | — | — | Kept in repository changelog |

## 4. Open decisions for the SSWG

Six decisions stand between this proposal and an ISO-ready draft; the proposed answer is given for each.

- [ ] **Baseline draft.** Diff this proposal against the closed-group working draft, since it was built from the May 2026 public snapshot.
- [ ] **Implementation tiers.** Proposed: guidelines only, as for SWI. Alternative: keep "tier" as an optional disclosure label in Clause 8.
- [ ] **Worked examples.** SCI for AI keeps them in the specification; SWI moved them to guidance. Proposed: follow SWI.
- [ ] **Numeric thresholds.** The 5 % M_network materiality and 1 % third-party cut-offs stay normative. Alternative: the specification requires a disclosed threshold and the guidelines recommend values.
- [ ] **Two-score reporting.** Confirm that the score without O_network is always reported and the score with it is optional (7.1).
- [ ] **W3C liaison.** Share the proposal with the Sustainable Web Interest Group under the MoU before the SSWG vote.

