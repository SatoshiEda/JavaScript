
console.log('---配列--------------------------------');
const personalData = [ '侍太郎', 36, '男性', '東京都', '020-0304-0506', '侍花子', 33, '女性', '京都府', '999-9999-9999'];

console.log(personalData);

console.log('---オブジェクト（連想配列）--------------------------------');
const personalData1 = { name: '侍太郎', age: 36, gender: '男性', address: '東京都', phoneNumber: '070-0809-1160' };
const personalData2 = { name: '侍花子', age: 33, gender: '女性', address: '京都府', phoneNumber: '999-9999-9999' };

console.log(personalData1);
console.log(personalData2);

console.log(personalData1['name']);
console.log(personalData1.name);

console.log('---オブジェクト多次元--------------------------------');
const personalData3 = {
    data01:{ name: '侍太郎', age: 36, gender: '男性', address: '東京都', phoneNumber: '070-0809-1160' },
    data02:{ name: '侍花子', age: 33, gender: '女性', address: '京都府', phoneNumber: '999-9999-9999' },
};
console.log(personalData3);
console.log(personalData3.data01);
console.log(personalData3.data01.name);




