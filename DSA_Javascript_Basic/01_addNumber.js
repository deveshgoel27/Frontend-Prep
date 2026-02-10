// function addNumber(a,b,c){
//     return a+b+c;
// }

// // console.log(addNumber(907,827,840));
// console.log(addNumber(358,587,900)); 

// function addNumber(num){
//     let sum  = 0;
//   for(let i = 0; i < num; i++) {
//       sum+= i;
//   }
//   return sum;
// }

// console.log(addNumber(10));
var fullname = "piyush garg";
var obj  ={
  fullname:"hacked full name",

  prop:{
    fullname: "Inside prop",
    getFullname: function(){
      return this.fullname;
    },
  },

  getFullname: function(){
    return this.fullname;
  },

  getFullnameV2: ()=> this.fullname,

  getFullnameV3: (function(){
    return this.fullname;
  })(),
};

console.log(obj.getFullname());
console.log(obj.prop.getFullname());
console.log(obj.getFullnameV2());
console.log(obj.getFullnameV3);
