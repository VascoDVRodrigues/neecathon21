import React from "react";
import LeaderboardElement from "./LeaderboardElement";


function Leaderboard(props) {
    var teams = props.teams
    
    
    teams = teams.flatMap((team) =>{
        if( team.IDTEAM === 1){return []}
        return team;
    })
    teams.sort((a,b) => a.IDTEAM - b.IDTEAM);
    
    return (
        <div>
            {teams.map((item, index) => (
               <LeaderboardElement key={index} name={item.NAME} coins={item.CASH} color={item.COLOR} position = {item.HOUSE}/>
            ))}
        </div>  
    );
}
export default Leaderboard;
