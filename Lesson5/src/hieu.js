// 'use strict';

const b = 2;
const newPromise = async (a)=> new Promise((resolve, reject) => {
  if (a === 1) resolve("a bang 1")
  else reject("a khong bang 1")
})

// newPromise
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   })
