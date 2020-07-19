input = prompt("enter 2 numbers to be calulated (number)(space)(operation)(space)(number) use +,-,*,/,%,pow,sqrt(space)(number)")
content=input.split(" ")
//console.log(content.length)
if(content.length == 2){
num1 = content[1]
if(content[0]=='sqrt'){
	console.log(Math.sqrt(num1))
}
}
else
{
	num1 = parseInt(content[0])
	num2 = parseInt(content[2])
	switch (content[1]) {
		case "+":
			console.log(num1+num2)
			break;
		case "-":
			console.log(num1-num2)
			break;
		case"*":
			console.log(num1*num2)
			break;
		case"%":
			console.log(num1%num2)
			break;
		case "/":
			console.log(num1/num2)
			break;
		case "pow":
			ans = Math.pow(num1,num2)
			console.log(ans)
			break;

		default:
			console.log("please go easy this is a simple calculator..")
			break;
	}
}