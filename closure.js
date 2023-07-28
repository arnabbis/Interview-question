// function x(callback){
//     var a = 10;
//     callback(a);
// }
// x(function y(a){
//     console.log(a);
// })

// function x(){
//     let a = 10;
//     function y(){
//         console.log(a);
//     }
//     a = 100;
//     return y;
// }
// var z = x();
// console.log(z);
// z()

// 

// var a = function(){
//     console.log('I am function');
// }

// a = 10;

// console.log(a);
// a()

// var a = function arnab(){
//     console.log('I am function');
// }
// console.log(a);
// a()
// arnab()

// function arnab(){
//     return function a(){
//         console.log('I am function');
//     }
// }

//  const b = arnab()
//     console.log(b());
//     b()

// function x(param){
//   console.log(param);  
// }

// x(function v(){
//     console.log('I am callback');
// })



function x(){
    var a = 10;
    setTimeout(function(){
        console.log(a);
    },2000)
    console.log('I am first');
}
x()

// for(var i=0;i<=5;i++){
//     setTimeout(function(){
//         console.log(i);
//     },2000)
// }

// for(var i=0;i<=5;i++){
//     function close(x){
//         setTimeout(function(){
//             console.log(x);
//         },2000)
//     }
//     close(i)
// }


module.export  = x;