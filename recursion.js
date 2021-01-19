const numbers = [
  [1, 2, 3, 4],
  [3, 6, [5, 6], 8, 2, [2, 4], 9],
  [4, 2, [6, 7, [2, 6, 1]]],
];

const rSum = (numbers) => {
  let sum = 0;
  numbers.forEach((number) => {
    if (typeof number === "number") sum += number;
    else sum += rSum(number);
  });
  return sum;
};

console.log(`The sum is ${rSum(numbers)}`);
