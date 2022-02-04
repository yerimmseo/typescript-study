#### [02-3 tsconfig.json파일 살펴보기]

compilerOptions 항목은 tsc 명령 형식에서 옵션을 나타내고, include 항목은 대상 파일 목록을 나타냄

include 항목에서 src/⁎⁎/⁎은 src 디렉터리는 물론 src의 하위 디렉터리에 있는 모든 파일을 컴파일 대상으로 포함한다는 의미

tsconfing.json 파일은 '키: 키값' 형태로 작성

- **module 키**

  - 웹 브라우저에서 동작 : amd
  - node.js 에서 동작 : commonjs

- **moduleResolution 키**

  module 키의 값이 commonjs이면 node.js에서 동작하는 것을 의미하므로, moduleResolution 키값은 항상 *node*로 설정. 반면에 module 키값이 amd이면 moduleResolution 키값은 *classic*으로 설정

- **target 키**

  target 키에는 트랜스파일할 대상 자바스크립트의 버전을 설정

- **baseUrl과 outDir 키**

  트랜스파일된 ES5 자바스크립트파일을 저장하는 디렉터리를 설정. tsc는 tsconfig.json 파일이 있는 디렉터리에서 실행됨. outDir 키는 baseUrl 설정값을 기준으로 했을 때 하위 디렉터리의 이름

- **paths 키**

  소스 파일의 import 문에서 from 부분을 해석할 때 찾아야 하는 디렉터리를 설정

  import 문이 찾아야 하는 소스가 외부 패키지이면 node_modules 디렉터리에서 찾아야 하므로 키값에 node_modules/*도 포함

- **esModuleInterop 키**

  웹 브라우저에서 동작한다는 가정으로 만든 소스의 혼란을 방지하기 위함. chance 패키지가 동작하려면 esModuleInterop 키값 반드시 true로 설정

- **sourceMap 키**

  true이면 트랜스파일 디렉터리에는 .js 파일 이외에도 .js.map 파일이 만들어짐. 소스맵 파일은 변환된 자바스크립트 코드가 타입스크립트 코드의 어디에 해당하는지 알려줌. 주로 디버깅할 때 사용

- **downlevelIteration 키**

  생성기 구문이 정상적으로 동작하려면 downlevelIteration 키값을 반드시 true로 설정

- **nolmplicitAny 키**

  false로 지정시 타입을 지정하지 않더라도 문제로 인식하지 않음
