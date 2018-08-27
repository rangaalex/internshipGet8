console.log("XMLHttpRequest.js connected");
var human = { a: "a", b: "b", c: { d: "d", e: { f: "f" } } };
console.log(tree(human));
// подключение к серверу для получения данных
/* var xhr = new XMLHttpRequest();
xhr.open('GET', 'xxx.yyy/entity', false);
xhr.send();
if (xhr.status != 200) {
    alert(xhr.status + ': ' + xhr.statusText);
} else {
    console.log(tree(human));
} */