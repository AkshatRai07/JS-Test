const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){
    console.log(val);
} )

// Callback function inside forEach
// Name of function not required when declaring inside forEach
// Can use arrow funtion

console.log()

coding.forEach( (item) => {
    console.log(item);
} )

console.log()

function printMe(item){
    console.log(item);
}

coding.forEach(printMe) // give reference not function call

console.log()

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )

console.log()

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )
