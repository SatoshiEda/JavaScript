

let str01 = "変数01";
str02 = "変数02";
//console.log(`変数「str01」を宣言し出力：${str01}`);
//console.log(`変数「str02」を宣言し出力：${str02}`);



function myFunction(){
    let str03 = "変数03";
    str04 = "変数04";
    console.log(`変数「str01」を関数内で出力：${str01}`);
    console.log(`変数「str02」を関数内で出力：${str02}`);
    console.log(`関数内で変数「str03」を宣言し出力${str03}`);
    console.log(`関数内で変数「str04」を宣言し出力${str04}`);
}
//myFunction();



//console.log(`関数内で宣言された変数「str03」を関数外で出力：${str03}`);   // エラー
//console.log(`関数内で宣言された変数「str04」を関数外で出力：${str04}`);



if( true ){
    let str05 = "変数05";
    str06 = "変数06";
//    console.log(`関数内で宣言された変数「str03」を関数外のブロックで出力：${str03}`);   // エラー
 //   console.log(`関数内で宣言された変数「str04」を関数外のブロックで出力：${str04}`);
    console.log(`ブロック内で変数「str05」を宣言し出力：${str05}`);
    console.log(`ブロック内で変数「str06」を宣言し出力：${str06}`);
}


//console.log(`ブロック内の変数「str05」をブロック外で出力：${str05}`);   // エラー
console.log(`ブロック内の変数「str06」をブロック外で出力：${str06}`);

/*

for (let i = 1; i <= 10; i++) {
    console.log(i);
}
//console.log(i);   // エラー

*/



/*
let num = 10;

let ans = num % 3;

console.log(ans);
*/
