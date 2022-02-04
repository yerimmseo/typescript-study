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
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePerson = void 0;
// export 키워드
// interface, class, type, let, const 키워드 앞에 붙일 수 있음
// import * as 심벌 from '파일 상대 경로'
var U = __importStar(require("../utils/makeRandomNumber"));
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
exports.default = Person;
var makePerson = function (name, age) {
    if (age === void 0) { age = U.makeRandomNumber(); }
    return ({ name: name, age: age });
};
exports.makePerson = makePerson;
// 난수 발생 기능을 makeRandomNumber.ts파일로 분리, Person.ts 파일에서 U라는 심벌로 접근할 수 있도록 import * as 구문 지정
//# sourceMappingURL=Person.js.map