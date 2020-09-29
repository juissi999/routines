<script>
  import { v4 as uuid } from 'uuid'
  import Routine from './Routine.svelte'

  let editMode = false

  let routinelist = [
    { description: 'eat', id: uuid() },
    { description: 'sleep', id: uuid() }
  ]
  const onAdd = () => {}
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
      {#each routinelist as routine}
        <Routine {editMode} {routine} {onRemove} />
      {/each}
      <button on:click={onEdit}>edit</button>
    </div>
  </div>
</div>
