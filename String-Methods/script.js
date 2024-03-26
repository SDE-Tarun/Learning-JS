var str = 'We are learning JS and learning backend';
console.log(str);

let newStr = ' ';
for (let i = 0; i < str.length; i++) {
    newStr+= str[i] + '-';
}

console.log(newStr);

// toUpperCase() - 
console.log(str.toUpperCase());

// toLowerCase -
console.log(str.toLowerCase()); 

// substr() - 
console.log(str.substring('are')); // 3

// replace() - 
 console.log(str.replace('JS', 'Javascript'));

 // replaceAll() -
 console.log(str.replaceAll('and', 'or'));

// startsWith
console.log(str.startsWith('W'));

// endsWith
console.log(str.endsWith('nd'));

// indexOf() -
console.log(str.indexOf('JS'));

// includes() -
console.log(str.includes('in'));

// lastIndexOf() -
console.log(str.lastIndexOf('back'));





// indexOf() - Returns index
// NOTE - Space also takes indexing.
console.log(str.indexOf('are')); 
console.log(str.indexOf('ni'));

// split() - Returns an array
let newFile = 'myFile.jpg';
console.log(newFile.split('.'));
console.log(str.split(' '));









