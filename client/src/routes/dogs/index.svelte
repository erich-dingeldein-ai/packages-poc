<script>
    import { onMount } from 'svelte';
    import { breedList, getAllBreeds, getRandomImageFromBreed, imageSrc } from '../../stores/api';

    onMount(() => {
        getAllBreeds();
    });

    let dogs = [];
    let imageUrl = "";
</script>

<svelte:head>
    <title>Dogs</title>
</svelte:head>

<div class="dogs">
    <div class="column">
        {#if $breedList}
            <ul>
                {#each $breedList as breed}
                    <li><button on:click="{() => getRandomImageFromBreed(breed)}">{breed}</button></li>
                {/each}
            </ul> 
        {/if}
       
    </div>
    <div class="column">
        {#if $imageSrc}
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img src="{$imageSrc}" alt="Image of dog breed" />
        {/if}
    </div>
</div>

<style>
    .column {
        float: left;
        width: 50%;
    }

    .dogs:after {
        content: "";
        display: table;
        clear: both;
    }
</style>