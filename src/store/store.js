import Vue from "vue"
import Vuex from "vuex"

import { teams } from "./teams";

import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        teams,
        homeTeam: teams[0],
        awayTeam: teams[1],
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
    },
    getters,
    mutations,
    actions
});