<script>
  export let routine
  export let editMode
  export let onRemove
</script>

<div class="card mb-1">
  <div class="card-body">
    {#if editMode}
      <button
        type="button"
        class="btn btn-info"
        on:click={onRemove(routine.id)}>-</button>
    {/if}
    {routine.description}
  </div>
</div>
