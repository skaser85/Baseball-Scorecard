<template>
  <div id="panels">
    <teamsPanel></teamsPanel>
  </div>
</template>

<script>
import TeamsPanel from "./teamsPanel.vue";
export default {
  name: 'panels',
  components: {
    "teamsPanel": TeamsPanel
  },
  data () {
    return {
      
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
    @import "../scss/globals.scss";

    *, *:before, *:after {
        box-sizing: border-box;
    }
</style>
