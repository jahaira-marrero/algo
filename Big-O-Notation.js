// Big O - is determining the best implementation for the same function, ex: loop vs string

// Example: Write a function that calculates the sum of all numbers from 1 up to (and including) some number n

function addUpToEasy(n){
    let total = 0
    for (let i = 1; i <= n; i++) {
        total += 1;
    }
    return total;
}

console.log(addUpToEasy(6)) 

// This is equavalent to 6 + 5 + 4 + 3 + 2 + 1 = 21

function addUpToCleaner(n) {
    return n * (n + 1) / 2
}

console.log(addUpToCleaner(6))

// This is equivalent to (6 * 7) / 2 = 21
// There's a longer explanation as to why this works but it DOES work!

/* ------------------------------------------------------------------------
Questions:
    - Which one is faster?
        - You can "time" the running time to see which one is faster. But there are a few problems with that.
            - Different machines record different times
            - The SAME machine will record different times
            - For faster algorithms, speed measurements may not be precise enough
        - We don't want to go through testing all codes to see which is fastest... enter Big O Notation!
            - Instead, we count the number of simple operations the computer has to perform.
    - Which one is less-memory intensive?
    - Which one is more readable?
*/

// Counting Operations

function addUpToCleaner(n) {
    return n * (n + 1) / 2
}

/* This function has 3 simple operations:
    - multiplication
    - addition
    - division
It doesn't matter what the value of the number actually is, the operations is what counts.
*/

function addUpToEasy(n){
    let total = 0
    for (let i = 1; i <= n; i++) {
        total += 1;
    }
    return total;
}

/* This function has 5n operations + 2:
    - "for" is a loop, so this means that this function will do all the operations included "n" number of times.
    - total +=
        this is n-additions and = is 1 assignment
    - i++
        this is n- additions and n-assignments
    - i <= n
        this is n comparisons
    - let i = 1
        this is 1 assignment
    - total = 0
        this is 1 assignment
As "n" grows, the operations grow in proportion.
*/

/*-----------------------------------------------------------------------------
- Big O Notation is a way to formalize fuzzy counting. Keep in mind that we're talking about "worst case scenarios" for runtime.
- It allows us to talk formally about how the runtime of an alogrithm grows as the inputs grow.
- We only care about the broad trends.

An algorithm is O(f(n)), if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases.
    f(n) = function with an input of "n"

    - f(n) could  be linear (f(n)=n)
    - f(n) could be quadratic (f(n)=n^2)
    - f(n) could be constant(f(n)=1)
    - f(n) could be something entirely different!

Example 1 - 
*/

function addUpToCleaner(n) {
    return n * (n + 1) / 2
}

/*
This function will always have 3 operations:
    - multiplication
    - addition
    - division
BUT no matter what "n" is, the runtime will not change. This is why we call it O(1).

Example 2 - 
*/

function addUpToEasy(n){
    let total = 0
    for (let i = 1; i <= n; i++) {
        total += 1;
    }
    return total;
}

/*
The number of operations for this function is (eventually) bounded by a multiple of n(say, 10n). This is why THIS function is considered to have O(n)
*/


// Example 3 - Write a function that counts up and down.

function countUpAndDown(n){
    console.log("Going up!");
    for(let i = 0; i < n; i++) {
        console.log(i);
    }
    console.log("At the top!\nGoing down...");
    for(let j= n-1; j > 0; j--) {
        console.log(j);
    }
    console.log("Back down. Bye!");
}

console.log(countUpAndDown(3))

/*
This will print the following:
Going up!
0
1
2
3
4
5
6
7
8
9
At the top!
Going down...
9
8
7
6
5
4
3
2
1
0
Back down. Bye!

This is still considered O(n) even though it has 2 loops:
 - Loop #1
    for(let i = 0; i < n; i++) {
        console.log(i);

- Loop #2
    for(let j= n-1; j > 0; j--) {
        console.log(j);
*/

// Example 4 - Write a function that prints all the pairs of a given number. (This contains a nested loop)

function printAllPairs(n){
    for(var i = 0; i < n; i++) {
        for(var j = 0; j < n; j++) {
            console.log(i, j)
        }
    }
}

console.log(printAllPairs(3))
/*
This will print out the following:
0 0
0 1
0 2
0 3
1 0
1 2
1 3
2 0
etc...
3 3

O(n) operation inside of an O(n) operation is O(n^2).
    - This is not linear!
    - ENGROSS (print) the runtime is roughly proportionate.
    - This is proportionate to n-squared.

So as N grows, the runtime grows even larger, grows and times and larger roughly.

*/

// QUIZ --------------------------------------------


// Determine the time complexity for the following function :

function logUpTo(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}

// O(n)

function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}

// O(1)

function logAtLeast10(n) {
    for (var i = 1; i <= Math.max(n, 10); i++) {
        console.log(i);
    }
}

// O(n)

function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}

// O(n)

function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}

// O(n^2)

// ----------------------------------------------------

// Create a function that sums all the items in the array

function sum(arr) {
    let total = 0;
    for(let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}


// Create a function that doubles the items in an array into a new array.

function double(arr) {
    newArr = [];
    for(let i = 0; i < arr.length, i++) {
        newArr.push( 2 * arr[i]);
    } 
    return newArr;
}
