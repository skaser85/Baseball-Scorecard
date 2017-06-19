<template>
  <div id="panel">
    <div class="panel">
        <div class="panel-header">
            <span class="panel-title">Teams</span>
            <span class="panel-action opened" v-bind:class="{closed: closed}" v-on:click="togglePanel"></span>
        </div>
        <div class="panel-content" v-bind:class="{closed: closed}">
            this is panel content
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'panel',
  data () {
    return {
      closed: false
    }
  },
  methods: {
    togglePanel() {
        this.closed = !this.closed;
    }
  }
}
</script>

<style lang="scss" scoped>
    @import "../scss/globals.scss";

    *, *:before, *:after {
        box-sizing: border-box;
    }

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
</style>