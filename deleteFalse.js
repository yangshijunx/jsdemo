function compactObject(obj) {
    if(obj instanceof Array){
      return obj.filter(item => Boolean(item)).map(item => compactObject(item))
  }
  if(obj instanceof Object) {
      let res = {}
      for(let key in obj){
          if(obj.hasOwnProperty(key) && Boolean(obj[key])){
            res[key] = compactObject(obj[key])
            console.log("obj变化", obj)
          }
      }
    console.log("res", res, obj)
      return res
  }
    console.log("obj1", obj)
  return obj
  };
  // console.log("测试案例1", compactObject([null, 0, false, 1]))
  console.log("测试案例2", compactObject({"a": null, "b": 0}))