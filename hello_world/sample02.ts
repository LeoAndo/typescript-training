// 配列
const nums: number[] = [10, 20, 30];
const strs: string[] = ["foo", "bar", "hoge"];
console.log(nums[0]) // 10
console.log(strs[0]) // foo

// 配列のコピー (参照)
var nums2 = nums; // numsと同じオブジェクトを参照
nums2[0] = 99;
console.log(nums[0]) // 99

// 配列のコピー (値)
// 値を入れる場合はスプレッド構文を使用してコピーする  (スプレッド構文は「...」(ドット３つ)を前につける)
nums2 = [...nums]; // nums配列の値をコピー
nums2[0] = 100;
console.log(nums[0]) // 99