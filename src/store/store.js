import Vue from "vue"
import Vuex from "vuex"

import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        // data goes here      
        teams: {
            home: {
                side: "home",
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
                side: "away",
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