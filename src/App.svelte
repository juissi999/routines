<script>
  import { onMount } from 'svelte'
  import { v4 as uuid } from 'uuid'
  import Icon from 'svelte-awesome/components/Icon.svelte'
  import { lock } from 'svelte-awesome/icons'

  import Routine from './Routine.svelte'
  import NewForm from './NewForm.svelte'
  import themes from './themes.json'
  import store from './storeService'

  let editMode = false
  let newRoutine = ''
  let currentTheme = 0
  let routines = []
  let cardClasses = []

  // initialize theme
  const themeNames = Object.keys(themes)

  const updated = () => {
    store.update(routines, currentTheme)
  }

  const onTheme = () => {
    // set theme to next one and
    currentTheme = (currentTheme + 1) % themeNames.length
    cardClasses = themes[themeNames[currentTheme]]
    updated()
  }

  const onAdd = () => {
    // add new routine to the beginning of the list
    if (newRoutine.length > 0) {
      routines = [
        {
          description: newRoutine,
          id: uuid()
        }
      ].concat(routines)
      newRoutine = ''
      editMode = false
    }
    updated()
  }

  const onEdit = () => {
    newRoutine = ''
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
    // register service workers
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () =>
        navigator.serviceWorker
          .register('sw_cached_site.js')
          .then((reg) => console.log('Service Worker: Registered'))
          .catch((err) => console.log(`Service Worker: Error: ${err}`))
      )
    }

    // initialize store
    const response = store.init()
    routines = response.routines
    currentTheme = response.theme % themeNames.length
    cardClasses = themes[themeNames[currentTheme]]
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
      <h1 class="textwhite">
        routines
        <button
          type="button"
          class={editMode ? 'bton yellow' : 'bton yellow_active'}
          on:click={onEdit}>
          <Icon data={lock} /></button>
      </h1>
    </div>
  </div>
  {#if editMode}
    <NewForm bind:newRoutine {onAdd} />
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
  {#if editMode}
    <div class="row">
      <div class="col textwhite">
        <button
          type="button"
          class={'bton blue_active'}
          on:click={onTheme}>theme</button>
        {themeNames[currentTheme]}
      </div>
    </div>
  {/if}
</div>
