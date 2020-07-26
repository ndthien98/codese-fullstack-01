// var number1 = 1;
// let number2 = 1;
// var i
// const number3 = 3; // constant 

// console.log(number1); // undefined, null, ? 
// console.log(number2);
// console.log(number3);

// let chuoi = " so thu nhat la " + number1
// let chuoi2 = ' so thu hai la ' + number2

// if (number3 % 2 !== 1) {
//   console.log('number3 la so chan');
// } else {
//   console.log('number3 la so le');
// }

// console.log(chuoi);
// console.log(chuoi2);

// const chuoi3 = ` so thu 3 la ${(number3 % 2 === 1) ? ' so le ' : ' so chan '}` // template string ``
// console.log(chuoi3);

// const a = `so thu ba: ${number3}`
// console.log(a);

// // ESLint Error Len

// for (let i = 0; i < 10; i++) {
//   // setTimeout(() => {
//   //   console.log(i);
//   // }, i * 1000);
// }


// // function 

// function tong(a, b) {
//   return a + b
// }

// console.log(tong(2, 3));

// const tong2 = function (a, b) {
//   return a + b
// }

// console.log(tong2(2, 3));

// let sothunhat = {
//   id: 10,
//   name: 'thien'
// }
// let sothuhai = sothunhat
// let sothuba = { ...sothunhat }

// console.log(sothuhai);
// console.log(sothuba);

// sothunhat.id = 100
// sothunhat.name = 'thang'

// console.log(sothuhai);
// console.log(sothuba);



// const tong4 = (a, b) => {
//   return a + b
// }

// const tong4 = (a, b) => a + b

const taorahamtinhtong = (coso) => {
  return
}

let taorahamtinhtong2 = (coso) => (coso2) => coso + coso2

const hamtrave = taorahamtinhtong2(3)



const hamxx = (thamso1, thamso2) => { // callback
  console.log(thamso2(thamso1));
}

hamxx(10, hamtrave)
