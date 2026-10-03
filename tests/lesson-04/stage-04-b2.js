function printBountyLeaderboard(crewList) {
    crewList.sort((a, b) => b.bounty - a.bounty);
    const medal = ["🥇", "🥈", "🥉"];

    for( let i = 0; i < crewList.length; i++) 
        { if ((i+1) <= 3) {
        console.log(`${medal[i]} ${i + 1}. ${crewList[i].name} - ${crewList[i].bounty}`);
    } else 
        {
        console.log(`${i + 1}. ${crewList[i].name} - ${crewList[i].bounty}`);
        };
       } 
} 
//Test
players = [
        {name: "Luffy", bounty: 700},
        {name: "Chopper", bounty: 4000},
        {name: "Nami", bounty: 100},
        {name: "Zoro", bounty: 500}
    ];
printBountyLeaderboard(players);