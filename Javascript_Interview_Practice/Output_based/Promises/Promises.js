// promises -> it is a way to handle asynchronous operations in JavaScript.

//  It represents a value that may be available now, or in the future, or never.

// A promise is in one of these states: pending, fulfilled, or rejected.

const myPromise = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        // genetrate random number

        const randomNum  = Math.floor(Math.random() * 10);
        // resolve the promise if the random number is even
        if(randomNum < 5) {
            resolve(`Success! The number ${randomNum} is less than 5.`);
        } else {
            reject(`Failed! The number ${randomNum} is greater than 5.`);
        }
    },1000);
})

 myPromise.then((message) => {
            console.log(message);
        })
        .catch((error) => {
            console.error(error);
        });


// why usw then catch when we are using resolve reject -> to handle the asynchronous operations , if the promise is resolved then the then block is executed and if the promise is rejected then the catch block is executed.