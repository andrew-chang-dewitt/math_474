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

we see that the new sample mean of 118.67 $(8)$ & new sample median of
118 $(9)$ are much closer together than the previous sample mean of 124.3 $(3)$
and previous sample median of 120 $(6)$.

## problem 2

> Use the data in Exercise 1.24 to construct a box plot.

data from 1.24: "staff salaries (dollars per pupil) for 30 schools in the
eastern part of the United States in the early 1970s."

$$
\begin{aligned}
(10) && && S &:= \begin{aligned} \{
                   & 3.79, 2.99, 2.77, 2.91, 3.10, \\
                   & 1.84, 2.52, 3.22, 2.45, 2.14, \\
                   & 2.67, 2.52, 2.71, 2.75, 3.57, \\
                   & 3.85, 3.36, 2.05, 2.89, 2.83, \\
                   & 3.13, 2.44, 2.10, 3.71, 3.14, \\
                   & 3.54, 2.37, 2.68, 3.51, 3.37
                 \} \end{aligned}
\end{aligned}
$$

first, let's calculate the median:

$$
\begin{aligned}
     &&            && S' &:= Sorted(S) && &&
  \textit{\{10\} first, sort the data} \\
(11) &&            && S' &\equiv \begin{aligned} \{
                                   & 3.79, 2.99, 2.77, 2.91, 3.10, \\
                                   & 1.84, 2.52, 3.22, 2.45, 2.14, \\
                                   & 2.67, 2.52, 2.71, 2.75, 3.57, \\
                                   & 3.85, 3.36, 2.05, 2.89, 2.83, \\
                                   & 3.13, 2.44, 2.10, 3.71, 3.14, \\
                                   & 3.54, 2.37, 2.68, 3.51, 3.37
                                 \} \end{aligned} \\
     &&            && s_{med} &= \frac{
                                     s'_{\frac{\big\lvert{S}\big\rvert}{2}}
                                   + s'_{\frac{\big\lvert{S}\big\rvert}{2} + 1}
                                 }{ 2 } && &&
   \textit{\{4,11\}} \\
     &&            &&         &= \frac{ s_{15} + s_{16} }{ 2 } \\
     &&            &&         &= \frac{ 2.83 + 2.89 }{ 2 } \\
(12) && \therefore && s_{med} &= 2.86 && && \textit{sample median}
\end{aligned}
$$

then, quartiles are just medians of each half of the sorted data:

