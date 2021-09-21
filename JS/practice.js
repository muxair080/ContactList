console.log("Practice program");

// let input = document.getElementById('searching');
// // let array = [];
// // let btn = document.getElementById('Add');
// // btn.addEventListener('click' , ()=>{
// //     array.push(input.value);
// //     console.log(array);
// //     localStorage.setItem('Name' , JSON.stringify(array));
// //     input.value = "";
// // })

// let getli = document.getElementById('list');
// let lis = getli.querySelector('li');
// console.log(lis);
// let btn  = document.getElementsByTagName('button');
// console.log(btn);
// for(let key in btn) {
//     btn[key].addEventListener('click' , ()=>{
//         console.log(`Button No ${key} is clicked`);
//     });
// }
// let abc  = document.getElementById('a');
// let cd = document.getElementsByClassName('a')
// console.log(cd[1]);
// cd[1].addEventListener('click' , ()=>{
//     cd[0].innerHTML.remove();
// })

let aray = [1,3,4,5,6];

function greater(value) {
    return value == 3;
}

console.log(aray.find(greater));