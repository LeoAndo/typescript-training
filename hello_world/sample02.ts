// 配列
const nums: number[] = [10, 20, 30];
const strs: string[] = ["foo", "bar", "hoge"];
console.log(nums); // [ 10, 20, 30 ]
console.log(strs); // [ 'foo', 'bar', 'hoge' ]

// 配列のコピー (参照)
let nums2 = nums; // numsと同じオブジェクトを参照
nums2[0] = 99;
console.log(nums); // [ 99, 20, 30 ]

// 配列のコピー (値) (スプレッド構文を使った方法)
// 値を入れる場合はスプレッド構文を使用してコピーする  (スプレッド構文は「...」(ドット３つ)を前につける)
nums2 = [...nums]; // nums配列の値をコピー
nums2[0] = 100;
console.log(nums); // [ 99, 20, 30 ]

// 配列のコピー (値) (concatを使った方法)
nums2 = nums.concat(); // nums配列の値をコピー
nums2[0] = 101;
console.log(nums); // [ 99, 20, 30 ]

console.log(nums2); // [ 101, 20, 30 ]