<script>
  import { onMount } from 'svelte'
  export let routine
  export let updated
  export let editRoutineId
  export let resetEditModeTimeout

  let dom_node
  let editedRoutine = ''

  const onInputClick = (e) => {
    // reset timeout
    resetEditModeTimeout()

    if (e.key === 'Enter') {
      onEditReady()
    }
  }

  const onEditReady = () => {
    if (editedRoutine.length > 0) {
      routine.description = editedRoutine
      editRoutineId = ''
      updated()
    }
  }
  onMount(() => {
    dom_node.focus()
    editedRoutine = routine.description
  })
</script>

<input
  bind:this={dom_node}
  class="form-control my-1"
  type="text"
  on:keypress={onInputClick}
  bind:value={editedRoutine}
  placeholder="Edit" />
<button
  type="button"
  class="bton blue_active"
  on:click={onEditReady}>rdy</button>
