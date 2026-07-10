## &sect; 4.1 mean of a random variable

### definition 4.1, mean (expected value) of a random variable

> [!IMPORTANT]
>
> Let `X` be a random variable with probability distribution `f(x)`. The
> mean, or expected value, of `X` is
>
> $$
> \mu = E(X) = \sum_x x f(x)
> $$
>
> if `X` is discrete, and
>
> $$
> \mu = E(X) = \int_{-\infty}^{\infty} x f(x) dx
> $$
>
> if `X` is continuous.

### theorem 4.1, mean (expected value) of a function of a random variable

> [!IMPORTANT]
>
> Let `X` be a random variable with probability distribution `f(x)`. The
> expected value of the random variable `g(X)` is
>
> $$
> \mu_{g(X)} = E[g(X)] = \sum_x g(x) f(x)
> $$
>
> if `X` is discrete, and
>
> $$
> \mu_{g(X)} = E[g(X)] = \int_{-\infty}^{\infty} g(x) f(x) dx
> $$
>
> if `X` is continuous.

### definition 4.2, mean (expected value) of a function of two random variables

> [!IMPORTANT]
>
> Let `X` & `Y` be random variables with joint probability distribution
> `f(x,y)`. The mean, or expected value, of the random variable `g(X,Y)`
> is
>
> $$
> \mu_{g(X,Y)} = E[g(X,Y)] = \sum_x \sum_y g(x,y) f(x,y)
> $$
>
> if `X` & `Y` are discrete, and
>
> $$
> \mu_{g(X,Y)} = E[g(X,Y)] = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} g(x,y) f(x,y) \, dx \, dy
> $$
>
> if `X` & `Y` are continuous. Setting $g(X,Y) = X$ gives $\mu_X$ ; setting
> `g(X,Y) = Y` gives $\mu_Y$.

## &sect; 4.2 variance and covariance of random variables

### definition 4.3, variance of a random variable

> [!IMPORTANT]
>
> Let `X` be a random variable with probability distribution `f(x)` &
> mean `μ`. The variance of `X` is
>
> $$
> \sigma^2 = E[(X - \mu)^2] = \sum_x (x - \mu)^2 f(x)
> $$
>
> if `X` is discrete, and
>
> $$
> \sigma^2 = E[(X - \mu)^2] = \int_{-\infty}^{\infty} (x - \mu)^2 f(x) dx
> $$
>
> if `X` is continuous. The positive square root of the variance, `σ`,
> is called the **standard deviation** of `X`.

### theorem 4.2, alternative (preferred) variance formula

> [!IMPORTANT]
>
> The variance of a random variable `X` is
>
> $$
> \sigma^2 = E(X^2) - \mu^2
> $$

### theorem 4.3, variance of a function of a random variable

> [!IMPORTANT]
>
> Let `X` be a random variable with probability distribution `f(x)`. The
> variance of the random variable `g(X)` is
>
> $$
> \sigma^2_{g(X)} = E\{[g(X) - \mu_{g(X)}]^2\} = \sum_x [g(x) - \mu_{g(X)}]^2 f(x)
> $$
>
> if `X` is discrete, and
>
> $$
> \sigma^2_{g(X)} = E\{[g(X) - \mu_{g(X)}]^2\} = \int_{-\infty}^{\infty} [g(x) - \mu_{g(X)}]^2 f(x) dx
> $$
>
> if `X` is continuous.

### definition 4.4, covariance of two random variables

> [!IMPORTANT]
>
> Let `X` & `Y` be random variables with joint probability distribution
> `f(x,y)`. The covariance of `X` & `Y` is
>
> $$
> \sigma_{XY} = E[(X - \mu_X)(Y - \mu_Y)] = \sum_x \sum_y (x - \mu_X)(y - \mu_Y) f(x,y)
> $$
>
> if `X` & `Y` are discrete, and
>
> $$
> \sigma_{XY} = E[(X - \mu_X)(Y - \mu_Y)] = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} (x - \mu_X)(y - \mu_Y) f(x,y) \, dx \, dy
> $$
>
> if `X` & `Y` are continuous. When `X` & `Y` are statistically
> independent, `σ_XY = 0` (see corollary 4.5, below) — the converse
> does not generally hold, since covariance only captures the _linear_
> relationship between `X` & `Y`.

### theorem 4.4, alternative (preferred) covariance formula

> [!IMPORTANT]
>
> The covariance of two random variables `X` & `Y` with means `μ_X` &
> `μ_Y`, respectively, is
>
> $$
> \sigma_{XY} = E(XY) - \mu_X \mu_Y
> $$

### definition 4.5, correlation coefficient

