function wrapping(gifts) {
  const myArray = [];
  gifts.forEach((gift) => {
    let myString = "";
    for (let i = 0; i <= gift.length+1; i++) {
      myString += "*";
    }
    myString += "\n*" + gift + "*\n";
    for (let i = 0; i <= gift.length+1; i++) {
      myString += "*";
    }
    myArray.push(myString);
  });
  return myArray;
}

const gifts = ["cat", "game", "socks"];
const wrapped = wrapping(gifts);

console.log(wrapped);
