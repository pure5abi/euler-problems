//Function checks if number is a prime number
function isPrime(num) {
    for(var i = 2; i < num; i++) {
        if((num % i) === 0) {
            return false;
        }
    }
    return true;
}

var count = 1;
var iterations = 0;
var upper = 600851475143;
var largest = 0;

for(i=1; i<upper; i = i+2){
	if(((upper % i) === 0) && (isPrime(i)===true)){
		largest = i;
		upper = (upper/i);
	}

	else if(count===4){
		count = 0;
	}
	
	count++;
	iterations++;
	
}
if(upper%2 === 0){
	console.log("Largest prime factor is " + largest);
}
else{
	console.log("Largest prime factor is " + upper);
}
console.log("It took " + iterations + " iterations to complete the program.");