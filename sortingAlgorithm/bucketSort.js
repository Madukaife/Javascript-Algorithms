function bucketSort(arr, bucketSize = 5) {
    if (arr.length === 0) {
      return arr;
    }
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const bucketCount = Math.floor((max - min) / bucketSize) + 1;
    const buckets = new Array(bucketCount);
    for (let i = 0; i < bucketCount; i++) {
      buckets[i] = [];
    }
    for (let i = 0; i < arr.length; i++) {
      const bucketIndex = Math.floor((arr[i] - min) / bucketSize);
      buckets[bucketIndex].push(arr[i]);
    }
    const sortedArray = [];
    for (let i = 0; i < bucketCount; i++) {
      insertionSort(buckets[i]); 
      sortedArray.push(...buckets[i]);
    }
    return sortedArray;
  }
  
  const exampleArray = [64, 25, 12, 22, 11];
  console.log(bucketSort(exampleArray)); 
  