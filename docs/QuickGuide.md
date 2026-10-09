---
sidebar_position: 2
title: Worked Examples
---

<!--
Grounded in: proposed spec Clause 4 (Procedure); Clause 5 (Software boundary); Clause 6 (Functional unit); Clause 7 (Methodology); Clause 8 (Reporting).
Migrated from: original draft §11.1 (E-commerce example); §11.2 (Content/media example); §11.3 (SaaS example); §11.4 (Reporting).
Corrections applied: C1 (M_network no longer allocated by data volume); C2 (arithmetic re-verified, figures labelled illustrative, tier line marked as an optional label).
-->

**In short:** this page walks three hypothetical web applications through
the five steps of the specification (Bound, Scale, Define, Quantify,
Report). The first example is worked in full, down to a sample
disclosure; the other two show how the same method scales to different
kinds of application.

**Every figure on this page is an illustrative placeholder, not a real
measurement.** The examples show the mechanics of the calculation. They
are not benchmarks, and the products named in them are examples of the
kind of tool or service a team might use, not recommendations. *(Named
products on this page last reviewed: 2026-10.)*

## Example 1: an e-commerce platform

### Step 1: Bound

The software boundary (Clause 5) covers:

- **Server-side infrastructure**: application servers, a database and CDN
  edge nodes, all measured as facility energy, so they belong in
  `O_server` (Clause 5.5).
- **Client-side execution**: the shop's front-end application running in
  shoppers' browsers.
- **Third-party services**: a payment processor called from the server,
  and an analytics script running in the browser. Clause 5.4 places each
  in the component where it executes.
- **Hardware**: server, network and end-user device hardware for the
  embodied components.

`O_network` is **not reported**. No measured or supplier-disclosed network
energy is available, and the team prefers not to rely on a
bytes-transferred model. The headline score therefore covers the five
always-reported components, and the omission is stated in the
limitations.

### Step 2: Scale

The functional unit is a **completed transaction**: a checkout that ends
with an order confirmation. It represents delivered value rather than a
technical operation (Clause 6.1), and it is counted directly from order
records.

### Step 3: Define

