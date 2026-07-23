## &sect; 5.2 binomial and multinomial distributions

### binomial distribution

> [!IMPORTANT]
>
> A Bernoulli trial can result in a success with probability `p` & a
> failure with probability $q = 1 - p$. The probability distribution of
> the **binomial random variable** `X`, the number of successes in `n`
> independent trials, is
>
> $$
> b(x; n, p) = \binom{n}{x} p^x q^{n-x}, \quad x = 0, 1, 2, \ldots, n.
> $$
>
> Binomial sums $B(r; n, p) = \sum_{x=0}^r b(x; n, p)$ are tabulated
> for computing $P(X < r)$ or $P(a \leq X \leq b)$.

Signal: a fixed number of independent trials `n`, a constant
per-trial success probability `p` (sampling with replacement, or from
an effectively infinite population), asking for a count of successes
— e.g. hw-05 5.2 ("twelve people... guessing"), 5.5, 5.27. Contrast
the hypergeometric distribution (§5.3) when sampling is explicitly
without replacement from a small, finite population.

### theorem 5.1, mean & variance of the binomial distribution

> [!IMPORTANT]
>
> The mean and variance of the binomial distribution $b(x; n, p)$ are
>
> $$
> \mu = np \quad \text{and} \quad \sigma^2 = npq
> $$
>
> Proved by writing `X` as a sum of `n` independent Bernoulli indicator
> variables $X = I_1 + I_2 + \cdots + I_n$ & applying corollary 4.4 (for
> `μ`) and corollary 4.11 (for `σ²`).

Signal: reach for this the moment `X` is confirmed binomial & the
question asks for mean/variance/std. dev. rather than a specific
$P(X=x)$ — no need to sum the pmf.

### multinomial distribution

> [!IMPORTANT]
>
> Generalizes the binomial to trials with `k` possible outcomes. If a
> given trial can result in outcomes $E_1, E_2, \ldots, E_k$ with
> probabilities $p_1, p_2, \ldots, p_k$, then the probability
> distribution of the random variables $X_1, X_2, \ldots, X_k$
> (representing the number of occurrences of each $E_i$ in `n`
> independent trials) is
>
> $$
> f(x_1, x_2, \ldots, x_k; p_1, p_2, \ldots, p_k, n) = \binom{n}{x_1, x_2, \ldots, x_k} p_1^{x_1} p_2^{x_2} \cdots p_k^{x_k}
> $$
>
> with $\sum_{i=1}^k x_i = n$ & $\sum_{i=1}^k p_i = 1$.

Signal: same trial-independence setup as binomial, but each trial has
**3 or more** mutually exclusive outcome categories instead of just
success/failure — e.g. hw-05 5.19 (green/yellow/red traffic light).
The coefficient reuses theorem 2.5's partitioning formula.

## &sect; 5.3 hypergeometric distribution

### hypergeometric distribution

A **hypergeometric experiment** requires (1) a random sample of size
`n` selected _without replacement_ from `N` items, & (2) `k` of the
`N` items classified as successes, `N - k` as failures. The
probability distribution of the **hypergeometric random variable**
`X`, the number of successes, is

$$
h(x; N, n, k) = \frac{\binom{k}{x}\binom{N-k}{n-x}}{\binom{N}{n}}, \quad \max\{0, n-(N-k)\} \leq x \leq \min\{n, k\}.
$$

