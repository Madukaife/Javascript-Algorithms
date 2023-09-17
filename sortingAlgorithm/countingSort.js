function countingSort(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const range = max - min + 1;
    const countArray = Array(range).fill(0);
    const outputArray = Array(arr.length);
  
    for (let i = 0; i < arr.length; i++) {
      countArray[arr[i] - min]++;
    }
  
    for (let i = 1; i < range; i++) {
      countArray[i] += countArray[i - 1];
    }
  
    for (let i = arr.length - 1; i >= 0; i--) {
      outputArray[countArray[arr[i] - min] - 1] = arr[i];
      countArray[arr[i] - min]--;
    }
  
    return outputArray;
  }
  
  const exampleArray = [4, 2, 2, 8, 3, 3, 1];
  console.log(countingSort(exampleArray));
  