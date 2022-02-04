"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = __importDefault(require("./person/Person"));
var chance_1 = __importDefault(require("chance")); // chance 패키지는 그럴듯한 가짜 데이터(fake data)를 만들어 주는데 사용
var R = __importStar(require("ramda")); // ramda는 함수형 유틸리티 패키지
// const testMakePerson = (): void => {
//   let jane: IPerson = makePerson('Jane')
//   let jack: IPerson = makePerson('Jack')
//   console.log(jane, jack)
// }
// testMakePerson()
var chance = new chance_1.default();
var persons = R.range(0, 2)
    .map(function (n) { return new Person_1.default(chance.name(), chance.age()); });
console.log(persons);
// Chance 패키지는 Chance 클래스 하나만 export default 형태로 제공
// change와 ramda는 외부 패키지이므로 node_modules 디렉터리에 있음
//# sourceMappingURL=index.js.map