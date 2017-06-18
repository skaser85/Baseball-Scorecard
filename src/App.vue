<template>
  <div id="app">
    <scoreboard></scoreboard>
    <panels></panels>
  </div>
</template>

<script>
import Scoreboard from "./components/scoreboard.vue";
import Panels from "./components/panels.vue";

export default {
  name: 'app',
  components: {
    "scoreboard": Scoreboard,
    "panels": Panels
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
  *, *:before, *:after {
    box-sizing: border-box;
  }

  #app {
    width: 400px;
    margin: 100px auto;
    font-family: "Arimo", sans-serif;
  }

  #panels {
    margin-top: 25px;
  }
</style>
