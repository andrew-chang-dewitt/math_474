## &sect; 2.1 sample space

### definition 2.1, sample space

> [!IMPORTANT]
>
> The set of all possible outcomes of a statistical experiment is
> called the **sample space** & is represented by the symbol `S`. Each
> outcome is called an **element**, **member**, or **sample point** of
> the sample space.

Signal: a problem describes an experiment & asks you to list/roster
every possible outcome before any probability is assigned — e.g.
hw-02 #14, #15.

## &sect; 2.2 events

### definition 2.2, event

> [!IMPORTANT]
>
> An **event** is a subset of a sample space.

Signal: a problem names a condition on the outcomes (`A`, `B`, ... )
& asks which sample points satisfy it — e.g. hw-02 #14/#15's `A`,
`B`, `C`, `D`.

### definition 2.3, complement of an event

> [!IMPORTANT]
>
> The **complement** of an event `A` with respect to `S` is the subset
> of all elements of `S` that are not in `A`. Denoted `A'`.

Signal: "not", "does not occur", or a prime on an event name — e.g.
hw-02 #14(c)/(e), $C'$ and $(S \cap C)'$ .

### definition 2.4, intersection of two events

> [!IMPORTANT]
>
> The **intersection** of two events `A` & `B`, denoted $A \cap B$, is
> the event containing all elements common to `A` & `B`.

Signal: "and"/"both" between two named events — e.g. hw-02 #14(b)/(f),
$A \cap B$ & $A \cap C \cap D'$ .

### definition 2.5, mutually exclusive (disjoint) events

> [!IMPORTANT]
>
> Two events `A` & `B` are **mutually exclusive**, or disjoint,
> if $A \cap B = \phi$ &mdash; that is, if `A` & `B` have no elements in common.

Signal: computing an intersection & landing on $\phi$ (empty set) —
e.g. hw-02 #14(b), $A \cap B = \empty$ — or categories in a table that
by construction can't co-occur (hw-02 #63's PC locations).

### definition 2.6, union of two events

> [!IMPORTANT]
>
> The **union** of two events `A` & `B`, denoted $A \cup B$, is the
> event containing all elements that belong to `A` or `B` or both.

Signal: "or"/"either" between two named events — e.g. hw-02 #14(a),
$A \cup C$ .

## &sect; 2.3 counting sample points

### rule 2.1, multiplication rule (two operations)

> [!IMPORTANT]
>
> If an operation can be performed in `n_1` ways, & if for each of
> these a second operation can be performed in `n_2` ways, then the two
> operations can be performed together in $n_1 n_2$ ways.

Signal: a choice is made in independent, sequential stages, each with
its own count of options, & you just need the total combinations —
e.g. hw-02 #28 (manufacturer × form × strength).

### rule 2.2, generalized multiplication rule

> [!IMPORTANT]
>
> If an operation can be performed in `n_1` ways, & for each of these a
> second in `n_2` ways, & for each of the first two a third in `n_3`
> ways, & so forth, then the sequence of `k` operations can be
> performed in $n_1 n_2 \cdots n_k$ ways.

Signal: same as rule 2.1 but with 3+ sequential stages — e.g. hw-02
#31/#36, building a code/number digit by digit.

### definition 2.7, permutation

> [!IMPORTANT]
>
> A **permutation** is an arrangement of all or part of a set of
> objects.

Signal: order matters in the wording ("arrange", "in a row", a
license plate or number where digit position is meaningful) — the
cue that rules out plain combinations (theorem 2.6) below.

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

Signal: purely notational — shows up inside every permutation/
combination formula below rather than being invoked on its own.

### theorem 2.1, permutations of n objects

> [!IMPORTANT]
>
> The number of permutations of `n` objects is `n!`.

Signal: every one of `n` distinct objects gets placed, order matters,
none left out, no repeats, no circle — the baseline case before
theorems 2.2-2.5 add a constraint.

### theorem 2.2, permutations of n objects taken r at a time

