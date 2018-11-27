let arr = [
  [1, 2, 3, 4, 5],
  [5, 6, 7, 8, 5],
  [9, 10, 11, 12, 5],
  [13, 14, 15, 16, 5],
  [13, 14, 15, 16, 5]
];
// 螺旋遍历矩阵
let iterator = ar => {
  let m = ar.length;
  let len = Math.round(m / 2);
  // let n = ar[0].length;
  for (let i = 0, j = m; i < len; i++, j--, m--) {
    // console.log("j", j);
    for (let i2 = i; i2 < j; i2++) {
      console.log(ar[i][i2]);
    }
    for (let i3 = i + 1; i3 < j; i3++) {
      console.log(ar[i3][j - 1]);
    }
    for (let i4 = j - 2; i4 >= i; i4--) {
      console.log(ar[j - 1][i4]);
    }
    for (let i5 = j - 2; i5 >= i + 1; i5--) {
      console.log(ar[i5][i]);
    }
  }
};
iterator(arr);
