// functions
function upgradeCrew () {
    let pirates = [
        {name: "Luffy", bounty:70, strength: 800},
        {name: "Chopper", bounty:40, strength: 600},
        {name: "Nami", bounty:10, strength: 200}
    ];
    const awakenedPirates = pirates.map (pirate => (
        {
        name: pirate.name.toUpperCase(),
         bounty: pirate.bounty*2,
         strength: pirate.strength*1.5
         }
        ));
    
    console.log("Mảng gốc: ", pirates);
    console.log("Mảng mới x2 tiền thưởng: ", awakenedPirates); 
    const monsterTrioCandidates = pirates.filter(pirate => pirate.strength > 500);

    console.log("Thành viên có sức mạnh lớn hơn 500", monsterTrioCandidates);
}
upgradeCrew();