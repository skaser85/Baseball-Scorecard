<template>
  <div id="app">
    <scoreboard v-bind:teams="teams" v-bind:scoreboard="scoreboard" v-bind:inningHalf="inningHalf"></scoreboard>
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
      teams: {
        home: {
          side: "home",
          city: "Cincinnati",
          name: "Reds",
          abbreviation: "CIN",
          colors: {
            primary: "#c6011f",
            secondary: "#000000",
            tertiary: "#ffffff"
          },
          score: 0,
          players: [
            {
              firstName: "Joey",
              lastName: "Votto",
              number: 19,
              position: "1B",
              timesUp: 0,
              hits: 0,
              pitches: 0,
              battingOrder: 0,
              starting: true,
              bench: false
            }
          ]
        },
        away: {
          side: "away",
          city: "San Francisco",
          name: "Giants",
          abbreviation: "SF",
          colors: {
            primary: "#fd5a1e",
            secondary: "#000000",
            tertiary: "#8b6f4e"
          },
          score: 0,
          players: [
            {
              firstName: "Madison",
              lastName: "Bumgarner",
              number: 40,
              position: "SP",
              timesUp: 0,
              hits: 0,
              pitches: 0,
              battingOrder: 0,
              starting: true,
              bench: false
            }
          ]
        }
      },
      scoreboard: {
        inning: 1,
        inningHalf: "bottom",
        bases: [],
        pitchCount: {
          balls: 0,
          strikes: 0
        },
        outs: []
      }
    }
  },
  methods: {

  },
  computed: {
    inningHalf() {
      return this.scoreboard.inningHalf;
    }
  },
  created() {
    this.$on("inningChange", function(half) {
      console.log(half);
      this.inningHalf = half;
    })
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
