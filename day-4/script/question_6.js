do {
   input= prompt("enter a number :");
   input = parseInt(input)
} while (input<100);


for(input=1;input<100;){
    input= prompt("enter a number :");
    input = parseInt(input)
}

function repeatedprompt?(){
    input= prompt("enter a number :");
    input = parseInt(input)
    return(input<100)?repeatedprompt?():true;
}
repeatedprompt()


function repeatedpromptor(){
    input= prompt("enter a number :");
    input = parseInt(input)
    return((input>100)|| repeatedpromptor())
}
repeatedpromptor()