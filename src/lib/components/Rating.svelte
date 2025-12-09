
<script>
    let { onSelect} = $props();
    let selected = $state(-1);
</script>


    <div class="ratings">
        {#each [1, 2, 3, 4, 5] as num (num)}
        <button
            class={selected === num ? 'selected' : ''}
            onclick={() => {
                selected = num;
                onSelect(num);
            }}>
            {num}
        </button>
        {/each}
    </div>

    



<style>

    .ratings {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    
    .ratings button {
        min-width: var(--size-42);
        min-height: var(--size-42);
        border-radius: 50%;
        border: none;
        display: inline-block;
        background-color: var(--surface-3);
        color: var(--onsurface-3);
        font-family: 'Overpass', sans-serif;
        font-size: var(--font-xs);
        font-weight: 700;
        line-height: var(--line-height-lg);
        cursor: pointer;
        vertical-align: bottom;
        animation: blurIn 5s ease forwards;
    }
    
    button.selected, button.selected:focus {
        background-color: var(--secondary);
        color: var(--onsecondary);
        outline: none;
    }

    button:focus, button:hover {
        background-color: var(--primary);
        color: var(--onprimary);
        outline: none;
    }

    @media (min-width: 48rem) {
        .ratings button {
            min-width: var(--size-51);
            min-height: var(--size-51);
            font-size: var(--font-md);
        }
    }

</style>