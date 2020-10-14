<script>
  export let onAdd
  export let newRoutine
  export let resetEditModeTimeout

  const onInputClick = (e) => {
    // listen to keypresses on new input
    // renew timeout on every keypress
    resetEditModeTimeout()

    // if the user presses enter commit Add new routine
    if (e.key === 'Enter') {
      onAdd()
    }
  }
</script>

<div class="row my-1">
  <div class="col-8 col-sm-10 col-md-10 col-lg-10 col-xl-11">
    <input
      class="form-control"
      type="text"
      placeholder="New"
      on:keypress={onInputClick}
      bind:value={newRoutine} />
  </div>
  <div class="col">
    <button type="button" class="bton blue_active" on:click={onAdd}>add</button>
  </div>
</div>
