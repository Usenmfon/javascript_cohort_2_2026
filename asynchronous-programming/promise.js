console.log('A');

let promise = new Promise((resolve, reject) => {
    let success = true;

    if(success){
        resolve('The execution was successful');
    }else{
        reject('Sorry, this failed')
    }
})


promise.then((message) =>{
    console.log(message)
}).catch((error) => {
    console.log(error)
})

console.log('B')