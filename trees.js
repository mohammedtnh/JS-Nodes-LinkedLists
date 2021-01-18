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

  removeChild = (node) => {
    this.children = this.children.filter((child) => child !== node);
  };

  traverse = (path) => {
    let nodes = [this];
    let current = nodes.pop();

    path.forEach((string) => {
      if (current.name === string) {
        console.log(`inside: ${current.name}`);
        return current.name;
      }
      // else {
      //   console.log(`string ${string}`);
      //   return false;
      // }
    });
    //   nodes = [...nodes, ...current.children];
  };
}

const root = new TreeNode("family");
let exit = false;

do {
  userInput = prompt("enter child full name (done if finished): ");
  let path = userInput.split(" ");

  if (path[path.length - 1] === root.name) {
    root.addChild(path[0]);
  } else {
    console.log("parent does not exist");
  }
  console.log(root.children);
} while (userInput !== "done");

// if (root.traverse(userInput)) {
//   console.log(`added a child to ${parent}`);
// }

// const child1 = new TreeNode("Naser");
// const child2 = new TreeNode("Taher");
// const child3 = new TreeNode("Ebrahim");

// root.addChild(child1);
// root.addChild(child2);
// child2.addChild(child3);
// root.removeChild(child1);
// root.traverse();
