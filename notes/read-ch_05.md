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

### theorem 5.2, mean & variance of the hypergeometric distribution

The mean and variance of the hypergeometric distribution
$h(x; N, n, k)$ are

$$
\mu = \frac{nk}{N} \quad \text{and} \quad \sigma^2 = \frac{N-n}{N-1} \cdot n \cdot \frac{k}{N} \left(1 - \frac{k}{N}\right)
$$

As `N` grows large relative to `n`, the hypergeometric distribution
approaches the binomial distribution with $p = k/N$ (sampling without
replacement approximates sampling with replacement).

## &sect; 5.4 negative binomial and geometric distributions

### negative binomial distribution

If repeated independent trials can result in a success with
probability `p` and a failure with probability $q = 1-p$, then the
probability distribution of the random variable `X`, the number of
the trial on which the `k`th success occurs, is

$$
b^*(x; k, p) = \binom{x-1}{k-1} p^k q^{x-k}, \quad x = k, k+1, k+2, \ldots
$$

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

### theorem 5.3, mean & variance of the geometric distribution

> [!IMPORTANT]
>
> The mean and variance of a random variable following the geometric
> distribution are
>
> $$
> \mu = \frac{1}{p} \quad \text{and} \quad \sigma^2 = \frac{1-p}{p^2}
> $$

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

### theorem 5.4, mean & variance of the poisson distribution

> [!IMPORTANT]
>
> Both the mean and the variance of the Poisson
> distribution $ p(x; \lambda t) $ are $\lambda t$ .

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
