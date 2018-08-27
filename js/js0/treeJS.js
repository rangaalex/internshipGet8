console.log("treeJS.js connected");

  var i = 1;  //id первого класса

function tree(obj, parent) {
      var req = [];
      for (var key in obj) {//переор по прямым потомкам объекта
        var tmp = {
            id: i,
            parent: parent !== undefined ? parent : 0,//задаёт id родителя(если его нет, то 0, т.к. сам obj тоже счтается, но вы можете и -1 поставить)
            key: key,
        },
        c = obj[key].constructor === Object;//так более быстро и надёжно проверять, чем typeof
      i++;
      if (!c)
        tmp.value = obj[key];//если в значении- не объект, то мы просто добавляем в вывод value
      req.push(tmp);
      if (c)//если объект, то начинается рекурсия, первый аргумент- объект из value, второе- id его родителя(текущего объекта)
        tree(obj[key], tmp.id).forEach(function(el) {
          req.push(el);
        });
    }
    return req;
  }
//console.log(tree(obj));