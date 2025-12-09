<script>
    let { rating } = $props(); 
</script>


<article class="card" in:fade>
    <div class="score-board">
        <p>You selected {rating} out of 5</p>
    </div>
    <div class="card-body">
        <h1 class="title">Thank you!</h1>
        <p class="description">We appreciate you taking the time to give a rating.
            if you ever need more support, don't hesitate to get in touch!
        </p>
    </div>
</article>

<style>

.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--s-400) var(--s-300);
    gap: var(--s-300);
}

.card-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--s-200);
}

.card::before {
    content: '';
    min-width: var(--size-144);
    min-height: var(--size-96);
    background-color: var(--surface-3);
    background: url('/illustration-thank-you.svg') center / contain no-repeat;
    animation: blurIn 3s ease forwards;
}

.score-board {
    background-color: var(--surface-3);
    color: var(--inverse-primary);
    font-size: var(--font-xs);
    line-height: var(--line-height-md);
    font-weight: 400;
    padding: var(--s-100) var(--s-200);
    border-radius: var(--s-300);
    vertical-align: baseline;
}

.description {
    text-align: center;
}

@media (min-width: 48rem) {
    .card {
        padding: var(--s-500) var(--s-400);
        gap: var(--s-400);
    }

    .card::before {
        min-width: var(--size-162);
        min-height: var(--size-108);
    }
}

@media (min-width: 72rem) {
    .card {
        padding: var(--s-400) var(--s-300);
    }
}
</style>