<script>
  import { fade } from 'svelte/transition'
  import Icon from 'svelte-awesome/components/Icon.svelte'
  import { times, arrowUp, pencil } from 'svelte-awesome/icons'
  import EditForm from './EditForm.svelte'

  export let routine
  export let editMode
  export let onRemove
  export let cardClass
  export let editRoutineId
  export let onUp
  export let updated
  export let resetEditModeTimeout

  const iconScale = '1.5'

  const updateEditRoutine = (id) => {
    resetEditModeTimeout()
    editRoutineId = id
  }
</script>

<style>
  .right-corner {
    font-weight: bold;
    position: absolute;
    top: 5px;
    right: 10px;
  }
  .on-left-of-right-corner {
    margin-right: 22px;
  }
  .relative {
    position: relative;
  }
</style>

<div class={'mb-1 relative ' + cardClass} transition:fade>
  <div class="p-2">
    <div class={editMode ? 'on-left-of-right-corner' : ''}>
      {#if editMode}
        <div class="pointer block textdark" on:click={onUp(routine.id)}>
          <Icon data={arrowUp} scale={iconScale} />
        </div>
        <div
          class="pointer block textdark"
          on:click={editRoutineId === routine.id ? updateEditRoutine('') : updateEditRoutine(routine.id)}>
          <Icon data={pencil} scale={iconScale} />
        </div>
      {/if}
      {#if !(editRoutineId === routine.id)}
        {routine.description}
      {:else}
        <EditForm
          {updated}
          {routine}
          {resetEditModeTimeout}
          bind:editRoutineId />
      {/if}
    </div>
    {#if editMode}
      <div
        class="pointer textdark right-corner"
        on:click={onRemove(routine.id)}>
        ✕
      </div>
    {/if}
  </div>
</div>
