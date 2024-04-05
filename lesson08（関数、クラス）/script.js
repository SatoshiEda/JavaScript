// Date


//console.log(Date.prototype.getDate());
//console.log(date01.getFullYear());
//console.log(date01.prototype.getFullYear);

Date.prototype.sayHello = function() {
    return 'おはよう　今は ' + this.getFullYear() + '年です。';
};
const date01 = new Date();

console.log(date01.sayHello());

console.log(Date.prototype);