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