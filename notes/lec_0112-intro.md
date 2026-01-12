---
title: "P&S: intro & Ch 1.1"
description: "Intruductory lecture notes; administrivia along w/ foundational terms/concepts (e.g. variability, ...)."
keywords:
  - "probability & statistics"
  - "lecture notes"
  - "mathematics"
  - "math 474"
  - "illinois tech"
meta:
  byline: Andrew Chang-DeWitt
  published: "2026-01-12T00:00-06:00"
---

an experiment, simulate 20 coin tosses:

$$
\begin{aligned}
result := HTTHHHHHTHTHHHTTHHTH
\end{aligned}
$$

class had only 7/30 w/ 4 like in a row; however, actual probability should be
~ 76.84% chance that there will be 4 like in a row.

## introduction

p&s are two disciplines:

both are a study of random experiments (e.g. something measurable where outcome
can not be predicted). how do they differ then? their "angle of attack"

| prob                                                                | stats                                                                |
| ------------------------------------------------------------------- | -------------------------------------------------------------------- |
| starts w/ known model & asks which<br/>outcomes are likely to occur | starts w/ observed data & asks<br/>what models or params produced it |
| provides theoretical foundation                                     | applies to real data                                                 |
| ex-ante (before it happens)                                         | ex-post (after it happens)                                           |

let's look at another example now:

:::{.question}

> toss a fair coin. let $p \in [0,1]$ be probability of $H$ & $1 - p$ be prob of $T$.
> a probablist assume $p$ is given, calculate prob of 7H & 3Ts:

:::

$$
\begin{aligned}
\binom{10}{7}p^7 (1 - p)^3
\end{aligned}
$$

a statistician is interested in estimating value of $p$ based on observing a
sequence of outcomes. if they observe 7H & 3T in 10 flips an _estimation_ of
$p$, written as $\widehat{p}$:

$$
\begin{aligned}
S &:= \text{10 flips of 7H \& 3T} \\
\widehat{p} &:= \frac{|\{x | x \in S, x \equiv H\}|}{|S|} = \frac{7}{10}
\end{aligned}
$$

## engineering method & statistical thinking (&sect; 1.1)

## engineering

the engineering method & satistical method are similar as well:

engineers solve problems using following framework:

1. describe problem clearly
2. identify important factors
3. propose a model & state assumptions
4. collect data to test model
5. refine model using data
6. use model to develop a solution
7. confirm the solution using further testing
8. draw conclusions & make recommendations

stats is basically steps 2 through 4

### variability (&sect; 1.1.1)

_**def:** variability_&mdash;repeated measurements of same quantity give different results.

a demonstrative example:

:::{.question}

> a mech eng testing pull-off force of nylon connector w/ thickness of 3/32 in.
> 8 prototypes give `{12.6, 12.9, 13.4, 12.3, 13.6, 13.5, 12.6, 13.1}` average
> is 13.0 pounds.

:::

since pull-off forces show variability, we can model this as a _random variable_ (covered in later chapters/lectures).

$$
\begin{aligned}
X &:= \mu + \epsilon, && \text{where} \\
  & \mu \textit{ is constant, and} \\
  & \epsilon \textit{ is random disturbances} \\
\end{aligned}
$$

:::{.question}

> if test is repeated w/ 1/8 in. thickness giving
> `{12.9, 13.7, 12.8, 13.9, 14.2, 13.2, 13.5, 13.1}`
> average is 13.4 pounds
>
> what can/should we ask now?

:::

- will repeated samples show same effect (thicker -> stronger)?
- is n=8 enough to draw a reliable conclusion?
- what is risk that conclusion is wrong?

### population & samples (&sect; 1.1.2)

there are two types of reasoning here:

1. applying general principles to specific cases (e.g. Newton's Laws, Ohm's Laws)
2. use specific measurements to deduce general cases (e.g. )&mdash;called _statistical inference_

_**def:** population_&mdash;the entire universe of all possible members of a collection (e.g. all people in the US, all possible outcomes of flipping a coin N times).

_**def:** sample_&mdash;a subset of the population, collected as a means of determining information about the population to which the subset belongs.
