// 1.

const so = 100;

const uoc = [];
uoc.push(1);

for (let i = 2; i < 28; i++) {
  if (so % i === 0) {
    uoc.push(i);
  }
}

var tong = 0;
for (let i = 0; i < uoc.length; i++) {
  tong = tong + uoc[i];
}

// uoc.map
// uoc.filter
// uoc.reduce
// uoc.every

// const total = uoc.reduce((prev, curr, index) => {
//   console.log('index', index);
//   console.log('prev', prev);
//   console.log('curr', curr);
//   console.log('---------------');
//   return prev + curr;
// })

// console.log(total)
// 1 2 4 7 14
// index 1
// prev 1
// curr 2
// return prev + curr = 3;

// index 2
// prev 3 // return value cua ham truoc 
// curr 4
// return prev + curr = 7;

// index 3
// prev 7
// curr 7

// console.log(uoc)
// console.log(tong)

const fields = ['id', 'username', 'password', 'birthday', 'order']
// SELECT id, username, password, birthday
const addBackQuoteFields = fields.map((value) => `\`${value}\``)
const removePasswordFields = addBackQuoteFields.filter(value => value.indexOf('password')===-1)
const query = 'SELECT ' + removePasswordFields.reduce((pre, cur) => pre + ',' + cur)

const query2 = fields
  .map(e => `\`${e}\``) // every
  .filter(e => e.indexOf('password') === -1)
  .reduce((p, c) => `${p}, ${c}`)

console.log(query2);

const loibaihat = 'kia con buom vang vang vang'

const tachtu = loibaihat.split(' ')
// console.log(tachtu);

tachtu.every((e,i) => {
  // setTimeout(() => {
  //   console.log(e)
  // // }, i * 1000);
  // }, i * 0);
  // if(i==4) return false
  // return true
})

// tachtu.findindex() // findindex is not a function

// const fs = require('fss') // File System 'MODULE_NOT_FOUND''MODULE_NOT_FOUND'
const fs = require('fs')

// fs.readFile('./index.txt', (err, data) => {
//   // if (err) {
//   //   console.log(err);
//   // } else {
//   //   console.log(data)
//   // }
//   // console.log(err ? err : data.toString());
//   if (!err) {
//     let d = data.toString()
//     console.log(d);    
//   }
//   return data
// })

// fs.readFileSync('./index.txt')
//   .then(data => {

//   })
//   .catch(err => {
    
//   })

// try {
//   // const data = await fs.readFileSync('./index.txt');  
// } catch (err) {
  
// }

 
// fs.writeFile('./output.txt', 'abcxyz')




const obj = {
  id: 123,
  name: "thien"
}

const k = Object.keys(obj)
const v = Object.values(obj)

console.log(k);
console.log(v);

console.log(obj.id)
console.log(obj['name'])
