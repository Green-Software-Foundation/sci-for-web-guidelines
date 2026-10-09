---
sidebar_position: 1
title: Formula Walkthrough and Visual Reference
---

<!--
Grounded in: proposed spec Clauses 3.2–3.5 (component terms), 3.8 (Symbols and abbreviated terms), 7.1 (General).
Migrated from: original draft §5.1–§5.5 (component inventories); §8.1 (General formula, decomposition and "why O_network is optional" rationale).
-->

**In short:** an SCI for Web score adds up the carbon from six places
(servers, end-user devices and network hardware, each counted for the
electricity they use and for the emissions of building them) and divides
the total by how much useful work the application did. One of those six,
the electricity used by the network, is optional. This page walks through
each piece in turn.

Every formula below follows the same four steps: a plain-language
sentence, a one-line **Shape**, a small **Worked** number so the arithmetic
is visible, and the **Precise notation**. The worked numbers form one
running, hypothetical example: an online shop handling 100,000 completed
purchases in a month. **They are illustrative placeholders, not real
measurements.** Do not treat any number on this page as data.

## The decomposition, as a tree

![Decomposition tree: the SCI for Web score splits into operational emissions O and embodied emissions M, divided by R. O splits into O_server, O_client and the optional O_network, drawn dashed. M splits into M_server, M_network and M_client.](/img/sci-web-formula-tree.svg)

Solid boxes are always part of the reported score. The dashed box,
`O_network`, appears only in a second, clearly labelled score when an
implementer quantifies it (Clause 7.1). Third-party services do not get a
box of their own: their emissions sit inside whichever operational
component they execute in (see [Third-Party Attribution](./ThirdParty/index.md)).

## Master formula: `SCI_Web = (O + M) / R`

For every unit of useful work the application did, how much carbon did it
cost?

**Shape:** (running emissions + hardware-making emissions) ÷ units of work
= carbon per unit of work.

**Worked:** 550 kg CO2eq in a month ÷ 100,000 purchases = 5.5 g CO2eq per
purchase. *(illustrative placeholder, not a real measurement)*

**Precise notation:**

```
SCI_Web = (O_server + O_client + M_server + M_network + M_client) / R
```

where `R` is the [functional unit](./R/index.md). This is the score that is
always reported. Where `O_network` is quantified, the second score is:

```
SCI_Web (with O_network) = (O_server + O_network + O_client + M_server + M_network + M_client) / R
```

## Operational emissions: `O = O_server + O_client [+ O_network]`

Operational emissions come from electricity used while the application
runs. Each part is energy multiplied by the location-based carbon intensity
of the grid that supplied it (Clause 7.1).

**Shape:** server electricity emissions + device electricity emissions
(+ network electricity emissions, if reported) = operational emissions.

**Worked:** 300 kg (servers) + 150 kg (devices) = 450 kg CO2eq.
*(illustrative placeholder, not a real measurement)*

**Precise notation:**

```
O = O_server + O_client            (always)
O = O_server + O_client + O_network (second score, where O_network is quantified)
each component: O_x = E_x × I_x
```

`E` is energy in kWh and `I` is location-based carbon intensity in
gCO2eq/kWh. Market-based measures are never applied (Clauses 7.1 and 11).
See [Operational Emissions](./O/index.md).

### What sits inside each operational component

The original draft listed what each component covers. These inventories
are a practical checklist when drawing your boundary:

- **Server-side infrastructure (`O_server`)**: origin and application
  servers; database and storage systems (relational and NoSQL stores,
  object storage, caching layers); edge and CDN infrastructure measured as
  facility energy; supporting services (load balancers, reverse proxies,
  API gateways, service meshes, monitoring); serverless and edge function
  runtimes. See [Server-Side Emissions](./O/Server.md).
- **Client-side execution (`O_client`)**: browser rendering (layout, paint,
  composite); JavaScript parsing, compilation and execution; asset
  processing (image decoding, video playback, font rendering, CSS
  processing); interaction processing (event handling, animation,
  real-time updates); service workers. See
  [Client-Side Emissions](./O/Client.md).
- **Network transfer (`O_network`, optional)**: core internet backbone and
  transit networks; CDN and edge networks where energy is allocated on a
  transmission basis; last-mile access (ISP networks, Wi-Fi, mobile
  networks). See [Network Emissions](./O/Network.md).
- **Third-party services** (inside the components above): analytics and
  monitoring; advertising networks; authentication and identity; payment
  processing; external APIs such as data, AI or messaging services; and
  client-side scripts such as tag managers, chat widgets and social media
  embeds.

### Server: `O_server = E_server × I_server`

