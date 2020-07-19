input=prompt("Enter a number greater than 1");
num = parseInt(input);
console.log(input);
for (var counter = 2; counter <= num; counter++) {

    var IsPrime = true;
    for (var i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            IsPrime = false;
        }
    }
    if (IsPrime === true) {
                console.log(counter);
    }
}