## &sect; 7.2 transformations of variables

### theorem 7.1, distribution of a 1-1 transformation (discrete, 1 variable)

> [!IMPORTANT]
>
> Suppose `X` is a discrete random variable with probability
> distribution `f(x)`. Let $Y = u(X)$ define a one-to-one
> transformation between the values of `X` & `Y` so that $y = u(x)$ can
> be uniquely solved for `x` in terms of `y`, say $x = w(y)$. Then the
> probability distribution of `Y` is
>
> $$
> g(y) = f[w(y)]
> $$

### theorem 7.2, distribution of a 1-1 transformation (discrete, 2 variables)

> [!IMPORTANT]
>
> Suppose $X_1, X_2$ are discrete random variables with joint
> distribution $f(x_1, x_2)$. Let $Y_1 = u_1(X_1,X_2)$,
> $Y_2 = u_2(X_1,X_2)$ define a one-to-one transformation, uniquely
> solvable as $x_1 = w_1(y_1,y_2)$, $x_2 = w_2(y_1,y_2)$. Then the joint
> probability distribution of $Y_1, Y_2$ is
>
> $$
> g(y_1,y_2) = f[w_1(y_1,y_2), w_2(y_1,y_2)]
> $$

### theorem 7.3, distribution of a 1-1 transformation (continuous, 1 variable)

> [!IMPORTANT]
>
> Suppose `X` is a continuous random variable with distribution `f(x)`.
> Let $Y = u(X)$ define a one-to-one correspondence, uniquely solvable
> as $x = w(y)$. Then the probability distribution of `Y` is
>
> $$
> g(y) = f[w(y)]\,|J|
> $$
>
> where $J = w'(y)$ is the **Jacobian** of the transformation.

### theorem 7.4, distribution of a 1-1 transformation (continuous, 2 variables)

> [!IMPORTANT]
>
> Suppose $X_1, X_2$ are continuous random variables with joint
> distribution $f(x_1,x_2)$. Let $Y_1 = u_1(X_1,X_2)$,
> $Y_2 = u_2(X_1,X_2)$ define a one-to-one transformation, uniquely
> solvable as $x_1 = w_1(y_1,y_2)$, $x_2 = w_2(y_1,y_2)$. Then
>
> $$
> g(y_1,y_2) = f[w_1(y_1,y_2), w_2(y_1,y_2)]\,|J|
> $$
>
> where the Jacobian is the $2 \times 2$ determinant
>
> $$
> J = \begin{vmatrix} \frac{\partial x_1}{\partial y_1} & \frac{\partial x_1}{\partial y_2} \\ \frac{\partial x_2}{\partial y_1} & \frac{\partial x_2}{\partial y_2} \end{vmatrix}
> $$

### theorem 7.5, distribution of a not-1-1 transformation (continuous)

> [!IMPORTANT]
>
> Suppose `X` is continuous with distribution `f(x)`, & $Y = u(X)$ is
> *not* one-to-one. If `X`'s domain partitions into `k` mutually
> disjoint sets on each of which the inverse
> $x_i = w_i(y), i = 1, \ldots, k$ defines a one-to-one correspondence,
> then the probability distribution of `Y` is
>
> $$
> g(y) = \sum_{i=1}^k f[w_i(y)]\,|J_i|, \quad J_i = w_i'(y)
> $$

## &sect; 7.3 moments and moment-generating functions

### definition 7.1, rth moment about the origin

> [!IMPORTANT]
>
> The `r`th moment about the origin of the random variable `X`,
> denoted $\mu_r'$, is given by
>
> $$
> \mu_r' = E(X^r) = \begin{cases}
>                      \sum_x x^r f(x), &\text{if } X \text{ discrete}, \\
>                      \int_{-\infty}^{\infty} x^r f(x) dx, &\text{if } X \text{ continuous}.
>                    \end{cases}
> $$
>
> Since $\mu_1' = E(X)$ & $\mu_2' = E(X^2)$: $\mu = \mu_1'$ &
> $\sigma^2 = \mu_2' - \mu^2$.

### definition 7.2, moment-generating function

> [!IMPORTANT]
>
> The **moment-generating function** of the random variable `X` is
> $E(e^{tX})$, denoted $M_X(t)$:
>
> $$
> M_X(t) = E(e^{tX}) = \begin{cases}
>                         \sum_x e^{tx} f(x), &\text{if } X \text{ discrete}, \\
>                         \int_{-\infty}^{\infty} e^{tx} f(x) dx, &\text{if } X \text{ continuous}.
>                       \end{cases}
> $$
>
> Exists only if the defining sum/integral converges.

### theorem 7.6, generating moments from the mgf

> [!IMPORTANT]
>
> Let `X` be a random variable with moment-generating function
> $M_X(t)$. Then
>
> $$
> \left.\frac{d^r M_X(t)}{dt^r}\right|_{t=0} = \mu_r'
> $$

### theorem 7.7, uniqueness theorem

> [!IMPORTANT]
>
> Let `X` & `Y` be two random variables with moment-generating
> functions $M_X(t)$ & $M_Y(t)$. If $M_X(t) = M_Y(t)$ for all `t`, then
> `X` & `Y` have the same probability distribution.

### theorem 7.8, mgf of X + a

> [!IMPORTANT]
>
> $M_{X+a}(t) = e^{at} M_X(t)$

### theorem 7.9, mgf of aX

> [!IMPORTANT]
>
> $M_{aX}(t) = M_X(at)$

### theorem 7.10, mgf of a sum of independent random variables

> [!IMPORTANT]
>
> If $X_1, X_2, \ldots, X_n$ are independent random variables with mgfs
> $M_{X_1}(t), \ldots, M_{X_n}(t)$, & $Y = X_1 + X_2 + \cdots + X_n$,
> then
>
> $$
> M_Y(t) = M_{X_1}(t) M_{X_2}(t) \cdots M_{X_n}(t)
> $$
>
> Together with theorem 7.7 (uniqueness), lets us identify the
> distribution of a sum of independent random variables from the
> product of their mgfs — e.g. the sum of independent Poissons with
> parameters $\mu_1, \mu_2$ is Poisson with parameter $\mu_1 + \mu_2$.

### theorem 7.11, linear combination of independent normal random variables

> [!IMPORTANT]
>
> If $X_1, X_2, \ldots, X_n$ are independent normal random variables
> with means $\mu_1, \ldots, \mu_n$ & variances
> $\sigma_1^2, \ldots, \sigma_n^2$, then
>
> $$
> Y = a_1 X_1 + a_2 X_2 + \cdots + a_n X_n
> $$
>
> has a normal distribution with mean
> $\mu_Y = a_1\mu_1 + a_2\mu_2 + \cdots + a_n\mu_n$ & variance
> $\sigma_Y^2 = a_1^2\sigma_1^2 + a_2^2\sigma_2^2 + \cdots + a_n^2\sigma_n^2$.
> (The normal & Poisson distributions are thus "reproductive" — a sum
> of independent variables of that type is again of that type.)

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
> has a chi-squared distribution with $v = v_1 + v_2 + \cdots + v_n$
> degrees of freedom (the chi-squared distribution is also
> reproductive).

### corollary 7.1, sum of squared standardized iid normal variables

> [!IMPORTANT]
>
> If $X_1, X_2, \ldots, X_n$ are independent, identically normally
> distributed with mean `μ` & variance $\sigma^2$, then
>
> $$
> Y = \sum_{i=1}^n \left(\frac{X_i - \mu}{\sigma}\right)^2
> $$
>
> has a chi-squared distribution with $v = n$ degrees of freedom.

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
