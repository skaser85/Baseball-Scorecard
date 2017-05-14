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
              timesUp: 3,
              hits: 2,
              pitches: 0,
              battingOrder: 3,
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
          score: 0,
          players: [
            {
              firstName: "Madison",
              lastName: "Bumgarner",
              number: 40,
              position: "SP",
              timesUp: 2,
              hits: 1,
              pitches: 25,
              battingOrder: 9,
              starting: true,
              bench: false
            }
          ]
        }
      },
      scoreboard: {
        inning: 0,
        inningHalf: {
          top: true,
          bottom: false
        },
        bases: {
          first: false,
          second: false,
          third: false
        },
        pitchCount: {
          balls: 3,
          strikes: 2
        },
        outs: {
          one: false,
          two: false,
          three: false
        }
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
