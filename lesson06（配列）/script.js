console.log('------変数・定数-----------------------------------');
const str = 'これは定数です';
console.log(str);


console.log('------配列-----------------------------------');
const array = ['配列の値1','配列の値2','配列の値3','配列の値4','配列の値5'];
console.log(array);

// Array(5)
// 0:"配列の値1"
// 1:"配列の値2"
// 2:"配列の値3"
// 3:"配列の値4"
// 4:"配列の値5"

console.log('------index番号で出力-----------------------------------');
console.log(array[1]);
console.log(array[4]);
console.log('------存在しないindex番号で出力-----------------------------------');
console.log(array[5]);  // undefined



console.log('------多次元配列-----------------------------------');
const item = [
    ['商品番号：123','商品名：バナナ','価格：200円','消費税：16円','数量：2'],
    ['商品番号：124','商品名：りんご','価格：180円','消費税：14円','数量：4']
];
console.log(item);

console.log(item[0][1]);
console.log(item[1][3]);