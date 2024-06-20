Number.MAX_SAFE_INTEGER; // 9007199254740991
Number.isInteger();

isNaN(123 + "테스트"); //true
Number.isNaN(123 + "테스트"); //false

isNaN; // 느슨한 검사

Number.isNaN; // 엄격한 검사
