---
title: "Probability & Statistics: some probability distributions (&sect;'s 4.5, 4.7, & 4.8)"
description: "Coverage of the binomial, hypergeometric, & poisson probability distributuions."
keywords:
  - "binomial distribution"
  - "hypergeometric distribution"
  - "poisson distribution"
  - "probability distribution"
  - "probability & statistics"
  - "lecture notes"
  - "mathematics"
  - "math 474"
  - "illinois tech"
meta:
  byline: Andrew Chang-DeWitt
  published: "2026-02-16T11:25-06:00"
  updated: "2026-02-18T11:25-06:00"
---

## agenda

- &sect; 4.5: binomial distribution
- &sect; 4.7: hypergeometric distribution
- &sect; 4.8: poisson distribution

## &sect; 4.5: binomial distribution

many RVs can be thought of as a set of repeated, independent trials, each /w
two outcomes (typ. labeled "success" & "failure").

> [!ASIDE]
>
> this type of experiment is called a _**Bernoulli trial**_

:::

given a random experiment consisting of $n$ repetitions & an RV, $X$,
representing the # of trials resulting in success, it fits a _**binomial
distribution**_ if the following are true:

1. each trial is independent
2. each trial has only 2 outcomes (success, failure)
3. probability of success (denoted as little p&mdash; $p$ ) in each trial
   remains constant

the pmf of a binomial distribution can always be calculated as:

$$
\begin{aligned}
f(x) = \mathbb{P}(X = x) = \begin{pmatrix}
                             n \\
                             x
                           \end{pmatrix}
                           p^x (1 - p)^{n - x}, x = 0, 1, ..., n
\tag{4.5.1}
\end{aligned}
$$

as you might expect, if we sum a pmf $f(x)$ for all $x$ in $X$ we always get 1:

$$
\begin{aligned}
\sum_{x=0}^n f(x) &= \sum_{x=0}^n \begin{pmatrix}
                                    n \\
                                    x
                                  \end{pmatrix}
                                  p^x (1 - p)^{n - x} \\
                  &= (p + (1 - p))^n \\
                  &= 1^n \\
                  &= 1 \space_\blacksquare \\
\end{aligned}
$$

:::

