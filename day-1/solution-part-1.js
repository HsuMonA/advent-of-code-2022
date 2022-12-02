const fs = require("fs");

const buffer = fs.readFileSync("input.txt");

const fileContent = buffer.toString();

const sums = fileContent.split("\n\n").map((e) =>
  e
    .split("\n")
    .map((s) => parseInt(s))
    .reduce((partialSum, a) => partialSum + a, 0)
);

console.log(Math.max(...sums))