const prompt = require("prompt-sync")({ sigint: true });

class Node {
  constructor(age, highlight, next = null) {
    this.age = age;
    this.highlight = highlight;
    this.next = next;
  }
}

class LinkedList {
  constructor(age, highlight) {
    this.head = new Node(age, highlight);
  }

  insertBeginning = (age, highlight) => {
    const newNode = new Node(age, highlight, this.head);
    this.head = newNode;
  };

  traverse = () => {
    let current = this.head;
    while (current) {
      console.log(`Age: ${current.age}, highlight: ${current.highlight}`);
      current = current.next;
    }
  };

  insertHighlights = (age) => {
    let current = this.head;
    while (current.age < age) {
      let currentAge = current.age + 1;
      if (current.next && current.next.age === currentAge) {
        current = current.next;
      } else {
        let highlight = prompt(`What was the highlight for age ${currentAge}`);
        let newNode = new Node(currentAge, highlight, current.next);
        current.next = newNode;
        current = newNode;
      }
    }
  };
}

const hamdan = new LinkedList(7, "i went to school");
hamdan.insertBeginning(3, "started talking or something ?");
hamdan.insertBeginning(1, "i was born");
hamdan.traverse();

const age = prompt("how old are you?");
hamdan.insertHighlights(age);
hamdan.traverse();
