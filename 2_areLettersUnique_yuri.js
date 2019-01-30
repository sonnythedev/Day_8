/*
    Write a function that accepts a String as its only parameter, and returns true if the string has only unique letters, taking letter case into account.

    solution("No duplicates") == true
    solution("abcdefghijklmnopqrstuvwxyz") == true
    solution("AaBbCc") == true
    solution("Hello, world") == false
*/

// loop
function solution1(str) {
    let unique = "";

    for (let i in str) {
        if (unique.indexOf(str[i]) == -1) unique += str[i];
    }  

    return str == unique;
}

function solution1(str) {
    for (let i = 0; i < str.length; i++) { 
        for (let j = i + 1; j < str.length; j++) { 
            if (str[i] == str[j]) { 
                return false; 
            } 
        } 
    } 
    return true;
    
}

console.assert(solution1("No duplicates") == true, "Error: solution1() failed!");
console.assert(solution1("abcdefghijklmnopqrstuvwxyz") == true, "Error: solution1() failed!");
console.assert(solution1("AaBbCc") == true, "Error: solution1() failed!");
console.assert(solution1("Hello, world") == false, "Error: solution1() failed!");


// reduce
function solution2(str) {
    return str == str.split("").reduce(
        function(acc, e, i) {
            if (acc.indexOf(e) == -1) acc += e;
            return acc
        }, ""
    )
}

console.assert(solution2("No duplicates") == true, "Error: solution2() failed!");
console.assert(solution2("abcdefghijklmnopqrstuvwxyz") == true, "Error: solution2() failed!");
console.assert(solution2("AaBbCc") == true, "Error: solution2() failed!");
console.assert(solution2("Hello, world") == false, "Error: solution2() failed!");

// reduce short(one line)
function solution2short(str) {
    return str == str.split("").reduce((acc, e) => acc += acc.indexOf(e) == -1 ? e : "", "");
}

console.assert(solution2short("No duplicates") == true, "Error: solution2short() failed!");
console.assert(solution2short("abcdefghijklmnopqrstuvwxyz") == true, "Error: solution2short() failed!");
console.assert(solution2short("AaBbCc") == true, "Error: solution2short() failed!");
console.assert(solution2short("Hello, world") == false, "Error: solution2short() failed!");

// no if, loop, reduce
function solution3(str) {
    return str == [... new Set(str.split(""))].join("");
}

console.assert(solution3("No duplicates") == true, "Error: solution3() failed!");
console.assert(solution3("abcdefghijklmnopqrstuvwxyz") == true, "Error: solution3() failed!");
console.assert(solution3("AaBbCc") == true, "Error: solution3() failed!");
console.assert(solution3("Hello, world") == false, "Error: solution3() failed!");

/*
************************* PERFORMANCE TESTS *************************
*/

// import huge string for performance tests

// test solution1()

// test solution2()

// test solution2short()

// test solution3()