<script>
  import { onMount } from 'svelte'
  import { v4 as uuid } from 'uuid'

  import Routine from './Routine.svelte'
  import NewForm from './NewForm.svelte'

  const storageKey = 'routines'
  let editMode = false
  let editedRoutine = ''
  let routines = []

  const cardClasses = [
    'card-pastel-1',
    'card-pastel-2',
    'card-pastel-3',
    'card-pastel-4',
    'card-pastel-5',
    'card-pastel-6'
  ]

  const updated = () => {
    if (routines.length > 0) {
      localStorage.setItem(storageKey, JSON.stringify(routines, null, 2))
    } else {
      // if user deletes all routines, delete local storage object
      localStorage.removeItem(storageKey)
    }
  }

  const onAdd = () => {
    // add new routine to the beginning of the list
    if (editedRoutine.length > 0) {
      routines = [
        {
          description: editedRoutine,
          id: uuid()
        }
      ].concat(routines)
      editedRoutine = ''
      editMode = false
    }
    updated()
  }

  const onEdit = () => {
    editedRoutine = ''
    editMode = !editMode
  }

  const onRemove = (id) => {
    routines = routines.filter((li) => li.id !== id)
    updated()
  }

  const onUp = (id) => {
    // find the index of the routine to be shifted
    const index = routines.findIndex((r) => r.id === id)

    if (index > 0) {
      // get the object of the to-shift routine
      const removedRoutine = routines[index]

      // remove the to-shift routine
      routines = routines.filter((r) => r.id !== id)

      // add the routine again to one spot above on the array
      routines.splice(index - 1, 0, removedRoutine)
      updated()
    }
  }

  onMount(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () =>
        navigator.serviceWorker
          .register('sw_cached_site.js')
          .then((reg) => console.log('Service Worker: Registered'))
          .catch((err) => console.log(`Service Worker: Error: ${err}`))
      )
    }

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
      <h1 class="text-white">
        routines
        <button
          type="button"
          class={editMode ? 'bton edit edit_active' : 'bton edit'}
          on:click={onEdit}>edit</button>
      </h1>
    </div>
  </div>
  {#if editMode}
    <NewForm bind:editedRoutine {onAdd} />
  {/if}
  <div class="row">
    <div class="col">
      {#each routines as routine, index (routine.id)}
        <Routine
          {editMode}
          {routine}
          {onRemove}
          {onUp}
          cardClass={cardClasses[index % cardClasses.length]} />
      {/each}
    </div>
  </div>
</div>
