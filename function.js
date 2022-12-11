

function Shopping(pant, shoe) {

    let totalShopingCost = pant + shoe;
    return totalShopingCost;
}

function fruits(apel, malta, angur) {

    let totalFruitCost = apel + malta + angur;
    return totalFruitCost;
}


let ShoppingCost = Shopping(1300, 650)
let fruitsCost = fruits(210, 200, 200);
let totalCost = ShoppingCost + fruitsCost;
let balance = 5000 - totalCost;
console.log(totalCost);
console.log(balance);