**Shape:** server energy (including the data centre's overhead) × grid
carbon intensity = server emissions.

**Worked:** 1,000 kWh of compute × a PUE of 1.2 = 1,200 kWh; 1,200 kWh ×
250 gCO2eq/kWh = 300 kg CO2eq. *(illustrative placeholder, not a real
measurement)*

**Precise notation:** `O_server = E_server × I_server`, with
`E_server = E_compute × PUE`. See [Server-Side Emissions](./O/Server.md)
for multi-tenant allocation and multi-region weighting.

### Client: `O_client = E_client × I_client`

**Shape:** device energy spent running the application × carbon intensity
where users are = device emissions.

**Worked:** 400 kWh across all users' devices × 375 gCO2eq/kWh = 150 kg
CO2eq. *(illustrative placeholder, not a real measurement)*

**Precise notation:** `O_client = E_client × I_client`. See
[Client-Side Emissions](./O/Client.md).

### Network (optional): `O_network = E_network × I_network`

**Shape:** network energy attributable to the application × carbon
intensity = network emissions.

**Worked:** 80 kWh × 250 gCO2eq/kWh = 20 kg CO2eq, giving a second score of
570 kg ÷ 100,000 = 5.7 g per purchase. *(illustrative placeholder, not a
real measurement)*

**Precise notation:** `O_network = E_network × I_network`, quantified using
the method hierarchy in Clause 7.3. See [Network Emissions](./O/Network.md).

### Why `O_network` is optional

Network electricity is hard to measure defensibly. The most widely used
estimates allocate network energy by bytes transferred, which is an
acknowledged weak proxy: compressing or shrinking assets lowers the
estimate without necessarily lowering real network energy. Making a
known-weak method mandatory would risk discrediting the whole score.

The SSWG therefore separated the components that can be quantified
reliably (`O_server`, `O_client`, `M_server`, `M_network`, `M_client`) from
the hardest one. The headline score always excludes `O_network`, and a
second score may include it where the method supports it. Embodied network
emissions, `M_network`, stay in the headline score because network
hardware exists, and was built, regardless of any one application's
traffic. Whether two-score reporting is the right settlement is still
listed as [Open Question 3](./OpenQuestions.md).

## Embodied emissions: `M = M_server + M_network + M_client`

Embodied emissions are your share of the carbon released making the
hardware you use: servers, network equipment and users' devices.

**Shape:** server hardware share + network hardware share + device
hardware share = embodied emissions.

**Worked:** 40 kg + 10 kg + 50 kg = 100 kg CO2eq. *(illustrative
placeholder, not a real measurement)*

**Precise notation:** `M = M_server + M_network + M_client`. See
[Embodied Emissions](./M/index.md).

## Each embodied share: `M = TE × TS × RS`

You are charged only for the slice of the hardware's life you used and the
slice of its capacity you used.

**Shape:** total emissions to build the hardware × (share of its lifetime
used) × (share of its resources used) = your share.

**Worked:** a smartphone took 70 kg CO2eq to make and is expected to last
3 years (26,280 hours). A 10-minute shopping session uses 1/6 hour of
that life, a time-share of about 0.0000063, and about half the phone's
resources while it runs. 70,000 g × 0.0000063 × 0.5 ≈ 0.22 g CO2eq for
that session. *(illustrative placeholder, not a real measurement)*

**Precise notation:**

```
M = TE × TS × RS
TS = TiR / EL      (time reserved ÷ expected lifespan)
RS = RR / ToR      (resources reserved ÷ total resources)
```

as specified in ISO/IEC 21031:2024. For network hardware, Clause 7.5 rules
out data volume as the allocation basis; see
[Embodied Emissions: Network](./M/Network.md).

## The parallel to the parent SCI

The parent SCI writes the score as `((E × I) + M) per R`. SCI for Web keeps
that exact shape and splits it by location:

| Parent SCI (ISO/IEC 21031:2024) | SCI for Web | Relationship |
| --- | --- | --- |
| `E × I` (operational) | `O_server + O_client` (+ optional `O_network`) | Same calculation, done separately for servers and end-user devices because their energy and grid intensity come from different sources. |
| `M` (embodied) | `M_server + M_network + M_client` | Same `TE × TS × RS` allocation, applied to three classes of hardware. |
| `R` (functional unit) | `R` | Same concept; Clause 6 adds that it should represent delivered functionality and be the same for every component. |
| Software boundary | Clause 5 boundary | SCI for Web fixes which components must be inside the boundary, so that work cannot be displaced to an unmeasured place. |

If you know the parent SCI, think of SCI for Web as *the same skeleton,
drawn around a system that spans data centres, networks and other
people's devices*.

For a single start-to-finish walkthrough following the five-step
procedure, see [Worked Examples](./QuickGuide.md).

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/sci-for-web-guidelines/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+Formula+Walkthrough+and+Visual+Reference).