> [!IMPORTANT]
>
> Let `X` & `Y` be random variables with covariance `σ_XY` & standard
> deviations `σ_X` & `σ_Y`, respectively. The correlation coefficient of
> `X` & `Y` is
>
> $$
> \rho_{XY} = \frac{\sigma_{XY}}{\sigma_X \sigma_Y}
> $$
>
> `ρ_XY` is free of the units of `X` & `Y`, & satisfies
> $-1 \leq \rho_{XY} \leq 1$. It is 0 when `σ_XY = 0`. Where there is an
> exact linear dependency, $Y \equiv a + bX$, then `ρ_XY = 1` if `b > 0`
> & `ρ_XY = -1` if `b < 0`.

## &sect; 4.3 means and variances of linear combinations of random variables

### theorem 4.5, mean of a linear function of one random variable

> [!IMPORTANT]
>
> If `a` & `b` are constants, then
>
> $$
> E(aX + b) = aE(X) + b
> $$

### corollary 4.1 & 4.2, of theorem 4.5

> [!IMPORTANT]
>
> Setting `a = 0`: $E(b) = b$. \
> Setting `b = 0`: $E(aX) = aE(X)$.

### theorem 4.6, mean of a sum/difference of functions of one random variable

> [!IMPORTANT]
>
> The expected value of the sum or difference of two or more functions
> of a random variable `X` is the sum or difference of the expected
> values of the functions:
>
> $$
> E[g(X) \pm h(X)] = E[g(X)] \pm E[h(X)]
> $$

### theorem 4.7, mean of a sum/difference of functions of two random variables

> [!IMPORTANT]
>
> $$
> E[g(X,Y) \pm h(X,Y)] = E[g(X,Y)] \pm E[h(X,Y)]
> $$

### corollary 4.3 & 4.4, of theorem 4.7

> [!IMPORTANT]
>
> Setting $g(X,Y) = g(X)$ & $h(X,Y) = h(Y)$:
> $E[g(X) \pm h(Y)] = E[g(X)] \pm E[h(Y)]$. \
> Setting $g(X,Y) = X$ & $h(X,Y) = Y$: $E[X \pm Y] = E[X] \pm E[Y]$.

### theorem 4.8, mean of a product of independent random variables

> [!IMPORTANT]
>
> Let `X` & `Y` be two independent random variables. Then
>
> $$
> E(XY) = E(X)E(Y)
> $$

### corollary 4.5, of theorem 4.8

> [!IMPORTANT]
>
> Let `X` & `Y` be two independent random variables. Then $\sigma_{XY} = 0$
> (proved via theorem 4.4 & theorem 4.8, above).

### theorem 4.9, variance of a linear combination of two random variables

> [!IMPORTANT]
>
> If `X` & `Y` are random variables with joint probability distribution
> `f(x,y)` & `a`, `b`, `c` are constants, then
>
> $$
> \sigma^2_{aX+bY+c} = a^2 \sigma^2_X + b^2 \sigma^2_Y + 2ab\sigma_{XY}
> $$

### corollaries 4.6&ndash;4.11, of theorem 4.9

> [!IMPORTANT]
>
> 4.6 (`b = 0`): $\sigma^2_{aX+c} = a^2\sigma^2_X = a^2\sigma^2$. \
> 4.7 (`a = 1, b = 0`): $\sigma^2_{X+c} = \sigma^2_X = \sigma^2$. \
> 4.8 (`b = 0, c = 0`): $\sigma^2_{aX} = a^2\sigma^2_X = a^2\sigma^2$. \
> 4.9 (`X`, `Y` independent, via 4.5): $\sigma^2_{aX+bY} = a^2\sigma^2_X + b^2\sigma^2_Y$. \
> 4.10 (`X`, `Y` independent, `b \to -b` in 4.9): $\sigma^2_{aX-bY} = a^2\sigma^2_X + b^2\sigma^2_Y$. \
> 4.11 (`X_1, \ldots, X_n` mutually independent): $\sigma^2_{a_1X_1 + \cdots + a_nX_n} = a_1^2\sigma^2_{X_1} + \cdots + a_n^2\sigma^2_{X_n}$.
>
> Adding/subtracting a constant does not change variance (4.6, 4.7);
> multiplying/dividing by a constant scales variance by its square (4.6, 4.8).

## &sect; 4.4 chebyshev's theorem

### theorem 4.10, chebyshev's theorem

> [!IMPORTANT]
>
> The probability that any random variable `X` will assume a value
> within `k` standard deviations of the mean is at least $1 - 1/k^2$:
>
> $$
> P(\mu - k\sigma < X < \mu + k\sigma) \geq 1 - \frac{1}{k^2}
> $$
>
> Distribution-free (holds for any distribution) & gives only a lower
> bound — use only when the form of the distribution is unknown.
