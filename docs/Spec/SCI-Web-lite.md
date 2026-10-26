---
version: 0.3.0-draft
---
# Software Carbon Intensity for Web (SCI for Web) Lightweight Specification  (DRAFT SNAPSHOT)

:::warning
This ***lightweight*** spec is still in draft state, and awaiting internal review from the Green Software Foundation SCI Web Assembly, and the Software Standards Working Group. Do not treat it like a finished article.
:::

## Introduction

Web applications cause emissions across infrastructure that no single party fully controls: servers and edge nodes, the networks between them, third-party services, and the end-user devices on which browsers render and run code. This document extends the Software Carbon Intensity (SCI) methodology specified in ISO/IEC 21031:2024 to that distributed architecture.

This document is intended to:

- provide a consistent method for calculating the carbon intensity of web applications;
- make client-side and third-party emissions visible alongside server-side emissions;
- prevent apparent improvements achieved by displacing energy from one component to another;
- incentivize genuine emission reductions in web application design, development, and operation.

As in ISO/IEC 21031:2024, an SCI for Web score is a rate, not a total. It can be reduced only by eliminating emissions; market-based measures do not reduce it (see [Exclusions](#exclusions)).

Explanation, worked examples, data sources, and implementation guidance are published separately in the non-normative SCI for Web Guidelines.

## Scope

This document specifies a method for calculating and reporting the carbon intensity of web applications. A software system is in scope when all three of the following apply:

1. content and functionality are delivered over HTTP or HTTPS;
2. rendering and execution occur primarily in a web browser or equivalent web rendering engine;
3. the interface is designed for direct human interaction.

This includes static, dynamic, server-rendered, single-page, progressive, and hybrid web applications, regardless of hosting model.

This document does not apply to:

- machine-to-machine APIs serving only programmatic clients, which should be assessed using ISO/IEC 21031:2024 directly;
- native mobile and desktop applications, including those that embed a web view;
- browser extensions, plug-ins, and assistive technologies.

## Normative references

The following documents are referred to in the text in such a way that some or all of their content constitutes requirements of this document. For dated references, only the edition cited applies. For undated references, the latest edition of the referenced document (including any amendments) applies.

- ISO/IEC 21031:2024, Information technology — Software Carbon Intensity (SCI) specification

## Terms and definitions

For the purposes of this document, the terms and definitions given in ISO/IEC 21031:2024 and the following apply.

ISO and IEC maintain terminological databases for use in standardization at the following addresses:

- ISO Online browsing platform: available at https://www.iso.org/obp
- IEC Electropedia: available at http://www.electropedia.org/

T.1
**web application**
software system that delivers functional value to human users primarily through a browser-based interface accessed over HTTP or HTTPS

T.2
**server-side infrastructure**
origin, application, database, storage, caching, edge, serverless, and supporting systems that generate and deliver web application responses, up to data-centre facility egress

T.3
**network transfer**
transmission of data between data-centre facility egress and the network interface of the end-user device

T.4
**client-side execution**
computation on an end-user device to render and run a web application, including layout, painting, script execution, asset decoding, and service-worker activity

T.5
**end-user device**
desktop computer, laptop computer, tablet, or smartphone on which a browser renders a web application

T.6
**third-party service**
service integrated into a web application that is not under the operational control of the web application provider

T.7
**energy displacement**
shifting of computation from a measured component to an unmeasured component without reducing total system energy

The following abbreviations are used throughout this specification, in addition to those defined in ISO/IEC 21031:2024:

- `O_server` – Operational emissions of server-side infrastructure
- `O_network` – Operational emissions of network transfer (optional; see [Network operational emissions](#network-operational-emissions-o_network))
- `O_client` – Operational emissions of client-side execution
- `M_server` – Embodied emissions of server-side hardware
- `M_network` – Embodied emissions of network hardware
- `M_client` – Embodied emissions of end-user devices
- PUE – Power usage effectiveness

## Procedure

An SCI for Web score shall be calculated and reported in five steps:

1. **Bound**: Define the [software boundary](#software-boundary).
2. **Scale**: Select the [functional unit](#functional-unit) or units.
3. **Define**: For each component, select measurement or calculation, as specified for quantification methods in ISO/IEC 21031:2024.
4. **Quantify**: Calculate each component per functional unit and sum them (see [Methodology](#methodology)).
5. **Report**: Disclose the score and methodology (see [Reporting](#reporting)).

## Software boundary

### Mandatory components

The calculation shall include the operational emissions of server-side infrastructure and client-side execution, and the embodied emissions of server-side hardware, network hardware, and end-user devices.

### Optional components

Operational emissions of network transfer may be included, as specified in [Network operational emissions](#network-operational-emissions-o_network).

Monitoring, observability, redundancy, and failover infrastructure shall be included where material. Any exclusion and its rationale shall be disclosed.

### Exclusions from the boundary

The following shall be excluded from the SCI for Web score:

- development and build infrastructure, including developer workstations, CI/CD pipelines, build processes, automated testing, and staging environments;
- processing that occurs after delivery and is not triggered by the user's interaction with the web application;
- software installed on the end-user device by the user, including browser extensions.

Development and build infrastructure may be assessed separately using ISO/IEC 21031:2024. Such a result shall be reported separately and shall not be added to the SCI for Web score.

### Third-party services

A third-party service integrated by the web application provider is within the boundary. Its emissions shall be attributed to the component in which it executes: `O_server`, `O_network`, or `O_client`.

### Component boundaries

The boundary between server-side infrastructure and network transfer is data-centre facility egress.

Edge and CDN energy measured as facility energy shall be attributed to `O_server`. Energy allocated on a transmission basis shall be attributed to `O_network`. Where a supplier provides a single bundled figure, the allocation between components shall be disclosed.

Energy shall not be counted in more than one component.

## Functional unit

The functional unit (`R`) shall represent delivered functionality, such as a completed transaction, a content item consumed, or a task completed, rather than a technical operation. Where a technical operation such as a page view, request, or volume of data is used, the justification shall be disclosed.

`R` shall be the same across all components within the software boundary and shall be objectively measurable. The definition of `R` should remain stable between reporting periods.

Multiple functional units may be defined for distinct user journeys. Each shall have its own SCI for Web score. Scores for different functional units shall not be aggregated.

Any engagement threshold that qualifies a unit of `R`, such as a minimum session duration, shall be disclosed.

The treatment of automated (non-human) traffic shall be disclosed: whether it is included in `R`, excluded, or reported under a separate functional unit, together with the detection method and the estimated proportion of total traffic. Automated traffic may be excluded only where a detection method is applied and disclosed.

## Methodology

### General

The SCI for Web score is calculated as:

`SCI = (O_server + O_client + M_server + M_network + M_client) per R`

This score shall always be reported. Where `O_network` is quantified, a second score that adds `O_network` to the numerator may be reported alongside it, clearly labelled:

`SCI (with O_network) = (O_server + O_network + O_client + M_server + M_network + M_client) per R`

Each operational component shall be calculated as energy multiplied by location-based carbon intensity (`O = E * I`), as specified in ISO/IEC 21031:2024.

Each embodied component shall be calculated as total embodied emissions multiplied by time-share and resource-share (`M = TE * TS * RS`), as specified in ISO/IEC 21031:2024.

[Market-based measures](#exclusions) shall not be applied to any component.

### Server-side operational emissions (O_server)

Energy shall include all hardware reserved or provisioned for the web application, including idle capacity, and data-centre facility overhead.

Energy on shared infrastructure shall be allocated by resource share, and the allocation method shall be disclosed.

Where infrastructure spans several grid regions, carbon intensity shall be applied to the energy consumed in each region.

### Network operational emissions (O_network)

`O_network` is optional. Where it is reported, the most direct available method shall be used, in this order of preference:

1. measured energy for the traffic attributable to the web application;
2. measured or supplier-disclosed energy for some network segments, with the remainder modelled;
3. a model based on data transferred, used only where neither of the above is available.

The method used, and the reason a more direct method was not used, shall be disclosed.

Reductions in `O_network` estimated solely from data transferred should not be presented as evidence of emission reductions.

### Client-side operational emissions (O_client)

Energy shall be quantified on, or for, end-user devices representative of the web application's users. The basis for the device distribution shall be disclosed.

Carbon intensity shall reflect the geographic distribution of users where it is known. Otherwise, the assumed value and its basis shall be disclosed.

Telemetry collected from real users shall be privacy-preserving.

### Embodied emissions

`M_server` shall be calculated as specified in ISO/IEC 21031:2024.

`M_client` shall be calculated for each device type in the device distribution. Time-share is the device time attributable to the functional unit divided by the device's expected lifespan. Resource-share is the share of device resources used during that time.

`M_network` shall be included. Data volume transferred shall not be used as its allocation basis. The allocation basis used shall be consistent with time-share and resource-share and shall be disclosed.

`M_network` may be declared unpopulated only where a documented materiality assessment shows it is below 5 % of total embodied emissions (`M_server + M_network + M_client`). Such a declaration shall be disclosed with its assessment and reviewed at least annually.

### First-party and third-party attribution

Each reported operational component shall be disclosed with separate first-party and third-party sub-totals. Where they cannot be separated, the component shall be reported as undifferentiated, with that limitation disclosed.

A third-party service estimated to contribute less than 1 % of total energy may be excluded but shall be listed in the disclosure.

### Functional unit conversion

Where a component is quantified against a different functional unit, it shall be converted as specified in ISO/IEC 21031:2024, and the conversion factors shall be disclosed.

## Reporting

An SCI for Web report shall disclose:

1. the SCI for Web score in gCO2eq per `R`, and the score including `O_network` where reported;
2. the version of this document applied;
3. the software boundary: included, optional, and excluded components, with the rationale for each exclusion;
4. the functional unit: its definition, rationale, measurement source, any engagement threshold, and the treatment of automated traffic;
5. for each component, whether it was measured or calculated, and the data sources, models, coefficients, and allocation methods used;
6. the first-party and third-party sub-totals for each operational component;
7. the carbon intensity sources and their spatial and temporal granularity;
8. the end-user devices used for client-side quantification, by type, model, operating system, and browser version;
9. the measurement period and traffic characterization, including volumes and geographic and device distribution;
10. the population status of `M_network`, with the materiality assessment where unpopulated;
11. limitations, data gaps, exclusions, and uncertainty.

Disclosures should be provided in a machine-readable format in addition to a human-readable one.

## Comparing an SCI for Web score to a baseline

When an action is evaluated, the baseline shall be calculated with the same software boundary, functional unit, component set (including whether `O_network` is included), data sources, and methods as the comparison. Only the action being evaluated shall differ.

Where traffic volumes or patterns differ between the baseline and comparison periods, the normalization applied shall be disclosed.

## Core characteristics

The core characteristics of ISO/IEC 21031:2024 apply. In addition, as this specification develops, the following shall remain true:

- **SCI for Web is sensitive to actions in every component.** An action that reduces emissions in any component, including client-side and third-party components, reduces the SCI for Web score.
- **SCI for Web resists energy displacement.** Because the boundary spans servers, networks, third-party services, and end-user devices, shifting energy between components does not reduce the score.
- **SCI for Web is easy to implement.** The score can be calculated without cost, using modelled data where measured data is unavailable, provided the method is disclosed.

## Exclusions

The exclusion of market-based measures specified in ISO/IEC 21031:2024 applies to every component of an SCI for Web score.

In addition, claims of renewable or "green" hosting based solely on energy attribute purchases shall not reduce an SCI for Web score.

## Bibliography

The following documents are useful references for implementers and users of this document:

[1] *SCI for Web Assembly Report*, Green Software Foundation, 2026, https://greensoftware.foundation/policy/research/sci-web-assembly-report/

[2] *Web Sustainability Guidelines (WSG)*, W3C, https://www.w3.org/TR/web-sustainability-guidelines/

[3] *The Net-Zero STANDARD*, Science Based Targets initiative (SBTi), https://sciencebasedtargets.org/net-zero

[4] *SCI for Web Guidelines* (non-normative companion), Green Software Foundation, in preparation
