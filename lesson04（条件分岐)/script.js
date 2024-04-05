
console.log('---if文------------------------');
// 変数numに0～4までのランダムな整数を代入する
let num01 = Math.floor(Math.random() * 5);

// 変数numの値を出力する（確認用）
console.log(num01);

// 変数numの値が4であれば、「大当たりです」という文字列を出力する
if (num01 === 4) {
    console.log('大当たりです');
}
// 変数numの値が3であれば、「当たりです」という文字列を出力する
else if (num01 === 3) {
    console.log('当たりです');
}
// それ以外のときは、「はずれです」という文字列を出力する
else {
    console.log('はずれです');
}

console.log('---if文 厳密------------------------');
let str01 = 0;
let str02 = '';
if(str01 === str02){
    console.log('true');
}
else{
    console.log('false');
}



console.log('---switch文------------------------');
// 変数numに0～2までのランダムな整数を代入する
let num02 = Math.floor(Math.random() * 3);

// 変数numの値によって出力する文字列を切り替える
switch (num02) {
    case 0:
        console.log('小吉です')
        break;
    case 1:
        console.log('中吉です')
        break;
    case 2:
        console.log('大吉です')
        break;
}



console.log('---switch文 breakなしの場合------------------------');
// breakなしの場合

// 変数numの値によって出力する文字列を切り替える
switch (num02) {
    case 0:
        console.log('小吉です')
    case 1:
        console.log('中吉です')
    case 2:
        console.log('大吉です')
}

