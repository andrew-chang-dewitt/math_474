## &sect; 2.1 sample space

### definition 2.1, sample space

> [!IMPORTANT]
>
> The set of all possible outcomes of a statistical experiment is
> called the **sample space** & is represented by the symbol `S`. Each
> outcome is called an **element**, **member**, or **sample point** of
> the sample space.

## &sect; 2.2 events

### definition 2.2, event

> [!IMPORTANT]
>
> An **event** is a subset of a sample space.

### definition 2.3, complement of an event

> [!IMPORTANT]
>
> The **complement** of an event `A` with respect to `S` is the subset
> of all elements of `S` that are not in `A`. Denoted `A'`.

### definition 2.4, intersection of two events

> [!IMPORTANT]
>
> The **intersection** of two events `A` & `B`, denoted $A \cap B$, is
> the event containing all elements common to `A` & `B`.

### definition 2.5, mutually exclusive (disjoint) events

> [!IMPORTANT]
>
> Two events `A` & `B` are **mutually exclusive**, or disjoint, if
> $A \cap B = \phi$ — that is, if `A` & `B` have no elements in common.

### definition 2.6, union of two events

> [!IMPORTANT]
>
> The **union** of two events `A` & `B`, denoted $A \cup B$, is the
> event containing all elements that belong to `A` or `B` or both.

## &sect; 2.3 counting sample points

### rule 2.1, multiplication rule (two operations)

> [!IMPORTANT]
>
> If an operation can be performed in `n_1` ways, & if for each of
> these a second operation can be performed in `n_2` ways, then the two
> operations can be performed together in $n_1 n_2$ ways.

### rule 2.2, generalized multiplication rule

> [!IMPORTANT]
>
> If an operation can be performed in `n_1` ways, & for each of these a
> second in `n_2` ways, & for each of the first two a third in `n_3`
> ways, & so forth, then the sequence of `k` operations can be
> performed in $n_1 n_2 \cdots n_k$ ways.

### definition 2.7, permutation

> [!IMPORTANT]
>
> A **permutation** is an arrangement of all or part of a set of
> objects.

### definition 2.8, factorial

> [!IMPORTANT]
>
> For any non-negative integer `n`, `n!` ("n factorial") is defined as
>
> $$
> n! = n(n-1) \cdots (2)(1)
> $$
>
> with the special case $0! = 1$.

### theorem 2.1, permutations of n objects

> [!IMPORTANT]
>
> The number of permutations of `n` objects is `n!`.

### theorem 2.2, permutations of n objects taken r at a time

> [!IMPORTANT]
>
> The number of permutations of `n` distinct objects taken `r` at a
> time is
>
> $$
> {}_nP_r = \frac{n!}{(n-r)!}
> $$

### theorem 2.3, circular permutations

> [!IMPORTANT]
>
> The number of permutations of `n` objects arranged in a circle is
> $(n-1)!$.

### theorem 2.4, permutations with repeated (indistinguishable) objects

> [!IMPORTANT]
>
> The number of distinct permutations of `n` things, of which `n_1` are
> of one kind, `n_2` of a second kind, ..., `n_k` of a `k`th kind, is
>
> $$
> \frac{n!}{n_1! n_2! \cdots n_k!}
> $$

### theorem 2.5, partitioning n objects into r cells

> [!IMPORTANT]
>
> The number of ways of partitioning a set of `n` objects into `r`
> cells with `n_1` elements in the first cell, `n_2` in the second, &
> so forth, is
>
> $$
> \binom{n}{n_1, n_2, \ldots, n_r} = \frac{n!}{n_1! n_2! \cdots n_r!}
> $$
>
> where $n_1 + n_2 + \cdots + n_r = n$.

### theorem 2.6, combinations of n objects taken r at a time

> [!IMPORTANT]
>
> The number of combinations of `n` distinct objects taken `r` at a
> time is
>
> $$
> \binom{n}{r} = \frac{n!}{r!(n-r)!}
> $$

## &sect; 2.4 probability of an event

### definition 2.9, probability of an event

> [!IMPORTANT]
>
> The **probability** of an event `A` is the sum of the weights of all
> sample points in `A`. Therefore,
>
> $$
> 0 \leq P(A) \leq 1, \quad P(\phi) = 0, \quad P(S) = 1.
> $$
>
> Furthermore, if $A_1, A_2, A_3, \ldots$ is a sequence of mutually
> exclusive events, then
>
> $$
> P(A_1 \cup A_2 \cup A_3 \cup \cdots) = P(A_1) + P(A_2) + P(A_3) + \cdots
> $$

### rule 2.3, probability under equally likely outcomes

> [!IMPORTANT]
>
> If an experiment can result in any one of `N` different equally
> likely outcomes, & if exactly `n` of these outcomes correspond to
> event `A`, then the probability of event `A` is
>
> $$
> P(A) = \frac{n}{N}
> $$

## &sect; 2.5 additive rules

### theorem 2.7, additive rule (two events)

> [!IMPORTANT]
>
> If `A` & `B` are two events, then
>
> $$
> P(A \cup B) = P(A) + P(B) - P(A \cap B)
> $$

### corollary 2.1, of theorem 2.7 (mutually exclusive events)

