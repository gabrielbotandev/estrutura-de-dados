let array = [5, 3, 2, 9, 4, 7, 1, 0, 6, 8]

let minor = [0]
let major = [0]

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (array[j] > array[j + 1]) {
            let aux = array[j]
            array[j] = array[j + 1]
            array[j + 1] = aux
        }
    }
}

let sum = array.reduce((a, b) => a + b, 0);

minor = array[0]
major = array[array.length - 1]

console.log(array)
console.log(`The smallest number is ${minor}`)
console.log(`The largest number is ${major}`)
console.log(`The sum of the numbers is ${sum}`)