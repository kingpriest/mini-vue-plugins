// import axios from 'axios'

// export const requestCommon = (url, params, method = 'post') => {
//     return axios[method](url, params, {
//         headers: {
//             'token': '03142410d7285f00e4363e005783c83a'
//         }
//     }).then(res => res.data)
// }

// // 请求成功状态
// export const ERR_OK = 200

// // 柯里化查询列表请求
// export const requestCurry = (pageNum, listNum, funcSuccess, funcError, deep, type) => {
//     var requsetObj
//     if (type) {
//         requsetObj = {
//             pagenum: pageNum,
//             listNum: listNum,
//             type: type
//         }
//     } else {
//         requsetObj = {
//             pagenum: pageNum,
//             listNum: listNum
//         }
//     }
//     if (!deep) {
//         return (url, method) => {
//             requestCommon(url, requsetObj, method).then(funcSuccess).catch(funcError)
//         }
//     } else {
//         return (url, paraObj, method) => {
//             let requsetRes = Object.assign({}, requsetObj, paraObj)
//             requestCommon(url, requsetRes, method).then(funcSuccess).catch(funcError)
//         }
//     }
// }

// // 柯里化获取请求
// export const curryGetRequest = (funcSuccess, funcError) => {
//     return (url, requestObj, method) => {
//         requestCommon(url, requestObj, method).then(funcSuccess).catch(funcError)
//     }
// }

// 拍平一层
export const simpleNormalizeArray = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            return Array.prototype.concat.apply([], array)
        }
    }
    return array
}

// 递归拍平N层数组
let result = []
// for版本
const multNormalizeArray = (array) => {
    for (let i = 0, len = array.length; i < len; i++) {
        if (Array.isArray(array[i])) {
            result = Array.prototype.concat.apply([], array)
            multNormalizeArray(result)
            break
        }
    }
    return result
}
// forEach版本
const mul = (arr) => {
    arr.forEach(element => {
        if (Array.isArray(element)) {
            result = Array.prototype.concat.apply([], arr)
            mul(result)
        }
    });
    return result
}
