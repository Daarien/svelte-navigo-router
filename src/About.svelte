<script>
  export let router;

  function handleNavigate() {
    router.navigate("/");
  }
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  p {
    display: flex;
    justify-content: center;
  }

  button {
    margin-right: 16px;
  }
</style>

<main>
  <h1>About page</h1>
  <p>Svelte app with Navigo router</p>
  <p>
    <button on:click={handleNavigate}>back btn</button>
    <a href="/" data-navigo>back anchor</a>
  </p>
</main>
