<script>
    let selected = $state(-1);
    let submitted = $state(false);
</script>


<form action="/" method="POST">
    <fieldset class="ratings" aria-label="rate us">
        {#each [1, 2, 3, 4, 5] as num (num)}
        <label for={num}
            class="option {selected === num ? 'selected' : ''}">
            <input
                type="radio" 
                id={num} 
                name="rating" 
                value={num} 
                bind:group={selected}/>
            <span>{num}</span>
        </label>
        {/each}
    </fieldset>
    <button
        onclick={() => submitted = true} 
        type="submit" 
        class='submit {submitted ? 'submitted' : ''}'>Submit</button>
</form>

<style>

    form {
        display: flex;
        flex-direction: column;
        gap: var(--s-300);
    }

    .ratings {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border: none;
    }

    label {
        display: block;
        position: relative;
    }
    
    input {
        z-index: -999;
    }

    label input, label span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .ratings label {
        min-width: var(--size-42);
        min-height: var(--size-42);
        border-radius: 50%;
        border: none;
        background-color: var(--surface-3);
        color: var(--onsurface-3);
        font-family: 'Overpass', sans-serif;
        font-size: var(--font-xs);
        font-weight: 700;
        line-height: var(--line-height-lg);
        cursor: pointer;
        vertical-align: bottom;
        /* animation: blurIn 5s ease forwards; */
    }

    label.selected, label.selected:focus, label:has(input:checked) {
        background-color: var(--secondary);
        color: var(--onsecondary);
        outline: none;
    }

    label:focus, label:focus-within, label:hover {
        background-color: var(--primary);
        color: var(--onprimary);
        outline: none;
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

    .submit:focus {
        outline: 0.1rem solid var(--primary);
        outline-offset: 0.15rem;    
    }

    .submit.submitted {
        background-color: var(--secondary);
        color: var(--onsecondary);
        outline-color: var(--secondary);
    }

    @media (min-width: 48rem) {
        .ratings label {
            min-width: var(--size-51);
            min-height: var(--size-51);
            font-size: var(--font-md);
        }

        form {
            gap: var(--s-400);
        }

        .submit {
            padding: var(--s-100) 0;
        }
    }

</style>