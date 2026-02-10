// callback promsies -> used to handle asynchronous operations
console.log('start');

function Action (userName, cb){
    setTimeout(() => {
        cb(`Hello ${userName}`);
    },0)
}

const message  = Action("devesh coder", function (message){
    console.log(message);
})
console.log('end');