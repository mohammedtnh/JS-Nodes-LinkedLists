class Node {
  constructor(groupSize, next = null) {
    this.groupSize = groupSize;
    this.next = next;
  }
}

class Queue {
  constructor(limit = 5) {
    this.front = null;
    this.back = null;
    this.length = 0;
    this.limit = limit;
    this.waitingTime = 0;
  }

  isFull = () => this.length === this.limit;

  isEmpty = () => this.length === this.waitingTime;

  peek = () => this.waitingTime;

  addNode = (groupSize) => {
    const newNode = new Node(groupSize);
    if (this.isEmpty()) {
      this.front = newNode;
    } else {
      this.back.next = newNode;
    }
    this.back = newNode;
    this.length++;
    this.waitingTime += groupSize * 0.5;
  };

  enqueue = (groupSize) => {
    if (this.isFull()) {
      console.log("Queue is full, come another time");
    } else {
      let peopleNum = groupSize;
      while (peopleNum > 12) {
        this.addNode(12);
        peopleNum -= 12;
      }
      this.addNode(peopleNum);
    }
  };

  dequeue = () => {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      const removed = this.front;
      if (this.length === 1) {
        this.front = null;
        this.back = null;
      } else {
        this.front = removed.next;
      }
      this.length--;
      this.waitingTime -= removed.groupSize * 0.5;
      return removed.groupSize;
    }
  };
}

const disney = new Queue(5);
console.log("Waiting time is ", disney.peek() * 2);
disney.enqueue(6);
disney.enqueue(4);
disney.enqueue(12);
disney.enqueue(2);
console.log("Waiting time is ", disney.peek() * 2);
disney.enqueue();
console.log("Waiting time is ", disney.peek() * 2);
