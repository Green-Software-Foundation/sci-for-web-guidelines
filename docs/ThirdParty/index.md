---
sidebar_position: 9
title: Third-Party Attribution
---

<!--
Grounded in: proposed spec Clause 5.4 (Third-party services); Clause 5.5 (Component boundaries); Clause 7.6 (First-party and third-party attribution); Clause 3.6 (third-party service); Clause 8 item 6.
Migrated from: original draft §6.3.1 (first-party / third-party split, browser APIs and RUM techniques, undifferentiated reporting); §8.5 (Methods A–C, 1 % exclusion); §5.4 (third-party service inventory, summarised); Appendix A.1.3 (O_client attribution example).
Corrections applied: C6 (attribution follows the component in which a service executes; the "decision maker" rule moved to Personas as responsibility).
-->

**In short:** analytics, advertising, payments, chat widgets and other
services you did not build still cause emissions when your application
uses them. They are inside your boundary. They are counted in whichever
component they run in (servers, devices or network), and each component
shows how much is yours and how much is theirs.

## The attribution rule

Clause 5.4 puts a third-party service integrated by the application
provider **inside the boundary**, and attributes its emissions to the
component **in which it executes**:

| Where the service runs | Component | Examples |
| --- | --- | --- |
| On a server you call | `O_server` | Payment API, authentication service, AI or data API |
| In the user's browser | `O_client` | Analytics script, tag manager, chat widget, social embed, ad scripts |
| In the network, allocated on a transmission basis | `O_network` (if reported) | CDN transmission energy |

CDN energy follows the measurement-regime rule in Clause 5.5: energy
measured as facility energy belongs in `O_server`. See
[Network Emissions](../O/Network.md#cdn-and-edge-energy-where-it-belongs).

Who *chose* the service matters for responsibility, not for accounting.
That is covered on [Personas and Responsibilities](../Personas/index.md#who-introduced-a-dependency).

:::note Correction to the original draft
The original draft (§6.3.1) attributed energy "to the decision maker who
introduced the dependency", which placed a selected CDN in `O_network`.
These guidelines follow the specification's rule instead: attribution by
where the service executes, with facility-measured CDN energy in
`O_server`.
:::

There is no separate `O_thirdparty` component. Instead, Clause 7.6
requires every reported operational component to show **first-party and
third-party sub-totals**:

```
O_client  = O_client_first  + O_client_third
O_server  = O_server_first  + O_server_third
O_network = O_network_first + O_network_third   (where reported)
```

We recommend showing both sub-totals even when one is zero or cannot be
measured separately, so readers can see that the split was considered.

## When you cannot separate them

Where first-party and third-party energy cannot be separated, Clause 7.6
requires the component to be reported as **undifferentiated**, with that
limitation disclosed. For example: `O_client: 4.2 g, attribution:
undifferentiated`. *(illustrative)*

## Small services

Clause 7.6 allows a third-party service estimated at **less than 1 % of
total energy** to be excluded, provided it is listed in the disclosure.
A short list of excluded services, each with its rough estimate, is
enough. Whether the 1 % cut-off should stay a normative value is
[Open Question 2](../OpenQuestions.md).

## Measuring third-party code in the browser

Client-side third-party execution can be measured with standard browser
tooling:

- the **Long Tasks API**, for JavaScript execution time by script origin;
- the **Resource Timing API**, for third-party asset loading;
- **JavaScript profiling in browser developer tools**;
- **real-user monitoring (RUM) tools** that attribute work to scripts.

Where direct attribution is impractical, a common fallback is to estimate
from script bundle sizes, with the estimation method disclosed.

*(Named browser APIs and tool types last reviewed: 2026-10.)*

## Estimation methods

The original draft described three methods for estimating a third-party
service's energy within the right component. Use the most direct one
available and disclose which you used (Clause 8 item 5).

### Method A: vendor disclosure

Use energy and carbon intensity data the vendor publishes. Attribute it to
the component where the service executes, and disclose the vendor, the
data source and its date.

### Method B: API call estimation

For server-side APIs, estimate energy from the number of calls:

```
E_service = API_calls × E_per_call
```

where `E_per_call` is vendor-disclosed or an industry default value.
Attribute the result to the `O_server` third-party sub-total, and disclose
the method and coefficients.

**Worked:** 600,000 payment API calls × 0.0005 kWh per call = 300 kWh.
*(illustrative placeholder, not a real measurement)*

### Method C: client-side script estimation

For third-party scripts in the browser, estimate from script execution
time (for example from the Long Tasks API), data transferred and resource
consumption. Attribute the result to the `O_client` third-party sub-total,
and disclose the method and its limitations.

## Example: an `O_client` breakdown

Adapted from the original draft's Appendix A.1.3. *(All values are
illustrative placeholders, not real measurements. Named products last
reviewed: 2026-10.)*

```
Component:     O_client
Total:         4.2 g CO2eq per completed transaction
Breakdown:
  O_client_first:  3.1 g CO2eq  (74 % — application JavaScript, rendering, assets)
  O_client_third:  1.1 g CO2eq  (26 % — Google Analytics 0.4 g, Intercom 0.5 g,
                                  Stripe.js 0.2 g)

Measurement approach:
  - Long Tasks API for JavaScript execution time by origin (sampled RUM)
  - Resource Timing API for asset-load energy attribution
  - Script bundle size × device-mix-weighted energy coefficient as a fallback
    where attribution is impractical

Limitations disclosed:
  - Google Analytics: client-side execution partially estimated because the
    script does not expose fine-grained execution telemetry
```

Check: 3.1 + 1.1 = 4.2 g; 0.4 + 0.5 + 0.2 = 1.1 g; 3.1 ÷ 4.2 ≈ 74 %.

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/sci-for-web-guidelines/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+Third-Party+Attribution).
