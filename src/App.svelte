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
    if (editedRoutine.length > 0) {
      routinelist = routinelist.concat({
        description: editedRoutine,
        id: uuid()
      })
    editedRoutine = ''
  }
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
      <h1 class="text-white">routines</h1>
    </div>
  </div>
  <div class="row">
    <div class="col">
      {#each routinelist as routine, index}
        <Routine
          {editMode}
          {routine}
          {onRemove}
          bgClass={index % 2 ? 'bg-info' : 'bg-secondary'} />
      {/each}
    </div>
  </div>
      {#if editMode}
    <div class="row my-1">
      <div class="col-8 col-sm-10 col-md-10 col-lg-10 col-xl-11">
        <input
          class="form-control"
          type="text"
          placeholder="Routine description"
          bind:value={editedRoutine} />
      </div>
      <div class="col">
        <button
          type="button"
          class="btn btn-success"
          on:click={onAdd}>add</button>
      </div>
    </div>
      {/if}
  <div class="row">
    <div class="col">
        <button
          type="button"
          class="btn btn-warning"
          on:click={onEdit}>edit</button>
      </div>
    </div>
  </div>
</div>
