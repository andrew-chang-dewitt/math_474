## &sect; 7.2 transformations of variables

### theorem 7.1, distribution of a 1-1 transformation (discrete, 1 variable)

Suppose `X` is a discrete random variable with probability
distribution `f(x)`. Let $Y = u(X)$ define a one-to-one
transformation between the values of `X` & `Y` so that $y = u(x)$ can
be uniquely solved for `x` in terms of `y`, say $x = w(y)$. Then the
probability distribution of `Y` is

$$
g(y) = f[w(y)]
$$

Signal: `X` is discrete, `Y` is a relabeling of `X` via a strictly
monotonic (bijective) function — just substitute the inverse `w(y)`
into `f` directly, no Jacobian/derivative involved (that only enters
once `X` is continuous, theorem 7.3).

### theorem 7.2, distribution of a 1-1 transformation (discrete, 2 variables)

Suppose $X_1, X_2$ are discrete random variables with joint
distribution $f(x_1, x_2)$. Let $Y_1 = u_1(X_1,X_2)$ , $Y_2 = u_2(X_1,X_2)$ define
a one-to-one transformation, uniquely solvable
as $x_1 = w_1(y_1,y_2)$, $x_2 = w_2(y_1,y_2)$ . Then the joint
probability distribution of $Y_1, Y_2$ is

$$
g(y_1,y_2) = f[w_1(y_1,y_2), w_2(y_1,y_2)]
$$

Signal: same idea as theorem 7.1, extended to a discrete *joint* pair
$(X_1,X_2)$ mapped bijectively to a new pair $(Y_1,Y_2)$.

### theorem 7.3, distribution of a 1-1 transformation (continuous, 1 variable)

Suppose `X` is a continuous random variable with distribution `f(x)`.
Let $Y = u(X)$ define a one-to-one correspondence, uniquely solvable
as $x = w(y)$. Then the probability distribution of `Y` is

$$
g(y) = f[w(y)]\,|J|
$$

where $J = w'(y)$ is the **Jacobian** of the transformation.

Signal: `X` is continuous & `Y` is defined as a strictly monotonic
function of `X` (e.g. a shift/scale like $Y=aX+b$ ) — e.g. hw-05 7.9
( $Y = X + 4$ ). Same substitution as theorem 7.1, but multiplied by
$|J|=|w'(y)|$ to preserve total probability under the change of
variable.

### theorem 7.4, distribution of a 1-1 transformation (continuous, 2 variables)

Suppose $X_1, X_2$ are continuous random variables with joint
distribution $f(x_1,x_2)$. Let $Y_1 = u_1(X_1,X_2)$,
$Y_2 = u_2(X_1,X_2)$ define a one-to-one transformation, uniquely
solvable as $x_1 = w_1(y_1,y_2)$, $x_2 = w_2(y_1,y_2)$. Then

$$
g(y_1,y_2) = f[w_1(y_1,y_2), w_2(y_1,y_2)]\,|J|
$$

where the Jacobian is the $2 \times 2$ determinant

$$
J = \begin{vmatrix} \frac{\partial x_1}{\partial y_1} \& \frac{\partial x_1}{\partial y_2} \\ \frac{\partial x_2}{\partial y_1} \& \frac{\partial x_2}{\partial y_2} \end{vmatrix}
$$

