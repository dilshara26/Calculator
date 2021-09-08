let displayBox = document.getElementById('answer-display');
let answerbtn = document.getElementById('equals');
let inputBox = document.getElementById("myInput");

let plusbtn = document.getElementById('plus');
let minusbtn = document.getElementById('minus');
let multiplybtn = document.getElementById('multiply');
let dividebtn = document.getElementById('divide');

let clearbtn = document.getElementById('clear');
let logbtn = document.getElementById('log');
let lnbtn = document.getElementById('natlog');
let sqrtbtn = document.getElementById('sqrt');
let powertwobtn = document.getElementById('powertwo');
let sinbtn = document.getElementById('sin');
let cosbtn = document.getElementById('cos');
let tanbtn = document.getElementById('tan');
let absbtn = document.getElementById('abs');
let negbtn = document.getElementById('neg');
let reciprocalbtn = document.getElementById('reciprocal');
let exbtn = document.getElementById('ex');
let powerbtn = document.getElementById('power');
let modbtn = document.getElementById('mod');
let pibtn = document.getElementById('pi');
// number press

let numberSelectors = [];
for (let i = 0; i<= 11;i++){
	let numberclick = document.getElementById(`btn${i}`);      
	numberSelectors.push(numberclick);
	numberSelectors[i].addEventListener('click',displayfunc);
 	
}

let a = []; // input number as string
let b = []; // input values as integers
let s = [];

let x = [];
let count = 0;
let sign = '';

/*
function getInputValue(){
    // Selecting the input element and get its value 
    let inputVal = document.getElementById("myInput").value;
    // Displaying the value
    displayBox.innerHTML = inputVal;  

}
*/
answerbtn.addEventListener('click', latchFunc);

plusbtn.addEventListener('click', latchFunc);
minusbtn.addEventListener('click', latchFunc);
multiplybtn.addEventListener('click', latchFunc);
dividebtn.addEventListener('click', latchFunc);

clearbtn.addEventListener('click', clearFunc);

logbtn.addEventListener('click', latchFunc);
lnbtn.addEventListener('click', latchFunc);
sqrtbtn.addEventListener('click', latchFunc);
powertwobtn.addEventListener('click', latchFunc);
sinbtn.addEventListener('click', latchFunc);
cosbtn.addEventListener('click', latchFunc);
tanbtn.addEventListener('click', latchFunc);
absbtn.addEventListener('click', latchFunc);
negbtn.addEventListener('click', negFunc);
reciprocalbtn.addEventListener('click', latchFunc);
exbtn.addEventListener('click', latchFunc);
powerbtn.addEventListener('click', latchFunc);
modbtn.addEventListener('click', latchFunc);
pibtn.addEventListener('click', piFunc);
// number press


