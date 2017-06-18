<template>
  <div id="scoreboard-players">
    <div class="players">
        <div class="player batter" v-bind:class="{ home: homeBatting, away: awayBatting }">
        <span>{{battingTeam.players[0].lastName}}</span>
        <span class="bold">{{battingTeam.players[0].hits}} for {{battingTeam.players[0].timesUp}}</span>
        </div>
        <div class="player pitcher" v-bind:class="{ home: !homeBatting, away: !awayBatting }">
        <span>{{pitchingTeam.players[0].lastName}}</span>
        <span>P: <span class="bold">{{pitchingTeam.players[0].pitches}}</span></span>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'scoreboard-players',
  data () {
    return {
        
    }
  },
  computed: mapGetters(["homeTeam", "awayTeam", "battingTeam", "pitchingTeam", "homeBatting", "awayBatting"])
}
</script>

<style lang="scss" scoped>
    @import "../scss/globals.scss";

    *, *:before, *:after {
        box-sizing: border-box;
    }

    .players {
        @include flex-column;
        @include flex-center;
        font-family: "Arimo", sans-serif;
        font-size: 24px;
        margin-bottom: 15px;
        color: $white;
        text-transform: uppercase;
        width: 100%;
        border-radius: 5px;
        box-shadow: -1px 1px 5px 10px rgba(0,0,0,$alpha);
        background: rgba(0,0,0,$alpha);
    }

    .player {
        width: 100%;
        margin: 0 20px;
        padding: 5px 20px;
        @include flex-row;
        justify-content: space-between;
    }

    .batter {
        border-radius: 5px 5px 0 0;
    }

    .home {
        background: $home-color;
        background-image: $home-gradient;
    }
  
    .pitcher {
        border-radius: 0 0 5px 5px;
    }

    .away {
        background: $away-color;
        background-image: $away-gradient;
    }

    .bold {
        font-weight: bold;
    }
</style>
