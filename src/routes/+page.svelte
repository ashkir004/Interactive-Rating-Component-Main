
<script>
	import RatingCard from "$lib/components/RatingCard.svelte";
	import RatingSuccess from "$lib/components/RatingSuccess.svelte";
	let { data, form } = $props();
</script>


<main>
	{#if !form || form.message}
		<RatingCard/>
	{:else if form.success}
		<RatingSuccess rating={data.rating}/>
	{/if}
</main>


<style>
	main {
		width: 100dvw;
		height: 100dvh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
