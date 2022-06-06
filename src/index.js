const cities = JSON.parse(Deno.readTextFileSync('./cities.json'));

function beforeGame() {
    const playerAmnt = prompt('Wie viele Spieler*innen gibt es?');
    if (!playerAmnt || !parseInt(playerAmnt) || parseInt(playerAmnt) > 5 || parseInt(playerAmnt) < 2) {
        console.clear();
        console.log('Bitte eine Zahl von 2 - 5 eingeben');
        const bg = beforeGame();
        return bg;
    } else {
        const startingPoints = [];
        for (let i = 0; i < cities.length; i++) {
            if (cities[i].y === 0) {
                startingPoints.push(i);
            }
        }
        return { startingPoint: startingPoints[Math.floor(Math.random() * startingPoints.length)], players: parseInt(playerAmnt) };
    }
}

function move(turn, y) {
    let moves = [];
    for (let i = 0; i < cities.length; i++) {
        if (cities[i].y === y + 1) {
            moves.push(i);
        }
    }
    moves = moves.sort(function(){return .5 - Math.random()});
    moves = moves.slice(0,3);
    moves.forEach((element, index) => {
        console.log(`${index}: ${cities[element].name}, ${cities[element].state}`)
    });
}
console.clear();
const bGameReturn = beforeGame();
const players = bGameReturn?.players;
const startingPoint = bGameReturn?.startingPoint;

console.log(`Ihr startet in: ${cities[startingPoint].name}, ${cities[startingPoint].state}`);
move(1, 0);