> [!IMPORTANT]
>
> The number of permutations of `n` distinct objects taken `r` at a
> time is
>
> $$
> {}_nP_r = \frac{n!}{(n-r)!}
> $$

Signal: order matters, no repeats allowed, but only `r` of the `n`
objects are used — e.g. hw-02 #36(a), forming 3-digit numbers from 7
distinct digits with each digit used at most once.

### theorem 2.3, circular permutations

> [!IMPORTANT]
>
> The number of permutations of `n` objects arranged in a circle is $(n-1)!$ .

Signal: "seated around a table", "arranged in a circle/ring" — any
wording where rotating the whole arrangement doesn't count as new.

### theorem 2.4, permutations with repeated (indistinguishable) objects

> [!IMPORTANT]
>
> The number of distinct permutations of `n` things, of which `n_1` are
> of one kind, `n_2` of a second kind, ..., `n_k` of a `k`th kind, is
>
> $$
> \frac{n!}{n_1! n_2! \cdots n_k!}
> $$

Signal: a single ordered row/line of `n` items where some are
interchangeable within their own kind — e.g. hw-02 #46, oaks/pines/
maples arranged along a property line.

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

Signal: same formula shape as theorem 2.4, but the framing is
distributing `n` objects into `r` labeled groups/cells (e.g. into
committees, shifts, or categories) rather than arranging them in a
single line — theorem 5.19's multinomial pmf reuses this exact
coefficient.

### theorem 2.6, combinations of n objects taken r at a time

> [!IMPORTANT]
>
> The number of combinations of `n` distinct objects taken `r` at a
> time is
>
> $$
> \binom{n}{r} = \frac{n!}{r!(n-r)!}
> $$

Signal: "chosen", "selected", "a sample of" — order does *not*
matter — e.g. hw-02 #51 (envelopes purchased), #60 (books picked from
a shelf).

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

Signal: foundational — invoked whenever a problem hands you weights/
probabilities directly on sample points & asks you to sum over a
named event, e.g. hw-02 #63's per-room probabilities.

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

Signal: "at random" with no stated weighting — probability reduces to
a counting problem (pair with §2.3) — e.g. hw-02 #60 (books picked at
random from a shelf), #51 (envelope purchased at random, counts given
per prize tier).

## &sect; 2.5 additive rules

### theorem 2.7, additive rule (two events)

> [!IMPORTANT]
>
> If `A` & `B` are two events, then
>
> $$
> P(A \cup B) = P(A) + P(B) - P(A \cap B)
> $$

Signal: an "or" between two events that *can* overlap — if a Venn
diagram of the two events would show shared area, you need the
$-P(A \cap B)$ correction; contrast corollary 2.1 below when they
can't overlap. Venn-diagram shading problems like hw-02 #17 are built
around this picture.

### corollary 2.1, of theorem 2.7 (mutually exclusive events)

> [!IMPORTANT]
>
> If `A` & `B` are mutually exclusive, then $P(A \cup B) = P(A) + P(B)$ .

Signal: theorem 2.7 with the overlap term known to be zero — check
disjointness (definition 2.5) first.

### corollary 2.2, of theorem 2.7 (n mutually exclusive events)

> [!IMPORTANT]
>
> If $A_1, A_2, \ldots, A_n$ are mutually exclusive, then
>
> $$
> P(A_1 \cup A_2 \cup \cdots \cup A_n) = P(A_1) + P(A_2) + \cdots + P(A_n)
> $$

Signal: 3+ mutually-exclusive categories & you want the probability
of "any of these" — e.g. hw-02 #63(a), summing the disjoint bedroom
categories `P`, `Q`, `R`.

### corollary 2.3, of theorem 2.7 (partition of S)

> [!IMPORTANT]
>
> If $A_1, A_2, \ldots, A_n$ is a partition of sample space `S`, then
>
> $$
> P(A_1 \cup A_2 \cup \cdots \cup A_n) = P(A_1) + P(A_2) + \cdots + P(A_n) = P(S) = 1
> $$

