//1. Egha is going to a camp in the desert. He is bringng a backpack with him.

let backpack = []

//2. He adds some items in his backpack: tent, sandals, hat

backpack.push('tent', 'sandals', 'hat')
backpack.unshift('beef jerky')

//3. Remove hat, wear it instead
backpack.pop()

//4. Also remove tent.
backpack.splice(1, 1)

//5. Add sunglasses. 
let sunglasses = "sunglasses"
backpack.push(sunglasses)

backpack.push('Knife', 'toothbrush', 'blanket', 'flash light', 'food')

//6. split into 2 bags
let backpack2 = backpack.splice(4,4)

console.log(backpack)
console.log("backpack2",backpack2)
//console.log("Item count: ", backpack.length)

// FOR LOOP, print each item in backpack

for(let i = 0; i < backpack.length; i++){
    console.log(backpack[i])
}
console.log('---------')

// only print first 2 items of backpack2

for(let i = 0; i < 2; i++){
    console.log(backpack2[i])
}

console.log('----------')
// Print last 3 items of backpack

for(let i = backpack.length - 3; i < backpack.length; i++){
    console.log(backpack[i])
}

console.log('------------')
// Create a copy of toothbrush and blanket from backpack2

let backpack22 = backpack2.slice(0, 2)

console.log("backpack22:", backpack22)