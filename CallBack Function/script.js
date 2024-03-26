const data = [
    { l:1, b:2 },
    { l:3, b:4 },
    { l:5, b:6 },
    { l:7, b:8 }
]

// const area = function (l,b) {
//     return l * b;
// }

const area = (l,b) => l * b;

// const perimeter = function (l,b) {
//     return 2 * (l + b);
// }

const perimeter = (l,b) => 2 * (l + b);

function calculate(data, logic) {
    const result = [];
    for (let rect  of data) {
        let ans = logic(rect.l, rect.b);
        result.push(ans);
    }
    return result;
}

const areaRes = calculate(data, area);

const perimeterRes = calculate(data, perimeter);

console.log(areaRes);

console.log(perimeterRes);