// Print "Hello" 5 times
for (var i = 0; i < 5; i++) {
  console.log("Hello");
}


// Print values from 1 to 5


// Output on a single line
var sequence = "";
for (var i = 1; i <= 5; i++) {
  sequence += i + " ";
}
console.log(sequence);





// Output on a single line
var sequence = "";
for (var i = 1; i <= 10; i = i * 2) {
  sequence += i + " ";
}
console.log(sequence);


// Reverse loop from 5 to 1
var sequence = "";
for (var i = 5; i > 0; i--) {
  sequence += i + " ";
}
console.log(sequence);


// Calculate factorial
var factorial = 1;
for (var i = 1; i <= 5; i++) {
  factorial *= i;
  console.log(factorial);
}


// Find sum from 1 to N
var N = 5;
var sum = 0;
for (var i = 1; i <= N; i++) {
  sum += i;
}
console.log(sum);


//break Point
for (var guest = 1; guest <= 10; guest++) {
  console.log("guest", guest, "got the train");
  if (guest == 3) {
    break;
  }
}

//continue statement
for (var guest = 1; guest <= 10; guest++) {
  if (guest == 3) {
    continue;
  }
  console.log("guest", guest, "got the train");
}

var count = 1;
for (var i = 1; i < 10; i++) {
  count++;
  if (i == 5) {
    continue;
  }
}
console.log(count); 

//break statement
var count = 0;
while(true)
{
    console.log("Hello");
    count++;
    ++count;
    if(count > 5)
    {
        break;
    }
    count--;
}