Signal: the listed categories cover every possibility with no
overlap (a full partition, not just "some" mutually exclusive
events) — e.g. hw-02 #63, where all 5 room categories' probabilities
sum to 1; useful as a sanity check on given data.

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

Signal: three overlapping events in play at once — a Venn diagram
with three circles (hw-02 #17/#19's `M`, `T`, `V` regions) is the
visual tell.

### theorem 2.9, complementary events

> [!IMPORTANT]
>
> If `A` & `A'` are complementary events, then $P(A) + P(A') = 1$ .

Signal: "not", "does not", "at least one" vs. "none" wording where
the complement is easier to compute directly than the event itself —
e.g. hw-02 #63(b), "probability it is *not* in a bedroom".

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

Signal: "given that", "if it is known that" — the sample space
effectively shrinks to the given condition. (No hw-02 problem needs
this directly — it's assumed background for hw-03/hw-04's joint-
distribution conditionals, definition 3.11.)

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

Signal: check this before applying the shortcut $P(A \cap B) = P(A)P(B)$
(theorem 2.11) — needed whenever a problem's answer hinges on whether
knowing one outcome changes the other's probability (e.g. sampling
with vs. without replacement).

### theorem 2.10, multiplicative (product) rule

> [!IMPORTANT]
>
> If, in an experiment, the events `A` & `B` can both occur, then
>
> $$
> P(A \cap B) = P(A) P(B|A), \quad \text{provided } P(A) > 0.
> $$
>
> Since $A \cap B \equiv B \cap A$, equivalently $P(A \cap B) = P(B)P(A|B)$ .

Signal: "and" between two *dependent* events (contrast theorem 2.11)
— typically a two-step experiment where the second step's
probabilities depend on the first step's outcome (e.g. drawing
without replacement).

### theorem 2.11, special multiplicative rule (independent events)

> [!IMPORTANT]
>
> Two events `A` & `B` are independent if & only if
>
> $$
> P(A \cap B) = P(A) P(B)
> $$

Signal: "and" between two events explicitly independent (or with
replacement) — no conditioning term needed, just multiply.

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

Signal: a chain of 3+ sequential dependent draws (e.g. drawing
several cards without replacement & wanting the probability of a
specific sequence) — theorem 2.10 extended past two events.

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

Signal: a problem with 3+ events claims/asks to verify independence —
check that *every* subset factors, not just pairs.

## &sect; 2.7 bayes' rule

### theorem 2.13, total probability (rule of elimination)

If the events $B_1, B_2, \ldots, B_k$ constitute a partition of the
sample space `S` such that $P(B_i) \neq 0$ for $i = 1, \ldots, k$,
then for any event `A` of `S`,

$$
P(A) = \sum_{i=1}^k P(B_i \cap A) = \sum_{i=1}^k P(B_i) P(A|B_i)
$$

Signal: an event `A`'s probability is split across several known
"causes"/categories $B_i$ that partition `S`, & each cause has its own
conditional probability of producing `A` (e.g. defect rates that
differ by supplier) — you want `A`'s overall probability, not yet
which cause produced it.

### theorem 2.14, bayes' rule

If the events $B_1, B_2, \ldots, B_k$ constitute a partition of the
sample space `S` such that $P(B_i) \neq 0$ for $i = 1, \ldots, k$,
then for any event `A` in `S` such that $P(A) \neq 0$,

$$
P(B_r|A) = \frac{P(B_r \cap A)}{\sum_{i=1}^k P(B_i \cap A)} = \frac{P(B_r) P(A|B_r)}{\sum_{i=1}^k P(B_i) P(A|B_i)}
$$

for $r = 1, 2, \ldots, k$.

Signal: same setup as theorem 2.13, but the question runs the *other*
direction — "given that `A` was observed, what's the probability it
came from cause $B_r$ " (diagnostic/reverse-inference wording) —
theorem 2.13 is exactly the denominator here.
