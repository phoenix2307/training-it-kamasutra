/*
Jenny has written a function that returns a greeting for a user.
However, she's in love with Johnny, and would like to greet him slightly different.
She added a special case to her function, but she made a mistake.

Can you help her?
*/

//BP
function greet(name){
    return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
  }

//MS
function greet(name){    
    if (name === "Johnny") {
        return "Hello, my love!";
    } else {
        return "Hello, " + name + "!";
    }      
}