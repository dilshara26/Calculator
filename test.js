let inputVal = '60-45+(25-32)*5/10'
let str = inputVal + ' ';
let lastPos=0;
let keepIndex = 0;
let c=[]; // array to store num as char
let d = []; //array to store symbols
let finalNums = []; // array to store converted nums
let val = 0;

/*
let val = str.slice(0, 2);
console.log(val);
*/

for(i = 0; i < str.length; i++){
    if(str[i] == '+' || str[i] == '-' || str[i] == '*' || str[i] == '/' ||  str[i] == '(' || str[i] == ')' || str[i] == ' '){
        let val = str.slice(lastPos, i);
        c.push(val);
        d.push(str[i]);
        keepIndex = i;
       lastPos = keepIndex + 1;
    }
}

for(let j = 0; j < c.length; j++){
    let int = parseInt(c[j], 10);
    finalNums.push(int);
}
console.log(c);
console.log(finalNums);
console.log(d);



