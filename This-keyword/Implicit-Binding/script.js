console.log(this);

function add() {
    console.log(this);
}

add();

let obj = {
    name: 'Tarun',
    age: 25,
    fun: function() {
        console.log(this);
    }
}

obj.fun();