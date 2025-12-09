<script>
    import { fade } from 'svelte/transition';
	import RatingForm from './RatingForm.svelte';
</script>



<article class="card" transition:fade>
    <div class="card-body">
        <h1 class="title">How did we do?</h1>
        <p class="description">Please let us know how we did with your support request.
            All feedback is appreciated to help us improve our offering!</p>
    </div>
    <RatingForm />
</article>


<style>

    .card {
        padding: var(--s-300);
    }

    .card:before {
        content: '';
        min-width: var(--size-40);
        min-height: var(--size-40);
        border-radius: 50%;
        background-image: url('/static/icon-star.svg');
        background-repeat: no-repeat;
        background-position: center center;
        background-color: var(--surface-3);
        align-self: flex-start;
        animation: blurIn 2s ease forwards;
    }

    .card-body {
        display: flex;
        flex-direction: column;
        gap: var(--s-200);
    }

    .description {
        line-height: var(--line-height-lg);
    }

    @media (min-width: 48rem) {

        .card {
            padding: var(--s-400) var(--s-300);
            gap: var(--s-400);
        }

        .card:before {
            min-width: var(--size-48);
            min-height: var(--size-48);   
        }
    }

</style>
