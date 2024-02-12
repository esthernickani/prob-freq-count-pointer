// add whatever parameters you deem necessary
function countPairs(nums,target) {
    let s = new Set(nums)
    let count = 0

    for (let num of s) {
        let remainder = target - num
        s.delete(num)
        if (s.has(remainder)) {
            s.delete(remainder)
            count ++
        }
    }

    return count
}

module.exports = countPairs
