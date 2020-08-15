const srt = 'JavaScript'
const strObj = new String('JavaScript')
const num = 200;
const numObj = new Number(200);

const arr = [1, 2, 3]
const func = function(){}


///typeof를 통해 자료형을 확인하면, 원시 자료형 값 중 문자형, 숫자형, 불린형, undefined는 예상한 그대로 출력. 
///하지만 내장 객체인 String, Number, Bollean, Function과 원시 자료형의 null일 때는 object 문자열을 반환
///typeof 는 특정 원시 자료형을 확인하거나, 원시 자료형과 객체형을 구분하기 위해 활용하는 것이 좋다. 
console.log(typeof str === 'String')
console.log(typeof strObj === 'Object')
console.log(typeof num === 'Number')
console.log(typeof numObj === 'Object')
console.log(typeof arr === 'Object')
console.log(typeof func === 'Object')  

/// 객체를 확인하고 싶다면 insranceof를 사용
/// 원시 타입에 대한 결과는 false를 반환하고, 내장 객체로 선언된 변수는 true를 반환
console.log(str instanceof String)
console.log(strObj instanceof String)
console.log(num instanceof Number)
console.log(numObj instanceof Number)

/// + ) 객체, 배열, 함수는 각각 object를 상속받는 내장 객체입니다.
console.log(arr instanceof Object)
console.log(func instanceof Object)