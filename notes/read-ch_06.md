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

### theorem 6.1, mean & variance of the uniform distribution

> [!IMPORTANT]
>
> The mean and variance of the uniform distribution are
>
> $$
> \mu = \frac{A+B}{2} \quad \text{and} \quad \sigma^2 = \frac{(B-A)^2}{12}
> $$

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

### theorem 6.2, mean & variance of the normal distribution

> [!IMPORTANT]
>
> The mean and variance of $n(x; \mu, \sigma)$ are $\mu$ & $\sigma^2$ ,
> respectively — hence the standard deviation is $\sigma$ .

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
> so that $P(x_1 < X < x_2) = P(z_1 < Z < z_2)$, with
> $z_i = (x_i - \mu)/\sigma$. Table A.3 tabulates $P(Z < z)$.

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

### theorem 6.4, mean & variance of the gamma distribution

The mean and variance of the gamma distribution are
$\mu = \alpha\beta$ & $\sigma^2 = \alpha\beta^2$.

### corollary 6.1, mean & variance of the exponential distribution

The mean and variance of the exponential distribution are $\mu = \beta$
& $\sigma^2 = \beta^2$.

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

### theorem 6.5, mean & variance of the chi-squared distribution

> [!IMPORTANT]
>
> The mean and variance of the chi-squared distribution are $\mu = v$
> & $\sigma^2 = 2v$ .

## &sect; 6.8 beta distribution

### definition 6.3, beta function

A **beta function** is defined by

$$
B(\alpha, \beta) = \int_0^1 x^{\alpha - 1}(1-x)^{\beta-1} dx = \frac{\Gamma(\alpha)\Gamma(\beta)}{\Gamma(\alpha + \beta)}, \quad \text{for } \alpha, \beta > 0.
$$

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

### theorem 6.6, mean & variance of the beta distribution

The mean and variance of a beta distribution with parameters `α` & `β`
are

$$
\mu = \frac{\alpha}{\alpha+\beta} \quad \text{and} \quad \sigma^2 = \frac{\alpha\beta}{(\alpha+\beta)^2(\alpha+\beta+1)}
$$

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

### theorem 6.7, mean & variance of the lognormal distribution

The mean and variance of the lognormal distribution are

$$
\mu_X = e^{\mu + \sigma^2/2} \quad \text{and} \quad \sigma_X^2 = e^{2\mu+\sigma^2}(e^{\sigma^2} - 1)
$$

(Here `μ`, `σ` are the mean/std. dev. of $\ln(X)$, distinguished from
$\mu_X$, $\sigma_X$, the mean/std. dev. of `X` itself.)

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

### theorem 6.8, mean & variance of the weibull distribution

The mean and variance of the Weibull distribution are

$$
\mu = \alpha^{-1/\beta} \Gamma\left(1 + \tfrac{1}{\beta}\right) \quad \text{and} \quad \sigma^2 = \alpha^{-2/\beta} \left[\Gamma\left(1 + \tfrac{2}{\beta}\right) - \Gamma\left(1 + \tfrac{1}{\beta}\right)^2\right]
$$
