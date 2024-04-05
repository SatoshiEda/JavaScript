
console.log('---windowオブジェクトの中身を出力する----------------------------');

console.log(window);

console.log('---documentオブジェクトの中身を出力する----------------------------');
console.log(document.head);
console.log(document.body);

console.log('---idでDOMを取得する----------------------------');
console.log(document.getElementById('domId'));
console.log('---classでDOMを取得する----------------------------');
console.log(document.getElementsByClassName('domClass'));


console.log('---classでDOMを取得する（個別）----------------------------');
for (let i = 0; i < document.getElementsByClassName('domClass').length; i++) {
    console.log(document.getElementsByClassName('domClass')[i]);
}

console.log('---querySelectorでDOMを取得する----------------------------');
console.log(document.querySelector('.domClass'));

console.log('---querySelectorAllでDOMを取得する----------------------------');
console.log(document.querySelectorAll('.domClass'));


