<template>
  <div id="teams-panel">
    <div class="panel">
        <div class="panel-header">
            <span class="panel-title">Teams</span>
            <span class="panel-action opened" v-bind:class="{closed: closed}" v-on:click="togglePanel"></span>
        </div>
        <div class="panel-content teams-panel" v-bind:class="{closed: closed}">
            <div class="team home-team">
                <label for="home-team-name">Home Team Name</label>
                <select v-model="homeTeam.name">
                    <option disabled value="">Please Select a Team</option>
                    <option v-for="team in teamNames" v-bind:value="team">{{team}}</option>
                </select>
                <input type="text" id="home-team-name" v-model="homeTeam.name" value="homeTeam.name">
            </div>
            <div class="team away-team">
                <label for="away-team-name">Away Team Name</label>
                <input type="text" id="away-team-name" v-model="awayTeam.name" value="awayTeam.name">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'teams-panel',
  data () {
    return {
      closed: false
    }
  },
  methods: {
    togglePanel() {
        this.closed = !this.closed;
    }
  },
  computed: mapGetters(["homeTeam", "awayTeam", "scoreboard", "teamNames"])
}
</script>

<style lang="scss" scoped>
    @import "../scss/globals.scss";

    *, *:before, *:after {
        box-sizing: border-box;
    }

    // PANEL CSS
    .panel {
        width: 100%;
        @include flex-column; 
        border-radius: 5px;
        box-shadow: 5px 5px 5px lighten(grey, 10);
    }

    .panel-header {
        @include flex-row;
        justify-content: space-between;
        align-items: center;
        padding: 3px 10px;
        background: grey;
    }

    .panel-title {
        font-size: 18px;
        font-weight: bold;
        border-radius: 5px;
    }

    .panel-action {
        width: 20px;
        height: 10px;
        background: black;
    }

    .panel-action.opened {
        clip-path: polygon(100% 0, 50% 100%, 0 0);
    }

    .panel-action.closed {
        clip-path: polygon(0 100%, 100% 100%, 50% 0);
    }

    .panel-content {
        display: block;
    }

    .panel-content.closed {
        display: none;
    }

    // PANEL CONTENT CSS
    .teams-panel {
        padding: 10px 20px;
        @include flex-column;
        @include flex-center;
    }

    .team {
        padding: 8px 0;
    }

    .home-team {
        border-bottom: 1px solid #333;
    }
</style>