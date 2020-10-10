<script>
  import { fade } from 'svelte/transition'
  export let routine
  export let editMode
  export let onRemove
  export let bgClass
  export let onUp
</script>

<div class={'card mb-1 ' + bgClass} transition:fade>
  <div class="p-2">
    {#if editMode}
      <button
        type="button"
        class="btn btn-secondary btn-sm ml-1"
        on:click={onUp(routine.id)}>up</button>
    {/if}
    {routine.description}
    {#if editMode}
      <button
        type="button"
        class="btn btn-danger btn-sm ml-1 right"
        on:click={onRemove(routine.id)}>x</button>
    {/if}
  </div>
</div>
