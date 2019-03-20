function deepclone(obj) {
    var obj1 = {};
    for(var key in obj) {
        if(typeof key==='object'&&obj[key]!==null) {
            obj1[key] = deepclone(obj[key])
        }
        else {
            obj1[key] = obj[key]
        }
    }
    return obj1;
}