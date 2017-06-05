<template>
  <div id="scoreboard">
    <players v-bind:battingTeam="battingTeam" v-bind:pitchingTeam="pitchingTeam"></players>
    <scores v-bind:teams="teams" v-bind:scoreboard="scoreboard"></scores>
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
      battingTeam: this.scoreboard.inningHalf === "top" ? this.teams.away : this.teams.home,
      pitchingTeam: this.scoreboard.inningHalf === "top" ? this.teams.home : this.teams.away
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
