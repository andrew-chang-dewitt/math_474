## &sect; 1.3 measures of location: the sample mean and median

### definition 1.1, sample mean

> [!IMPORTANT]
>
> Suppose that the observations in a sample are $x_1, x_2, \ldots, x_n$.
> The **sample mean**, denoted by $\bar{x}$, is
>
> $$
> \bar{x} = \sum_{i=1}^n \frac{x_i}{n} = \frac{x_1 + x_2 + \cdots + x_n}{n}
> $$

### definition 1.2, sample median

> [!IMPORTANT]
>
> Given that the observations in a sample are $x_1, x_2, \ldots, x_n$,
> arranged in increasing order of magnitude, the **sample median** is
>
> $$
> \tilde{x} = \begin{cases}
>               x_{(n+1)/2}, &\text{if } n \text{ is odd}, \\
>               \frac12 (x_{n/2} + x_{n/2 + 1}), &\text{if } n \text{ is even}.
>             \end{cases}
> $$
>
> Unlike the mean, the median is uninfluenced by extreme values or
> outliers.

## &sect; 1.4 measures of variability

### definition 1.3, sample variance & sample standard deviation

> [!IMPORTANT]
>
> The **sample variance**, denoted by $s^2$, is given by
>
> $$
> s^2 = \sum_{i=1}^n \frac{(x_i - \bar{x})^2}{n - 1}
> $$
>
> The **sample standard deviation**, denoted by `s`, is the positive
> square root of $s^2$:
>
> $$
> s = \sqrt{s^2}
> $$
>
> `n - 1` is the **degrees of freedom** associated with the variance
> estimate — since $\sum_{i=1}^n (x_i - \bar{x}) = 0$, only `n - 1` of
> the `n` squared deviations are independent.
>
> The **sample range**, $x_{\max} - x_{\min}$, is the simplest measure
> of spread, but the sample standard deviation is used most often.
