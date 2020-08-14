Code tiếp ở thư mục Lesson 5
Nội dung cần học: `Promise async await`
```javascript
const dosomething = true
const promise = Promise((resolve, reject) =>{
  if(dosomething) {
    resolve('Trigger resolve')
  } else {
    reject('Trigger reject')
  }
  return;
})
promise
  .then(data =>{
    console.log('This is data passed through resolve: ' + data)
  })
  .catch(err=>{
    console.log('This is err passed through reject: ' + err)
  })
```