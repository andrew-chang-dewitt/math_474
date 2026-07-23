## &sect; 6.1 continuous uniform distribution

### uniform (rectangular) distribution

> [!IMPORTANT]
>
> The density function of the continuous uniform random variable `X` on
> the interval $[A, B]$ is
>
> $$
> f(x; A, B) = \begin{cases}
>                \frac{1}{B-A}, &A \leq x \leq B, \\
>                0,             &\text{elsewhere}.
>              \end{cases}
> $$

Signal: a continuous quantity is stated to be "equally likely" over
a bounded interval $[A,B]$, with no other shape given — e.g. hw-05
6.3 (coffee dispensed uniformly between 7 & 10 liters). Probabilities
reduce to ratios of interval lengths.

### theorem 6.1, mean & variance of the uniform distribution

> [!IMPORTANT]
>
> The mean and variance of the uniform distribution are
>
> $$
> \mu = \frac{A+B}{2} \quad \text{and} \quad \sigma^2 = \frac{(B-A)^2}{12}
> $$

Signal: mean/variance requested for a confirmed-uniform `X` — midpoint
of the interval for `μ`, no integration needed.

## &sect; 6.2 normal distribution

### normal distribution

> [!IMPORTANT]
>
> The density of the **normal random variable** `X`, with mean `μ` &
> variance $\sigma^2$, is
>
> $$
> n(x; \mu, \sigma) = \frac{1}{\sqrt{2\pi}\sigma} e^{-\frac{1}{2\sigma^2}(x-\mu)^2}, \quad -\infty < x < \infty
> $$
>
> Properties of the normal curve: mode at $x = \mu$ ; symmetric
> about $x = \mu$ ; inflection points at $x = \mu \pm \sigma$ ;
> approaches the horizontal axis asymptotically; total area under
> the curve is 1.

Signal: a continuous measurement is stated to be "normally
distributed" with a given mean & standard deviation — e.g. hw-05 6.9,
6.11, 6.17. In practice you almost never integrate this density
directly — standardize to `Z` (definition 6.1) & use the table
instead.

### theorem 6.2, mean & variance of the normal distribution

> [!IMPORTANT]
>
> The mean and variance of $n(x; \mu, \sigma)$ are $\mu$ & $\sigma^2$ ,
> respectively — hence the standard deviation is $\sigma$ .

Signal: mostly notational confirmation that the two named parameters
of $n(x;\mu,\sigma)$ _are_ the mean & std. dev. — rarely the crux of a
problem on its own.

## &sect; 6.3 areas under the normal curve

### definition 6.1, standard normal distribution

> [!IMPORTANT]
>
> The distribution of a normal random variable with mean 0 & variance 1
> is called a **standard normal distribution**. Any normal random
> variable `X` is transformed to the standard normal `Z` via
>
> $$
> Z = \frac{X - \mu}{\sigma}
> $$
>
> so that $P(x_1 < X < x_2) = P(z_1 < Z < z_2)$,
> with $z_i = (x_i - \mu)/\sigma$ . Table A.3
> tabulates $P(Z < z)$.

Signal: two flavors — (1) `z` is given directly & you just read/
combine areas from the table (hw-05 6.5, 6.7); or (2) `X` is given
with a stated `μ`, `σ`, & you standardize first before reading the
table (hw-05 6.9, 6.11). 6.7/6.17 run it backward: given an area,
look up `z` (or `k`) instead of computing an area from `z`.

## &sect; 6.5 normal approximation to the binomial

### theorem 6.3, normal approximation to the binomial distribution

> [!IMPORTANT]
>
> If `X` is a binomial random variable with mean $\mu = np$ &
> variance $\sigma^2 = npq$, then the limiting form of the
> distribution of
>
> $$
> Z = \frac{X - np}{\sqrt{npq}}
> $$
>
> as $n \to \infty$ is the standard normal distribution $n(z; 0, 1)$.
> Accurate when `n` is large & `p` is not extremely close to 0 or 1;
> reasonable even for small `n` when `p` is close to `1/2`.

Signal: it's a binomial setup (fixed `n`, constant `p`) with `n` too
large to sum the pmf by hand, **and** `p` is _not_ near 0 or 1 (e.g.
`p` roughly between 0.1 and 0.9) — e.g. hw-05 6.33 ( $n=400$, $p=0.1$ ),
6.27 ( $n=100$, $p=0.9$ ), 6.65 ( $n=1000$, $p=0.65$ ). Contrast theorem 5.5:
when `p` _is_ near 0 or 1, the Poisson approximation is the better
tool instead.

