---
sidebar_position: 12
title: "Embodied Emissions: Network (M_network)"
---

<!--
Grounded in: proposed spec Clause 7.5 (M_network: mandatory, no data-volume allocation basis, 5 % materiality assessment, disclosure and at-least-annual review); Clause 8 item 10.
Migrated from: original draft §8.8 (M_network: scope, rationale for no bytes basis, valid allocation proxies, tier-based implementation, materiality threshold, disclosure); Appendix A.1.1 (M_network materiality analysis template).
Corrections applied: C7 (unpopulated only with a materiality assessment below 5 %, at every tier); C8 (network-intensive presumption described as good practice, listed as an open question).
-->

**In short:** `M_network` is your share of the carbon released building
the internet's hardware: routers, switches, cell towers, undersea cables,
exchange points and edge points of presence. It is always part of the
score. You may not divide it up by how many bytes you send, and you may
leave it unpopulated only if you have shown it is immaterial.

**Shape:** network hardware's embodied emissions × share of its life your
users spent connected × share of its capacity they used = your share.

**Worked:** suppose the access and core network hardware serving your
users is allocated 0.0004 g CO2eq of embodied emissions per user-hour,
and users spent 100,000 hours in your application this month:
0.0004 × 100,000 = 40 g CO2eq. *(illustrative placeholder, not a real
measurement)*

**Precise notation:**

```
M_network = TE_network × TS × RS
```

with time-share and resource-share chosen to fit the pattern, and **not**
based on data volume (Clause 7.5).

## Why not bytes?

Clause 7.5 prohibits data volume as the allocation basis for
`M_network`. Network hardware embodied carbon does not meaningfully scale
with the amount of data one application sends. It scales with deployment
footprint, user count, connection sessions, coverage area and hardware
lifespan. Allocating by bytes would let a team cut `M_network` on paper by
shrinking files, with no change in the hardware that was built. That is
the same reasoning that makes bytes-based `O_network` estimates weak (see
[Network Emissions](../O/Network.md#do-not-present-byte-savings-as-network-savings)).

## Allocation bases that fit

Clause 7.5 requires a basis consistent with time-share and resource-share,
disclosed. Practical proxies include:

- **active user-sessions**;
- **user-hours** (as in the [worked example](../QuickGuide.md#step-4-quantify));
- **concurrent-connection-hours**;
- **a vendor-supplied allocation**, where a network operator publishes
  its own method.

## Approaches by data maturity

The original draft linked approaches to implementation tiers. Every
approach below sits under the same Clause 7.5 rules; the tiers only
describe how good the data is (see
[Implementation Tiers and Data Quality](../DataQuality/index.md)):

- **Entry**: apply industry-default embodied factors for network hardware
  (for example Boavizta network hardware defaults) with a disclosed
  non-bytes allocation basis. If you cannot do that yet, you may declare
  `M_network` unpopulated **only** after a documented materiality
  assessment shows it is below 5 % of total embodied emissions
  (Clause 7.5; see below). A rationale on its own is not enough.
- **Standard**: apply industry-default factors with an operator-disclosed
  non-bytes allocation basis, such as active user-sessions or user-hours,
  and disclose the assumptions.
- **Advanced**: seek vendor-specific embodied data for your main network
  providers (ISP, CDN, mobile operator). Where a vendor publishes its own
  allocation method, you may adopt it with disclosure.

*(Named datasets last reviewed: 2026-10.)*

:::note Correction to the original draft
The original draft (§8.8) let Entry-tier implementers declare `M_network`
unpopulated with "documented rationale" alone. Clause 7.5 permits an
unpopulated declaration only with a materiality assessment below 5 %,
whatever the tier.
:::

## Declaring `M_network` unpopulated

Clause 7.5 allows `M_network` to be declared unpopulated only where a
documented materiality assessment shows it is **below 5 % of total
embodied emissions** (`M_server + M_network + M_client`). The declaration
is disclosed with its assessment and reviewed at least annually, and
Clause 8 item 10 requires its population status to be reported.

Beyond those requirements, the original draft set out further practices
that we recommend:

- **Treat network-intensive applications as material by default.** For
  streaming, real-time collaboration and large file transfer, assume
  `M_network` is material unless your analysis shows otherwise.
- **Disclose the reasoning**: why allocation was impractical or
  immaterial, which data sources you evaluated, and whether the
  application is network-intensive.
- **Commit to revisiting** the declaration as allocation methods improve,
  and name the events that would trigger an earlier review (a new data
  source, a change in the application's profile, a vendor disclosure).

The draft made the network-intensive presumption a requirement. The
proposed specification does not carry it, so it appears here as good
practice and as [Open Question 5](../OpenQuestions.md).

## Materiality assessment template

Adapted from the original draft's Appendix A.1.1. Use it when deciding
whether `M_network` can be declared unpopulated.

```
Application profile:
  - Application type:           [e.g. streaming / e-commerce / SaaS / informational]
  - Network-intensive?          [yes / no — justification]
  - Primary traffic type:       [cellular / fixed / mixed, with estimated breakdown]

Materiality estimate (using rough defaults):
  - M_server (estimated):       [X kg CO2eq / month]
  - M_client (estimated):       [Y kg CO2eq / month]
  - M_network (estimated, non-bytes allocation basis): [Z kg CO2eq / month]
  - Ratio:                      M_network / (M_server + M_network + M_client) = [%]

Data sources evaluated:
  - [e.g. network hardware dataset — used / rejected because …]
  - [e.g. vendor X sustainability report — available / unavailable]

Decision:
  [ ] Populate M_network using [allocation basis]
  [ ] Declare unpopulated: ratio below 5 % (Clause 7.5)
      Recommended: only if the application is also not network-intensive

Review:
  [ ] Review scheduled for [date, at most 12 months ahead] (Clause 7.5)
  [ ] Earlier-review triggers: [new data source / application profile change / vendor disclosure]
```

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/sci-for-web-guidelines/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+Embodied+Emissions%3A+Network).
