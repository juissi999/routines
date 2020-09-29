<script>
  let routinelist = [{ description: 'eat' }, { description: 'sleep' }]
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
        <div class="card mb-1 p-2">{routine.description}</div>
      {/each}
    </div>
  </div>
</div>
