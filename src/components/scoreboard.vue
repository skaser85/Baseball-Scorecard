<template>
  <div id="scoreboard">
    <players v-bind:teams="this.teams"></players>
    <scores v-bind:teams="this.teams" v-bind:scoreboard="this.scoreboard"></scores>
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
  props: ["teams", "scoreboard"],
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
