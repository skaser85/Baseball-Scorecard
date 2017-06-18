export default {
    // getters go here
    homeTeam(state) {
        return state.teams.home;
    },
    awayTeam(state) {
        return state.teams.away;
    },
    scoreboard(state) {
        return state.scoreboard;
    },
    battingTeam(state) {
        return state.scoreboard.inningHalf === "top" ? state.teams.away : state.teams.home;
    },
    pitchingTeam(state) {
        return state.scoreboard.inningHalf === "top" ? state.teams.home : state.teams.away;
    },
    homeBatting(state) {
        return state.scoreboard.inningHalf === "bottom";
    },
    awayBatting(state) {
        return state.scoreboard.inningHalf === "top";
    }
}