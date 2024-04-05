function outerFun() {
  let money = 150;
  function innerFun() {
    money++;
    console.log(money);
  }
  return innerFun;
}

let fun = outerFun(); // [Function: innerFun], money = 150

let fun1 = outerFun(); // [Function: innerFun], money = 150

fun(); // 151
fun(); // 152
fun(); // 153
fun1(); // 151
fun1(); // 152
fun(); // 154
