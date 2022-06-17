let input = 0;

let plus = document.querySelector("#plusButton");
let minus = document.querySelector("#minusButton");
let multiply = document.querySelector("#multiplyButton");
let divide = document.querySelector("#divButton");
let equals = document.querySelector("#equalsButton");
let result = document.querySelector("#result");

let clear = document.querySelector("#clearButton");
let comma = document.querySelector("#commaButton");

let zero = document.querySelector("#zeroButton");
let one = document.querySelector("#oneButton");
let two = document.querySelector("#twoButton");
let three = document.querySelector("#threeButton");
let four = document.querySelector("#fourButton");
let five = document.querySelector("#fiveButton");
let six = document.querySelector("#sixButton");
let seven = document.querySelector("#sevenButton");
let eight = document.querySelector("#eightButton");
let nine = document.querySelector("#nineButton");

let number1 = 0;
let number2 = 0;
let mathResult = 0;


clear.addEventListener("click", () => {
    document.getElementById("numberInput").innerHTML = 0;
})

zero.addEventListener("click", () => {
    if (document.getElementById("numberInput").innerHTML == "0"){
        document.getElementById("numberInput").innerHTML = 0;
    } else {
        document.getElementById("numberInput").innerHTML += 0;
    }
})

one.addEventListener("click", () => {
    if (document.getElementById("numberInput").innerHTML == "0"){
        document.getElementById("numberInput").innerHTML = 1;
    } else {
        document.getElementById("numberInput").innerHTML += 1;
    }
})

two.addEventListener("click", () => {
    if (document.getElementById("numberInput").innerHTML == "0"){
        document.getElementById("numberInput").innerHTML = 2;
    } else {
        document.getElementById("numberInput").innerHTML += 2;
    }
})

three.addEventListener("click", () => {
    if (document.getElementById("numberInput").innerHTML == "0"){
        document.getElementById("numberInput").innerHTML = 3;
    } else {
        document.getElementById("numberInput").innerHTML += 3;
    }
})

four.addEventListener("click", () => {
    if (document.getElementById("numberInput").innerHTML == "0"){
        document.getElementById("numberInput").innerHTML = 4;
    } else {
        document.getElementById("numberInput").innerHTML += 4;
    }
})

five.addEventListener("click", () => {
    if (document.getElementById("numberInput").innerHTML == "0"){
        document.getElementById("numberInput").innerHTML = 5;
    } else {
        document.getElementById("numberInput").innerHTML += 5;
    }
})

six.addEventListener("click", () => {
    if (document.getElementById("numberInput").innerHTML == "0"){
        document.getElementById("numberInput").innerHTML = 6;
    } else {
        document.getElementById("numberInput").innerHTML += 6;
    }
})

seven.addEventListener("click", () => {
    if (document.getElementById("numberInput").innerHTML == "0"){
        document.getElementById("numberInput").innerHTML = 7;
    } else {
        document.getElementById("numberInput").innerHTML += 7;
    }
})

eight.addEventListener("click", () => {
    if (document.getElementById("numberInput").innerHTML == "0"){
        document.getElementById("numberInput").innerHTML = 8;
    } else {
        document.getElementById("numberInput").innerHTML += 8;
    }
})

nine.addEventListener("click", () => {
    if (document.getElementById("numberInput").innerHTML == "0"){
        document.getElementById("numberInput").innerHTML = 9;
    } else {
        document.getElementById("numberInput").innerHTML += 9;
    }
})

plus.addEventListener("click", () => {
    document.getElementById("sign").innerHTML = "+";
    if (document.getElementById("numberInput").innerHTML == 0)
    {

    }   else {
        document.getElementById("result").innerHTML = document.getElementById("numberInput").innerHTML;
        }
    document.getElementById("numberInput").innerHTML = 0;
})

minus.addEventListener("click", () => {
    document.getElementById("sign").innerHTML = "-";
    if (document.getElementById("numberInput").innerHTML == 0)
    {

    }   else {
        document.getElementById("result").innerHTML = document.getElementById("numberInput").innerHTML;
        }
    document.getElementById("numberInput").innerHTML = 0;
})

multiply.addEventListener("click", () => {
    document.getElementById("sign").innerHTML = "*";
    if (document.getElementById("numberInput").innerHTML == 0)
    {

    }   else {
        document.getElementById("result").innerHTML = document.getElementById("numberInput").innerHTML;
        }
    document.getElementById("numberInput").innerHTML = 0;
})

divide.addEventListener("click", () => {
    document.getElementById("sign").innerHTML = "/";

    if (document.getElementById("numberInput").innerHTML == 0)
    {

    }   else {
        document.getElementById("result").innerHTML = document.getElementById("numberInput").innerHTML;
        }
    document.getElementById("numberInput").innerHTML = 0;
})

equals.addEventListener("click", () => {
    let input = document.querySelector("#sign").innerHTML;
    switch (input){
        case "+":
            document.getElementById("result").innerHTML = +document.getElementById("result").innerHTML + +document.getElementById("numberInput").innerHTML;
            document.getElementById("numberInput").innerHTML = 0;
            break;
            case "-":
                document.getElementById("result").innerHTML = +document.getElementById("result").innerHTML - +document.getElementById("numberInput").innerHTML;
                document.getElementById("numberInput").innerHTML = 0;
                break;
                        case "*":
                    document.getElementById("result").innerHTML = +document.getElementById("result").innerHTML * +document.getElementById("numberInput").innerHTML;
                    document.getElementById("numberInput").innerHTML = 0;
                    break;
                        case "/":
                        document.getElementById("result").innerHTML = +document.getElementById("result").innerHTML / +document.getElementById("numberInput").innerHTML;
                        document.getElementById("numberInput").innerHTML = 0;
                        break;
        default:
            break;
    }
})