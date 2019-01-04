const multipier = {
  numbers: [1, 2, 3, 4],
  mulitplyBy: 2,
  multiply() {
    return this.numbers.map(number => number * this.mulitplyBy);
  }
};

console.log(multipier.multiply());
