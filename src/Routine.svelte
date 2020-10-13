<script>
  import { fade } from 'svelte/transition'
  import Icon from 'svelte-awesome/components/Icon.svelte'
  import { times, arrowUp, pencil } from 'svelte-awesome/icons'

  export let routine
  export let editMode
  export let onRemove
  export let cardClass
  export let editRoutineId
  export let onUp
  export let updated

  const iconScale = '1.5'
  let editedRoutine = ''

  const updateEditRoutine = (id) => {
    editRoutineId = id
    editedRoutine = routine.description
  }

  const onInputClick = (e) => {
    if (e.key === 'Enter') {
      onEditReady()
    }
  }

  const onEditReady = () => {
    routine.description = editedRoutine
    editRoutineId = ''
    updated()
  }
</script>

<div class={'mb-1 ' + cardClass} transition:fade>
  <div class="p-2">
    {#if editMode}
      <div class="pointer block textdark" on:click={onUp(routine.id)}>
        <Icon data={arrowUp} scale={iconScale} />
      </div>
      <div
        class="pointer block textdark"
        on:click={updateEditRoutine(routine.id)}>
        <Icon data={pencil} scale={iconScale} />
      </div>
    {/if}
    {#if !(editRoutineId === routine.id)}
      {routine.description}
    {:else}
      <input
        class="form-control"
        type="text"
        placeholder="New"
        on:keypress={onInputClick}
        bind:value={editedRoutine} />
      <button
        type="button"
        class="bton blue_active"
        on:click={onEditReady}>rdy</button>
    {/if}
    {#if editMode}
      <div class="pointer right textdark" on:click={onRemove(routine.id)}>
        <Icon data={times} scale={iconScale} />
      </div>
    {/if}
  </div>
</div>
