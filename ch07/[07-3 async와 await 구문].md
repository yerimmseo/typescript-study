#### [07-3 async와 await 구문]

자바스크립트에서 async/await 구문을 사용한 예

```javascript
const test = async () => {
    const value = await Promise.resolve(1)
    console.log(value)	// 1
}
test()
```

- **await 키워드**

  await 키워드는 피연산자의 값을 반환해 줌. 그런데 만일 피연산자가 Promise 객체이면 then 메서드를 호출해 얻은 값을 반환해 줌

  ```
  let value = await Promise 객체 혹은 값
  ```

- **async 함수 수정자**

  await 키워드는 항상 async라는 이름의 함수 수정자가 있는 함수 몸통에서만 사용할 수 있음

  ```javascript
  const test1 = async() => {	// 화살표 함수 구문
  	await Promise 객체 혹은 값
  }
  async function test2() {	// function 키워드 함수 구문
      await Promise 객체 혹은 값
  }
  ```

- **async 함수의 두 가지 성질**
  - 일반 함수처럼 사용할 수 있다
  - Promise 객체로 사용할 수 있다

- **async 함수가 반환하는 값의 의미**

  async 함수는 값을 반환할 수 있음. 이때 반환값은 Promise 형태로 반환되므로 다음처럼 then 메서드를 호출해 async 함수의 반환값을 얻어야 함

  ```typescript
  const asyncReturn = async() => {
    return [1, 2, 3]
  }
  
  asyncReturn()
    .then(value => console.log(value))
  ```

- **async 함수의 예외 처리**

  async 함수에서 예외가 발생하면 프로그램이 비정상적으로 종료됨

  ```typescript
  const asyncException = async () => {
  	throw new Error('error')
  }
  asyncException()	// 예외 발생
  ```

  예외가 발생해서 프로그램이 비정상으로 종료하는 상황을 막으려면, asyncException을 단순히 asyncException() 형태의 함수 호출 방식이 아닌 asyncException()이 반환하는 프로미스 객체의 catch 메서드를 호출하는 형태로 코드를 작성해야 함

  ```typescript
  asyncException()
    .catch(err => console.log('error:', err.message)) // error: error
  ```

  만일 await 구문에서 Promise.reject값이 발생하면 앞에서와 마찬가지로 프로그램이 비정상으로 종료함

  ```typescript
  const awaitReject = async () => {
  	await Promise.reject(new Error('error'))
  }
  awaitReject()	// 비정상 종료
  ```

  ```typescript
  awaitReject()
    .catch(err => console.log('error:', err.message)) // error: error
  ```

- **async 함수와 Promise.all**

  ```typescript
  import { readFilePromise } from "./utils/readFilePromise"
  
  const readFilesAll = async (filenames: string[]) => {
    return await Promise.all(
      filenames.map(filename => readFilePromise(filename))
    )
  }
  
  readFilesAll(['./package.json', './tsconfig.json'])
    .then(([packageJson, tsconfigJson]: string[]) => {
      console.log('<package.json>: ', packageJson)
      console.log('<tsconfig.json>: ', tsconfigJson)
    })
    .catch(err => console.log('error:', err.message))
  ```

  03행의 readFileAll 함수는 매개변수 filenames에 담긴 string[] 타입 배열에 map 메서드를 적용해 Promise[] 타입 객체로 전환. 그 다음 Promise.all 메서드를 사용해 단일 Promise 객체로 만듬. 이 결과로 만들어진 객체에 await 구문을 적용해 해소된 결괏값을 반환

  09~15행 readFilesAll 함수를 Promise 객체로 취급해 then과 catch 메서드를 then-체인 형태로 연결. 두 파일과 연결함과 동시에 예외가 발생하더라도 프로그램이 비정상으로 종료하지 않도록 함