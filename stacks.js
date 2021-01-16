class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor(limit = 20) {
    this.top = null;
    this.length = 0;
    this.limit = limit;
  }

  isFull = () => this.length === this.limit;

  isEmpty = () => this.length === 0;

  peek = () => (this.isEmpty() ? "No cards left in the deck" : this.top.data);

  push = (data) => {
    if (this.isFull()) {
      console.log("The deck is full");
    } else {
      const newNode = new Node(data, this.top);
      this.top = newNode;
      this.length++;
    }
  };

  pop = () => {
    if (this.isEmpty()) {
      console.log("The deck is empty");
    } else {
      const popped = this.top;
      this.top = popped.next;
      this.length--;
      return popped.data;
    }
  };
}

const colors = ["Red", "Blue", "Green", "Yellow"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

const random = (array) => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return array[randomIndex];
};

const deck = new Stack();

for (let i = 0; i < deck.limit; i++) {
  deck.push(`${random(colors)}-${random(numbers)}`);
}

const player1 = new Stack(5);
const player2 = new Stack(5);

console.log(
  "------------------------- \n player 1: \n-------------------------"
);

for (let i = 0; i < player1.limit; i++) {
  let card = deck.pop();
  console.log(`${i + 1}- ${player1.push(card)}`);
}

console.log(
  "------------------------- \n player 2: \n-------------------------"
);

for (let i = 0; i < player2.limit; i++) {
  let card = deck.pop();
  console.log(`${i + 1}- ${player2.push(card)}`);
}

console.log(
  `\n\n\n------------------------- \n First card in deck: ${deck.peek()} \n-------------------------`
);
