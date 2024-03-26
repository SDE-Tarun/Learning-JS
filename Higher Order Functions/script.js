function movies(fun) {

    fun(2,8);
    
    function pathan() {
        console.log('pathan');
    }
    function jawan() {
        console.log('jawan');
        return 10;
    }
    function pushpa() {
        console.log('pushpa');
    }
    return jawan;
}

let add = function(a,b) {
    console.log(a+b)
}

movies(add);

