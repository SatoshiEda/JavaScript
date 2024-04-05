
console.log('---オブジェクト----------------------------');
// オブジェクト
const item01 = { name: 'シャンプー', price: 500, category: '生活雑貨' };
const item02 = { name: 'コーヒー', price: 1500, category: '飲料' };
const item03 = { name: 'ヘッドホン', price: 6000, category: 'オーディオ家電' };

console.log(item01['name']);
console.log(item02.name);
console.log(item03.name);




console.log('---クラス----------------------------');
// クラス
class Product01 {
    constructor() {
        this.name = 'シャンプー';
        this.price = 500;
        this.category = '生活雑貨';
    }
}
const item04 = new Product01();
console.log(item04.name);



console.log('---クラス 引数あり----------------------------');
class Product02 {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
}
const item05 = new Product02('商品名','価格','カテゴリ');
console.log(item05.name);



console.log('---「組み込みクラス」の拡張----------------------------');
Date.prototype.sayHello = function() {
    return 'おはよう　今は ' + this.getFullYear() + '年です。';
};
const date01 = new Date();

console.log(date01.sayHello());

console.log(Date.prototype);



console.log('---クラス メソッド追加----------------------------');
// 消費税率
const tax = 1.10;
// 消費税端数の扱い　1 => 四捨五入、2 => 切り捨て、3 => 切り上げ
const calcType = 1;
// 商品データ
let item = [
    { name: 'バナナ', price: 100, category: '果物' },
    { name: 'りんご', price: 450, category: '果物' },
    { name: 'キャベツ', price: 550, category: '野菜' },
];

class Product03 {
    constructor(item) {
        this.name = item.name;
        this.price = item.price;
        this.category = item.category;
    }
    taxIn() {
        let price;
        if(calcType === 1){
            price = Math.round( this.price * tax );
        }
        else if(calcType === 2){
            price = Math.floor( this.price * tax );
        }
        else{
            price = Math.ceil( this.price * tax );
        }
        return price;
    }
    showText(){
        console.log(this.name + 'の税込価格は' + this.taxIn() + '円です。' );
    }
}
const item06 = new Product03(item[0]);
item06.showText();
const item07 = new Product03(item[1]);
item07.showText();
const item08 = new Product03(item[2]);
item08.showText();