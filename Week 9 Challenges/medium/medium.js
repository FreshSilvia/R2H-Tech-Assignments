'use strict';
function cutPizzaSlices(people) {
    return 8 / people;
}

function sharePizza(guest) {
    let pizzaSlices = cutPizzaSlices(guest);

    const pizza = `Each person gets ${pizzaSlices} slices of pizza.`;
    return pizza;
}

console.log(sharePizza(3));
console.log(sharePizza(2));