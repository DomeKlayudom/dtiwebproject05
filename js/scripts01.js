function  funcA(){
    console.log('A...');
}

function funcB(x,y){
    console.log(x);
    console.log(y);
}

funcA()
funcB(10,20)

function funcC(){
    console.log('C.....');
    return 'Hi.....'
}

function funcD(x,y){
    return x+y
}

console.log(funcC());
let wow = funcD(100,200)

function funcE(a,b,c = 100){
console.log(a+b+c);
}

function funcF(x='Hi', y=100,z='Wow Wow Wow'){
    return x+y+z
}

funcE(10,20)
funcE(10,20,30)
console.log(funcF());
console.log(funcF('Hello'));

console.log(10+'10');
console.log(10+10);

let info1 =100
let info2 =200

console.log(info1 + ' + ' + info2 + ' = ' +(info1+info2));

console.log(`${info1} + ${info2} = ${info1+info2}`);

console.log(10 > 100 ? 'Hi...' : 'Hey...');
let x = 'Bangna'
let y = 'Bangpoo'
z = x > y ? 'Wow...' : 'Woo....'
console.log(z);
console.log(x > z);
console.log(x == y);
console.log(x < y);