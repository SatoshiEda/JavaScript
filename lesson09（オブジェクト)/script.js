/*
// 配列
const personalData = [ '侍太郎', 36, '男性', '東京都', '020-0304-0506', '侍花子', 33, '女性', '京都府', '999-9999-9999'];

console.log(personalData);


const personalData1 = { name: '侍太郎', age: 36, gender: '男性', address: '東京都', phoneNumber: '070-0809-1160' };
const personalData2 = { name: '侍花子', age: 33, gender: '女性', address: '京都府', phoneNumber: '999-9999-9999' };

console.log(personalData1);
console.log(personalData2);

console.log(Date.prototype.setHours);

*/


const Tax = (yen) => {
    let ans = yen * 1.1;
    return ans;
}

console.log(Tax( 100 ));
console.log(Tax( 300 ));



console.log(menseki( 100 , 100));
console.log(menseki( 300, 20 ));
function menseki( h, w ){

    return h * w;
}

const calculateTotal = (price) => {
    let str;
    if(price >= 1500){
        str = price + '円';
    }
    else {
        str = price + 500 + '円';
    }

    return str;
}

console.log(calculateTotal(1000));
console.log(calculateTotal(2000));

/*

let aaa;

class aaa{
    const bbb;
    const ccc;
    const ddd;
}
*/
