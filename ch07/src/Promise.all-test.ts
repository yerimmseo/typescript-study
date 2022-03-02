const getAllResolvedResult = <T>(promise: Promise<T>[]) => Promise.all(promise)

getAllResolvedResult<any>([Promise.resolve(true), Promise.resolve('hello')])
  .then(result => console.log(result))  // [true, 'hello']

getAllResolvedResult<any>([Promise.reject(new Error('error')), Promise.resolve(1)])
  .then(result => console.log(result))  // 
  .catch(error => console.log('error: ', error.message))  // error: error