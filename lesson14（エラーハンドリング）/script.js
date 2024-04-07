console.log('---try〜catch-----------------------------------');

// サンプルで利用する関数
function myFunction(){
    return console.log('関数処理完了');
}

console.log('---関数名の書き間違いによるエラー-----------------------------------');
try {
    myFunction01();
} catch(e) {
    console.log(e);
    console.log(e.name);
    console.log(e.message);
}

console.log('---成功-----------------------------------');
try {
    myFunction();
} catch(e) {
    console.log('--- output error ---');
    console.log(e);
    console.log(e.name);
    console.log(e.message);
}

console.log('---例）メール送信処理-----------------------------------');
//let subject = '件名が入ります';
let subject = '';
let body = 'メール本文が入ります';
let to = 'test@test.com';
try {
    sendMail(subject,body,to);
} catch(e) {
    console.log('--- output error ---');
    console.log(e);
    console.log(e.name);
    console.log(e.message);
} finally {
    console.log('メール送信成功、失敗時いずれも実行される');
}
function sendMail(subject,body,to){
    if(subject && body && to)
        return console.log('メール送信成功');
    else
        return console.log('メール送信失敗');
}


console.log('---throw文で任意にエラーを出す-----------------------------------');

// サンプルで利用する関数
// x が 0 の場合はエラーとなり、 0 以外の場合は成功とする
//
function myFunctionThrow(x){
    if( x === 0 ) {
        throw new Error("「throw」Errorを利用しエラーを意図的に発生");
    }
    else if( x === 1 ) {
        throw new TypeError("「throw」TypeErrorを利用しエラーを意図的に発生");
    }
    else if( x === 2 ){
        throw new RangeError("「throw」RangeErrorを利用しエラーを意図的に発生");
    }
    else {
        return false;
    }
}

// myFunctionThrowの引数を変更して確認
// x = 0 :throw new Error
// x = 1 :throw new TypeError
// x = 2 :throw new RangeError
// x = 3以上：成功
try {
    myFunctionThrow(1);
    console.log('try部分から出力');
} catch(e) {
    console.log('catch部分から出力');
    console.log(e);
    console.log(e.name);
    console.log(e.message);
}