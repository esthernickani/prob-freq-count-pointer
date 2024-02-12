// add whatever parameters you deem necessary
function twoArrayObject(strArr, numArr) {
    let objTwoArr = {}
    let i = 0
    let j = 0

    while (i < strArr.length && j < numArr.length) {
        objTwoArr[strArr[i]] = numArr[j]
        i++;
        j++;
    }


    while (i < strArr.length) {
        console.log(i)
        console.log(strArr.length)
        objTwoArr[strArr[i]] = null
        i ++;
    }

    return objTwoArr
}

module.exports = twoArrayObject
