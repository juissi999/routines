<script>
  import { v4 as uuid } from 'uuid'
  import Routine from './Routine.svelte'

  let editMode = false
  let editedRoutine = ''

  let routinelist = [
    { description: 'eat', id: uuid() },
    { description: 'sleep', id: uuid() }
  ]
  const onAdd = () => {
    routinelist = routinelist.concat({ description: editedRoutine, id: uuid() })
    editedRoutine = ''
  }
  const onEdit = () => {
    editMode = !editMode
  }
  const onRemove = (id) => {
    routinelist = routinelist.filter((li) => li.id !== id)
  }
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
</svelte:head>
<div class="container">
  <div class="row">
    <div class="col">
      <h1>routines</h1>
      {#each routinelist as routine, index}
        <Routine
          {editMode}
          {routine}
          {onRemove}
          bgClass={index % 2 ? 'bg-info' : 'bg-secondary'} />
      {/each}
      {#if editMode}
        <input
          type="text"
          placeholder="Routine description"
          bind:value={editedRoutine} />
        <button
          type="button"
          class="btn btn-success"
          on:click={onAdd}>add</button>
      {/if}
      <div>
        <button
          type="button"
          class="btn btn-warning"
          on:click={onEdit}>edit</button>
      </div>
    </div>
  </div>
</div>
