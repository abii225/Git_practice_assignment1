// Problem 1.//  No is a prime number


let num=13;
let count=0;
for(let i=1;i<=num;i++){
	if(num%i==0){
		count++;
	}

}if(count==2){
	console.log(num,"is a prime number")
}
else{
	console.log(num,"is Not a prime number")
}


// problem 2. // check for palindrom
let str="racecar";
let bag="";
for(let i=str.length-1;i>=0;i--){
	bag+=str[i];
}if(str==bag){
	console.log("It is a palaindrome")
}else{
console.log("It is Not  a palaindrome")
}


