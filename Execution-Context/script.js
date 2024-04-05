let x = 10;

function fun() {
  let y = 20;
  console.log("Inside Function Call");
  console.log(y);
}

console.log(x);

fun();

console.log(a);

function b() {
  c();
  var d = 999;

  function c() {
    console.log(d);
  }
}

b();
var a = 100;
