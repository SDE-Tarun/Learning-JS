// 1. STORE
// function movies() {
//     function pathan() {
//         console.log('pathan');
//     }
//     function jawan() {
//         console.log('jawan');
//     }
//     function pushpa() {
//         console.log('pushpa');
//     }
//     return jawan;
// }

// let favMovie = movies(); // [Function: jawan] 
// console.log(favMovie); // jawan
// console.log(favMovie()); // undefined as jawan() is not returning anything.

// 2. RETURN
// function movies() {
//     function pathan() {
//         console.log('pathan');
//     }
//     function jawan() {
//         console.log('jawan');
//         return 10
//     }
//     function pushpa() {
//         console.log('pushpa');
//     }
//     return jawan;
// }

// let favMovie = movies(); // [Function: jawan]
// console.log(favMovie); // jawan
// console.log(favMovie()); // 10

// 3. PASS AS AN ARGUMENT
function movies(fun) {
    fun(2,5)

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
    console.log(a+b);
}

movies(add); 













