// sum(1, 2).value()
// sum(1)(2).value()

// 柯里化+递归版本
// 每次一个闭包
const sum = (...args) => {
    let addsum = args.reduce((prev, next) => prev + next)

    const inner = (...args) => {
        return sum.call(null, addsum, ...args)
    }
    inner.value = () => {
        console.log(addsum)
    }
    return inner
}

const sumNoClosure = (...args) => {
    const bridge = ((argsOuter) => {
        const inner = (...argsInner) => {
            argsOuter.push(...argsInner)
            return inner
        }
        inner.value = () => {
            let sum = argsOuter.reduce((prev, next) => prev + next)
            console.log(sum)
        }
        console.log(inner)
        return inner
    })(args)
    return bridge
}

sumNoClosure(1, 2).value()
sumNoClosure(1)(2).value()