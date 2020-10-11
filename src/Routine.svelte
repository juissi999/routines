<script>
  import { fade } from 'svelte/transition'
  import Icon from 'svelte-awesome/components/Icon.svelte'
  import { times, arrowUp } from 'svelte-awesome/icons'

  export let routine
  export let editMode
  export let onRemove
  export let cardClass
  export let onUp
</script>

<div class={'mb-1 ' + cardClass} transition:fade>
  <div class="p-2">
    {#if editMode}
      <div class="block textdark" on:click={onUp(routine.id)}>
        <Icon data={arrowUp} />
      </div>
    {/if}
    {routine.description}
    {#if editMode}
      <div class="right textdark" on:click={onRemove(routine.id)}>
        <Icon data={times} />
      </div>
    {/if}
  </div>
</div>
