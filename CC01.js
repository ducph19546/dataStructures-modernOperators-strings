import { game } from "./data";

// 1.
const [players1, players2] = game.players
console.log(players1, players2)
// 2.
const [midLaner1, ...others] = players1
console.log(`Mid laner of team 1 is ${midLaner1}`)
// 3.
const allPlayers = [...players1, ...players2]
console.log(allPlayers)
// 4.
const finalPlayers1 = [...players1, 'NPer', 'Zeros']
console.log(finalPlayers1)