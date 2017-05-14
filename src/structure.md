# Data Structure

##Teams (Home/Away):

### Team Object

* __city__: String
* __name__: String
* __abbreviation__: String
* __colors__: Object
    * __primary__: Hex
    * __secondary__: Hex
    * __tertiary__: Hex
* __score__: Number
* __players__: Array
    * _Player Object_:
        * __firstName__: String
        * __lastName__: String
        * __number__: Number
        * __position__: String
        * __timesUp__: Number
        * __hits__: Number
        * __pitches__: Number
        * __battingOrder__: Number
        * __starting__: Boolean
        * __bench__: Boolean

### Team Functions

1. Create a team:
    
    >Create a team (home or away) and assign data to it.  Some kind of form to collect the data, then something to accumulate the data into the necessary objects.  Idea is to not lock this down to MLB but leave it open to use at any level of baseball.  Possibly add a selection at some point to choose from MLB data.  The Team's _score_ will be defaulted to zero and the updated when (if) the Team scores.

    * __City__: text input
    * __Name__: text input
    * __Abbreviation__: text input
    * __Colors__: separate color inputs for each color:
        * __Primary__: color input
        * __Secondary__: color input
        * __Tertiary__: color input
    * __Home/Away__: slider (radio buttons with fancy CSS)

2. Create a roster:

    >Create a player object and add that player to the appropriate team.  Some kind of form to collect the data, then something to accumulate the data ino the necessary object, then something to add that object to the Team object's _players_ array.  The Player's _timesUp_, _hits_ and _pitches_ properties will be defaulted to zero and updated when necessary.  If the _Starting_ checkbox gets checked, then the _starting_ boolean gets set to true and the _bench_ boolean gets set to false.  Otherwise, _starting_ = false and _bench_ = true.  This is so that players on the bench can be added to the lineup and starters can get benched - substitutions.

    * __First Name__: text input
    * __Last Name__: text input
    * __Number__: text input
    * __Position__: select input
    * __Batting Order__: select input
    * __Starting__: checkbox input

3. Substitute a player:

    >Create a way for a player to get substituted.  A current player's _bench_ boolean will get set to true and another player's _bench_ boolean will get set to false.  Will probably need to update _battingOrder_ and _position_ for new player to set it to the old player's _battingOrder_ and _position_.  If it's a pitcher then we'll need to reset the _pitchCount_ back to zero to start with the fresh pitcher.

## Scoreboard

### Data

* __batter__ (player from _team_'s players array): Object
* __batterName__ (batter.lastName): String
* __hits__ (batter.hits): Number
* __timesUp__ (batter.timesUp): Number
* __pitcher__ (player from _team_'s players array): Object
* __pitcherName__ (pitcher.lastName): String
* __pitches__ (pitcher.pitches): Number
* __awayAbbr__ (away.abbreviation): String
* __awayScore__ (away.score): Number
* __homeAbbr__ (home.abbreviation): String
* __homeScore__ (home.score): Number
* __inning__: Number
* __inningHalf__ (bottom/top): String
* __bases__: Object
    * __first__: Boolean
    * __second__: Boolean
    * __third__: Boolean
* __pitchCount__: Object
    * __balls__: Number
    * __strikes__: Number
* __outs__: Object
    * __one__: Boolean
    * __two__: Boolean
    * __three__: Boolean

### Functions

