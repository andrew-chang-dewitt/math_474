---
title: "Probability & Statistics: conditional probability, intersections, & total probability (&sect;'s 3.5 & 3.6)"
description: "Extending unions & additions w/ conditional probabilities, intersections, & multiplication rules, leading to the total probability rule."
keywords:
  - "conditional probability"
  - "intersections of events"
  - "multiplication rule"
  - "total probability rule"
  - "probability"
  - "probability & statistics"
  - "lecture notes"
  - "mathematics"
  - "math 474"
  - "illinois tech"
meta:
  byline: Andrew Chang-DeWitt
  published: "2026-02-02T11:25-06:00"
  updated: "2026-02-18T11:25-06:00"
---

## agenda

- &sect; 3.5: conditional probability
- &sect; 3.6: intersections of events & multiplication & total probability rules

## &sect; 3.5: conditional probability

:::

a probability of some event can, at times, depend on an event that came before it; a concept known as _**conditional probability**_. denoted as $\mathbb{P}(B|A)$ (where $A$ & $B$ are events in the same space) & read as "the conditional probability of B given A".

because $A$ has already happened & $B|A$ depends on $A$, it is known that $\mathbb{P}(B|A) \neq \mathbb{P}(B)$.

instead, the conditional probability of $B$ given $A$ can be found with the intersection of $A$ & $B$:

$$
\begin{aligned}
\mathbb{P}(B|A) = \frac{\mathbb{P}(A \cap B)}{\mathbb{P}(A)}, \;\text{for}\; \mathbb{P}(A) > 0
\tag{3.5.1}
\end{aligned}
$$

visualized as a tree, $\mathbb{P}(B|A)$ can branch on $A$ first, then on $B$:

```no-linenums
                      .
       A             / \          A'
       P(A) ________/   \________ P(A')
           /                     \
          .                       .
 B       / \   B'       B        / \  B'
 P(B|A) /   \  P(B'|A)  P(B|A') /   \ P(B'|A')
       /     |                 |     \
      .      .                 .      .
```

:::

> [!ASIDE]
>
> **an example:**
>
> <details>
>   <summary>
>
> consider 10 red cards & 40 black cards. if 2 cards are selected randomly w/out replacement, what's the cond. prob. that a black card is chosen second given a red card is selected first?
>
>   </summary>
>
> $$
> \begin{aligned}
>               R &\coloneqq \text{red card drawn} \\
>               B &\coloneqq \text{black card drawn} \\
> \\
> \mathbb{P}(B|R) &= \frac{|B|}{|S| - 1} &&
>   \htmlClass{hljs-comment}{\textit{// no black cards drawn yet, so all $|B|$,}} \\
>                 & &&
>   \htmlClass{hljs-comment}{\textit{// but 1 card from $|S|$ has been drawn}} \\
> \mathbb{P}(B|R) &= \frac{40}{49} \space_\blacksquare \\
> \end{aligned}
> $$
>
> </details>

## &sect; 3.6: intersections of events & multiplication & total probability rules

following from the _conditional probability formula (3.5.1)_, the _**multiplication rule**_ can be used to find the probability of an intersection of events when one is known along with the probability of the other given the known:

$$
\begin{aligned}
\mathbb{P}(A \cap B) &= \mathbb{P}(B|A) \mathbb{P}(A) \\
                     &= \mathbb{P}(A|B) \mathbb{P}(B) &&
  \htmlClass{hljs-comment}{\textit{// by associative rule of $\cap$}} \\
\tag{3.6.1}
\end{aligned}
$$

this _multiplication rule_ can be combined with the _third axiom_ to find the probability of one event when another is known (& thus the other's complement is known too):

$$
\begin{aligned}
\because
  && B             &= (B \cap A) \cup (B \cap A') &&
       \htmlClass{hljs-comment}{\textit{// both intersections mutually exclusive}} \\
  &&               & &&
       \htmlClass{hljs-comment}{\textit{// because $A$ \& $A'$ are mutually exclusive}} \\
\\
\therefore
  && \mathbb{P}(B) &= \mathbb{P}((B \cap A) \cup (B \cap A')) \\
  &&               &= \mathbb{P}(B \cap A) + \mathbb{P}(B \cap A') &&
       \htmlClass{hljs-comment}{\textit{// by third axiom}} \\
  &&               &= \mathbb{P}(B|A)\mathbb{P}(A) + \mathbb{P}(B|A')\mathbb{P}(A') &&
       \htmlClass{hljs-comment}{\textit{// by (3.5.2)}} \\
\tag{3.6.2}
\end{aligned}
$$
