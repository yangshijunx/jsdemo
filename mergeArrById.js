function join(arr1, arr2) {
    let res = []
    if (arr1.length===0 || arr2.length === 0){
        return Object.assign(arr1,arr2)
    } else {
        let concatArr = arr1.concat(arr2)
        // concat默认具有先后顺序
      res = concatArr.reduce((pre, cur) => {
        let reIndex = pre.findIndex(item => item.id === cur.id)
        console.log("找不找到到index", reIndex)
        if (reIndex !== -1) {
          console.log("进入1", pre, Object.assign(pre[reIndex], cur))
          let newObj = Object.assign(pre[reIndex], cur)
          pre.splice(reIndex, 1)
          // pre.push(Object.assign(cur, pre[reIndex]))
          pre.push(newObj)
          return pre
        } else {
          // console.log("进入2", pre)
          pre.push(cur)
          return pre
            }
      }, [])
      // console.log("res", res)
      res.sort((pre, cur) => {
        return pre.id - cur.id
      })
        return res
    }
};

// function join(arr1, arr2) {
//     let res = []
//     if (arr1.length===0 || arr2.length === 0){
//         return Object.assign(arr1,arr2)
//     } else {
//         let concatArr = arr1.concat(arr2)
//         // concat默认具有先后顺序,不能适应与arr1 或者 arr2本身有重复id的情况
//       res = concatArr.reduce((pre, cur) => {
//           let curId = cur.id
//         if (pre[curId]) {
//             pre[curId] = Object.assign(pre[curId], cur)
//             return pre
//         } else {
//             pre[cur.id] = cur
//             return pre
//           }
//       }, {})
//       res = Object.values(res)
//       res.sort((pre,cur) => {
//           return pre.id - cur.id
//       })
//       return res
//     }
//   };

  // console.log("测试案例1", join([{ "id": 1, "x": 1 }, { "id": 2, "x": 9 }, { "id": 3, "x": 14 }], [{ "id": 3, "x": 5 }]))
  // console.log("测试案例2", join([{"id": 1,"x": 2,"y": 3},{"id": 2,"x": 3,"y": 6}], [{"id": 2,"x": 10,"y": 20},{"id": 3,"x": 0,"y": 0}]))
  console.log("测试案例3", join([{"id":1,"r":67,"h":83,"d":2},{"id":2,"f":84,"o":46,"l":7}], [{"id":1,"c":70,"w":1}]))