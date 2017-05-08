<template>
  <div id="scoreboard-scores">
    <div class="teams">
        <div class="score-row">
        <!-- AWAY TEAM -->
        <div class="away-team team">{{away.name}}</div>
        <!-- AWAY SCORE -->
        <div class="score away-score">{{away.score}}</div>
        <!-- INNING COUNT & BASES -->
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
        <div class="score-row">
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
            name: "SFG",
            score: 3
        },
        home: {
            name: "CIN",
            score: 8
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

    .teams {
      width: 100%;
      color: $white;
      text-transform: uppercase;
      width: 100%;
      border-radius: 5px;
      box-shadow: -1px 1px 5px 10px rgba(0,0,0,$alpha);
      background: rgba(0,0,0,$alpha);
      text-align: center;
      font-size: 45px;
      line-height: 45px;
      @include flex-column;
      font-family: "Arimo", sans-serif;
    }

    .score-row {
      width: 100%;
      @include flex-row;
      justify-content: space-around;
    }

    .team {
      padding: 8px 0;
      width: 40%;
      @include flex-row;
      @include flex-center;
    }

    .score {
      width: 20%;
      @include flex-row;
      @include flex-center;
    }

    .pitch-count-outs {
      @include flex-row;
      align-items: center;
      justify-content: space-around;
    }

    .pitch-count-outs, .inning-bases {
      width: 40%;
    }

    .blue-grad {
      background: $base;
      background-image: $blue-grad
    }

    .inning-bases {
      @include flex-row;
      align-items: center;
    }
  
    .inning {
      @include flex-column;
      @include flex-center;
      padding-left: 19%;
    }
    
    .inning-top {
      width: 20px;
      height: 10px;
      background: rgba(255,255,255,0.35);
      clip-path: polygon(0 100%, 50% 0, 100% 100%);
      margin-top: 5px;
    }
    
    .inning-number {
      font-size: 36px;
    }
    
    .inning-bottom {
      width: 20px;
      height: 10px;
      background: rgba(255,255,255,0.35);
      clip-path: polygon(0 0, 100% 0, 50% 100%);
      margin-bottom: 5px;
    }
    
    .bases {
      @include flex-row;
      width: 30%;
      justify-content: space-around;
      align-items: center;
      height: 45px;
      margin: 12px 20px 0 0;
      position: relative;
    }
    
    .bases:after {
      content:'';
      width: 65px;
      height: 65px;
      background: rgba(255,255,255,0.1);
      position: absolute;
      top: -9px;
      clip-path: polygon(0 50%, 50% 0, 100% 50%, 75% 75%, 50% 50%, 25% 75%)
    }
    
    .base {
      width: 15px;
      height: 15px;
      background: rgba(255,255,255,0.5);
      border-radius: 0;
      box-shadow: none;
      transform: rotate(45deg);
      z-index: 1;
    }
    
    .second-base {
      align-self: flex-start;
    }
    
    .pitch-count {
      margin-left: 3px;
      font-size: 36px;
    }
    
    .outs {
      @include flex-row;
      justify-content: center;
    }
    
    .out-1 {
      margin-right: 10px;
    }
    
    .out-2 {
      margin-right: 10px;
    }
    
    .out-circle {
      width: 20px;
      height: 20px;
      background: $white;
      border-radius: 50%;
    }

    .yellow {
      background: $yellow;
    }
  
    .away-team {
      background: $away-color;
      background-image: $away-gradient;
      border-radius: 5px 0 0 0;
    }
    
    .home-team {
      background: $home-color;
      background-image: $home-gradient;
      border-radius: 0 0 0 5px;
    }
  
    .away-score {
      background: $away-color;
      background-image: $away-gradient-dark;
    }
    
    .home-score {
      background: $home-color;
      background-image: $home-gradient-dark;
    }    
</style>
