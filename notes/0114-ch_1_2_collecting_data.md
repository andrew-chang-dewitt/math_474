---
title: "Probability & Statistics: Collecting Data & probability models (Ch.'s 1.2 & 1.4)"
description: "Notes from lecture over intro to data collection methods, hypothesis testing, & probability models."
keywords:
  - "data collection"
  - "hypothesis testing"
  - "probability model"
  - "probability & statistics"
  - "lecture notes"
  - "mathematics"
  - "math 474"
  - "illinois tech"
meta:
  byline: Andrew Chang-DeWitt
  published: "2026-01-14T11:25-06:00"
---

## &sect; 1.2: data collection methods

three methods we'll discuss:

### retrospective study

- using historical data
- data can be outdated and/or no longer relevant
- ex: stock trading algorithms are often trained/based on historical data

### observational study

- collect current data w/out changing any inputs
- can only tell correlation, not causation
- ex: ice cream sales' relationship w/ drowning deaths

### designed experiment (fair test)

- delibrately controlled input, observe response
- can tell cause & effect
- ex: nlyon connector from [last lecture](./old-lec_02-probability/)

#### hypothesis testing

cause & effect is able to be determined using _**hypothesis testing**_&mdash;method to decide if data provides enough evidence to support a hypothesis.

some types of hypothesis testing:

- _**single-sample** hypothesis testing_
  - doesn't mean sample size (`N`) is 1
  - ex: for fixed thickness test whether mean pull-off force exceeds a
    minimum load
- _**two-sample** hypothesis testing_
  - ex: test whether mean pull-off force increases when thickness
    increases from 3/32 to 1/8 inch

## &sect; 1.4: probability & probability models

statistical inference incurs sampling errors, meaning decisions based
on it involves risk. we use _**probability models**_ to help us
understand these risks by quantifying them.

a small example:

:::{.question}

> An electrical engineer monitors N wafers with 1 defective. If we
> sample n wafers, the sample may or may not include the defective one.

:::

a probabilty model can quantify the risk that we don't get the defective wafer in our sample. if we used _random sampling w/out replacement_, then the model can be given as

$$
\begin{aligned}
\mathbb{P}(\text{defect}) = \frac{n}{N}
\end{aligned}
$$

thus, we can lower our risk of not detecting the defect by increasing $n$; however, this may increase the cost of detecting a defect.
