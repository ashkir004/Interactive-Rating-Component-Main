<script>
    import { fade } from 'svelte/transition';
	import Rating from "./Rating.svelte";

    let ready = $state(false);
    let submitted = $state(false);
    let rating = $state(-1);

    $effect(() => ready = true);

    function setRating(ratingNum) {
        rating = ratingNum;
    }

</script>



<article class="card" transition:fade>
    <div class="star-bg"></div>
    <div class="card-body">
        <h1 class="title">How did we do?</h1>
        <p class="description">Please let us know how we did with your support request.
            All feedback is appreciated to help us improve our offering!</p>
    
        <Rating onSelect={(num) => setRating(num)} />
    </div>
    <form action="/" method="POST">
        <button disabled={!ready && rating === -1}
                onclick={() => submitted = true} 
            type="submit" 
            name="rating" 
            value={rating} 
            class='submit {submitted ? 'submitted' : ''}'>Submit</button>
    </form>
</article>


<style>

    .card {
        padding: var(--s-300);
    }

    .star-bg {
        align-self: first baseline;
        min-width: var(--size-40);
        min-height: var(--size-40);
        border-radius: 50%;
        background-color: var(--surface-3);
        background-image: url('/icon-star.svg');
        background-repeat: no-repeat;
        background-position: center center;
        animation: blurIn 3s ease forwards;
    }

    .card-body {
        display: flex;
        flex-direction: column;
        gap: var(--s-200);
    }

    .description {
        line-height: var(--line-height-lg);
    }
 
    .submit {
        background-color: var(--primary);
        color: var(--onprimary);
        border: none;
        padding: var(--s-200) 0;
        text-transform: uppercase;
        font-family: 'Overpass', sans-serif;
        font-size: var(--font-xs);
        font-weight: 700;
        line-height: var(--line-height-lg);
        cursor: pointer;
        border-radius: calc(22.5 / 16 * 1rem);
        width: 100%;
        vertical-align: center;
    }

    .submit.submitted {
        background-color: var(--secondary);
        color: var(--onsecondary);
    }

    @media (min-width: 48rem) {

        .card {
            padding: var(--s-400) var(--s-300);
        }

        .star-bg {
            min-width: var(--size-48);
            min-height: var(--size-48);   
        }

        .submit {
            padding: var(--s-100) 0;
        }
    }

</style>
