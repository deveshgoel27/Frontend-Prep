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

 Action("devesh coder")
 .then((res) => {
    console.log(res);
    return likethevideo("like the video");
 })
 .then((res) => {
    console.log(res);
    return sharethevideo("share the video");
 })
 .then((res) => {           
    console.log(res)

 })
console.log('end');
  