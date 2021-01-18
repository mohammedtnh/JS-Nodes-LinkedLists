const prompt = require("prompt-sync")({ sigint: true });

class TreeNode {
  constructor(name) {
    this.name = name;
    this.children = [];
    // this.rightChild = null;
    // this.leftChild = null;
  }

  addChild = (node) => {
    if (this.children.length < 2) {
      this.children.push(node);
      console.log(`added a child to ${this.name}`);
    } else {
      console.log("child is an orphan");
    }
  };

  getChildWithName = (name) => {
    return this.children.find((child) => child.name === name);
  };

  //   removeChild = (node) => {
  //     this.children = this.children.filter((child) => child !== node);
  //   };

  traverse = () => {
    let nodes = [this];
    while (nodes.length > 0) {
      let current = nodes.pop();
      console.log(current.name);
      nodes = [...nodes, ...current.children];
    }
  };
}

const root = new TreeNode("family");
let fullName = prompt("enter child full name (done if finished): ");

while (fullName !== "done") {
  let current = root;

  let names = fullName.split(" ").reverse();
  let firstName = names.pop();
  let lastName = names.shift();

  if (lastName === current.name) {
    if (names) {
      for (let name of names) {
        let child = current.getChildWithName(name);
        if (child) {
          current = child;
        } else {
          console.log("parent does not exist");
        }
      }
    }
    let newNode = new TreeNode(firstName);
    current.addChild(newNode);
  }

  console.log("--------------------------------------------------");
  fullName = prompt("enter child full name (done if finished): ");
}