Signal: sampling is explicitly *without replacement* from a finite,
fixed-size population `N` with a stated number of "successes" `k` in
that population (a batch, a lot, a fixed roster of suspects) — e.g.
hw-05 5.35 (5 of 50 items, 20% defective), 5.47 (5 of 20 firms, 3 in
violation). Contrast the binomial (§5.2): without replacement, each
draw's probability shifts depending on what was already drawn, so
binomial is only an approximation here (see theorem 5.2's note below).

### theorem 5.2, mean & variance of the hypergeometric distribution

The mean and variance of the hypergeometric distribution
$h(x; N, n, k)$ are

$$
\mu = \frac{nk}{N} \quad \text{and} \quad \sigma^2 = \frac{N-n}{N-1} \cdot n \cdot \frac{k}{N} \left(1 - \frac{k}{N}\right)
$$

As `N` grows large relative to `n`, the hypergeometric distribution
approaches the binomial distribution with $p = k/N$ (sampling without
replacement approximates sampling with replacement).

Signal: mean/variance requested for a confirmed-hypergeometric `X` —
same pattern as theorem 5.1, no pmf summation needed. Also the
justification for treating a "without replacement" sample as binomial
when the population `N` is much larger than the sample `n`.

## &sect; 5.4 negative binomial and geometric distributions

### negative binomial distribution

If repeated independent trials can result in a success with
probability `p` and a failure with probability $q = 1-p$, then the
probability distribution of the random variable `X`, the number of
the trial on which the `k`th success occurs, is

$$
b^*(x; k, p) = \binom{x-1}{k-1} p^k q^{x-k}, \quad x = k, k+1, k+2, \ldots
$$

Signal: the question asks "on which trial does the `k`th success
occur" — a *waiting-time* question, not "how many successes in `n`
trials" (contrast binomial, §5.2) — e.g. hw-05 5.49 ("the tenth person
is the *fifth* one to own a dog", $k=5$, $x=10$ ).

### geometric distribution

> [!IMPORTANT]
>
> The special case of the negative binomial distribution with $k = 1$
> — the probability distribution of `X`, the number of the trial on
> which the _first_ success occurs:
>
> $$
> g(x; p) = pq^{x-1}, \quad x = 1, 2, 3, \ldots
> $$

Signal: same waiting-time framing as negative binomial, but
specifically for the *first* occurrence — "rejected on the 20th
test" or "in 10 or fewer trials" phrasing where only one success/
failure is being waited for — e.g. hw-05 5.89(b)/(c).

### theorem 5.3, mean & variance of the geometric distribution

> [!IMPORTANT]
>
> The mean and variance of a random variable following the geometric
> distribution are
>
> $$
> \mu = \frac{1}{p} \quad \text{and} \quad \sigma^2 = \frac{1-p}{p^2}
> $$

Signal: mean/variance requested for a confirmed-geometric `X` — same
pattern as theorems 5.1/5.2.

## &sect; 5.5 poisson distribution and the poisson process

### properties of the poisson process

> [!IMPORTANT]
>
> A Poisson process governs the occurrence of outcomes over time/space
> & satisfies:
>
> 1. The number of outcomes in one interval/region is independent of
>    the number in any other disjoint interval/region ("no memory").
> 2. The probability of a single outcome in a short interval/small
>    region is proportional to its length/size, & does not depend on
>    the count outside it.
> 3. The probability of more than one outcome in such a short
>    interval/small region is negligible.

Signal: these are the assumptions to check *before* modeling a rate-
based count as Poisson — most homework problems just assert the rate
(hw-05 5.53, 5.57, 5.67) & expect you to treat them as satisfied.

### poisson distribution

> [!IMPORTANT]
>
> The probability distribution of the **Poisson random variable** `X`,
> the number of outcomes occurring in a given time interval or
> specified region denoted `t`, is
>
> $$
> p(x; \lambda t) = \frac{e^{-\lambda t} (\lambda t)^x}{x!}, \quad x = 0, 1, 2, \ldots
> $$
>
> where `λ` is the average number of outcomes per unit time, distance,
> area, or volume, & $\mu = \lambda t$. Poisson
> sums $P(r; \lambda t) = \sum_{x=0}^r p(x; \lambda t)$ are tabulated.

Signal: events counted over a continuous exposure (time, a page,
an area) with a stated *average rate*, & **no** fixed number of
discrete trials to point to (contrast binomial/hypergeometric, which
both need a stated `n`) — e.g. hw-05 5.53 ("demands... 5 times per
day"), 5.57 ("errors per page"), 5.67 ("customers arriving per
hour").

### theorem 5.4, mean & variance of the poisson distribution

> [!IMPORTANT]
>
> Both the mean and the variance of the Poisson
> distribution $ p(x; \lambda t) $ are $\lambda t$ .

Signal: mean/variance requested for a confirmed-Poisson `X` — both
answers are just $\lambda t$, no separate variance formula to apply.

### theorem 5.5, poisson approximation to the binomial distribution

> [!IMPORTANT]
>
> Let `X` be a binomial random variable with distribution $b(x; n, p)$.
> When $n \to \infty$, $p \to 0$, & $np \to \mu$ remains constant, then
>
> $$
> b(x; n, p) \xrightarrow{n \to \infty} p(x; \mu)
> $$
>
> Useful when `n` is large & `p` is close to 0 (or, by swapping the
> definitions of success/failure, close to 1); take $\mu = np$.

Signal: it *is* a binomial setup (fixed `n` trials, constant `p`,
stated explicitly or derivable) but `n` is large & `p` is tiny,
making exact binomial computation impractical — e.g. hw-05 5.61
( $n=10{,}000$, $p=0.001$ ), 5.101(b) (explicitly asks to redo the
binomial part of (a) via this approximation). Don't confuse with
theorem 6.3's normal approximation to the binomial, which instead
wants `p` *not* near 0 or 1.
