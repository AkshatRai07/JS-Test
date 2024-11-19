// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // Need to add a semicolon, JS doesn't know when to stop, or something similar

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
