// callback hell - occurs when multiple callbacks are nested inside eacj other, leads to create  a complex and hard to manae code .

console.log('start');

function Action (userName, cb){
    setTimeout(() => {
        cb(`Hello ${userName}`);
    },0)
}

function likethevideo (userName, cb){
    setTimeout(() => {
        cb(`Liked the video by ${userName}`);
    },1000)
}
function sharethevideo(userName,cb){
    setTimeout(() => {
        cb(`Shared the video by ${userName}`);
    })
}

const message  = Action("devesh coder", function (message){
    console.log(message);
})
likethevideo("like the video",(Action)=>{
console.log(Action);
})
sharethevideo("share the video", (Action)=>{
    console.log(Action);
})
console.log('end');
  
