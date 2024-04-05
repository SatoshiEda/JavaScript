console.log('---関数-----------------------------------');

console.log('---1500円以上で送料無料の関数を作成------');
const calculateTotal = (price) => {
    let str;
    let shippingPrice = 850;
    if(price >= 1500){
        str = price + '円（送料無料）';
    }
    else {
        str = price + shippingPrice + '円（別途送料' + shippingPrice + '円）';
    }

    return str;
}
console.log('---1000円の場合の支払い金額-----------------------------------');
console.log(calculateTotal(1000));
console.log('---3000円の場合の支払い金額-----------------------------------');
console.log(calculateTotal(3000));


console.log('---関数（functionを利用した関数）-----------------------------------');
console.log('---1200円の場合の支払い金額-----------------------------------');
console.log(calculateTotal02(1200));
console.log('---1500円の場合の支払い金額-----------------------------------');
console.log(calculateTotal02(1500));
function calculateTotal02(price){
    let str;
    let shippingPrice = 850;
    if(price >= 1500){
        str = price + '円（送料無料）';
    }
    else {
        str = price + shippingPrice + '円（別途送料' + shippingPrice + '円）';
    }

    return str;
}

/*
Date.prototype.sayHello = function() {
    return 'おはよう　今は ' + this.getFullYear() + '年です。';
};
const date01 = new Date();

console.log(date01.sayHello());

console.log(Date.prototype);

 */