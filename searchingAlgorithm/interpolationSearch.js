function interpolationSearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    
    while (low <= high && target >= arr[low] && target <= arr[high]) {
        // Estimate the position of target
        let pos = low + ((high - low) / (arr[high] - arr[low])) * (target - arr[low]);

        if (arr[pos] === target) {
            return pos; // Return the index if found
        } else if (arr[pos] < target) {
            low = pos + 1;
        } else {
            high = pos - 1;
        }
    }
    return -1; // Return -1 if not found
}
