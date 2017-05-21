<template>
  <div id="app">
    <scoreboard v-bind:teams="teams" v-bind:scoreboard="scoreboard"></scoreboard>
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
          city: "San Francisco",
          name: "Giants",
          abbreviation: "SF",
          colors: {
            primary: "#fd5a1e",
            secondary: "#000000",
            tertiary: "#8b6f4e"
          },
          battingTeam: "home",
          fieldingTeam: "away",
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
        inningHalf: "top",
        bases: [],
        pitchCount: {
          balls: 0,
          strikes: 0
        },
        outs: []
      }
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
