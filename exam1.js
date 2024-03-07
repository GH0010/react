// 1번 문제

function printType(value) {

  console.log(typeof (value))
  // 이 함수를 구현하라


}

printType(123);
printType("hello");
printType(true);
printType([1, 2, 3]);

// number
// string
// boolean
// object


// 2번 문제

function printSum(a, b) {

  console.log(a.toString()+ b.toString())
  // 이 함수를 구현하라.
}

printSum(1, 2);
printSum(3, 4);
printSum(12, 34);

// 12
// 34
// 1234


// 3번 문제

function createArray(count) {
 
  return parseInt(count)
  // 이 함수를 구현하라
}

console.log(createArray(2));
console.log(createArray(3));
console.log(createArray(4));
console.log(createArray(5));

// 2
// 3
// 4
// 5


// 4번 문제

function createArray1(count1) {

  return  parseFloat(count1)
  // 이 함수를 구현하라
}
 
console.log(createArray1(2));
console.log(createArray1(3));
console.log(createArray1(4));
console.log(createArray1(5));

// 2
// 3
// 4
// 5


// 5번 문제

function rotate(a) {
 a.unshift(a.pop());

  // 이 함수를 구현하라
}
 
let a = [1, 2, 3, 4];
rotate(a);
console.log(a);
 
rotate(a);
console.log(a);

// [ 4, 1, 2, 3 ]
// [ 3, 4, 1, 2 ]

// 6번 문제

function insertZero(a1, index) {
  a1.splice(index, 0, 0)
  // 이 함수를 구현하라
}
 
let a1 = [1, 2, 3];
insertZero(a1, 2);
console.log(a1);
insertZero(a1, 1);
console.log(a1);

// [ 1, 2, 0, 3 ]
// [ 1, 0, 2, 0, 3 ]


// 7번 문제

function createArray2() {
  var a = [];
  var s1 = [1,2];
  var s2 = [1,2,3];
  a.splice (0, 0, s1);
  a.splice (1, 0, s2);
  a.splice (2, 0, s2);

  return a
  // 이 함수를 구현하라
}
 
console.log(createArray2());

// [ [ 1, 2 ], [ 1, 2, 3 ], [ 1, 2, 3 ] ]


// 8번 문제

function countSpace(s) {
  let a3 = s.split(" ").length;

  return a3 -1;
  // 이 함수를 구현하라
}
 
console.log(countSpace("aa bb ccc"));
console.log(countSpace("a b cc ddd  e"));

// 2
// 5


// 9번 문제

function removeSpace(s) {
  let result = s.replace(/ /g, "");
  return result
  // 이 함수를 구현하라
}
 
console.log(removeSpace("aa bb ccc"));
console.log(removeSpace("a b cc ddd  e"));

// aabbccc
// abccddde

// 10번 문제

function testCallback(f, a, b) {
  console.log(f(a, b))
  // 이 함수를 구현하라
}
 
testCallback((a, b) => a + b, 3, 4);
testCallback((a, b) => a * b, 3, 4);

// 7
// 12



// 11번 문제

function createObj(value) {
  const obj = {
    value: value
};

return obj;
  // 이 함수를 구현하라
}
 
console.log(createObj(3));
console.log(createObj("hello"));

// { value: 3 }
// { value: 'hello' }
