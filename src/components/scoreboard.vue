<template>
  <div id="scoreboard">
    <players></players>
    <scores></scores>
  </div>
</template>

<script>
import Players from "./players.vue";
import Scores from "./scores.vue";

export default {
  name: 'scoreboard',
  components: {
      "players": Players,
      "scores": Scores
  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
    @import "../scss/globals.scss";

    *, *:before, *:after {
        box-sizing: border-box;
    }

    #scoreboard {
        width: 100%;
    }
</style>
