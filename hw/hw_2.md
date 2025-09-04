:::hgroup{.titlegroup}

# hw 2

Andrew Chang-DeWitt \
Math 474, Fall 2025 \
2025 Sept. 2

:::

:::section

## problem 1

for sample, $S$:

$$
\begin{aligned}
\because && S := \{
                  & 18.71, 21.41, 20.72, 21.81, 19.29, \\
         &&       & 22.43, 20.17, 23.71, 19.44, 20.50, \\
         &&       & 18.92, 20.33, 23.00, 22.85, 19.25, \\
         &&       & 21.77, 22.11, 19.77, 18.04, 21.12
                 \}
\end{aligned}
$$

### part (a)

find the mean, $\bar{s}$:

$$
\begin{aligned}
\because   && \bar{s} &= \sum_{i=1}^{n} \frac{s_i}{n}, && \text{where } s_i \in S \text{ and } n = |S| \\
           &&         &= 415.35 / 20 \\
\therefore && \bar{s} &\approx 20.77
\end{aligned}
$$

and the median, $s_{med}$:

$$
\begin{aligned}
\because   &&      S' &:= \textit{Sorted}(S) \\
           &&         &\equiv \begin{aligned} \{
                          & 18.04, 18.71, 18.92, 19.25, 19.29, \\
                          & 19.44, 19.77, 20.17, 20.33, 20.50, \\
                          & 20.72, 21.12, 21.41, 21.77, 21.81, \\
                          & 22.11, 22.43, 22.85, 23.00, 23.71
                         \}, \end{aligned} \\
           && s_{med} &:= \text{ middle value in } S',
                \text{and}\\
           &&     |S| &=  20 \\

\therefore && s_{med} &= \frac{
                             s_{\frac{\big\lvert{S}\big\rvert}{2}}
                           + s_{\frac{\big\lvert{S}\big\rvert}{2} + 1}
                         }{ 2 } \\
           &&         &= \frac{ s_{10} + s_{11} }{ 2 } \\
           &&         &= \frac{ 20.50 + 20.72 }{ 2 } \\
           && s_{med} &\approx 20.61 && \blacksquare
\end{aligned}
$$

### part (b)

find 10% trimmed mean for $S$:

$$
\begin{aligned}
\because   && |S| &= 20 \implies 10\% \text{ of } |S| \equiv 2 \\
           && S_t &:= \textit{Trim}(S',10\%) \\
           &&     &\equiv \begin{aligned} \{
                     & 18.92, 19.25, 19.29, 19.44, 19.77, \\
                     & 20.17, 20.33, 20.50, 20.72, 21.12, \\
                     & 21.41, 21.77, 21.81, 22.11, 22.43, \\
                     & 22.85
                    \} \end{aligned} \\
           && \bar{s_t} &= 331.89 / 16 \\
\therefore && \bar{s_t} &\approx {20.74} && \blacksquare
\end{aligned}
$$

### part (c)

dot plot of $S$:

<img id="img-1-2-c" alt="dot plot of S"/>

### part (d)

any outliers using only above analyses?

no, $\bar{s}$, $\bar{{s}_{t}}$ & $s_{median}$ are all pretty close to the
same value at $20.77$, $20.74$, & $20.61$ respectively.

:::
:::section

## problem 2

given datasets on tensile strength of some polymer before aging, $B$, & after aging, $A$:

$$
\begin{aligned}
\because && B &:= \begin{aligned}
                    \{
                     & 227, 222, 218, 217, 225, \\
                     & 218, 216, 229, 228, 221
                    \}, \text{and}
                 \end{aligned} \\
         && A &:= \begin{aligned}
                    \{
                     & 219, 214, 215, 211, 209, \\
                     & 218, 203, 205, 201, 205
                    \}
                 \end{aligned} \\
\end{aligned}
$$

### part (a)

dot plot of $B$ & $A$:

<img id="img-1-3-a" alt="dot plot of B & A"/>

### part (b)

yes, it does appear that aging affected the polymer's tensile strength
in a negative manner. nearly all data points in series $A$ measure
lower than nearly all data points in series $B$.

### part (c)

find the mean for each sample, $\bar{b}$ and $\bar{a}$:

$$
\begin{aligned}
\because   && \bar{x} &= \sum_{i=1}^{n} \frac{x_i}{n}, && \text{where } X := \text{ some set }, x_i \in X, \text{ and } n = |X| \\
\\
           && \bar{b} &= 2221.0 / 10 \\
\therefore && \bar{b} &\approx 222.1 \\
\\
           && \bar{a} &= 2100.0 / 10 \\
\therefore && \bar{a} &\approx 210.0 && \blacksquare
\end{aligned}
$$

### part (d)

the median for $b_{med}$:

$$
\begin{aligned}
\because   &&      B' &:= \textit{Sorted}(B) \\
           &&         &\equiv \begin{aligned} \{
                          & 216, 217, 218, 218, 221, \\
                          & 222, 225, 227, 228, 229
                         \}, \end{aligned} \\
           && b_{med} &:= \text{ middle value in } B',
                \text{and}\\
           &&     |B| &=  10 \\
\\
\therefore && b_{med} &= \frac{
                             b_{\frac{\big\lvert{B}\big\rvert}{2}}
                           + b_{\frac{\big\lvert{B}\big\rvert}{2} + 1}
                         }{ 2 } \\
           &&         &= \frac{ b_{5} + b_{6} }{ 2 } \\
           &&         &= \frac{ 221 + 222 }{ 2 } \\
           && b_{med} &= 221.5 && \blacksquare
\end{aligned}
$$

and for $a_{med}$:

$$
\begin{aligned}
\because   &&      A' &:= \textit{Sorted}(A) \\
           &&         &\equiv \begin{aligned} \{
                          & 201, 203, 205, 205, 209, \\
                          & 211, 214, 215, 218, 219
                         \}, \end{aligned} \\
           && a_{med} &:= \text{ middle value in } A',
                \text{and}\\
           &&     |A| &=  10 \\
\\
\therefore && a_{med} &= \frac{
                             a_{\frac{\big\lvert{A}\big\rvert}{2}}
                           + a_{\frac{\big\lvert{A}\big\rvert}{2} + 1}
                         }{ 2 } \\
           &&         &= \frac{ a_{5} + a_{6} }{ 2 } \\
           &&         &= \frac{ 209 + 211 }{ 2 } \\
           && a_{med} &= 210 && \blacksquare
\end{aligned}
$$

:::
:::section

## problem 3

using $S$ from **problem 1** (above) calculate the range of data of $S$:

$$
\begin{aligned}
\because   && Range(X) &= X_{max} - X_{min}, && \text{where } X := \text{some set} \\
\\
           && Range(S) &= S_{max} - S_{min} \\
           &&          &= 23.71 - 18.04 \\
\therefore && Range(S) &= 5.67
\end{aligned}
$$

sample variance of $S$:

$$
\begin{aligned}
\because   && s^2 &= \sum_{i=1}^{n}{\frac{(x_i - \bar{x})^2}{n - 1}}, &&
                  \text{where } x_i \in \text{some set } X \text{ and } n = |X|\\
\\
           && s^2 &= \sum_{i=1}^{n}{\frac{ ( s_i - \bar{s} )^2 }{n - 1}} \\
\therefore && s^2 &\approx 2.53
\end{aligned}
$$

& sample standard deviation of $S$:

$$
\begin{aligned}
\because   && s &= \sqrt{s^2} \\
           &&   &\approx \sqrt{2.53} \\
\therefore && s &\approx 1.59
\end{aligned}
$$

:::
:::section

## problem 4

:::
