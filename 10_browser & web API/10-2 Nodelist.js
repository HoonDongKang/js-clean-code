const arr = document.querySelectorAll('li');

console.log(arr); // NodeList(3) [li, li, li]

// 정적 NodeList 예시
var staticNodeList = document.querySelectorAll('p');
console.log(staticNodeList.length); // 초기 <p> 요소의 개수

// 동적 NodeList 예시
var dynamicNodeList = document.getElementsByTagName('p');
console.log(dynamicNodeList.length); // 초기 <p> 요소의 개수

var nodeList = document.querySelectorAll('div');

// for 루프 사용
for (var i = 0; i < nodeList.length; i++) {
    console.log(nodeList[i]);
}

// for...of 루프 사용
for (var node of nodeList) {
    console.log(node);
}