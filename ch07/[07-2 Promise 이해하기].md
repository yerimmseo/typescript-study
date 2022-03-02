#### [07-2 Promise 이해하기]

Promise 라는 이름의 클래스. 사용하기 위해서는 new 연산자를 적용해 프로미스 객체를 생성

```typescript
const promise = new Promise(콜백 함수)
```

여기서 Promise는 resolve와 reject라는 두 개의 매개변수를 가짐

```typescript
(resolve, reject) => {}
```

타입스크립트에서 Promise는 제네릭 클래스 형태로 사용

```typescript
const numPromise: Promise<number> = new Promise<number>(콜백 함수)
const strPromise: Promise<string> = new Promise<string>(콜백 함수)
const arrayPromise: Promise<number[]> = new Promise<number[]>(콜백 함수)
```

타입스크립트 Promise의 콜백 함수는 다음처럼 resolve와 reject  함수를 매개변수로 받는 형태

```typescript
new Promise<T>((
    resolve: (sucessValue: T) => void,
    reject: (any) => void
) => {
    // 코드 구현
})
```

- **resolve와 reject 함수**

  ```typescript
  import { readFilePromise } from "./utils/readFilePromise"
  
  readFilePromise('../package.json')
    .then((content: string) => {
      console.log(content)  // packag.json 파일 읽은 내용
      return readFilePromise('../tsconfig.json')
    })
    .then((content: string) => {
      console.log(content)  // tsconfig.json 파일 읽은 내용
      /** catch쪽 콜백 함수에 'EISDIR: illegal operation on a directory, read'라는 오류 메세지 전달 */
      return readFilePromise('..')
    })
    .catch((err: Error) => console.log('error:', err.message))
    .finally(() => console.log('프로그램 종료'))
  ```

  readPromise에서 resolve 함수를 호출한 값은 then 메서드의 콜백 함수 쪽에 전달되고, reject 함수를 호출한 값은 catch 메서드의 콜백 함수 쪽에 전달 됨

- **Promise.resolve 메서드**

  Promise 클래스는 resolve라는 클래스 메서드를 제공. Promise.resolve(<u>값</u>) 형태로 호출하면 항상 '값'은 then 메서드에서 얻을 수 있음

- **Promise.reject 메서드**

  Promise.reject(<u>Error 타입 객체</u>)를 호출하면 이 'Error 타입 객체'는 항상 catch 메서드의 콜백 함수에서 얻을 수 있음

  ```typescript
  Promise.reject(new Error('에러 발생'))
  	.catch((err: Error) => console.log('error:', err.message)) // error: 에러 발생
  ```

- **then-체인**

  Promise의 then 인스턴스 메서드를 호출할 때 사용한 콜백 함수는 값을 반환할 수 있음. 이 then에서 반환된 값은 또 다른 then 메서드를 호출해 값을 수신할 수 있음. then 메서드는 반환된 값이 Promise 타입이면 이를 해소(resolve)한 값을 반환. 만약 거절(reject)당한 값일 때는 catch 메서드에서 거절당한 값을 얻을 수 있음

  Promise 객체에 then 메서드를 여러 번 호출하는 코드 형태를 'then-체인'이라고 함

- **Promise.all 메서드**

  Array 클래스는 every라는 이름의 인스턴스 메서드 제공. 배열의 모든 아이템이 어떤 조건을 만족하면 true를 반환

  ```typescript
  const isAllTrue = (values: boolean[]) => values.every((value) => value == true)
  
  console.log(
    isAllTrue([true, true, true]),  // true
    isAllTrue([false, true, true]), // false
  )
  ```

  Promise 클래스는 앞 every처럼 동작하는 all이라는 이름의 클래스 메서드를 제공

  ```
  all(프로미스 객체 배열: Promise[]): Promise<해소된 값들의 배열(혹은 any)>
  ```

  Promise.all 메서드는 Promise 객체들을 배열 형태로 받아 모든 객체를 대상으로 해소(resolve)된 값들의 배열로 만들어 줌. Promise.all 메서드는 이런 내용으로 구성된 또다른 Promise 객체를 반환하므로 해소된 값들의 배열은 then 메서드를 호출해서 얻어야 함
  
  만약 배열에 담긴 Promise 객체 중 거절(reject) 객체가 발생하면 더 기다리지 않고 해당 거절 값(reject value)을 담은 value.reject 객체를 반환. 이 거절 값은 catch 메서드를 통해 얻음

- **Promise.race 메서드**

  Array 클래스는 배열의 내용 중 하나라도 조건을 만족하면 true를 반환하는 some이라는 인스턴스 제공

  Promise.race 클래스 메서드는 배열에 담긴 프로미스 객체 중 하나라도 해소(resolve)되면 이 값을 담은 Promise.resolve 객체를 반환함. 만일 거절값이 가장 먼저 발생하면 Promise.reject 객체를 반환

  ```
  race(프로미스 객체 배열: Promise[]): Promise<가장 먼저 해소된 객체의 값 타임(혹은 Error)>
  ```