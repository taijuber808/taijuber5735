//IIFE Function

(function () {
    let userName = "Mohit";   

    function welcome() {
        console.log("Welcome " + userName);
    }

    welcome();   
})();


// Arrow Function

const calculateTotal = (price, gst) => {
    let total = price + (price * gst / 100);
    return total;
};

console.log(calculateTotal(1000, 18)); 


// Inner and Outer function

function studentResult(marks) {

    function checkResult() {
        if (marks >= 35) {
            console.log("Pass");
        } else {
            console.log("Fail");
        }
    }

    console.log("Checking result...");
    checkResult();  
}

studentResult(40);


// Clouser Function

function outer() {
    let count = 0;   // outer variable

    return function inner() {
        count++;
        console.log(count);
    };
}

let myFunc = outer();

myFunc(); // 1
myFunc(); // 2
myFunc(); // 3






