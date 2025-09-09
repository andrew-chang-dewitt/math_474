:::hgroup{.titlegroup}

# hw 3

Andrew Chang-DeWitt \
Math 474, Fall 2025 \
2025 Sept. 9

:::

## problem 1

> A manufacturer of electronic components is interested in determining the
> lifetime of a certain type of battery. A sample, in hours of life, is as
> follows:

$$
\begin{aligned}
(1) && && S &:= { 123, 116, 122, 110, 175, 126, 125, 111, 118, 117 }
\end{aligned}
$$

### part (a)

> Find the sample mean

$$
\begin{aligned}
(2) && \because   && \bar{x} &= \sum_{i=1}^{n} \frac{x_i}{n}, && \text{where } x_i \in X \text{ and } n = |X| &&
  \textit{\{def. 1.1 [Walpole, Myers, Myers, Ye]\}} \\
    &&            &&         &= \frac{1}{n}( \sum_{i=1}^{n} x_i ) && &&
  \textit{factor n out of summation} \\
\\
    &&            && \bar{s} &= \frac{\sum S}{|S|} && &&
  \textit{\{1,2\} use (2) to find mean of (1)} \\
    &&            &&         &= \frac{1243}{10}  && &&
  \textit{substitute values} \\
(3) && \therefore && \bar{s} &= 124.3 && &&
  \textit{sample mean}
\end{aligned}
$$

> & median.

$$
\begin{aligned}
(4) && \because   && x_{med} &= \Bigg\lbrace\begin{aligned}
                                  & \frac{
                                        x_{\frac{\big\lvert{X}\big\rvert}{2}}
                                      + x_{\frac{\big\lvert{X}\big\rvert}{2} + 1}
                                    }{ 2 }, & \text{if } & |X| \mod 2 != 0 \\
                                  & x_{\Bigg(\Bigg\lfloor\frac{\big\lvert{X}\big\rvert}{2}\Bigg\rfloor + 1\Bigg)}, & \text{else} &
                                \end{aligned}, &&
  \textit{piecewise definition of median}\\
(5) &&            &&      S' &:= \textit{Sorted}(S) \\
    &&            &&      S' &\equiv \begin{aligned} \{
                                 & 110, 111, 116, 117, 118, \\
                                 & 122, 123, 125, 126, 175
                                \} \end{aligned} &&
  \textit{\{1\}}\\
\\

    &&            && s_{med} &= \frac{
                                    s'_{\frac{\big\lvert{S}\big\rvert}{2}}
                                  + s'_{\frac{\big\lvert{S}\big\rvert}{2} + 1}
                                }{ 2 } &&
  \textit{\{4,5\}} \\
    &&            &&         &= \frac{ s_{5} + s_{6} }{ 2 } \\
    &&            &&         &= \frac{ 118 + 122 }{ 2 } \\
(6) && \therefore && s_{med} &= 120 && \textit{sample median}\quad\blacksquare
\end{aligned}
$$

### part (b)

> What feature in this data set is responsible for the substantial
> difference between the two?

The value of $S_{max}$ is a fairly obvious outlier at 175 hours compared to the
next closest value of 126. If we remove it from the dataset & recalculate:

$$
\begin{aligned}
(7) &&            &&       S'' &:= \begin{aligned} \{
                                    & 110, 111, 116, 117, 118, \\
                                    & 122, 123, 125, 126
                                   \} \end{aligned} && &&
  \textit{$S'$ w/out $S_{max}$} \\
    &&            && \bar{s}'' &= \frac{\sum S''}{|S|} && &&
  \textit{\{7,2\} use (2) to find mean of (7)} \\
    &&            &&         &= \frac{1068}{9}  && &&
  \textit{substitute values} \\
(8) && \therefore && \bar{s}'' &\approx 118.67 && &&
  \textit{new sample mean} \\
    &&            && s_{med}'' &= s_{ \Bigg\lfloor\
                                        frac{\big\lvert{S''}\big\rvert}{2}
                                      \Bigg\rfloor
                                      + 1}'' && &&
  \textit{\{4,7\}} \\
    &&            &&           &= s_{\lfloor\frac{9}{2}\rfloor + 1}'' \\
    &&            &&           &= s_{5}'' \\
(9) &&            && s_{med}'' &= 118 && &&
  \textit{new sample median}\quad\blacksquare \\
\end{aligned}
$$

we see that the new sample mean of 118.67 $(8)$ & new sample median of 118
$(9)$ are much closer together than the previous sample mean of 124.3 $(3)$ and
previous sample median of 120 $(6)$.