| Component | Measured or calculated | Approach in this example |
| --- | --- | --- |
| `O_server` | Measured | Cloud provider's carbon reporting for the servers; the payment API estimated from call counts ([Method B](./ThirdParty/index.md#method-b-api-call-estimation)) |
| `O_client` | Measured | Reference devices weighted by the analytics device mix; the analytics script estimated from execution time ([Method C](./ThirdParty/index.md#method-c-client-side-script-estimation)) |
| `M_server` | Calculated | Embodied-emissions database values for the instance types used |
| `M_network` | Calculated | Network hardware defaults allocated by **user-hours**, not data volume (see below) |
| `M_client` | Calculated | Default device values weighted by device mix |

### Step 4: Quantify

Monthly totals for the measurement period *(illustrative placeholders,
not real measurements)*:

| Component | kg CO2eq per month | Of which third-party | Share of total |
| --- | --- | --- | --- |
| `O_server` | 2,100 | 90 (payment API) | 60 % |
| `O_client` | 890 | 120 (analytics script) | 25 % |
| `M_server` | 320 | n/a | 9 % |
| `M_network` | 40 | n/a | 1 % |
| `M_client` | 150 | n/a | 4 % |
| **Total C** | **3,500** | 210 | 100 % (rounded shares sum to 99 %) |

```
C = 2,100 + 890 + 320 + 40 + 150 = 3,500 kg CO2eq
R = 500,000 completed transactions
SCI_Web = 3,500,000 g ÷ 500,000 = 7.00 g CO2eq per completed transaction
```

The shares are each component divided by 3,500 kg and rounded to whole
percentages (60.0, 25.4, 9.1, 1.1 and 4.3). The third-party sub-totals are
90 ÷ 3,500 = 2.6 % of the total and 120 ÷ 3,500 = 3.4 % of the total.
*(illustrative)*

**How `M_network` was allocated.** The team took default embodied values
for access and core network hardware and allocated a share to the shop by
the **user-hours** shoppers spent connected to it (time-share), multiplied
by the shop's share of each connection's capacity during those hours
(resource-share). Clause 7.5 prohibits data volume as the allocation basis
for `M_network`. The reason is physical: network hardware is built to
cover an area and serve a number of users and connections over its
lifetime, and that embodied carbon does not change when a page gets
smaller. Allocating by bytes would let a team "reduce" `M_network` on paper
by compressing images, with no real change in hardware. See
[Embodied Emissions: Network](./M/Network.md).

:::note Correction to the original draft
The original draft's version of this example (§11.4) said `M_network` was
calculated "proportional to data volume". That conflicts with the
specification's own rule (Clause 7.5) and with the draft's §8.8, so this
guideline uses a user-hour allocation instead.
:::

### Step 5: Report

A sample disclosure, organised by the Clause 8 reporting items *(all
values illustrative)*:

1. **Score**: 7.00 g CO2eq per completed transaction. `O_network` is not
   reported, so there is no second score.
2. **Specification version**: SCI for Web, proposed version.
3. **Boundary**: application servers (one cloud region), a managed
   relational database, a CDN, the client-side single-page application, a
   payment API and an analytics script. `O_network` is excluded from the
   score: no direct or supplier-disclosed network energy data is
   available, and the team chose not to use a bytes-transferred model. It
   will revisit this when its CDN partner publishes measured energy data.
   Development and build infrastructure are excluded under Clause 5.3.
4. **Functional unit**: completed transaction (checkout flow resulting in
   an order confirmation), counted from order records. No engagement
   threshold. Automated traffic is excluded from R, with the detection
   method and its estimated share of total traffic disclosed
   (Clause 6.5).
5. **Methods**: `O_server` measured via the cloud provider's carbon
   reporting, with the payment API estimated by Method B; `O_client`
   measured on 6 reference devices weighted by the analytics device mix,
   with the analytics script estimated by Method C; `M_network` calculated
   from network hardware defaults allocated by user-hours.
6. **First-party and third-party sub-totals**: `O_server` 2,010 / 90 kg;
   `O_client` 770 / 120 kg.
7. **Carbon intensity**: daily averages for the server region from a grid
   data provider; global average for client-side, with the basis stated.
8. **Devices**: type, model, operating system and browser version for each
   of the 6 reference devices.
9. **Measurement period and traffic**: 2026-01-01 to 2026-01-31 (31 days),
   about 16,100 transactions a day on average, with geographic and device
   distribution.
10. **`M_network` status**: populated.
11. **Limitations**: `O_network` not reported (see item 3); client-side
    analytics energy partly estimated; mobile measurements limited to
    2 models.

*Optional label:* implementation tier: Standard. The specification does
not require a tier to be reported; whether it should become an optional
disclosure label is [Open Question 1](./OpenQuestions.md).

The [Disclosure Template](./Disclosure/index.md) turns this list into a
machine-readable file.

## Example 2: a content and media website

**Bound**: application servers, a content management system and a CDN;
client-side execution; third-party analytics and advertising scripts;
server, network and device hardware. `O_network` reported or not as in
Example 1.

**Scale**: one **article read**, counted only when the reader stays at
least 30 seconds. That engagement threshold is this example's choice, not
a default: Clause 6.4 requires whatever threshold you use to be disclosed,
and the right value depends on your readers' behaviour (see
[Choosing a Functional Unit](./R/index.md#engagement-thresholds)).

**Quantify** *(illustrative placeholders, not real measurements)*:

```
C = 1,250 kg CO2eq per month
R = 2,000,000 articles read per month
SCI_Web = 1,250,000 g ÷ 2,000,000 = 0.625 ≈ 0.63 g CO2eq per article read
```

**Report**: as Example 1, with the advertising and analytics scripts shown
in the third-party sub-total of `O_client`.

## Example 3: a project-management SaaS application

**Bound**: application servers, a database and real-time messaging
infrastructure; client-side execution; third-party authentication and an
email notification API; server, network and device hardware.

**Scale**: one **active user session**, counted when a user is engaged for
at least 5 minutes. As in Example 2, the threshold is an illustration, not
a recommended value.

**Quantify** *(illustrative placeholders, not real measurements)*:

```
C = 4,600 kg CO2eq per month
R = 150,000 active user sessions per month
SCI_Web = 4,600,000 g ÷ 150,000 = 30.67 ≈ 30.7 g CO2eq per active user session
```

**Report**: as Example 1. A team with distinct user journeys (planning,
reporting, messaging) may define a functional unit for each; Clause 6.3
requires a separate score for each, never aggregated.

## Comparing the examples

The three scores (7.00 g, 0.63 g and 30.7 g) are not comparable with one
another: they measure different functional units. Scores become
comparable only between applications, or versions, using the same
functional unit, boundary and methods (Clause 9).

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/sci-for-web-guidelines/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+Worked+Examples).
