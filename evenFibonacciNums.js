var curr = 2;
var prev = 1;
var sum = 2;
var temp = 0;
while(curr < 4000000){
	if((curr%2)===0){
		sum = sum + curr;
	}
	
	temp = curr;
	curr = curr + prev;
	prev = temp;
}

console.log(sum);