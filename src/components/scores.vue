<template>
  <div id="scoreboard-scores">
    <div class="teams base">
        <div class="score-top">
        <div class="away-team team">{{away.name}}</div>
        <div class="score away-score">{{away.score}}</div>
        <div class="inning-bases blue-grad">
            <div class="inning flex-column">
            <span class="inning-top" v-bind:class="{yellow: topOfInning}" v-on:click="toggleTopOfInning" v-show="!bottomOfInning"></span>
            <span class="inning-number">{{inning}}</span>
            <span class="inning-bottom" v-bind:class="{yellow: bottomOfInning}" v-on:click="toggleBottomInning" v-show="!topOfInning"></span>
            </div>
            <div class="bases flex-row">
            <span class="base third-base" v-bind:class="{yellow: basesOccupied.third}" v-on:click="toggleThirdBase"></span>
            <span class="base second-base" v-bind:class="{yellow: basesOccupied.second}" v-on:click="toggleSecondBase"></span>
            <span class="base first-base" v-bind:class="{yellow: basesOccupied.first}" v-on:click="toggleFirstBase"></span>
            </div>
        </div>
        </div>
        <div class="score-bottom">
        <!-- HOME TEAM -->
        <div class="home-team team">{{home.name}}</div>
        <!-- HOME SCORE -->
        <div class="score home-score">{{home.score}}</div>
        <!-- PITCH COUNT & OUTS -->
        <div class="pitch-count-outs blue-grad">
            <span class="pitch-count">{{pitchCount.balls}}-{{pitchCount.strikes}}</span>
            <div class="outs">
            <span class="out-1 out-circle" v-bind:class="{yellow: firstOut}" v-on:click="toggleFirstOut"></span>
            <span class="out-2 out-circle" v-bind:class="{yellow: secondOut}" v-on:click="toggleSecondOut"></span>
            </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'scoreboard-scores',
  data () {
    return {
        away: {
            name: "CIN",
            score: 8
        },
        home: {
            name: "SFG",
            score: 3
        },
        inning: 5,
        bottomOfInning: true,
        topOfInning: false,
        pitchCount: {
        balls: 3,
        strikes: 2
        },
        basesOccupied: {
        first: false,
        second: false,
        third: false
        },
        firstOut: false,
        secondOut: false
    }
  },
  methods: {
    toggleFirstOut: function() {
      this.firstOut = !this.firstOut;
    },
    toggleSecondOut: function() {
      this.secondOut = !this.secondOut;
    },
    toggleFirstBase: function() {
      this.basesOccupied.first = !this.basesOccupied.first;
    },
    toggleSecondBase: function() {
      this.basesOccupied.second = !this.basesOccupied.second;
    },
    toggleThirdBase: function() {
      this.basesOccupied.third = !this.basesOccupied.third;
    },
    toggleBottomInning: function() {
      this.bottomOfInning = false;
      this.topOfInning = true;
    },
    toggleTopOfInning: function() {
      this.topOfInning = false;
      this.bottomOfInning = true;
    }
  }
}
</script>

<style lang="scss" scoped>
    @import "../scss/globals.scss";

    *, *:before, *:after {
        box-sizing: border-box;
    }
</style>
