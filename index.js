const Player = require('./player')
const Arena = require('./arena')

const PlayerA = new Player('Player A', 50, 5, 10)
const PlayerB = new Player('Player B', 100, 10, 5)

const arena = new Arena(PlayerA, PlayerB);
const winner = arena.startFight()

console.log(`Winner: ${winner.name}`)