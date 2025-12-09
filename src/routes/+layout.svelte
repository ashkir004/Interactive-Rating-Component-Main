<script>
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Rate Us!</title>
</svelte:head>

{@render children()}

<style>
:global {

	body {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.card {
        background-image: var(--surface-card);
        color: var(--onsurface-card);
        font-family: 'Overpass', sans-serif;
        max-width: 22.7rem;
        display: flex;
        flex-direction: column;
        gap: var(--s-300);
        border-radius: var(--s-200);
    }

	.title {
        font-size: var(--font-lg);
        line-height: var(--line-height-xl);
    }
	
    .description {
		color: var(--onsurface-card-variant);
		font-size: var(--font-sm);
    	line-height: var(--line-height-md);
    }

	@keyframes blurIn {
        from {
            opacity: 7;
            filter: blur(8px);
            transform: translateY(8px);
        }

        to {
            opacity: 1;
            filter: blur(0);
            transform: translateY(0);
        }
    }

	@media (min-width: 48rem) {
		.card {
            max-width: 25rem;
            padding: var(--s-400) var(--s-300);
            border-radius: var(--s-400);
        }

		.title {
            font-size: var(--font-xl);
			line-height: var(--line-height-xxl);
        }

        .description {
            font-size: var(--font-sm);
			line-height: var(--line-height-lg);
        }
	}

    @media (min-width: 64rem) {
        .card {
            gap: var(--s-400);
        }
    }
}
</style>