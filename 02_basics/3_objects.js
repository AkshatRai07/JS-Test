// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// cannot access symbols using JsUser.mySym
// cannot access key JsUser.full name
// in obj declaration, mySym is text, but [mySym] is symbol


JsUser.email = "hitesh@chatgpt.com"

// Object.freeze(JsUser)
// Error shown for new key value declaration, not for changing values
// Will ignore the change of values

JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

JsUser.greeting();
console.log(JsUser.greetingTwo());
// undefined output due to log inside log
console.log(JsUser);
