---
title: "Probability & Statistics: random variables, pmf, cdf, & mean/variance (&sect;'s 3.9, 4.1, 4.2, & 4.3)"
description: "Compilation of notes from lectures covering random variables, probability mass function, & cumulative distribution function, & finding the mean (expected value) & variance of these."
keywords:
  - "pmf"
  - "probability mass function"
  - "cdf"
  - "cumulative distributive function"
  - "discrete random variables"
  - "mean"
  - "variance"
  - "probability & statistics"
  - "lecture notes"
  - "mathematics"
  - "math 474"
  - "illinois tech"
meta:
  byline: Andrew Chang-DeWitt
  published: "2026-02-11T11:25-06:00"
  updated: "2026-02-16T11:25-06:00"
---

## agenda

- &sect; 3.9: random variables
- &sect; 4.1: probability mass functions
- &sect; 4.2: cumulative distributive functions
- &sect; 4.3: expected random value & variance

## &sect; 3.9: random variables (RV)

_**def:**_&mdash;a function $X: S -> \real$ that assigns a real number
to each outcome in a given sample space (`S`) for a random experiment

we use uppercase letters to denote rand vars & their lowercase
counterpart to refer to a specific, possible value that may be in the
rand var.

an RV may be _**discrete**_ (where $S$ is discrete, e.g. has finite our
countably infinite range) or _**continuous**_ (where $S$ is _not_
countable & has some interval defining its range).

## &sect; 4.1: probability mass functions

to better understand some RV $X$, we can examine the _probability distribution_ (see
the [next lecture](../0216-4_5_and_4_7-binomial_hypergeometric_dist/)
for more on this) consisting of the set of possible values &
coresponding probabilities of $X$.

for example, in the experiment of tossing a fair coin 3 times, $X$ can
be used to indicate the number of heads in the outcome:

$$
\begin{aligned}
\because
  && &S \coloneqq \{ HHH, HHT, ... \}, |S| = 2^3 = 8 \\
  && &X \coloneqq \text{num of } H \in \{1,2,3\} \\
\\
\therefore
  && &X(HHH) = 3, X(HHT) = 2, ... \\
\end{aligned}
$$

| $S$ | $x = X(S)$ | $\mathbb{P}(S)$ |
| --- | ---------- | --------------- |
| HHH | 3          | 1/8             |
| HHT | 2          | 1/8             |
| HTH | 2          | 1/8             |
| THH | 2          | 1/8             |
| HTT | 1          | 1/8             |
| TTH | 1          | 1/8             |
| HTT | 1          | 1/8             |
| TTT | 0          | 1/8             |

> [!NOTE]
>
> observe that different outcomes in $S$ can give the same value for
> $x$

for some set of values $x$, the event that $X$ takes on value $x$ is denoted by

$$
\begin{aligned}
\{ X = x \} = \{ s \in S: X(s) = x \}
\end{aligned}
$$

thus when $x$ of $X$ equals 3, $HHH$ is the only possible outcome, giving

$$
\begin{aligned}
\mathbb{P}(X = 3) &= \mathbb{P}(\{HHH\}) \\
                  &= \frac{1}{8} \\
\end{aligned}
$$

as a table, for all $x \in X$ the probabilities $\mathbbb{P}(X = x) are:

| $x$ | $\mathbb{P}(X = x)$ |
| --- | ------------------- |
| 0   | $\frac{1}{8}$       |
| 1   | $\frac{3}{8}$       |
| 2   | $\frac{3}{8}$       |
| 3   | $\frac{1}{8}$       |

another way of modeling the same information is via a _**probability
mass function (pmf)**_. for our discrete RV $X$, this would be the
function:

$$
\begin{aligned}
f(x) = \begin{cases}
           \frac{1}{8}, &x = 0 \text{ or } x = 3, \\
           \frac{3}{8}, &x = 1 \text{ or } x = 2, \\
       \end{cases}
\end{aligned}
$$

for a function $f: X \mapsto \real$, it can be considered to be a
probability mass function if the following criteria are satisified for all $x \in X$:

1. $f(x) \ge 0$, from second axiom (see lecture notes on [axioms of probability](../0128-ch_3_3_to_4-axioms_prop_unions_additions/)),
2. $\sum_{x \in X} f(x) = 1$, from first axiom (&sect; 3.3), and
3. $f(x) = \mathbb{P}(X = x)$, i.e. $f$ gives the probability at each possible value of the RV $X$

## &sect; 4.2: cumulative distributive functions

similar to the pmf, the _**cumulative distibution function (cdf)**_ is also used to describe the probability distribution of a random variable. defined as a function $F: R \mapsto [0,1]$:

$$
\begin{aligned}
F(x) =\mathbb{P}(X \le x) &= \mathbb{P}(\bigcup_{i: x_i \le x} \{X = x_i\}) \\
                          &= \sum_{i: x_i \le x} \mathbb{P}(X = x_i) \\
                          &= \sum_{i: x_i \le x} f(x_i) \tag{4.2.1}
\end{aligned}
$$

properties of cdf for any discrete rv, $X$:

1. $F(x) = \mathbb{P}(X \le x) = \sum_{x_i \le x} f(x_i)$, from def (4.2.1),
2. $0 \le F(x) \le 1$, from the second axiom (&sect; 3.3), and
3. $F$ is _nondecreasing_; i.e. $x \le y \longrightarrow F(x) \le F(y)$

## &sect; 4.3: expected random value & variance

a rand. var. (RV) can have its prob. distribution summarized by mean & variance, like any other set of data:

_**def: mean of a discrete RV**_, often called the _**expected value (EV)**_ can be found as:

$$
\begin{aligned}
\mu = \mathbb{E}[X] = \sum_x x f(x) \tag{4.3.1}
\end{aligned}
$$

& _**def: variance of a discrete RV**_ can be found as:

$$
\begin{aligned}
\sigma^2 = V[X] = Var(X) &= \mathbb{E}[(X - \mu)^2] \\
                         &= \sum_x (x - \mu)^2 f(x)
\tag{4.3.2}
\end{aligned}
$$

where $f(x)$ is the weight apportioned to each $x$ in the RV $X$.

variance can also be found as:

$$
\begin{aligned}
\sigma^2 = Var(X) &= \sum_x (x - \mu)^2 f(x) \\
                  &= \sum_x x^2 f(x) - 2\mu \sigma x f(x) + \mu^2 \sum_x f(x) \\
                  &= \sum_x x^2 f(x) - 2\mu \cdot \mu + \mu^2 \cdot 1 \\
                  &= \sum_x x^2 f(x) - 2\mu^2 + \mu^2 \\
                  &= \sum_x x^2 f(x) - \mu^2
\tag{4.3.3}
\end{aligned}
$$

we can generalize the definition of $\mu$ for any function $h(X)$ for discrete RV $X$ as:

$$
\begin{aligned}
\mathbb{E}[h(X)] = \sum_x h(x) f(x)
\tag{4.3.4}
\end{aligned}
$$

both mean & variance exhibit some interesting behaviours known as the "scaling properties":

- $$\begin{aligned} \mathbb{E}[aX + b] = a \mathbb{E}[X] + b \tag{4.3.5}\end{aligned}$$
- $$\begin{aligned} Var(aX + b) = a^2 Var(X) \tag{4.3.6}\end{aligned}$$
