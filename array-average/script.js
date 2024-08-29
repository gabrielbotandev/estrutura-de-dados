alert("Average Team Height Calculator")

let numPlayers = parseInt(prompt("Enter the number of players:"))
let average = 0
let height = [];

let sumHeight = 0

// calculate average height

for (let i = 0; i < numPlayers; i++) {
    height[i] = parseFloat(prompt(`Enter the player ${i + 1} height:`));

    sumHeight = sumHeight + height[i];
}

average = sumHeight / numPlayers

// results

alert(`Average height of players: ${average.toFixed(2)}`)