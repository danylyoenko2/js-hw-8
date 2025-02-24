const fruits = ["Mango", "Orange", "Kiwi"];
let elem = "";

//for

for (let i = 0; i < fruits.length; i++) {
  elem += `${fruits[i]}, `;
}

console.log(elem);

//join

console.log(fruits.join(", "));

// 2 task

const cards = ["card-1", "card-2", "card-3", "card-4", "card-5"];

//2.1

const cardToRemove = cards.splice(cards.indexOf("card-3"), 1);

console.log(cards);

// 2.2

const cardToInsert = cards.push("card-6");

console.log(cards);

// 2.3

const cardToUpdate = cards.splice(cards.indexOf("card-4"), 1, "upd card-4");

console.log(cards);