> [!IMPORTANT]
>
> If `A` & `B` are mutually exclusive, then
> $P(A \cup B) = P(A) + P(B)$.

### corollary 2.2, of theorem 2.7 (n mutually exclusive events)

> [!IMPORTANT]
>
> If $A_1, A_2, \ldots, A_n$ are mutually exclusive, then
>
> $$
> P(A_1 \cup A_2 \cup \cdots \cup A_n) = P(A_1) + P(A_2) + \cdots + P(A_n)
> $$

### corollary 2.3, of theorem 2.7 (partition of S)

> [!IMPORTANT]
>
> If $A_1, A_2, \ldots, A_n$ is a partition of sample space `S`, then
>
> $$
> P(A_1 \cup A_2 \cup \cdots \cup A_n) = P(A_1) + P(A_2) + \cdots + P(A_n) = P(S) = 1
> $$

### theorem 2.8, additive rule (three events)

> [!IMPORTANT]
>
> For three events `A`, `B`, `C`,
>
> $$
> \begin{align*}
> P(A \cup B \cup C) &= P(A) + P(B) + P(C) \\
>                     &\quad - P(A \cap B) - P(A \cap C) - P(B \cap C) \\
>                     &\quad + P(A \cap B \cap C)
> \end{align*}
> $$

### theorem 2.9, complementary events

> [!IMPORTANT]
>
> If `A` & `A'` are complementary events, then
> $P(A) + P(A') = 1$.

## &sect; 2.6 conditional probability, independence, and the product rule

### definition 2.10, conditional probability

> [!IMPORTANT]
>
> The conditional probability of `B`, given `A`, denoted `P(B|A)`, is
> defined by
>
> $$
> P(B|A) = \frac{P(A \cap B)}{P(A)}, \quad \text{provided } P(A) > 0.
> $$

### definition 2.11, independent events

> [!IMPORTANT]
>
> Two events `A` & `B` are **independent** if & only if
>
> $$
> P(B|A) = P(B) \quad \text{or} \quad P(A|B) = P(A)
> $$
>
> assuming the conditional probabilities exist. Otherwise, `A` & `B`
> are **dependent**.

### theorem 2.10, multiplicative (product) rule

> [!IMPORTANT]
>
> If, in an experiment, the events `A` & `B` can both occur, then
>
> $$
> P(A \cap B) = P(A) P(B|A), \quad \text{provided } P(A) > 0.
> $$
>
> Since $A \cap B \equiv B \cap A$, equivalently
> $P(A \cap B) = P(B)P(A|B)$.

### theorem 2.11, special multiplicative rule (independent events)

> [!IMPORTANT]
>
> Two events `A` & `B` are independent if & only if
>
> $$
> P(A \cap B) = P(A) P(B)
> $$

### theorem 2.12, multiplicative rule (k events)

> [!IMPORTANT]
>
> If, in an experiment, the events $A_1, A_2, \ldots, A_k$ can occur,
> then
>
> $$
> P(A_1 \cap A_2 \cap \cdots \cap A_k) = P(A_1) P(A_2|A_1) P(A_3|A_1 \cap A_2) \cdots P(A_k|A_1 \cap A_2 \cap \cdots \cap A_{k-1})
> $$
>
> If $A_1, A_2, \ldots, A_k$ are independent, then
>
> $$
> P(A_1 \cap A_2 \cap \cdots \cap A_k) = P(A_1) P(A_2) \cdots P(A_k)
> $$

### definition 2.12, mutual independence

> [!IMPORTANT]
>
> A collection of events $\mathcal{A} = \{A_1, \ldots, A_n\}$ are
> **mutually independent** if for any subset
> $A_{i_1}, \ldots, A_{i_k}$, for $k \leq n$,
>
> $$
> P(A_{i_1} \cap \cdots \cap A_{i_k}) = P(A_{i_1}) \cdots P(A_{i_k})
> $$
>
> Pairwise independence (e.g. $P(A \cap B \cap C) = P(A)P(B)P(C)$ alone)
> is not sufficient for mutual independence among 3+ events.

## &sect; 2.7 bayes' rule

### theorem 2.13, total probability (rule of elimination)

> [!IMPORTANT]
>
> If the events $B_1, B_2, \ldots, B_k$ constitute a partition of the
> sample space `S` such that $P(B_i) \neq 0$ for $i = 1, \ldots, k$,
> then for any event `A` of `S`,
>
> $$
> P(A) = \sum_{i=1}^k P(B_i \cap A) = \sum_{i=1}^k P(B_i) P(A|B_i)
> $$

### theorem 2.14, bayes' rule

> [!IMPORTANT]
>
> If the events $B_1, B_2, \ldots, B_k$ constitute a partition of the
> sample space `S` such that $P(B_i) \neq 0$ for $i = 1, \ldots, k$,
> then for any event `A` in `S` such that $P(A) \neq 0$,
>
> $$
> P(B_r|A) = \frac{P(B_r \cap A)}{\sum_{i=1}^k P(B_i \cap A)} = \frac{P(B_r) P(A|B_r)}{\sum_{i=1}^k P(B_i) P(A|B_i)}
> $$
>
> for $r = 1, 2, \ldots, k$.
