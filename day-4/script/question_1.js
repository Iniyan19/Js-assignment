for(i=1;i<=100;i++){
    output = (i%3==0 && i%5==0)? console.log("fizzbuzz"):(i%5==0)? console.log("buzz"):(i%3==0)? console.log("fizz"):console.log(i);
}