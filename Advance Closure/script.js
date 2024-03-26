function outerFun() {
    let money = 150;
    function innerFun() {
        money++;
        let a = 10;
        function innerMostFun() {
            money++;
            a++;
            console.log(money, "a: ", a);
        }
        return innerMostFun;
    }
    return innerFun;
}

let fun = outerFun();   // money = 150 [function :innerfun]
let fun1 = fun();  // [function :innerMostfun] , money = 151 , a=10
let fun2 = fun();  // [function :innerMostfun] , money = 152, a=10
fun1();  
fun1();
fun1();  
fun2();  
fun2();  
fun1();  



