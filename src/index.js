// const name = "じゃけぇ";
// const age = 28;

// const message1 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message1);

//アロー関数
// const func1 = function(str) {
//   return str;
// }
// console.log(func1("func1です"));

// const func2 = (str) => str;
// console.log(func2("func2です"));


//分割代入
// const myProfile = {
//   name: "yuta",
//   age: 28
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

//※分割代入を行うときは、オブジェクトで行うほうが利用しやすいしわかりやすい

// const nameArr = ["田中", "山田", "平野"];
// const nameArr2 = nameArr.map((name)=> {return name});
// console.log(nameArr2);

// const nameArr = ["田中", "山田", "平野"];
// nameArr.map((name) => console.log(name));

const numArr = [1,2,3,4,5];
const newNumArr = numArr.filter((num) => {return num % 2 === 0;});
console.log(newNumArr);