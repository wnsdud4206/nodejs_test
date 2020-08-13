var name = "joka";
// \만 삽입하면 코드상에서만 줄바꿈이 되고 \n\, \n을 사용하면 출력 내용에 줄바꿈이 된다.
var letter = "Lorem " + name + "\n\
\nipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis " + name + " aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. " + name;
console.log(letter);

// ``안에(esc 버튼 아래, 그레이브 엑센트) ${변수}를 삽입하면 변수 내용 적용 : tamplate literal(template string)
var letter = `Lorem ${name}

ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis ${name} aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ${name}`;
console.log(letter);

var a = 1;
