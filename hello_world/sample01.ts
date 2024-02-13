import { User } from './user'; // 外部モジュールのimport

// ログ出力
const greeting = 'Hello, world!'
console.log(greeting)

// テンプレート文字列
const word: string = "TypeScript";
const version: number = 3;
const message: string = `Hello ${word} ${version + 1}`;
console.log(message) // Hello TypeScript 4

// 型チェック
const d = 123;
const newVar = typeof d;
console.log(newVar) // number

// インスタンス化とインスタンスの型チェック
const user = new User();
const isUser = user instanceof User
console.log(isUser) // true
console.log(typeof user) // object