<script>
  import { onMount } from 'svelte'
  export let routine
  export let updated
  export let editRoutineId

  let dom_node
  let editedRoutine = ''

  const onInputClick = (e) => {
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
    editedRoutine = routine.description
    dom_node.focus()
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
