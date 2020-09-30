<script>
  import { onMount } from 'svelte'
  import { v4 as uuid } from 'uuid'
  import { dndzone } from 'svelte-dnd-action'

  import Routine from './Routine.svelte'

  const storageKey = 'routines'
  let editMode = false
  let editedRoutine = ''
  let routines = []

  const bgClasses = [
    // 'bg-info',
    // 'bg-dark',
    // 'bg-success',
    // 'bg-primary',
    // 'bg-secondary',
    // 'bg-warning',
    'color-1',
    'color-6',
    'color-3',
    'color-4',
    'color-2',
    'color-5'
  ]

  const updated = () => {
    localStorage.setItem(storageKey, JSON.stringify(routines, null, 2))
  }

  const handleSort = (e) => {
    routines = e.detail.items
  }

  const onAdd = () => {
    if (editedRoutine.length > 0) {
      routines = routines.concat({
        description: editedRoutine,
        id: uuid()
      })
      editedRoutine = ''
      editMode = false
    }
    updated()
  }
  const onEdit = () => {
    editMode = !editMode
  }
  const onRemove = (id) => {
    routines = routines.filter((li) => li.id !== id)
    updated()
  }
  onMount(() => {
    const initial = [
      { description: 'eat', id: uuid() },
      { description: 'sleep', id: uuid() }
    ]

    if (localStorage.getItem(storageKey) === null) {
      localStorage.setItem(storageKey, JSON.stringify(initial, null, 2))
    }
    routines = JSON.parse(localStorage.getItem(storageKey))
  })
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
      {#if editMode}
        <section
          use:dndzone={{ items: routines }}
          on:consider={handleSort}
          on:finalize={handleSort}>
          {#each routines as routine, index (routine.id)}
            <Routine
              {editMode}
              {routine}
              {onRemove}
              bgClass={bgClasses[index % bgClasses.length]} />
          {/each}
        </section>
      {:else}
        {#each routines as routine, index (routine.id)}
          <Routine
            {editMode}
            {routine}
            {onRemove}
            bgClass={bgClasses[index % bgClasses.length]} />
        {/each}
      {/if}
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
