---
title: "Probability & Statistics: distributions & prob. distribution functions of cumulative RVs (&sect;'s 5.1, 5.2, & 5.3)"
description: "Beginning _continuous_ random variables, covering their distributions, probability distribution functions, cumulative distribution functions, mean (expected value), & variance."
keywords:
  - "probability distribution"
  - "probability distribution function"
  - "pdf"
  - "cumulative random variables"
  - "probability & statistics"
  - "lecture notes"
  - "mathematics"
  - "math 474"
  - "illinois tech"
meta:
  byline: Andrew Chang-DeWitt
  published: "2026-02-23T11:25-06:00"
---

## agenda

- &sect; 5.1: probability distributions & probability density functions (of
  cont. RVs)
- &sect; 5.2: cumulative distribution functions (of cont. RVs)
- &sect; 5.3: mean & variance of continuous RVs

## &sect; 5.1: probability distributions & probability density functions (of cont. RVs)

recall, a _**continuous random variable**_ differs from a _discrete_ random variable in that it has an interval of real numbers for its range & is uncountably infinite in size. as such, a probability _mass_ function can not be used to describe its distribution. instead, we turn to a similar function:

> [!IMPORTANT]
>
> for a _continuous_ RV, $X$, a _**probability density function**_ $f(x)$ is defined such that
>
> $$
> \begin{align}
> &f(x) \ge 0 &&
>     \htmlClass{hljs-comment}{\textit{// property 1}} \tag{5.1.1} \\
> &\int_{-\infin}^\infin f(x)dx = 1 &&
>     \htmlClass{hljs-comment}{\textit{// property 2}} \tag{5.1.2} \\
> &\mathbb{P}(a \le X \le b) = \int_a^b f(x)dx  &&
>     \htmlClass{hljs-comment}{\textit{// property 3}} \tag{5.1.3} \\
> \end{align}
> $$
>
> are all true.

> [!ASIDE]
>
> ### an example
>
> <details>
>
>   <summary>
>
> suppose we have a copper wire w/ a current (in mA) with a pmf $f(x) = 5$
> defined for currents in the range $[4.9,5.1]$. find the probability that the
> current is less than 5ma.
>
>   </summary>
>
> $$
> \begin{aligned}
> f(x) &= 5, \text{for}\; x \in [4.9,5.1] \\
> \\
> \mathbb{P}(X < 5) &= \int_{4.9}^5 f(x) dx \\
>                   &= \int_{4.9}^5 5 dx \\
>                   &= 5 \int_{4.9}^5 dx \\
>                   &= 5 [x]_{4.9}^5 = 5 (5 - 4.9) = 5 (0.1) \\
>                   &= 0.5 \space_\blacksquare
> \end{aligned}
> $$
>
> </details>

:::

some observations:

- the larger probability of $x \in X$, the larger value $f(x)$ returns for
  interval $[a,b]$ (where $a$ & $b$ are the bounds of $x \in X$)
- a histogram approximates a pdf

additionally, it is important to note the following:

- any single point, $x$, has 0 probability

  $\mathbb{P}(X = x) = \int_x^x f(y)dy = 0$

- if we consider some small tolerance, $\epsilon > 0$, around a single value $x \in X$, then it is possible to approximate the probability of $x$

  $\mathbb{P}(x - \epsilon \le X \le x + \epsilon) = \int_{x - \epsilon}^{x + \epsilon} f(y)dy > 0$

:::

> [!NOTE]
>
> where a _discrete_ RV's pmf, $f(x)$, can be interpreted as a probability, a
> **continuous** RV's pdf, $f(x)$ can **not**. instead, we must look at the product
> of a thin width $dx$ and height $f(x)$ (the approximate area) to interpret
> values from a pdf as a probability.
> this is perhaps more apparent when comparing the two sums of a sample space:
>
> $$
> \begin{aligned}
> &X_d \coloneqq \text{some discrete RV} \\
> &X_c \coloneqq \text{some continuous RV} \\
> \\
> &\sum_x f(x_d) = 1, x_d \in X_d \\
> &\int_{-\infin}^\infin f(x_c)dx_c = 1, x_c \in X_c &&
>     \htmlClass{hljs-comment}{\textit{by (5.1.2)}} \\
> \end{aligned}
> $$
>
> because of this, a pdf $f(x)$ can be $> 1$ (unlike a pmf)

## &sect; 5.2: cumulative distribution functions (of cont. RVs)

> [!IMPORTANT]
>
> for a continuous RV $X$, the _**cumulative distribution function** (cdf)_ is
> calculated (using its pdf) as:
>
> $$
> \begin{aligned}
> F(x) = \mathbb{P}(X \le x) = \int_{-\infin}^x f(y) dy, \text{for}\; -\infin < x < \infin \tag{5.2.1}
> \end{aligned}
> $$
>
> it is important to note that the cdf of a continuous rv is also continuous;
> unlike that of a _discrete_ rv.

> [!ASIDE]
>
> <details>
>
>   <summary>
>
> picking up with our flawed copper wire example from above, find the cdf:
>
>   </summary>
>
> $$
> \begin{aligned}
> &f(x) = 5, \text{for}\; x \in [4.9,5.1] \\
> \\
> &f(x < 4.9) = 0 \implies F(x < 4.9) = 0 \\
> &f(x > 5.1) = 0 \implies F(x < 4.9) = 0 \\
> &f(4.9 \le x < 5.1) = \int_{4.9}^x f(y) dy = 5[y]_{4.9}^x \\
> \\
> &F(x) = \begin{cases}
>             0, &x < 4.9 \\
>             5x - 24.5, &4.9 \le x < 5.1 \\
>             1, &x < 5.1 \space_\blacksquare
>         \end{cases}
> \end{aligned}
> $$
>
> </details>

because a cdf is defined in terms of a pdf, the pdf can always be derived by
taking the derivative of a given pdf:

$$
\begin{aligned}
\because
&& &F(x) \coloneqq \int_{-\infin}^\infin f(y) dy \\
\\
&& &\frac{d}{dx} \int_{-\infin}^\infin f(y) dy = f(x) &&
       \htmlClass{hljs-comment}{\textit{by the Fundamental Theorem of Calculus}} \\
\\
\therefore
&& &f(x) = \frac{d}{dx} F(x) \space_\blacksquare \tag{5.2.2}
\end{aligned}
$$

## &sect; 5.3: mean & variance of continuous RVs

> [!TODO]
>
> ...