## &sect; 6.6 gamma and exponential distributions

### definition 6.2, gamma function

The **gamma function** is defined by

$$
\Gamma(\alpha) = \int_0^{\infty} x^{\alpha - 1} e^{-x} dx, \quad \text{for } \alpha > 0.
$$

Properties:

- (a) $\Gamma(\alpha) = (\alpha - 1)\Gamma(\alpha - 1)$
  (recursion, for $\alpha > 1$ );
- (b) $\Gamma(n) = (n-1)!$ for positive integer `n`;
- (c) $\Gamma(1) = 1$ ;
- (d) $\Gamma(1/2) = \sqrt{\pi}$ .

Signal: purely a building block — shows up inside the gamma, chi-
squared, & beta densities below rather than being invoked on its own.

### gamma distribution

The continuous random variable `X` has a **gamma distribution**, with
parameters $\alpha > 0$ & $\beta > 0$, if its density function is

$$
f(x; \alpha, \beta) = \begin{cases}
                         \frac{1}{\beta^{\alpha} \Gamma(\alpha)} x^{\alpha - 1} e^{-x/\beta}, &x > 0, \\
                         0,                                                                   &\text{elsewhere}.
                       \end{cases}
$$

The special case $\alpha = 1$ is the exponential distribution.

Signal: models a waiting time until the `α`th occurrence of a
Poisson-type event (a generalization of the exponential below, the way
negative binomial generalizes geometric in §5.4) — no hw-05 problem
uses it directly.

### exponential distribution

The continuous random variable `X` has an **exponential
distribution**, with parameter $\beta > 0$, if its density function is

$$
f(x; \beta) = \begin{cases}
                \frac{1}{\beta} e^{-x/\beta}, &x > 0, \\
                0,                            &\text{elsewhere}.
              \end{cases}
$$

Related to the Poisson process: `X`, the time to the first Poisson
event, has $P(X > x) = e^{-\lambda x}$, giving
density $f(x) = \lambda e^{-\lambda x}$ with $\lambda = 1/\beta$ .

Signal: the continuous-time counterpart of the geometric distribution
(§5.4) — "time until the first event" of a Poisson process, given a
rate — memoryless (waiting time so far doesn't affect what's left to
wait).

### theorem 6.4, mean & variance of the gamma distribution

The mean and variance of the gamma distribution are
$\mu = \alpha\beta$ & $\sigma^2 = \alpha\beta^2$.

Signal: mean/variance requested for a confirmed-gamma `X`.

### corollary 6.1, mean & variance of the exponential distribution

The mean and variance of the exponential distribution are $\mu = \beta$
& $\sigma^2 = \beta^2$.

Signal: theorem 6.4 with $\alpha=1$ — mean/variance requested for a
confirmed-exponential `X`.

## &sect; 6.7 chi-squared distribution

### chi-squared distribution

> [!IMPORTANT]
>
> The continuous random variable `X` has a **chi-squared distribution**,
> with `v` degrees of freedom, if its density function is
>
> $$
> f(x; v) = \begin{cases}
>             \frac{1}{2^{v/2}\Gamma(v/2)} x^{v/2 - 1} e^{-x/2}, &x > 0, \\
>             0,                                                &\text{elsewhere},
>           \end{cases}
> $$
>
> where `v` is a positive integer. Central to statistical inference
> (hypothesis testing, estimation, sampling distributions, ANOVA,
> nonparametric statistics).

Signal: not something a ch5-7 homework problem asks you to apply
directly yet — it's the special case of the gamma distribution
( $\alpha=v/2$, $\beta=2$ ) that becomes the workhorse of later
inference chapters; recognize it here mainly via corollaries 7.1/7.2
(sums of squared standardized normals).

### theorem 6.5, mean & variance of the chi-squared distribution

> [!IMPORTANT]
>
> The mean and variance of the chi-squared distribution are $\mu = v$
> & $\sigma^2 = 2v$ .

Signal: mean/variance requested for a confirmed-chi-squared `X` —
both fall straight out of the degrees of freedom `v`.

## &sect; 6.8 beta distribution

### definition 6.3, beta function

A **beta function** is defined by

