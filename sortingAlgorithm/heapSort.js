function heapSort(arr) {
    buildMaxHeap(arr);
    for (let i = arr.length - 1; i > 0; i--) {
      // Swap the root (max element) with the last element
      [arr[0], arr[i]] = [arr[i], arr[0]];
      // Restore the max-heap property on the reduced heap
      heapify(arr, i, 0);
    }
    return arr;
  }
  
  function buildMaxHeap(arr) {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
    }
  }
  
  function heapify(arr, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
  
    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }
  
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }
  
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(arr, n, largest);
    }
  }
  
  const exampleArray = [64, 25, 12, 22, 11];
  console.log(heapSort(exampleArray));
  