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

Signal: "find the average/mean/expected value of `X`" itself (not a
function of it — that's theorem 4.1 below) — e.g. hw-04 #1 (average
imperfections per 10m), #2 (mean of a given pmf).

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

Signal: the quantity you want the expectation of is a *function* of
`X` — a profit/refund/cost formula, or `g(X)` given explicitly — e.g.
hw-04 #7 (expected gain), #19 (cost incl. a $50X^2$ refund), #20
( $E[e^{2X/3}]$ ).

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

Signal: same as theorem 4.1, but `g` combines *two* random variables
from a joint distribution — e.g. hw-04 #10 ( $\mu_X$, $\mu_Y$ from a
joint table), #23(a) ( $E(XY^2)$ ), #65 ( $E(X+Y)$, $E(XY)$ for two
dice).

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

Signal: a problem asks for variance/standard deviation directly "by
definition" (as opposed to naming theorem 4.2's shortcut) — e.g.
hw-04 #34.

### theorem 4.2, alternative (preferred) variance formula

> [!IMPORTANT]
>
> The variance of a random variable `X` is
>
> $$
> \sigma^2 = E(X^2) - \mu^2
> $$

Signal: usually faster than definition 4.3 in practice — reach for it
whenever a problem doesn't force the definitional route, & especially
when it names the theorem explicitly, e.g. hw-04 #35 ("using Theorem
4.2, find the variance of `X`").

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

Signal: general form for the variance of a transformed variable
`g(X)`; when `g` is specifically linear ( $aX+b$ ), skip straight to
corollary 4.6 below instead of grinding through this definition.

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

Signal: a problem asks how two variables move together, or is
building toward correlation (definition 4.5) — e.g. the setup behind
hw-04 #48's correlation-coefficient question.

### theorem 4.4, alternative (preferred) covariance formula

> [!IMPORTANT]
>
> The covariance of two random variables `X` & `Y` with means `μ_X` &
> `μ_Y`, respectively, is
>
> $$
> \sigma_{XY} = E(XY) - \mu_X \mu_Y
> $$

Signal: same relationship to definition 4.4 as theorem 4.2 has to
definition 4.3 — the practical shortcut once you already have $E(XY)$
& the two means.

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

Signal: a problem states (or asks you to prove) an *exact* linear
relationship $Y = a + bX$ & wants the sign/value of $\rho_{XY}$ — e.g.
hw-04 #48.

## &sect; 4.3 means and variances of linear combinations of random variables

### theorem 4.5, mean of a linear function of one random variable

> [!IMPORTANT]
>
> If `a` & `b` are constants, then
>
> $$
> E(aX + b) = aE(X) + b
> $$

Signal: `X` is rescaled/shifted by known constants ( $Y = aX+b$ ) & you
need the new mean — e.g. hw-04 #43, mean of $Y = 3X - 2$.

### corollary 4.1 & 4.2, of theorem 4.5

> [!IMPORTANT]
>
> Setting `a = 0`: $E(b) = b$. \
> Setting `b = 0`: $E(aX) = aE(X)$.

Signal: theorem 4.5 with only a shift ( $a=0$ ) or only a scaling
( $b=0$ ) in play — mostly a bookkeeping simplification inside a larger
derivation rather than something a problem names directly.

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

Signal: an expectation you're computing splits naturally into two
pieces built from the same `X` — linearity lets you compute each
piece separately & add/subtract.

### theorem 4.7, mean of a sum/difference of functions of two random variables

> [!IMPORTANT]
>
> $$
> E[g(X,Y) \pm h(X,Y)] = E[g(X,Y)] \pm E[h(X,Y)]
> $$

Signal: same idea as theorem 4.6, generalized to functions built from
two random variables at once.

### corollary 4.3 & 4.4, of theorem 4.7

> [!IMPORTANT]
>
> Setting $g(X,Y) = g(X)$ & $h(X,Y) = h(Y)$:
> $E[g(X) \pm h(Y)] = E[g(X)] \pm E[h(Y)]$. \
> Setting $g(X,Y) = X$ & $h(X,Y) = Y$: $E[X \pm Y] = E[X] \pm E[Y]$.

Signal: a problem asks directly for $E(X+Y)$, $E(X-Y)$, or a weighted
version like $E(2X-3Y)$ — split it into the individual means (no
independence required) — e.g. hw-04 #65(a)/(b), #60(a).

### theorem 4.8, mean of a product of independent random variables

> [!IMPORTANT]
>
> Let `X` & `Y` be two independent random variables. Then
>
> $$
> E(XY) = E(X)E(Y)
> $$

Signal: a problem asks for $E(XY)$ (or a product like $E(Z)=E(XY)$ )
& states or shows `X`, `Y` are independent — e.g. hw-04 #60(b), #64,
#65(c). If independence isn't given, fall back to definition 4.2
instead.

### corollary 4.5, of theorem 4.8

> [!IMPORTANT]
>
> Let `X` & `Y` be two independent random variables. Then $\sigma_{XY} = 0$
> (proved via theorem 4.4 & theorem 4.8, above).

Signal: independence is given/established & you need covariance —
it's immediately zero, no computation required.

### theorem 4.9, variance of a linear combination of two random variables

> [!IMPORTANT]
>
> If `X` & `Y` are random variables with joint probability distribution
> `f(x,y)` & `a`, `b`, `c` are constants, then
>
> $$
> \sigma^2_{aX+bY+c} = a^2 \sigma^2_X + b^2 \sigma^2_Y + 2ab\sigma_{XY}
> $$

Signal: variance of a weighted combination of two (possibly
dependent) random variables — the general case before the
independence shortcuts in corollaries 4.9/4.10 below drop the
covariance term.

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

Signal: 4.6 is the variance twin of theorem 4.5 — e.g. hw-04 #43's
variance of $Y=3X-2$. 4.9-4.11 are the ones to reach for whenever
you're summing *independent* variables' variances — most notably,
theorem 5.1's binomial variance $\sigma^2=npq$ is corollary 4.11
applied to `n` independent Bernoulli indicators.

## &sect; 4.4 chebyshev's theorem

### theorem 4.10, chebyshev's theorem

The probability that any random variable `X` will assume a value
within `k` standard deviations of the mean is at least $1 - 1/k^2$:

$$
P(\mu - k\sigma < X < \mu + k\sigma) \geq 1 - \frac{1}{k^2}
$$

Distribution-free (holds for any distribution) & gives only a lower
bound — use only when the form of the distribution is unknown.

Signal: a problem gives only `μ` & `σ` (no named distribution, no pmf/
pdf) & asks for a probability bound "within `k` standard deviations" —
that's the tell that an exact answer isn't obtainable & Chebyshev's
guaranteed-minimum is what's being asked for instead.
