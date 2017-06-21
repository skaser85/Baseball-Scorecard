export default {
    // getters go here
    teamNames(state) {
        var teams = [];
        state.teams.forEach((team) => {
            teams.push(team.name);
        });
        return teams;
    },
    homeTeam(state) {
        return state.homeTeam;
    },
    awayTeam(state) {
        return state.awayTeam;
    },
    scoreboard(state) {
        return state.scoreboard;
    },
    battingTeam(state) {
        return state.scoreboard.inningHalf === "top" ? state.awayTeam : state.homeTeam;
    },
    pitchingTeam(state) {
        return state.scoreboard.inningHalf === "top" ? state.homeTeam : state.awayTeam;
    },
    homeBatting(state) {
        return state.scoreboard.inningHalf === "bottom";
    },
    awayBatting(state) {
        return state.scoreboard.inningHalf === "top";
    }
}