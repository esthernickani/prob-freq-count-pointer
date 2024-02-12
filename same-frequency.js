// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    let int1 = num1.toString()
    let int2 = num2.toString()

    const createFreqDict = int => {
        let freqDict = {}
        for (let num of int) {
            freqDict[num] = ++freqDict[num] || 1
        }
        return freqDict
    }

    let int1freqDict = createFreqDict(int1)
    let int2freqDict = createFreqDict(int2)

    for (let num in int1freqDict) {
        if (int1freqDict[num] != int2freqDict[num]) {
            return false
        }
    }

    return true
}

module.exports = sameFrequency
