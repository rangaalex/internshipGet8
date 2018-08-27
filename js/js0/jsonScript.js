console.log("json.js connected");

function ToStr(obj) {
    return JSON.stringify(obj);
}
function Parse(str) {
    return JSON.parse(str);
}

function Load(key) {
    return Parse(sessionStorage.getItem(key));

}

function Save(key, obj) {
    sessionStorage.setItem(key, ToStr(obj));
}