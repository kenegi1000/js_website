// 素数をi番目まで求める
this.primeNumber = function primeNumber(i) {
  let primeNumber = [];
  for (let n = 1; primeNumber.length < i; n++) {
    if (divisor(n).length === 2) {
      primeNumber.push(n);
    }
  }
  return primeNumber;
};
//i番目までの素数をコンソールに表示
this.all = function all(i) {
  this.primeNumber(i).forEach((n) => {
    console.log(n);
  });
};
// i番目の素数をコンソールに表示
this.only = function only(i) {
  console.log(this.primeNumber(i)[i - 1]);
};
// iの約数を求める
this.divisor = function divisor(i) {
  let divisor = [];
  for (let n = 1; n <= i; n++) {
    if (i % n === 0) {
      divisor.push(n);
    }
  }
  return divisor;
};
