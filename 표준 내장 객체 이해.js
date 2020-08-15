/// 표준 내장 객체에 new를 사용해 생성자를 만들고 변수를 선언.
const str = new String('자바스크립트') 

/// 내장 객체와 원시 자료형의 차이점
const str1 = '자바스크립트 원시형'
const str2 = new String('자바스크립트 내장 함수 객체')

console.log(typeof str1)
console.log(typeof str2)  /// str1의 자료형은 string, str2의 자료형은 object 이다.

/// + 
console.log(str2 === new String('자바스크립트 내장 함수 객체'))  /// false임. String 객체로 대입된 str2는 갑이 아닌 주소값을 참조하기 때문에 일치라지 않음.

console.log(str1.valueOf())
console.log(str2.valueOf()) /// valueOf 메소드는 String 내장 객체에 정의된 메소드(문자열 반환)이지만 원시자료형 str1도 사용할 수 있다.
                            /// 왜냐하면 자바스크립트에서는 원시 자료형이 각 성격에 맞게 표준 내장 객체로 래핑되기 때문이다.

