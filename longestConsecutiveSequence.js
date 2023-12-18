function longestConsecutive(nums) {
    // Check if the array is empty
    if (nums.length === 0) {
        return 0;
    }

    // Create a set to store the unique elements in the array
    const numSet = new Set(nums);

    // Initialize the variable to store the length of the longest consecutive sequence
    let longestStreak = 0;

    // Iterate through each element in the array
    for (let num of numSet) {
        // Check if the current number is the start of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            // Keep incrementing the current number and updating the streak
            // as long as the next consecutive number is in the set
            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            // Update the longest streak if the current streak is greater
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    // Return the length of the longest consecutive sequence
    return longestStreak;
}

// Example usage:
const nums = [100, 4, 200, 1, 3, 2];
const result = longestConsecutive(nums);
console.log(result); // Output: 4 (because the longest consecutive sequence is [1, 2, 3, 4])
