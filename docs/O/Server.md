---
sidebar_position: 6
title: Server-Side Emissions (O_server)
---

<!--
Grounded in: proposed spec Clause 7.2 (Server-side operational emissions); Clause 5.5 (Component boundaries); Clause 3.2 (server-side infrastructure).
Migrated from: original draft §8.2 (O_server: energy scope, PUE formula, multi-tenant allocation, regional energy weighting); §13.4 (Serverless and edge computing).
-->

**In short:** `O_server` is the carbon from the electricity used by every
server-side system that builds and delivers your application's
responses, including idle capacity you have reserved and the data
centre's own overheads such as cooling. It stops at the point where data
leaves the data centre for the network.

**Shape:** (compute energy × data-centre overhead factor) × grid carbon
intensity = server emissions.

**Worked:** 1,000 kWh of compute × a PUE of 1.2 = 1,200 kWh; 1,200 kWh ×
250 gCO2eq/kWh = 300 kg CO2eq for the month. *(illustrative placeholder,
not a real measurement)*

**Precise notation:**

```
O_server = E_server × I_server
E_server = E_compute × PUE
```

where `E_server` is energy in kWh per functional unit (or per period,
divided by R later) and `I_server` is location-based carbon intensity in
gCO2eq/kWh.

## What counts as server energy

The original draft listed the infrastructure that `E_server` covers:

- origin and application servers;
- database servers and caching infrastructure;
- serverless function execution environments;
- edge computing nodes (CDN edge servers, edge functions) whose energy is
  measured as facility energy;
- supporting infrastructure (load balancers, firewalls, monitoring).

Clause 7.2 requires the energy of **all hardware reserved or provisioned
for the application, including idle capacity**. A server sized for peak
traffic that sits mostly idle still counts in full; this is what makes
right-sizing show up in the score. Monitoring, observability, redundancy
and failover infrastructure are included where material, and Clause 5.2
requires any exclusion of them to be disclosed with its rationale.

Where server energy stops and network energy starts, including how to
treat CDN and edge energy, is set out once, on
[Network Emissions](./Network.md#cdn-and-edge-energy-where-it-belongs).

## Data-centre overhead: PUE

Power usage effectiveness (PUE) is the ratio of a facility's total energy
to the energy delivered to its IT equipment. Clause 7.2 requires facility
overhead to be included; multiplying compute energy by PUE is the usual
way to do it:

```
E_server = E_compute × PUE
```

Use the facility's or provider's published PUE for the period where
possible and disclose its source. If a provider's energy figure already
includes facility overhead, do not apply PUE a second time.

## Shared infrastructure

On multi-tenant infrastructure (shared hosting, public cloud), Clause 7.2
requires energy to be allocated by resource share and the method
disclosed. A common approach is to allocate by the resources reserved for
the application (vCPUs, memory, storage) as a share of the host's total
capacity:

```
E_app = E_host × (resources reserved for the application ÷ total host resources)
```

State which resource you allocated by, and why it fits the workload.

## Several grid regions

Where infrastructure runs in several regions, Clause 7.2 requires carbon
intensity to be applied to the energy consumed in each region. Sum energy
by region:

```
E_server = Σ E_region_i
```

and either calculate emissions region by region, or use an
energy-weighted average intensity, which gives the same result:

```
I_server = Σ (E_region_i × I_region_i) / Σ E_region_i
O_server = Σ (E_region_i × I_region_i)
```

**Worked:** 800 kWh in a region at 200 gCO2eq/kWh and 400 kWh in a region
at 350 gCO2eq/kWh → 160 kg + 140 kg = 300 kg CO2eq; the weighted average
intensity is 300,000 g ÷ 1,200 kWh = 250 gCO2eq/kWh. *(illustrative
placeholder, not a real measurement)*

## Serverless and edge functions

- **Serverless function execution** belongs in `O_server`.
- **Cold-start overhead** is included: it is real resource consumption.
- **Edge function execution** at CDN nodes belongs in `O_server`.
- Clause 7.2 requires the allocation method for shared infrastructure to
  be disclosed. Serverless platforms rarely expose energy directly, so
  explain how you estimated it (for example from billed execution time
  and memory) and which coefficients you used.

## Third-party server-side services

Server-side APIs you call, such as a payment processor, are counted in
`O_server` with a separate third-party sub-total (Clauses 5.4 and 7.6).
See [Third-Party Attribution](../ThirdParty/index.md) for estimation
methods.

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/sci-for-web-guidelines/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+Server-Side+Emissions).