$$
B(\alpha, \beta) = \int_0^1 x^{\alpha - 1}(1-x)^{\beta-1} dx = \frac{\Gamma(\alpha)\Gamma(\beta)}{\Gamma(\alpha + \beta)}, \quad \text{for } \alpha, \beta > 0.
$$

Signal: normalizing constant for the beta density below, analogous to
the gamma function's role in definition 6.2.

### beta distribution

The continuous random variable `X` has a **beta distribution** with
parameters $\alpha > 0$ & $\beta > 0$ if its density function is

$$
f(x) = \begin{cases}
         \frac{1}{B(\alpha,\beta)} x^{\alpha-1}(1-x)^{\beta-1}, &0 < x < 1, \\
         0,                                                    &\text{elsewhere}.
       \end{cases}
$$

The uniform distribution on $(0,1)$ is the special
case $\alpha = \beta = 1$ .

Signal: a continuous quantity naturally bounded to $(0,1)$ — a
proportion, fraction, or probability itself — with a shape more
flexible than the flat uniform (§6.1).

### theorem 6.6, mean & variance of the beta distribution

The mean and variance of a beta distribution with parameters `α` & `β`
are

$$
\mu = \frac{\alpha}{\alpha+\beta} \quad \text{and} \quad \sigma^2 = \frac{\alpha\beta}{(\alpha+\beta)^2(\alpha+\beta+1)}
$$

Signal: mean/variance requested for a confirmed-beta `X`.

## &sect; 6.9 lognormal distribution

### lognormal distribution

The continuous random variable `X` has a **lognormal distribution**
if $Y = \ln(X)$ has a normal distribution with mean $\mu$ & standard
deviation $\sigma$ . The resulting density function of `X` is

$$
f(x; \mu, \sigma) = \begin{cases}
                       \frac{1}{\sqrt{2\pi}\sigma x} e^{-\frac{1}{2\sigma^2}[\ln(x) - \mu]^2}, &x \geq 0, \\
                       0,                                                                      &x < 0.
                     \end{cases}
$$

Signal: `X` is positive-only & skewed (can't be normal, since it can't
go negative), but $\ln(X)$ is stated/assumed normal — e.g. quantities
that are products of many independent positive factors.

### theorem 6.7, mean & variance of the lognormal distribution

The mean and variance of the lognormal distribution are

$$
\mu_X = e^{\mu + \sigma^2/2} \quad \text{and} \quad \sigma_X^2 = e^{2\mu+\sigma^2}(e^{\sigma^2} - 1)
$$

(Here `μ`, `σ` are the mean/std. dev. of $\ln(X)$, distinguished from
$\mu_X$, $\sigma_X$, the mean/std. dev. of `X` itself.)

Signal: mean/variance requested _for `X` itself_, not for $\ln(X)$ —
don't just report `μ`, `σ` (those describe $\ln X$, not `X`); plug into
these formulas instead.

## &sect; 6.10 weibull distribution (optional)

### weibull distribution

The continuous random variable `X` has a **Weibull distribution**,
with parameters $\alpha > 0$ & $\beta > 0$, if its density function is

$$
f(x; \alpha, \beta) = \begin{cases}
                         \alpha\beta x^{\beta-1} e^{-\alpha x^{\beta}}, &x > 0, \\
                         0,                                            &\text{elsewhere}.
                       \end{cases}
$$

Reduces to the exponential distribution when $\beta = 1$ ; unlike the
exponential, it does not require the memoryless property. Used
extensively in reliability/life-testing (e.g. time to failure `T`).

Signal: a life-testing/reliability problem where failure risk plausibly
changes with age (wear-out or infant-mortality effects) — reach past
the exponential (memoryless, constant failure rate) when the problem
implies the failure rate itself changes over time.

### theorem 6.8, mean & variance of the weibull distribution

The mean and variance of the Weibull distribution are

$$
\mu = \alpha^{-1/\beta} \Gamma\left(1 + \tfrac{1}{\beta}\right) \quad \text{and} \quad \sigma^2 = \alpha^{-2/\beta} \left[\Gamma\left(1 + \tfrac{2}{\beta}\right) - \Gamma\left(1 + \tfrac{1}{\beta}\right)^2\right]
$$

Signal: mean/variance requested for a confirmed-Weibull `X` — routed
through the gamma function (definition 6.2), unlike the closed-form
means of the other §6 distributions.
