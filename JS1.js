// How Edabit Works : Very easy challenge
// https://edabit.com/challenge/ARr5tA458o2tC9FTN

function hello() {
	return "hello edabit.com"
}

// How Much is True? : medium challenge
//https://edabit.com/challenge/GLbuMfTtDWwDv2F73

function countTrue(arr) {
	let count = 0;
	for(let i=0; i < arr.length; i++){
		if(arr[i] == true){
		count++;
	}
}
	return count;
}
//Convert Age to Days : very easy challenge
//https://edabit.com/challenge/bL7hSc6Zh4zZJzGmw

function calcAge(age) {
	return age * 365;
}
//Power Calculator : very easy challenge
//https://edabit.com/challenge/wAdE9te55cowBLcPs

function circuitPower(voltage, current) {
	return voltage * current;
	}
//Seven Boom! : hard challenge
//https://edabit.com/challenge/6R6gReGTGwzpwuffD
function sevenBoom(arr) {
let statement = "there is no 7 in the array";

for (let i = 0; i < arr.length; i++) {
    if (String(arr[i]).includes("7")) {
    statement = "Boom!";
    break;
    }
}

return statement;
}
//The Josephus Problem : expert challenge
//https://edabit.com/challenge/EcEN8FnruPEj6x5k4
function josephus(n, k) {

let survivor = 0;


for (let i = 1; i <= n; i++) {
    survivor = (survivor + k) % i;
}


return survivor + 1;
}


console.log(josephus(41, 3)); 
console.log(josephus(35, 11)); 
console.log(josephus(11, 1)); 
console.log(josephus(2, 2)); 
