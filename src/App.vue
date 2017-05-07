<template>
  <div id="app">
    <scoreboard></scoreboard>
  </div>
</template>

<script>
import Scoreboard from "./components/scoreboard.vue";

export default {
  name: 'app',
  components: {
    "scoreboard": Scoreboard
  },
  data () {
    return {
      
    }
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
  }
</style>
