<template>
  <div id="scoreboard-players">
    <div class="players">
        <div class="player batter">
        <span>{{teams.home.players[0].lastName}}</span>
        <span class="bold">{{teams.home.players[0].hits}} for {{teams.home.players[0].timesUp}}</span>
        </div>
        <div class="player pitcher">
        <span>{{teams.away.players[0].lastName}}</span>
        <span>P: <span class="bold">{{teams.away.players[0].pitches}}</span></span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'scoreboard-players',
  props: ["teams"],
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
        background: $away-color;
        background-image: $away-gradient;
        border-radius: 5px 5px 0 0;
    }
  
    .pitcher {
        background: $home-color;
        background-image: $home-gradient;
        border-radius: 0 0 5px 5px;
    }

    .bold {
        font-weight: bold;
    }
</style>
