let init_array = new Array();

let mixins = ["apple", "banana",4, "orange", ,{name : "Tom", age : 4}];

let fruits = ["apple", "banana", "orange", "mellon"];

// fruits
// (4) ['apple', 'banana', 'orange', 'mellon']
// fruits.length
// 4
// fruits.push('grape')
// 5
// fruits
// (5) ['apple', 'banana', 'orange', 'mellon', 'grape']
// fruits.indexOf('banana');
// 1
// fruits.join(' and ')
// 'apple and banana and orange and mellon and grape'

let fruits_second = ["berry","strawberry"];

let fruits_concat = fruits.concat(fruits_second);