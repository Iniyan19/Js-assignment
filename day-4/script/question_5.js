input = prompt("Enter the total amount of sales")
sales = parseInt(input)
switch (true) {
    case sales>0&&sales<=5000:
        reward = sales*(0.02);
        console.log(reward);
        break;
    case sales>5000&&sales<=10000:
        reward = sales*(0.02) + sales*(0.05)
        console.log(reward);
        break;
    case sales>10000&&sales<=20000:
        reward = sales*(0.02) + sales*(0.05)+sales*(0.07)
        console.log(reward);
        break;
    case sales>20000:
        reward = sales*(0.02) + sales*(0.05)+sales*(0.07)+sales*(0.1)
        console.log(reward);
        break;
    default:
        console.log("invalid number")
        break;
}