> [!ASIDE]
>
> **example:**
>
> <details>
>   <summary>
>
> Each water sample has 10% chance of being polluted. Assume that samples are
> independent. Find prob that in the next 18 samples, exactly 2 are polluted:
>
>   </summary>
>
> $$
> \begin{aligned}
> X &\coloneqq \text{num. samples polluted in next 18} \\
> \\
> \mathbb(X = 2) &= \begin{pmatrix} 18 \\ 2 \end{pmatrix} 0.1^2 (0.9)^{18 - 2} &&
>   \htmlClass{hljs-comment}{\textit{// by 4.5.1}} \\
>                &= \frac{18!}{2! (18 - 2)!} 0.1^2 (0.9)^{18 - 2} \\
>                &= \frac{18!}{2! (16)!} 0.1^2 (0.9)^{16} \\
>                &= \frac{18 \cdot 17}{2 \cdot 1} 0.1^2 (0.9)^{16} \\
>                &= 153 \cdot 0.01 \cdot (0.9)^{16} \\
>                &\approx 0.284 \space_\blacksquare
> \end{aligned}
> $$
>
> </details>

### mean & variance

because the pmf is always fitting a formula (4.5.1), some measures of a
binomial distribution can always be found by the same formulas as well:

- _**mean**_

  $$
  \begin{aligned}
  \mu &= \mathbb{E}[X] = np, \;\text{where} \\
      &\quad n \text{ is the number of trials, \&} \\
      &\quad p \text{ is the probability of success} \tag{4.5.2}
  \end{aligned}
  $$

  proof: because a "binomial rv is the _sum of independent Bernoulli rvs_"

  $$
  \begin{alignat}{4}
  &\quad\quad\;\;\,     X_i &\coloneqq&\, \begin{cases}
                                         1, &\text{if } i^{\text{th}} \text{ trial is successful}, \\
                                         0, &\text{otherwise}
                                       \end{cases} \tag{4.5.3} \\
  &                         &         &\quad\quad \text{for}\space i = 1, 2, ..., n &&\quad
    \htmlClass{hljs-comment}{\textit{// $X_i$ as a Bernoulli rv}} \tag{4.5.4} \\
  &\implies               X &\coloneqq&\, \sum_{i=1}^n X_i &&\quad
    \htmlClass{hljs-comment}{\textit{// $X$ as a sum of Bernoulli rv; i.e. a binomial rv}} \notag \\
  &\implies \mathbb{E}[X_i] &=&\, 1 \cdot p + 0(1 - p) = p &&\quad
    \htmlClass{hljs-comment}{\textit{// the expectation of a Bernoulli rv is just $p$}} \notag \\
  &\implies \mathbb{E}[X]   &=&\, \mathbb{E}\bigg[ \sum_{i=1}^n X_i \bigg] &&\quad
    \htmlClass{hljs-comment}{\textit{// an expectation of a sum of rvs...}} \notag \\
  &                         &=&\, \sum_{i=1}^n \mathbb{E}[X_i] &&\quad
    \htmlClass{hljs-comment}{\textit{// ...is equiv. the sum of expectations of rvs}} \notag \\
  &                         &=&\, np \space_\blacksquare \notag
  \end{alignat}
  $$

- _**variance**_

  $$
  \begin{aligned}
  \sigma^2 &= \mathbb{E}[(X - \mu)^2] = np(1 - p), \;\text{where} \\
           &\quad n \text{ is the number of trials, \&} \\
           &\quad p \text{ is the probability of success} \tag{4.5.5}
  \end{aligned}
  $$

  proof: similar to that of the mean

  $$
  \begin{alignat}{5}
  &\quad\quad\;\;\, (4.5.3) &\land& (4.5.4) \\
  &\implies Var(X_i) &=&\, \mathbb{E}\bigg[ (X_i - p)^2 \bigg] = p(1 - p) &&\quad
    \htmlClass{hljs-comment}{\textit{// the variance of a Bernoulli rv is multiple of both probabilities}} \notag \\
  &\implies Var(X)   &=&\, Var\bigg( \sum_{i=1}^n X_i \bigg) &&\quad
    \htmlClass{hljs-comment}{\textit{// the variance of a sum of rvs...}} \notag \\
  &                  &=&\, \sum_{i=1}^n Var(X_i) &&\quad
    \htmlClass{hljs-comment}{\textit{// ...is equiv. the sum of variances of rvs}} \notag \\
  &                  &=&\, np(1 - p) \space_\blacksquare \notag
  \end{alignat}
  $$

## &sect; 4.7: hypergeometric distribution

starting w/ an example:

> consider 850 manufactured parts, 50 of which are nonconforming.
>
> - two parts are selected at random,
> - let $X$ be the rv reprsenting num of nonconforming parts in the sample

when sampling w/ replacement, $X$ is the binomial
distribution $Bin(850, \frac{50}{850})$.

if sampling **w/out** replacement, however, the conditional probability
must be considered:

$$
\begin{aligned}
         A      &\coloneqq \text{first part nonconforming} \\
         B      &\coloneqq \text{second part nonconforming} \\
\mathbb{P}(A)   &= \frac{50}{850} \\
\mathbb{P}(B|A) &= \frac{49}{849} \\
\mathbb{P}(A|B) &= P(B|A) &&
  \htmlClass{hljs-comment}{\textit{by Bayes' theorem}}
\end{aligned}
$$

this shows the trials are neither independent or identical (unlike in binomial
distributions). we can still find the probability of each $x \in X$:

$$
\begin{aligned}
\mathbb{P}(X = 0) &= \frac{\text{num conforming}}{\text{total}} \cdot \frac{\text{num conforming} - 1}{\text{total} - 1} &&
  \htmlClass{hljs-comment}{\textit{prob A'B'}} \\
                  &= \frac{800}{850} \cdot \frac{799}{849} \\
                  &= 0.886 \\
\mathbb{P}(X = 1) &= \frac{800}{850} \cdot \frac{50}{849} + \frac{50}{850} \cdot \frac{800}{849} &&
  \htmlClass{hljs-comment}{\textit{prob A'B + prob AB'}} \\
                  &= 0.111 \\
\mathbb{P}(X = 2) &= \frac{50}{850} \cdot \frac{49}{849} &&
  \htmlClass{hljs-comment}{\textit{prob AB}} \\
                  &= 0.003 \\
\end{aligned}
$$

or as a pmf:

$$
\begin{aligned}
f(x) = \begin{cases}
         0.886, &x = 0, \\
         0.111, &x = 1, \& \\
         0.003, &x = 2
       \end{cases}
\end{aligned}
$$

generalizing this pattern to any set of $N$ objects where $K$ are some sort of "success" & $N - K$ are "failure" (given $1 \le K \le N$ ), when selecting a sample of $n$ (given $n \le N$ ) objects, the rv $X$ of success in sample is a _**hypergeometric**_ rv with a pmf of:

$$
\begin{aligned}
f(x) &= \frac{\begin{pmatrix}
                K \\
                x
              \end{pmatrix}
              \cdot
              \begin{pmatrix}
                N - K \\
                n - x
              \end{pmatrix}}{\begin{pmatrix}
                N \\
                n
              \end{pmatrix}
              }, \space\text{where} \\
     &\quad x \in [x_{min},x_{max}] \\
     &\quad x_{min} = \text{max}\{0, n + K - N\} &&
  \htmlClass{hljs-comment}{\textit{// min \# failures can be no more than $N - K$}} \\
     &\quad x_{max} = \text{min}\{K,n\} &&
  \htmlClass{hljs-comment}{\textit{// max \# success can be no more than $K$ or $n$}} \\
\end{aligned}
$$

### mean & variance

given hypergeometric rv $X$ w/ params $N,K,n$:

$$
\begin{aligned}
     \mu &= \mathbb{E}[X] = np, \text{\&}                          &&
  \htmlClass{hljs-comment}{\textit{hypergeometric dist. mean}}     \\
\sigma^2 &= Var(X) = np(1 - p)(\frac{N - n}{N - 1}), \text{ where} &&
  \htmlClass{hljs-comment}{\textit{hypergeometric dist. variance}} \\
       p &= \frac{K}{N}                                            \\
\end{aligned}
$$

## &sect; 4.8: poisson distribution

starting w/ an example:

consider a length $T_\text{mm}$ of copper wire. flaws occur at random in the wire (let $d$ be the average number of flaws per mm).

```
X := num flaws on wire   \\ RV

we expect by scaling that E[X] = lmda T
```

to derive pmf of $X$, partition into $n$ intervals of $\delta t = \frac{T}{n}$ length.

it can be observed that when $n$ is large, prob of more than 1 flaw on an interval is negligible (num. of flaw in each interval is approx to a Bernoulli RV). this leads us to the assumption that the occurence of a flaw in an interval is independent of other intervals (Bernoulli RVs are independent). thus, assuming we have infinite intervals ( $n = \infin$ ), the probability of RV $X$ can be found as:

```
X ~= sum of n independent Bernoulli trials \\ binomial dist
E[X] = lmda T = np => p = (lmda T)/n \tag{4.8.1}
```

from here, we can find $P(X = x)$:

```
P(X = x) ~= bin(n, x)           p^x               (1 - p)^(n - x)
          = bin(n, x)           ((lmda T)/n)^x    (1 - (lmda T)/n)^(n - x)
          = (n! / (n - x!)(x!)) (lmda T)^x/n^x    (1 - (lmda T)/n)^n (1 - (lmda T)/n)^(-x)
          = ((lmda T)^x / x!) (n! / n^x (n - x)!) (1 - (lmda T)/n)^n (1 - (lmda T)/n)^(-x)

  lim n->\infin (n! / n^x (n - x)!)
= lim n->\infin (n(n - 1)(n - 2)...(n - x + 1))/n^x
= lim n->\infin n/n (n-1)/n (n-2)/n ... (n-x+1)/n
= lim n->\infin 1 (1 - 1/n) (1 - 2/n) ... (1 - (x-1)/n)
= 1

  lim n->\infin (1 - (lmda T)/n)^n
= e^(-lmda T)

  lim n->\infin (1 - (lmda T)/n)^(-x)
= 1

lim n->\infin P(X=x) = e^(-lmda T) ((lmda T)^x / x!), x=0,1,2,...

f(x) = e^(-lmda T) ((lmda T)^x / x!), lmda > 0, x=0,1,2,...\space_\blacksquare \\ pmf \tag{4.8.2}
```

> [!ASIDE]
>
> ### an example
>
> <details>
>
>   <summary>
>
> suppose we have a copper wire w/ 2.3 flaws per mm. determine prob of 10
> flaws in 5mm of wire.
>
>   </summary>
>   
> $$
> \begin{aligned}
> X &\coloneqq \text{num flaws in 5mm} && \htmlClass{hljs-comment}{\textit{// poisson}} \\
>  \lambda T &= 2.3 \;\text{flaws/mm}\; \cdot 5 \text{mm} = 11.5 \;\text{flaws} \\
> \\
> \mathbb{P}(X = 10) &= e^{-11.5} \frac{11.5^10}{10!} = 0.113 \space_\blacksquare
> \end{aligned}
> $$
>
> </details>
