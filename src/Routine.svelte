<script>
  export let routine
  export let editMode
  export let onRemove
  export let bgClass
</script>

<div class={'card mb-1 ' + bgClass}>
  <div class="card-body " style="font-size:20px">
    {routine.description}
    {#if editMode}
      <button
        type="button"
        class="btn btn-danger btn-sm ml-1"
        on:click={onRemove(routine.id)}>-</button>
    {/if}
  </div>
</div>
