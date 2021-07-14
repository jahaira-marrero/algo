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
    for(let i = 0; i < arr.length; i++) {
        newArr.push( 2 * arr[i]);
    } 
    return newArr;
}

// --------------------------------------------------------------------------------------
// Space Complexity
/*
How much additional memoery do we need to allocate in order to run the code in our algorithm?
As "n" grows, as we're approaching infinity, the size of the input itself which is "n" is going to increase.

What about inputs?
- Sometimes you'll hear the term auxiliary space complexity to refer to space required by the algorithm, not including space taken up by the inputs.
- We want to focus on te repercussions that has inside the algorithm, so technically this be focused on auxiliary space complexity (what happens inside the algo).

RULES OF THUMB
- Most primitive (booleans, numbers, undefined, null) are constant space. It doesn't matter what the size of the input is, it takes up the same amount  of space.
- Strings require O(n) space (where "n" is the string length). So if "n" is the length of the string and we have an input of 50 characters, then the string takes up 50x more space than a single character.
- Reference types are generally O(n), where "n" is the length (for arrays) or the number of keys (for objects). So if the length if an array is 4, it takes up twice as much space one that has the length of 2.

*/

// Create a function that sums all the terms in the array.

function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

// let total = 0 : represents one number
// let i = 0 (in the loop): represents another number
// The space for the "variable" is already there. It doesn't matter the size of the array is of "n" (in this case it's 0). It doesn't have an impact on the space that's taken up because we only have these 2 variables and they exist no matter what.
    // We're not adding new variables based on the length, we're adding TO the variable.
    // This means we have constant space.
// O(1) space -> no matter the size

//  Create a function that doubles the items in an array into a new array.

function double(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    return newArr
}

/*
The space taken up is directly proportionate to "n" because it creates a new array the same length as arr ("n").

O(n) 
*reduced from O(n + 2)
    1. let newArr = []
    2. let i = 0
*/

// QUIZ #3 --------------------------------------------------------------------------

// Determine the space complexity for the following function  

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

function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}

// O(1)

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

// O(n)

// ----------------------------------------------------------------------------------
/* LOGARTHIMS
The inverse of exponentiation. Just like division ans multiplication are a pair, logarithms and exponens exponentiation are a pair.
    Ex: log base 2 of 8 = 3
        log2(8) = 3
    What this is asking is: 2 to what power is equal to 8?
        2 * 2 * 2 = 8
        There are three 2s, so the answer is 3.

    Formula:
    log2(value) = exponent -->(inversed) 2^exponent = value

    There are others bases that are used but these are most common:
        log2
        log3
        log10
        loge

We are going to omit the #2 in log for a few reasons:
    - it's annoying to keep writing it
    - if we're comparing the graph of a:
        constant
        quadratic time
        log time
        it won't matter if it's log base 2, 3, etc. We care about the general trend

It's not a mathematical operation on it's own. You need to have a base in order to have the log of a number.
    log === log2

[Rule of Thumb]
    The logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to one.

    Example 1:

    8/2 = 2
    4/2 = 2
    2/2 = 1

    1 is less than or equal to 1 so our answer is log(8)=3

    Example 2:

    25/2 = 12.5
    12.5/2 = 6.25
    6.25/2 = 3.125 
    3.125/2 = 1.5625
    1.5625/2 = 0.78125

    0.78125 is less than or equal to 1 so our answer is log(25) ≈4.64

Whis is this important?
    - Certain searching algorithms have logarithmic time complexity.
    - Efficient sorting algoriths involve logarithms.
    - Recursion sometimes involves logarithmic space complexity.
*/

