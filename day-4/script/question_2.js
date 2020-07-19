const student ={
    name:"Helsinki",
    age : 24,
    project:{
        diceGame: "Two player dice game using javascript"
    }
}
const {name , age,project:{diceGame}} = student;
console.log(`Name is ${name}, age is ${age}, project is ${diceGame}`)