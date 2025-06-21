function outerFunction() {
    let message = "Hello from the closure!";

    function innerFunction() {
        console.log(message);
    }

    return innerFunction;
}
const closureFunction = outerFunction();
closureFunction(); 
