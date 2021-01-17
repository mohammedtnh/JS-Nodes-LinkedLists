const prompt = require("prompt-sync")({ sigint: true });

const students = [
  { name: "Jean-Luc Garza", score: 24 },
  { name: "Teddy Munoz", score: 79 },
  { name: "Georgia Ali", score: 17 },
  { name: "Vicky Calhoun", score: 8 },
  { name: "Awais Weaver", score: 65 },
  { name: "Athena Kline", score: 52 },
  { name: "Zacharia Whitaker", score: 38 },
  { name: "Clarice Davenport", score: 99 },
  { name: "Viktoria Flynn", score: 84 },
  { name: "Ianis Crossley", score: 20 },
  { name: "Johnnie Owens", score: 74 },
  { name: "Emily-Rose Erickson", score: 33 },
  { name: "Adeel Nieves", score: 100 },
  { name: "Dustin Villegas", score: 98 },
  { name: "Maxine Hughes", score: 65 },
  { name: "Bilaal Harding", score: 79 },
  { name: "Maddie Ventura", score: 71 },
  { name: "Leroy Rees", score: 44 },
  { name: "Wanda Frank", score: 73 },
  { name: "Margaux Herbert", score: 80 },
  { name: "Ali Rios", score: 70 },
  { name: "Nigel Santiago", score: 25 },
  { name: "Markus Greene", score: 78 },
  { name: "Harlan Parrish", score: 97 },
  { name: "Baran Davidson", score: 43 },
  { name: "Seth Rodriguezh", score: 67 },
  { name: "Diego Mayer", score: 100 },
];

class HashTable {
  constructor(classSize) {
    this.classSize = classSize;
    this.classes = { A: [], B: [], C: [], D: [], Other: [] };
  }

  hash = (key, collisionCount = 0) => {
    const encoded = new TextEncoder("utf-8").encode(key);
    const hashCode = encoded.reduce(function (a, b) {
      return a + b;
    }, 0);
    return hashCode + collisionCount;
  };

  compress = (hashCode) => {
    return hashCode % this.classSize;
  };

  insert = (key, value) => {
    let collisionCount = 0;
    while (true) {
      const hashCode = this.hash(key, collisionCount);
      const index = this.compress(hashCode);
      const currentArrayValue = this.students[index];

      if (currentArrayValue === null || currentArrayValue[0] === key) {
        this.students[index] = [key, value];
        break;
      } else {
        collisionCount += 1;
      }
    }
  };
}

let classMax = prompt("Set the maximum number of students in class: ");
let classRoom = new HashTable(classMax);

for (var key in Object.keys(students)) {
  var value = students[key];

  if (value.score >= 90) {
    classRoom.insert("A", value);
  } else if (90 > value.score >= 80) {
    classRoom.insert("B", value);
  } else if (80 > value.score >= 70) {
    classRoom.insert("C", value);
  } else if (70 > value.score >= 60) {
    classRoom.insert("D", value);
  } else {
    classRoom.insert("Other", value);
  }
}

// hash = (key, collisionCount = 0) => {
//   const encoded = new TextEncoder("utf-8").encode(key);
//   const hashCode = encoded.reduce(function (a, b) {
//     return a + b;
//   }, 0);
//   return hashCode + collisionCount;
// };

// console.log(classRoom.hash("lies"));
