function hello(hello1) {
    return hello = (`Привет, JavaScript!`)
}
console.log(hello())
// 2

let x = 25
let y = 15
function math(rav) {
    if (x % 2 == 0 && y % 2 == 0) {
        return (x * Y)
    } else if (x % 2 !== 0 && y % 2 !== 0) {
        return (x + y)
    } else if (x % 2 !== 0 && y % 2 == 0) {
        return (x)
    } else {
        return (y)
    }
}
console.log(math())

// 3


function transp(velo) {
    velo = 3;
    let m = 80;
    if (velo == 2 && m < 100) {
        return (`Парковка разрешена`)
    } else {
        return (`Парковка только для велосипедов`)
    }
}
console.log(transp())

// 4
let param1 = 1;
let param2 = 2;
let param3 = 3;
function param() {
    return (param1 + param2 + param3)

}
console.log(param())
// 6

function res(param4 = 3) {
    return (param4 * param4 * param4)
}
console.log(res())


function result(param5 = 3,
    param6 = 4
) {
    let rere = (param5 ** 1 / 2)
    let resl = (param6 ** 1 / 2)
    return (rere + resl)

}
console.log(result())
