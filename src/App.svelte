<script>
  import Navigo from "navigo";
  import MainPage from "./Main.svelte";
  import AboutPage from "./About.svelte";

  function initRouter() {
    const router = new Navigo();
    router.on(() => setPage("main"));
    router.on("/about", () => setPage("about"));
    return router;
  }

  const routes = {
    main: MainPage,
    about: AboutPage
  };

  export let selectedPage = routes.main;

  function setPage(page) {
    selectedPage = routes[page];
  }

  const router = initRouter();
  router.resolve();
</script>

<div id="root">
  <svelte:component this={selectedPage} {router} />
</div>
