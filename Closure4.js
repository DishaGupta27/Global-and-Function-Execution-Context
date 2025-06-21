// first
function createFunctionList() {
    let functions = [];

    for (let i = 0; i < 5; i++) {
        functions.push(function () {
            console.log("Index:", i);
        });
    }

    return functions;
}

// second
function createFunctionList() {
    let functions = [];

    for (var i = 0; i < 5; i++) {
        (function (index) {
            functions.push(function () {
                console.log("Index:", index);
            });
        })(i);
    }

    return functions;
}
