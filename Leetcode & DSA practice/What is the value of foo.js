// var foo = 10 + '20';
// console.log(foo);
// console.log(typeof foo);

// console.log(0.1 + 0.2 == 0.3);
// console.log(0.1 + 0.2);
// console.log(0.3);

// var add = function(x) {
//     return function(y) { return x + y; };
// };

// add(2,5);
// add(2)(5);
// const window = {};
// console.log("i'm a lasagna hog".split("").reverse().join(""));
// console.log( window.foo || ( window.foo = "bar" ));

// var foo = "Hello";
// (function() {
//   var bar = " World";
//   alert(foo + bar);
// })();
// alert(foo + bar);

// var foo = [];
// foo.push(1);
// foo.push(2);
// console.log(foo.length);

// var foo = {n: 1};
// var bar = foo;
// foo.x = foo = {n: 2};
// console.log(foo.x);

// console.log('one');
// setTimeout(function() {
//   console.log('two');
// }, 0);
// Promise.resolve().then(function() {
//   console.log('three');
// })
// console.log('four');

function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}

console.log(foo1());
console.log(foo2());