function latchFunc(event){
	let tapsound = new Audio('sounds/tap.mp3');
	tapsound.play();
	count = count + 1;
	let inputVal = document.getElementById("myInput").value;
	if(event.target.id == 'plus'){
		sign = '+' ;	
	}else if(event.target.id == 'minus'){
		sign = '-' ;
	}else if(event.target.id == 'multiply'){
		sign = '*' ;
	}else if(event.target.id == 'divide'){
		sign = '/' ;
	}else if(event.target.id == 'equals'){
		sign = '=' ;
	}else if(event.target.id == 'log'){
		sign = 'l' ;
	}else if(event.target.id == 'natlog'){
		sign = 'ln'	;
	}else if(event.target.id == 'sqrt'){
		sign = 'sq'	;
	}else if(event.target.id == 'powertwo'){
		sign = 'tw'	;
	}else if(event.target.id == 'sin'){
		sign = 'sin';
	}else if(event.target.id == 'cos'){
		sign = 'cos';
	}else if(event.target.id == 'tan'){
		sign = 'tan';
	}else if(event.target.id == 'abs'){
		sign = 'abs';
	}else if(event.target.id == 'reciprocal'){
		sign = 'reci';
	}else if(event.target.id == 'ex'){
		sign = 'ex';
	}else if(event.target.id == 'power'){
		sign = 'power';
	}else if(event.target.id == 'mod'){
		sign = 'mod';
	}else {

	}
	
	a.push(inputVal);
	s.push(sign);
	//displayBox.innerHTML = a[0];
	//displayBox.innerHTML = s[0];
	inputBox.value = '';

	if(count == 1) {
		if(s[s.length-1] == 'l'){
			let mathVal = Math.log10(parseFloat(a[0], 10));
	 		a[0] = mathVal.toString();
	 		displayBox.innerHTML = a[0];
		}if(s[s.length-1] == 'ln'){
			let mathVal = Math.log(parseFloat(a[0], 10));
	 		a[0] = mathVal.toString();
	 		displayBox.innerHTML = a[0];
		}if(s[s.length-1] == 'sq'){
			let mathVal = Math.sqrt(parseFloat(a[0], 10));
	 		a[0] = mathVal.toString();
	 		displayBox.innerHTML = a[0];
		}if(s[s.length-1] == 'tw'){
			let mathVal = parseFloat(a[0], 10) ** 2;
	 		a[0] = mathVal.toString();
	 		displayBox.innerHTML = a[0];
		}if(s[s.length-1] == 'sin'){
			let mathVal = Math.sin(parseFloat(a[0], 10));
	 		a[0] = mathVal.toString();
	 		displayBox.innerHTML = a[0];
		}if(s[s.length-1] == 'cos'){
			let mathVal = Math.cos(parseFloat(a[0], 10));
	 		a[0] = mathVal.toString();
	 		displayBox.innerHTML = a[0];
		}if(s[s.length-1] == 'tan'){
			let mathVal = Math.tan(parseFloat(a[0], 10));
	 		a[0] = mathVal.toString();
	 		displayBox.innerHTML = a[0];
		}if(s[s.length-1] == 'abs'){
			let mathVal = Math.abs(parseFloat(a[0], 10));
	 		a[0] = mathVal.toString();
	 		displayBox.innerHTML = a[0];
		}if(s[s.length-1] == 'reci'){
			let mathVal = 1/parseFloat(a[0], 10);
	 		a[0] = mathVal.toString();
	 		displayBox.innerHTML = a[0];
		}if(s[s.length-1] == 'ex'){
			let mathVal = Math.exp(parseFloat(a[0], 10));
	 		a[0] = mathVal.toString();
	 		displayBox.innerHTML = a[0];
		}
	}

	if(a.length == 2){
		//displayBox.innerHTML = 'sex';
		/*for(let j = 0; j < a.length; j++){
			let int = parseInt(a[j], 10);
			b.push(int);
		}*/
		
		b[0] = parseFloat(a[0], 10);
		b[1] = parseFloat(a[1], 10);
		//let debug = b.toString();
		//displayBox.innerHTML = b;

		if(s[s.length-2] == '+'){
			let out = b[0] + b[1];
			b.splice(0,2,out);
			a.splice(0,2);
			a.push(b.toString());
			displayBox.innerHTML = a[0];
			/*if(s[s.length-1] == '='){
				displayBox.innerHTML = a[0];
			}*/
		}
		if(s[s.length-2] == '-'){
			let out = b[0] - b[1];
			b.splice(0,2,out);
			a.splice(0,2);
			a.push(b.toString());
			displayBox.innerHTML = a[0];
			/*if(s[s.length-1] == '='){
				displayBox.innerHTML = a[0];
			}*/	
		}
		if(s[s.length-2] == '*'){
			let out = b[0] * b[1];
			b.splice(0,2,out);
			a.splice(0,2);
			a.push(b.toString());
			displayBox.innerHTML = a[0];
			/*if(s[s.length-1] == '='){
				displayBox.innerHTML = a[0];
			}*/	
		}
		if(s[s.length-2] == '/'){
			let out = b[0] / b[1];
			b.splice(0,2,out);
			a.splice(0,2);
			a.push(b.toString());
			displayBox.innerHTML = a[0];
			/*if(s[s.length-1] == '='){
				displayBox.innerHTML = a[0];
			}*/	
		}
		if(s[s.length-2] == 'power'){
			let out = b[0] ** b[1];
			b.splice(0,2,out);
			a.splice(0,2);
			a.push(b.toString());
			displayBox.innerHTML = a[0];
			/*if(s[s.length-1] == '='){
				displayBox.innerHTML = a[0];
			}*/	
		}
		if(s[s.length-2] == 'mod'){
			let out = b[0] % b[1];
			b.splice(0,2,out);
			a.splice(0,2);
			a.push(b.toString());
			displayBox.innerHTML = a[0];
			/*if(s[s.length-1] == '='){
				displayBox.innerHTML = a[0];
			}*/	
		}


		if(s[s.length-1] == '='){
			displayBox.innerHTML = a[0];
		}
		if(s[s.length-1] == 'l'){
			let mathVal = Math.log10(parseFloat(a[0], 10));
	 		a[0] = mathVal.toString();
	 		displayBox.innerHTML = a[0];
		}if(s[s.length-1] == 'ln'){
			let mathVal = Math.log(parseFloat(a[0], 10));
	 		a[0] = mathVal.toString();
	 		displayBox.innerHTML = a[0];
		}if(s[s.length-1] == 'sq'){
			let mathVal = Math.sqrt(parseFloat(a[0], 10));
	 		a[0] = mathVal.toString();
	 		displayBox.innerHTML = a[0];
		}if(s[s.length-1] == 'tw'){
			let mathVal = parseFloat(a[0], 10) ** 2;
	 		a[0] = mathVal.toString();
	 		displayBox.innerHTML = a[0];
		}if(s[s.length-1] == 'sin'){
			let mathVal = Math.sin(parseFloat(a[0], 10));
	 		a[0] = mathVal.toString();
	 		displayBox.innerHTML = a[0];
		}if(s[s.length-1] == 'cos'){
			let mathVal = Math.cos(parseFloat(a[0], 10));
	 		a[0] = mathVal.toString();
	 		displayBox.innerHTML = a[0];
		}if(s[s.length-1] == 'tan'){
			let mathVal = Math.tan(parseFloat(a[0], 10));
	 		a[0] = mathVal.toString();
	 		displayBox.innerHTML = a[0];
		}if(s[s.length-1] == 'abs'){
			let mathVal = Math.abs(parseFloat(a[0], 10));
	 		a[0] = mathVal.toString();
	 		displayBox.innerHTML = a[0];
		}if(s[s.length-1] == 'reci'){
			let mathVal = 1/parseFloat(a[0], 10);
	 		a[0] = mathVal.toString();
	 		displayBox.innerHTML = a[0];
		}if(s[s.length-1] == 'ex'){
			let mathVal = Math.exp(parseFloat(a[0], 10));
	 		a[0] = mathVal.toString();
	 		displayBox.innerHTML = a[0];s
		}
		
		
		
	}
 }
 function clearFunc(){
	let tapsound = new Audio('sounds/tap.mp3');
	tapsound.play();
	 a = []; 
	 b = []; 
	 s = [];
	 count = 0;
	// displayBox.innerHTML = 'Your ' + '<br/>' + 'Answer';
	displayBox.innerHTML = 'Your Answer';
	 inputBox.value = '';
 }
 
function negFunc(){
	let tapsound = new Audio('sounds/tap.mp3');
	tapsound.play();
	let inputstr = inputBox.value;
	let input = parseFloat(inputstr, 10);
	input = input * -1;
	let newinput = input.toString();
	
	inputBox.value = newinput;
	console.log(newinput);
}
/*
function piFunc(){
	s.push('c');
	a.push('3.141592');
	
}*/
function displayfunc(event){
	let tapsound = new Audio('sounds/tap.mp3');
	tapsound.play();
  for (let i = 0; i<= 11;i++){
	if(event.target.id== `btn${i}`){
		if (i <= 9){	 
	inputBox.value = inputBox.value + numberSelectors[i].innerHTML;
		}
		else if (i == 10){
			inputBox.value = inputBox.value + '3.1415926';	
		}
		else{
			inputBox.value = inputBox.value + '2.71828';	
		}
	}
}
}