$$
\begin{aligned}
(13) && \because   && S_{bot} &:= \{ s_1', s_2', ..., s_{15}'\} && &&
  \textit{bottom half of $S'$} \\
     &&            && q_1     &= s_{ \Bigg\lfloor
                                       \frac{\big\lvert{S_{bot}}\big\rvert}{2}
                                     \Bigg\rfloor
                                     + 1}' && &&
  \textit{\{4,13\}} \\
     &&            &&         &= s_{\lfloor\frac{15}{2}\rfloor + 1}' \\
     &&            &&         &= s_{8}' \\
(14) && \therefore && q_1     &= 2.52 && && \textit{Q1} \\
\\
(15) && \because   && S_{top} &:= \{ s_{16}', s_{17}', ..., s_{30}'\}  && &&
  \textit{top half of $S'$} \\
     &&            && q_3     &= s_{ \Bigg\lfloor
                                       \frac{\big\lvert{S_{bot}}\big\rvert}{2}
                                     \Bigg\rfloor
                                     + 1 + 15}' && &&
  \textit{\{4,15\}, offset by +15 to shift to upper half} \\
     &&            &&         &= s_{\lfloor\frac{15}{2}\rfloor + 1 + 15}' \\
     &&            &&         &= s_{23}' \\
(16) && \therefore && q_3     &= 3.36 && && \textit{Q3} \\
\end{aligned}
$$

then, derive the interquartile range & calculate whisker lengths:

$$
\begin{aligned}
(17) &&  && IQR &:= q_3 - q_1 && &&
  \textit{interquartile range} \\
(18) &&  && IQR &= 0.84 && &&
  \textit{\{14,16,17\}} \\
(19) &&  && w_l &:= q_1 - 1.5IQR && && \\
     &&  &&     &=  2.52 - 1.5(0.84) && &&
  \textit{\{14,19\}} \\
(20) &&  && w_l &=  1.26 && &&
  \textit{lower whisker} \\
\\
(21) &&  && w_u &:= q_3 + 1.5IQR && && \\
     &&  &&     &=  3.36 + 1.5(0.84) && &&
  \textit{\{16,21\}} \\
(22) &&  && w_u &=  1.26 && &&
  \textit{upper whisker} \\
\end{aligned}
$$

finally, the following box plot can be drawn using $w_l = 1.26\space(20)$
, $q_1 = 2.52\space(14)$, $s_{med} = 2.86\space(12)$, $q_3 = 3.36\space(16)$
, & $w_u = 4.62\space(22)$:

```
                     2.52   2.86    3.36
 1.26                  ______________                     4.62
                      |      |       |
  |-------------------|      |       |---------------------|
                      |______|_______|

<-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+-|-+->
...  1.5      2      2.5      3      3.5      4      4.5     ...
                                                                   ■
```

## problem 3

> An experiment involves tossing a pair of dice, one green and one red, and
> recording the numbers that come up. If $x$ equals the outcome on the green die
> and $y$ the outcome on the red die, describe the sample space $S$

### part (a)

> (a) by listing the elements $(x, y)$

$$
\begin{aligned}
(23) && && S &:= \begin{aligned}\{
                   & (1,1), (1,2), (1,3), (1,4), (1,5), (1,6), \\
                   & (2,1), (2,2), (2,3), (2,4), (2,5), (2,6), \\
                   & (3,1), (3,2), (3,3), (3,4), (3,5), (3,6), \\
                   & (4,1), (4,2), (4,3), (4,4), (4,5), (4,6), \\
                   & (5,1), (5,2), (5,3), (5,4), (5,5), (5,6), \\
                   & (6,1), (6,2), (6,3), (6,4), (6,5), (6,6)
                 \}\end{aligned}
\end{aligned}
$$

### part (b)

> (b) by using the rule method

$$
\begin{aligned}
(23) && && S &:= \{ (x,y) \space \big| \space \forall x \in [1,6], \forall y \in [1,6]\}
\end{aligned}
$$

## problem 4

> 2.8 For the sample space of Exercise 2.4,

do the following:

### part (a)

> list the elements corresponding to the event $A$ that the sum is greater than
> 8

$$
\begin{aligned}
     && \because   && A &:= \{ (x,y) \space \big| \space \forall (x,y) \in S \textit{ where } x + y > 8 \} \\
(24) && \therefore && A &\equiv \begin{aligned}\{
                              & (3,6), (4,5), (4,6), (5,4), (5,5), \\
                              & (5,6), (6,3), (6,4), (6,5), (6,6)
                            \}\end{aligned} && &&
  \textit{\{23\}}
\end{aligned}
$$

### part (b)

> list the elements corresponding to the event $B$ that a 2 occurs on either
> die

$$
\begin{aligned}
     && \because   && B &:= \{ (x,y) \space \big| \space \forall (x,y) \in S \textit{ where } x \equiv 2 \lor y \equiv 2 \} \\
(25) && \therefore && B &\equiv \begin{aligned}\{
                              & (1,2), (2,1), (2,2), (2,3), (2,4), (2,5), \\
                              & (2,6), (3,2), (4,2), (5,2), (6,2)
                            \}\end{aligned} && &&
  \textit{\{23\}}
\end{aligned}
$$

### part (c)

> list the elements corresponding to the event $C$ that a number greater than 4
> comes up on the green die

$$
\begin{aligned}
     && \because   && C &:= \{ (x,y) \space \big| \space \forall (x,y) \in S \textit{ where } x > 4 \} \\
(26) && \therefore && C &\equiv \begin{aligned}\{
                              & (5,1), (5,2), (5,3), (5,4), (5,5), (5,6), \\
                              & (6,1), (6,2), (6,3), (6,4), (6,5), (6,6)
                            \}\end{aligned} && &&
  \textit{\{23\}}
\end{aligned}
$$

### part (d)

> list the elements corresponding to the event $A ∩ C$

$$
\begin{aligned}
     && && A \cap C &= \begin{aligned}\{
                         & (5,4), (5,5), (5,6), (6,3), \\
                         & (6,4), (6,5), (6,6)
                       \}\end{aligned} && &&
  \textit{\{24,26\}}
\end{aligned}
$$

### part (e)

> list the elements corresponding to the event $A ∩ B$

$$
\begin{aligned}
     && && A \cap B &= \empty && &&
  \textit{\{24,25\}}
\end{aligned}
$$

### part (f)

> list the elements corresponding to the event $B ∩ C$

$$
\begin{aligned}
     && && B \cap C &= \{(5,2), (6,2)\} && &&
  \textit{\{25,26\}}
\end{aligned}
$$

### part (g)

> construct a Venn diagram to illustrate the intersections and unions of the
> events $A$, $B$, and $C$

```
+----------------------------------------------------------------+
| S                                                              |
|                                                                |
|        A _________________         ___________________ B       |
|         /                 \       /                   \        |
|        /                   \     /                     \       |
|        |                   |     |                     |       |
|        |                   |     |                     |       |
|        |       ____________|_____|__                   |       |
|        |      /            |     |  \                  |       |
|        \     /             /     \   \                 /       |
|         \____|____________/       \__|________________/        |
|              |                       |                         |
|              |                       |                         |
|              |                       |                         |
|              \                       /                         |
|               \_____________________/                          |
|              C                                                 |
+----------------------------------------------------------------+
                                                                     ■
```

## problem 5

> 2.49 Find the errors in each of the following statements:

### part (a)

> The probabilities that an automobile salesperson will sell 0, 1, 2, or 3 cars
> on any given day in February are, respectively, 0.19, 0.38, 0.29, and 0.15.

Remember the probability of either of two disjoint events occuring is the same
as the sum of the probability of the two events & the sum of the probability of
all possible events is 1:

$$
\begin{aligned}
(27) && \because   && &P(A \cup B) = P(A) + P(B), \textit{ where } Disjoint(A, B), \\
     &&            && &\quad\quad \textit{\{corollary 2.1, [Walpole, Myers, Myers, Ye]\}} \\
(28) &&            && &P(A) + P(A') = 1, \textit{ where } A' \equiv C A \\
     &&            && &\quad\quad \textit{\{theorem 2.9, [Walpole, Myers, Myers, Ye]\}} \\
\end{aligned}
$$

Then, even if we assume it's impossible to sell more than 3 cars, these probabilities
have violated that theorem:

$$
\begin{aligned}
(29) && \because   && P(A) &:= 0.19, && &&
  \textit{sells 0 cars} \\
(30) &&            && P(B) &:= 0.38, && &&
  \textit{sells 1 cars} \\
(31) &&            && P(C) &:= 0.29, && &&
  \textit{sells 2 cars} \\
(32) &&            && P(D) &:= 0.15, && &&
  \textit{sells 3 cars} \\
(33) &&            && U &:= A + B + C + D, && &&
  \textit{universal event} \\
(34) &&            && &\textit{Disjoint}(A, B, C, D) && &&
  \textit{problem uses keyword "or"} \\
\\
     &&            && P(U) &:= P(A) + P(B) + P(C) + P(D) && &&
  \textit{\{27,33,34\}} \\
     &&            &&      &= 0.19 + 0.38 + 0.29 + 0.15 && &&
  \textit{\{29,30,31,32\}} \\
     &&            && P(U) &= 1.01 && && \\
     && \therefore && &\textit{contradiction} && &&
  \textit{\{28\}}\quad\blacksquare \\
\end{aligned}
$$

### part (b)

> The probability that it will rain tomorrow is 0.40, and the probability that
> it will not rain tomorrow is 0.52.

same problem as **part (a)**. whether it will rain or not is a binary state,
thus "it will not rain" is the complement of "it will rain":

$$
\begin{aligned}
(35) && \because   && R\space &:= \text{it will rain}, \\
(36) &&            && R' &:= \text{it will not rain}, \\
(37) &&            && R' &\equiv CR, \\
(38) &&            && P(R) &:= 0.40, \textit{ and} \\
(39) &&            && P(R') &:= 0.52 \\
\\
     &&            && 1 &= P(R) + P(R') && &&
  \textit{\{28\}} \\
     &&            && 1 &= 0.40 + 0.52 && &&
  \textit{\{38,39\}} \\
     && \therefore && 1 \space&\text{!= } 0.92 && &&
  \textit{contradiction}\quad\blacksquare
\end{aligned}
$$

### part (c)

> The probabilities that a printer will make 0, 1, 2, 3, or 4 or more mistakes
> in setting a document are, respectively, 0.19, 0.34 ,−0.25, 0.43, and 0.29.

Probabilities must always be a value in $[0,1]$ & thus, can never be negative.
The value $P(2) := -0.25$ violates this & must be incorrect. $\blacksquare$

### part (d)

> On a single draw from a deck of playing cards, the probability of selecting a
> heart is 1/4, the probability of selecting a black card is 1/2, and the
> probability of selecting both a heart and a black card is 1/8.

Hearts are red, thus:

$$
\begin{aligned}
(40) && \because   &&             H &:= \text{event heart is drawn}, && && \\
(41) &&            &&             B &:= \text{event black is drawn}, && && \\
(42) &&            &&               &Red(\forall c \in H), && &&
  \textit{hearts are red} \\
(43) &&            && \textit{and } &Black(\forall c \in B) && &&
  \textit{black cards are black} \\
\\
     &&            &&     ∄ c \space&\textit{s.t.}\space ( c \in H ) \land ( c \in B ) && &&
  \textit{no card can be both Black \& Heart}\\
(44) &&            &&      H \cap B &\equiv \emptyset && &&
  \textit{$H$ \& $B$ can never happen at the same time} \\
     &&            &&   P(H \cap B) &= 1/8 && &&
  \textit{probability given in problem statement} \\
     &&            &&  P(\emptyset) &= 1/8 && &&
  \textit{\{44\}} \\
     && \therefore &&       0 \space&\text{!= } 1/8 && &&
  \textit{contradiction}\quad\blacksquare
\end{aligned}
$$
