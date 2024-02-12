// add whatever parameters you deem necessary
function longestFall(nums) {
    if (nums.length == 0) return 0

    let finalCount = 1
    let currentCount = 1

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i+1]) {
            currentCount ++
            finalCount = Math.max(finalCount, currentCount)
        } else {
            currentCount = 1
        }
    }

    return finalCount
}

module.exports = longestFall
