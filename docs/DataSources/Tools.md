---
sidebar_position: 18
title: Tools Directory
---

<!--
Grounded in: proposed spec Clause 8 item 5 (data sources, models, coefficients and allocation methods disclosed).
Migrated from: original draft Appendix D (Tool and data source directory, "to be developed"); starter entries drawn only from tools already named in the draft: §6.3.1 (Long Tasks API, Resource Timing API, browser DevTools, RUM tools); §8.3 (SWDM, CO2.js); §8.6 and §8.8 (Boavizta, Cloud Carbon Footprint); §11.4 (cloud provider carbon tool); §15 (Electricity Maps, WattTime, IEA, grid operators, UNFCCC); §20 bibliography.
-->

**In short:** a starting list of tools and data sources, sorted by the
part of the formula they help with. It is deliberately short: it
contains only tools the original draft already named. Contributions are
welcome.

*(Every entry on this page last reviewed: 2026-10. Listing is not an
endorsement, and the specification names no tools. Clause 8 item 5
requires whichever tools, models and data sources you use to be
disclosed.)*

## By component

| Component | Tool or data source | Type | What it helps with |
| --- | --- | --- | --- |
| `O_server` | Cloud provider carbon and energy reporting (for example the AWS Customer Carbon Footprint Tool) | Provider dashboard or API | Server energy or emissions for cloud workloads |
| `O_server` | Infrastructure monitoring and telemetry | Instrumentation | Measured energy for servers you operate |
| `O_server`, `M_server` | [Cloud Carbon Footprint](https://www.cloudcarbonfootprint.org/docs/methodology) | Open-source methodology and coefficients | Estimating cloud energy and embodied emissions from usage data |
| `O_client` | Browser developer tools (performance profiling) | Browser tooling | Profiling rendering and script work on reference devices |
| `O_client` (third-party) | [Long Tasks API](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceLongTaskTiming) | Browser API | JavaScript execution time by script origin |
| `O_client` (third-party) | [Resource Timing API](https://developer.mozilla.org/en-US/docs/Web/API/Performance_API/Resource_timing) | Browser API | Loading of third-party assets |
| `O_client` | Real-user monitoring (RUM) tools with script attribution | Telemetry | Field data from real users, sampled and anonymised |
| `O_network` (optional) | [Sustainable Web Design Model (SWDM) v4](https://sustainablewebdesign.org/calculating-digital-emissions/) | Data-transfer model | Last-resort method under Clause 7.3; see the [SWDM rules](../O/Network.md#using-swdm-without-double-counting) |
| `O_network` (optional) | [CO2.js](https://developers.thegreenwebfoundation.org/co2js/overview/) | JavaScript library | Implements data-transfer models, including SWDM |
| `M_server`, `M_client`, `M_network` | [Boavizta](https://www.boavizta.org/) | Open data and API | Embodied emissions of servers, cloud instances, devices and network hardware |
| All operational | [Electricity Maps](https://www.electricitymaps.com/) | Data provider | Location-based grid carbon intensity |
| All operational | [WattTime](https://www.watttime.org/) | Data provider | Grid emissions data |
| All operational | IEA, UNFCCC and national grid operators | Published factors | Annual or national carbon intensity factors |

More detail on carbon intensity sources is on
[Carbon Intensity and Data Sources](./index.md).

## Adding a tool

Open an issue describing the tool, which component it serves, whether it
measures or models, its licence, and how its method is documented. The
[Review Process](../ReviewProcess/Data.md) explains what reviewers look
for. Each new entry carries the date it was last reviewed.

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/sci-for-web-guidelines/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+Tools+Directory).
