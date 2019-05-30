'use strict';

console.log('Первая задача:');

let a = {
    name: 'static',
    count: 0
}

let resault1 = [];

let foo = function (param1, param2, param3) {

    
    for(let i = 0; i < param3; i++) {
        param2 = i;
        resault1[i] = `{name: '${a.name}', count:${param2}}`;
    }
    return resault1.join();
}
console.log(foo(a,'count',10));

//Вариант без использования функции 

let resault = [];

for(let i = 0; i < 10; i++) {
    a.count = i;
    resault[i] = `{name: '${a.name}', count:${a.count}}`;
}
console.log(resault.join());



//----------------------------------------------------------------------------------------------------------------------

console.log('Вторая задача:');

    let useNum = [];
let useRandNum = [];

let random = function (min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);

    
    if (useNum.indexOf(rand) < 0) {
        useNum.push(rand);
    } else {
       return random(min,max);
    }
return rand;
};
console.log(random(1,10));
console.log(random(1,10));
console.log(random(1,10));
console.log(random(1,10));
console.log(random(1,10));
console.log(random(1,10));
console.log(random(1,10));
console.log(random(1,10));
console.log(random(1,10));
console.log(random(1,10));
console.log(useNum);

// для задачи поменять 10 на 100
//для наглядности отсутствия повторнения поставлено 10
//----------------------------------------------------------------------------------------------------------------------

console.log('Третья задача:');
let student = {};

student.hobby = ['Что-то, что-то, что-то'];
student.name = 'Кто-то';
student.surName = 'Какая-то';
student.age = 999;
student.study = 'Где-то';

student.who = function () {
    console.log(`${student.name} ${student.surName}. ${student.age} год. Интересы: ${student.hobby}. Учится в ${student.study}. `);
};

student.who();

//----------------------------------------------------------------------------------------------------------------------
console.log('Четвертая задача');
let factor = function (param) {
    if (param !== 1) {
        return param * factor(param-1);    
    } else {
        return 1;
    }
}
console.log(factor(10));
//----------------------------------------------------------------------------------------------------------------------
console.log('Пятая задача');

let arr = [{'price':10,'count':2},
           {'price':5,'count':5},
           {'price':8,'count':5},
           {'price':12,'count':4},
           {'price':8,'count':4}];

let sortCount = function (count1, count2) {
    return count1.price - count2.price;
}

console.log(arr.sort(sortCount));
