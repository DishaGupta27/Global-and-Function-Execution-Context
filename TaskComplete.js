
function startTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task A completed");
        }, 1000);
    });
}

function processTask(taskAOutput) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Task B processed: ${taskAOutput}`);
        }, 1500);
    });
}

function finalizeTask(taskBOutput) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Final result: ${taskBOutput}`);
        }, 500);
    });
}

startTask()
    .then(resultA => {
        console.log(resultA);
        return processTask(resultA);
    })
    .then(resultB => {
        console.log(resultB);
        return finalizeTask(resultB);
    })
    .then(finalResult => {
        console.log(finalResult);
    })
    .catch(error => {
        console.error("Workflow error:", error);
    });
