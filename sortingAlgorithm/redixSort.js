function radixSort(arr) {
    const max = Math.max(...arr);
    const maxDigits = Math.floor(Math.log10(max)) + 1;
    let outputArray = [...arr];
  
    for (let digitPlace = 0; digitPlace < maxDigits; digitPlace++) {
      const countingArray = Array(10).fill(0);
      for (let i = 0; i < outputArray.length; i++) {
        const digit = Math.floor(outputArray[i] / Math.pow(10, digitPlace)) % 10;
        countingArray[digit]++;
      }
      for (let i = 1; i < 10; i++) {
        countingArray[i] += countingArray[i - 1];
      }
      const tempArray = Array(outputArray.length);
      for (let i = outputArray.length - 1; i >= 0; i--) {
        const digit = Math.floor(outputArray[i] / Math.pow(10, digitPlace)) % 10;
        tempArray[countingArray[digit] - 1] = outputArray[i];
        countingArray[digit]--;
      }
      outputArray = tempArray;
    }
  
    return outputArray;
  }
  
  const exampleArray = [170, 45, 75, 90, 802, 24, 2, 66];
  console.log(radixSort(exampleArray));
  