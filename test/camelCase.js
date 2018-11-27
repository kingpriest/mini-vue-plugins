// 各种分隔符转驼峰
function camelNormalize(str) {
    const typeSep = ['_', '-']
    for (var i = 0, len = typeSep.length; i < len; i++) {
        let result = str.split(typeSep[i])
        let leng = result.length
        let res = []
        if (leng > 1) {
            res.push(result[0])
            for (var j = 1; j < leng; j++) {
                res.push(`${result[j].substr(0, 1).toUpperCase()}${result[j].substr(1)}`)
            }
            return res.join('')
        } else {
            continue;
        }
    }
}

console.log(camelNormalize('aa_bb_cc'))