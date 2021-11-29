import React from "react";
import { Card,  Row} from "react-bootstrap"
import LeaderboardElement from "./LeaderboardElement";

function Leaderboard(props) {
    var sortedTeams = props.teams

    sortedTeams.sort((a,b) => b.coins - a.coins);

    return (
        <div>
            {sortedTeams.map(item => (
                <LeaderboardElement name={item.name} coins={item.coins}
                />
            ))}
        </div>  
    );
}
export default Leaderboard;