Signal: a continuous joint pair $(X_1,X_2)$ is being re-expressed as a
new pair $(Y_1,Y_2)$ — the go-to machinery whenever a problem wants
the density of some combination of two jointly-distributed continuous
variables (e.g. hw-05 7.11's "kerosene left in the tank", $Y-X$ ):
introduce an auxiliary second output variable to keep the map 1-1,
apply this theorem, then find the marginal (definition 3.10) of the
one output you actually care about.

### theorem 7.5, distribution of a not-1-1 transformation (continuous)

Suppose `X` is continuous with distribution `f(x)`, & $Y = u(X)$ is
_not_ one-to-one. If `X`'s domain partitions into `k` mutually
disjoint sets on each of which the
inverse $x_i = w_i(y), i = 1, \ldots, k$ defines
a one-to-one correspondence, then the probability distribution
of `Y` is

$$
g(y) = \sum_{i=1}^k f[w_i(y)]\,|J_i|, \quad J_i = w_i'(y)
$$

Signal: `Y=u(X)` is many-to-one — most commonly a squaring/absolute-
value transform (e.g. $Y=X^2$ ) where two `X` values map to the same
`Y` — split into branches where `u` *is* 1-1 (theorem 7.3 per branch),
then sum their contributions.

## &sect; 7.3 moments and moment-generating functions

### definition 7.1, rth moment about the origin

> [!IMPORTANT]
>
> The `r`th moment about the origin of the random variable `X`,
> denoted $\mu_r'$, is given by
>
> $$
> \mu_r' = E(X^r) = \begin{cases}
>                      \sum_x x^r f(x),                     &\text{if } X \text{ discrete}, \\
>                      \int_{-\infty}^{\infty} x^r f(x) dx, &\text{if } X \text{ continuous}.
>                    \end{cases}
> $$
>
> Since $\mu_1' = E(X)$ & $\mu_2' = E(X^2)$: $\mu = \mu_1'$ & $\sigma^2 = \mu_2' - \mu^2$ .

Signal: a problem asks for a specific moment $E(X^r)$ by name (rather
than mean/variance directly) — most often as a stepping stone toward
the mgf below, since theorem 7.6 recovers every $\mu_r'$ from
$M_X(t)$ in one shot.

### definition 7.2, moment-generating function

> [!IMPORTANT]
>
> The **moment-generating function** of the random variable `X`
> is $E(e^{tX})$ , denoted $M_X(t)$ :
>
> $$
> M_X(t) = E(e^{tX}) = \begin{cases}
>                         \sum_x e^{tx} f(x),                     &\text{if } X \text{ discrete}, \\
>                         \int_{-\infty}^{\infty} e^{tx} f(x) dx, &\text{if } X \text{ continuous}.
>                       \end{cases}
> $$
>
> Exists only if the defining sum/integral converges.

Signal: a problem explicitly asks you to "find the moment-generating
function of `X`" — the setup step before using theorems 7.6-7.12 to
extract moments or identify sums of independent variables.

### theorem 7.6, generating moments from the mgf

> [!IMPORTANT]
>
> Let `X` be a random variable with moment-generating
> function $M_X(t)$ . Then
>
> $$
> \left.\frac{d^r M_X(t)}{dt^r}\right|_{t=0} = \mu_r'
> $$

Signal: you already have (or just derived) $M_X(t)$ & the problem
wants a moment ( $E(X)$, $E(X^2)$, etc.) — differentiate `r` times &
evaluate at $t=0$ instead of computing definition 7.1's sum/integral
directly.

### theorem 7.7, uniqueness theorem

> [!IMPORTANT]
>
> Let `X` & `Y` be two random variables with moment-generating
> functions $M_X(t)$ & $M_Y(t)$. If $M_X(t) = M_Y(t)$ for all `t`, then
> `X` & `Y` have the same probability distribution.

Signal: a problem wants you to *identify* the distribution of some
derived random variable (e.g. a sum) — compute its mgf, recognize the
algebraic form as matching a known named distribution's mgf, & invoke
this theorem to conclude they're the same distribution. This is what
makes theorems 7.10-7.12 useful in practice.

### theorem 7.8, mgf of X + a

> [!IMPORTANT]
>
> $M_{X+a}(t) = e^{at} M_X(t)$

Signal: building block — a constant shift of `X`; rarely the whole
point of a problem, mostly used inside a larger mgf derivation.

### theorem 7.9, mgf of aX

> [!IMPORTANT]
>
> $M_{aX}(t) = M_X(at)$

Signal: building block — a constant scaling of `X`; same role as
theorem 7.8, used inside larger derivations (e.g. standardizing
$Z=(X-\mu)/\sigma$ via its mgf).

### theorem 7.10, mgf of a sum of independent random variables

> [!IMPORTANT]
>
> If $X_1, X_2, \ldots, X_n$ are independent random variables with
> mgfs $M_{X_1}(t), \ldots, M_{X_n}(t)$ ,
> & $Y = X_1 + X_2 + \cdots + X_n$ , then
>
> $$
> M_Y(t) = M_{X_1}(t) M_{X_2}(t) \cdots M_{X_n}(t)
> $$
>
> Together with theorem 7.7 (uniqueness), lets us identify the
> distribution of a sum of independent random variables from the
> product of their mgfs — e.g. the sum of independent Poissons with
> parameters $\mu_1, \mu_2$ is Poisson with parameter $\mu_1 + \mu_2$.

Signal: a problem sums several *independent* random variables & asks
what the sum's distribution is — multiply the individual mgfs, then
match the product's shape to a known distribution (theorem 7.7).
Theorems 7.11/7.12 below are named special cases of this pattern for
normal & chi-squared summands, respectively.

### theorem 7.11, linear combination of independent normal random variables

> [!IMPORTANT]
>
> If $X_1, X_2, \ldots, X_n$ are independent normal random variables
> with means $\mu_1, \ldots, \mu_n$ & variances $\sigma_1^2, \ldots, \sigma_n^2$ ,
> then
>
> $$
> Y = a_1 X_1 + a_2 X_2 + \cdots + a_n X_n
> $$
>
> has a normal distribution with
> mean $\mu_Y = a_1\mu_1 + a_2\mu_2 + \cdots + a_n\mu_n$ & variance $\sigma_Y^2 = a_1^2\sigma_1^2 + a_2^2\sigma_2^2 + \cdots + a_n^2\sigma_n^2$ .
> (The normal & Poisson distributions are thus "reproductive" — a sum
> of independent variables of that type is again of that type.)

Signal: specifically theorem 7.10 applied to independent *normal*
summands — a weighted sum/difference of independent normals is
asked for directly, without needing to derive the mgf from scratch;
mean/variance come straight from theorem 4.9's corollaries (§4.3).

### theorem 7.12, sum of independent chi-squared random variables

> [!IMPORTANT]
>
> If $X_1, X_2, \ldots, X_n$ are mutually independent chi-squared
> random variables with $v_1, v_2, \ldots, v_n$ degrees of freedom, then
>
> $$
> Y = X_1 + X_2 + \cdots + X_n
> $$
>
> has a chi-squared distribution with $v = v_1 + v_2 + \cdots + v_n$ degrees
> of freedom (the chi-squared distribution is also reproductive).

Signal: theorem 7.10 applied to independent chi-squared summands —
degrees of freedom simply add.

### corollary 7.1, sum of squared standardized iid normal variables

> [!IMPORTANT]
>
> If $X_1, X_2, \ldots, X_n$ are independent, identically normally
> distributed with mean $\mu$ & variance $\sigma^2$ , then
>
> $$
> Y = \sum_{i=1}^n \left(\frac{X_i - \mu}{\sigma}\right)^2
> $$
>
> has a chi-squared distribution with $v = n$ degrees of freedom.

Signal: a sum of `n` *squared, standardized* normal variables, all
sharing the same `μ`, `σ` — this is the identity behind why sample
variance (definition 1.3) has a chi-squared sampling distribution in
later inference chapters.

### corollary 7.2, sum of squared standardized independent normal variables

> [!IMPORTANT]
>
> If $X_1, X_2, \ldots, X_n$ are independent, & $X_i$ is normal with
> mean $\mu_i$ & variance $\sigma_i^2$ for $i = 1, \ldots, n$, then
>
> $$
> Y = \sum_{i=1}^n \left(\frac{X_i - \mu_i}{\sigma_i}\right)^2
> $$
>
> has a chi-squared distribution with $v = n$ degrees of freedom.

Signal: same as corollary 7.1, but the `n` normals no longer need
identical `μ`, `σ` — each term is standardized with its *own*
parameters before squaring & summing.
