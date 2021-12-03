import React from "react";
import LeaderboardElement from "./LeaderboardElement";

function Leaderboard(props) {
    var sortedTeams = props.teams

    sortedTeams.sort((a,b) => b.coins - a.coins);

    return (
        <div>
            {sortedTeams.map((item, index) => (
                <LeaderboardElement key={index} name={item.name} coins={item.coins}/>
            ))}
        </div>  
    );
}
export default Leaderboard;