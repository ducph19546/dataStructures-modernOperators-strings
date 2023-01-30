const gameEvents = new Map([
    [2, 'First blood'],
    [3, 'First turret destroyed'],
    [4, 'Ace'],
    [5, 'First drake taken'],
    [8, 'Ace'],
    [12, 'First inhibitor destroyed'],
    [15, 'VICTORY for team 1']
])

// console.log(gameEvents.values())
// 1. 
const events = [...new Set(gameEvents.values())]
console.log(events)
// 2.
gameEvents.delete(12)
console.log(gameEvents)
// 3.
// console.log(`An event happen every ${15 / gameEvents.size} min`)
const time = [...gameEvents.keys()].pop()
console.log(`An event happens, on average, every ${time / gameEvents.size} min`)
// 4.
for (const [min, event] of gameEvents) {
    const half = min < 8 ? "1ST" : "2ND"
    console.log(`${half} HALF: ${min} min => ${event}`)
}