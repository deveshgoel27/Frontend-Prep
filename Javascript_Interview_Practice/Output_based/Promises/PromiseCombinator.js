// promise.all = > waits for all promises to resolve 
        // => if anyone fails m it rejecs immediately

// promise.race = > waits for the first promise to resolve or reject(only returns the first one either resolev or reject )

// promsie .allSettled = > waits for all promises to resolve or reject and always resolve never rejct.

// promises.any -> reeturns the first fullfilled promise 
console.log('start');

function Action(userName) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject(`Hello ${userName}`);
        }, 0);
    });
}

function likethevideo(userName) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(`Liked the video by ${userName}`);
        }, 1000);
    });
}

function sharethevideo(userName) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(`Shared the video by ${userName}`);
        }, 1000); // added delay for consistency
    });
}

Promise.any([
    Action("devesh coder"),
    likethevideo("like the video"),
    sharethevideo("share the video")
]).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.error(err);
}).finally(() => {
    console.log("All promises completed");
});