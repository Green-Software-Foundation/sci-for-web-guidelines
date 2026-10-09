---
sidebar_position: 21
title: Development Lifecycle Emissions
---

<!--
Grounded in: proposed spec Clause 5.3 (Exclusions: development and build infrastructure excluded; may be assessed separately using ISO/IEC 21031:2024; reported separately and never added to the score).
Migrated from: original draft §6.4 (rationale for the development exclusion); §6.7 (O_dev: scope, reasons to measure, boundary and amortisation approaches); §18.2 (Development and testing infrastructure exclusion).
Corrections applied: C12 (development emissions are a separate ISO/IEC 21031 assessment, not a component of SCI for Web).
-->

**In short:** the energy used building and testing your application
(developer machines, CI/CD pipelines, test suites, staging environments)
is **not** part of the SCI for Web score. You can measure it, and there
are good reasons to, but as a separate assessment using the parent SCI,
reported on its own and never added to the web score.

## What the specification says

Clause 5.3 excludes development and build infrastructure from the SCI
for Web score: developer workstations, CI/CD pipelines, build processes,
automated testing and staging environments. It allows that infrastructure
to be assessed separately using ISO/IEC 21031:2024, and requires any such
result to be reported separately and never added to the SCI for Web
score.

So development emissions are **not a component of SCI for Web**. There is
no seventh term in the formula.

:::note Correction to the original draft
The original draft (§6.7) introduced development emissions as `O_dev`,
"a valid supplementary component" of SCI for Web, while its §6.4 and
§18.2 excluded the same infrastructure. The proposed specification
resolves the conflict: development is a separate assessment under the
parent SCI.
:::

## Why it is excluded

Counting development infrastructure in the web score would create a
perverse incentive to cut testing, security scanning and quality
assurance to improve the number. Keeping it separate protects those
practices.

## Why measure it anyway

Development is the stage where teams have the most direct measurement
control. Pre-deployment energy can be traced to specific software
artifacts, and there are clear ways to reduce it: faster builds, more
efficient CI/CD and better-targeted test runs.

## A separate assessment, step by step

A development-lifecycle assessment is an ordinary ISO/IEC 21031:2024
assessment with its own boundary and functional unit. Good practice:

1. **Define the boundary**, for example from commit to the creation of a
   deployment artifact. Typical inclusions are CI/CD pipelines, build
   processes, automated testing, development environments and version
   control infrastructure.
2. **Declare the measurement method and tools** used.
3. **Choose how to amortise** development energy over the functional unit
   (see below).
4. **Report it separately**, alongside but never added to the SCI for Web
   score, and keep its method stable so the two can be read side by side.

## Amortisation approaches

To express development emissions per unit of delivered functionality,
spread them across the units they made possible. The original draft
suggested:

- **Even allocation**: spread development energy evenly across every
  instance of the functional unit during a deployment period.
- **Usage weighting**: where development was for a specific feature,
  weight by how much that feature is used.
- **Feature lifetime**: amortise over the feature's expected lifetime.
- **Proportional allocation** to deployed features, for example by
  time-to-market or feature complexity.

**Worked:** a release took 200 kWh of CI/CD and test energy at 300
gCO2eq/kWh = 60 kg CO2eq. Spread evenly over the 1,500,000 completed
transactions in the 3 months it was live, that is 0.04 g CO2eq per
transaction, reported **beside** the SCI for Web score, not inside it.
*(illustrative placeholder, not a real measurement)*

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/sci-for-web-guidelines/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+Development+Lifecycle+Emissions).
