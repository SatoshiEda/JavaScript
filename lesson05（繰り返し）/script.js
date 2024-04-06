console.log('------for文のループ処理01-----------------------------------');
for ( let i = 1; i <= 10; i += 1) {
    console.log(i);
}

console.log('------for文のループ処理02-----------------------------------');
for ( i = 11; i <= 10; i += 1) {
    console.log(i);
}

console.log('------while文のループ処理-----------------------------------');

// 変数numに0～4までのランダムな整数を代入する
let num1 = Math.floor(Math.random() * 5);

// 変数numの値が0以外である間、変数numの値を出力し続ける
while (num1 !== 0) {
    num1 = Math.floor(Math.random() * 5);
    console.log(num1);
}


console.log('------while文のループ処理：num02が0の時-----------------------------------');
let num2 = 0;

// 変数numの値が0以外である間、変数numの値を出力し続ける
while (num2 !== 0) {
    num2 = Math.floor(Math.random() * 5);
    console.log(num2);
}





console.log('------インクリメント・デクリメント-----------------------------------');
let num01 = 1;
num01 = num01 + 1;
console.log(num01);


let num02 = 1;
num02 += 1;
console.log(num02);


let num03 = 1;
num03++;
console.log(num03);



let num04 = 1;
console.log('------num04++ を変数に代入-----------------------------------');
let result1 = num04++; // num04の値（1）がresult1に代入され、その後num04が1増加（numは2になる）
console.log(result1);
console.log('------続いて　++num04 を変数に代入-----------------------------------');
let result2 = ++num04; // num04が1増加（num04は3になり）、その後num04の値（3）がresult2に代入される
console.log(result2);



console.log('------インクリメントとその他の違い-----------------------------------');
let num05 = 1;
let result3 = num05 = num05 + 1;
console.log(result3);

let num06 = 1;
let result4 = num06 += 1;
console.log(result4);

let num07 = 1;
let result5 = num07++;
console.log(result5);

