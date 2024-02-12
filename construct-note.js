// add whatever parameters you deem necessary
function constructNote(message, letters) {
    if (letters == "") {
        return false
    }

    let lettersFreq = {}
    let msgFreq = {}

    for (let char of letters) {
        if (char in lettersFreq) {
            lettersFreq[char] += 1
        } else {
            lettersFreq[char] = 1
        }
    }

    for (let char of message) {
        if (char in msgFreq) {
            msgFreq[char] += 1
        } else {
            msgFreq[char] = 1
        }
    }

    for (let key in msgFreq) {
        if (msgFreq[key] > lettersFreq[key]) {
            return false
        }
    }

    return true
}

console.log(constructNote('aa', 'abcd'))
module.exports = constructNote