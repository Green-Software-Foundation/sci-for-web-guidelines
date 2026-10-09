---
sidebar_position: 7
title: Network Emissions (O_network)
---

<!--
Grounded in: proposed spec Clause 7.3 (Network operational emissions, optional); Clause 5.5 (Component boundaries); Clause 3.3 (network transfer); Clause 10 (Core characteristics: energy displacement); Clause 8 items 5 and 11.
Migrated from: original draft §8.3 (O_network: status, rationale, formula, method hierarchy, data-transfer measurement scope, gaming guard, CDN and edge double-counting rule, bundled-allocation example, connection-type weighting, SWDM double-counting rule). The draft states the CDN rule, connection-type weighting and SWDM rule twice each; each appears once here.
Corrections applied: C3 (bundled CDN energy when O_network is not reported); C4 (unsupported energy-per-bit claim); C10 (no tier implies O_network is expected).
-->

**In short:** `O_network` is the carbon from the electricity used to carry
your application's data from the data centre to the user's device. It is
**optional**: the headline score always leaves it out, and you may report
a second, labelled score that includes it when you can quantify it
defensibly. This page explains how to quantify it, where the line with
server energy falls, and how to avoid counting the same energy twice.

**Shape:** network energy attributable to the application × grid carbon
intensity = network emissions.

**Worked:** 80 kWh × 250 gCO2eq/kWh = 20 kg CO2eq for the month.
*(illustrative placeholder, not a real measurement)*

**Precise notation:**

```
O_network = E_network × I_network
```

from the data centre's facility exit to the network interface of the
user's device (Clause 3.3).

## Why it is optional

Measuring network electricity defensibly is hard, and the most common
estimates rely on bytes transferred, an acknowledged weak proxy. The
[Formula Walkthrough](../FormulaWalkthrough.md#why-o_network-is-optional)
gives the full rationale. Optional means optional for every team,
whatever its data maturity: no implementation tier implies that
`O_network` is expected. Whether two-score reporting should stay is
[Open Question 3](../OpenQuestions.md).

## Choosing a method

Where `O_network` is reported, Clause 7.3 requires the most direct
available method, in this order:

1. **Direct measurement**: measured energy for the traffic attributable
   to your application, for example from an ISP or CDN partner that
   supplies measured energy data.
2. **Hybrid model**: measured or supplier-disclosed energy for some
   network segments (such as a last-mile operator's energy reports), with
   the remainder modelled. We recommend disclosing which segments are
   measured and which modelled, and the rationale for each modelling
   coefficient.
3. **Data-transfer model**: a model based on data transferred, such as
   the Sustainable Web Design Model (SWDM) or CO2.js coefficients, used
   only where neither of the above is available.

Clause 7.3 requires you to disclose the method used and why a more direct
one was not used. When you fall back to a data-transfer model, we also
recommend disclosing the model and coefficients, that bytes transferred is
an acknowledged weak proxy for network energy, and that the result
carries high methodological uncertainty.

*(Named models and tools on this page last reviewed: 2026-10. See the
[Tools Directory](../DataSources/Tools.md).)*

## Measuring data transfer

When a data-transfer model is used, a common approach is to count **all
bytes exchanged between server infrastructure and end-user devices**:

- HTML, CSS, JavaScript, images, video and fonts;
- API responses and request bodies;
- WebSocket and other real-time protocol traffic;
- HTTP headers and protocol overhead.

Measure at the **application layer, after compression**: the bytes that
actually crossed the network, not the uncompressed size of the assets.

## Do not present byte savings as network savings

Clause 7.3 recommends that reductions in `O_network` estimated solely
from data transferred are not presented as evidence of emission
reductions. Fewer bytes can mean no less network energy: edge caching,
for example, shifts energy rather than eliminating it. If you shrink your
pages, report the change, but lead with the components where the saving
is real, such as `O_client` and `O_server`.

## CDN and edge energy: where it belongs

Clause 5.5 sets the line between `O_server` and `O_network` at
**data-centre facility egress**, and attributes CDN and edge energy by how
it was measured, not by what kind of service it is:

1. **Measured as facility energy** (an edge data centre with a PUE,
   metered infrastructure) → `O_server`.
2. **Allocated on a transmission basis** (traffic-based, SWDM-style
   allocation) → `O_network`.
3. **Bundled by the supplier** without a clear split → Clause 5.5
   requires you to disclose how you divided it between components.

For a bundled figure, we recommend recording which components received a
portion, the rationale for the split, and the assumptions about
measurement regime that justify it. Clause 5.5 also says energy is never
counted in more than one component.

### Example: splitting a bundled CDN figure

A CDN provider publishes a single figure: "CDN total energy for your
traffic = 42 kWh/month". The application uses the CDN for static assets
and edge functions. Using the CDN's analytics, the team finds that 70 % of
requests are cache hits served without origin compute. It allocates 70 %
of the 42 kWh (29.4 kWh) to `O_network` as transmission, and 30 %
(12.6 kWh) to `O_server` as edge compute. It discloses the allocation
rule, the source of the ratio, and that it will switch to
component-specific figures if the CDN publishes them. *(illustrative
placeholder, not a real measurement)* A template for this disclosure is
on [Implementation Templates](../Disclosure/Templates.md).

### The split is not score-neutral when `O_network` is omitted

That 70/30 split moves 29.4 kWh into `O_network`. If the team then
reports only the headline score, which leaves `O_network` out, those
29.4 kWh vanish from the reported score even though the energy was used.
That is energy displacement: shifting energy from a measured component to
an unmeasured one. Clause 10 states that energy displacement does not
reduce the score.

So when `O_network` is not reported, any bundled CDN energy allocated on a
transmission basis is **excluded from the score**, and should be named,
with its quantity, in the limitations disclosure (Clause 8 item 11), next
to the allocation disclosure Clause 5.5 requires. Do not present the split
as score-neutral. How the specification should treat this case is
[Open Question 4](../OpenQuestions.md).

## Weighting by connection type

Mobile radio access networks generally use substantially more energy per
bit than fixed connections such as fibre, with the difference varying by
network and generation. <!-- TODO(citation): add a published source for
mobile versus fixed-line energy per bit, or keep this qualitative wording. -->
Default SWDM coefficients are blended averages across connection types.

Where you use a data-transfer model and know your users' connection mix
(for example from analytics), we recommend weighting the calculation by
connection type. Weighting is good practice, not a requirement, and we
recommend stating whether you applied it.

## Using SWDM without double counting

SWDM divides a single system energy total across data centres, networks
and devices. If you take its network segment for `O_network` and also
measure `O_server` and `O_client` directly, using SWDM's data-centre and
device segments as well would count the same energy twice.

When using SWDM for `O_network`:

- use **only** its network segment;
- discard its data-centre and device segments, replacing them with your
  direct measurement of `O_server` and `O_client`;
- disclose the SWDM version and coefficients, whether connection-type
  weighting was applied, how edge facility energy was handled, and known
  limitations. Clause 8 item 5 requires the models and coefficients used
  to be disclosed; the rest is recommended practice.

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/sci-for-web-guidelines/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+Network+Emissions).
