function maxHeapify(arr, index, heapSize) {
  var temp, iMax = index, left = 2 * index + 1, right = 2 * index + 2
  if (left < heapSize && arr[index] < arr[left]) {
    iMax = left
  }
  if (right < heapSize && arr[index] < arr[right]) {
    iMax = right
  }
  if (iMax !== index) {
    temp = arr[index]
    arr[index] = arr[iMax]
    arr[iMax] = temp
    maxHeapify(arr, iMax, heapSize)
  }
}

function buildMaxHeap(arr, heapSize) {
  for(var i = Math.floor((heapSize -1) / 2); i >= 0; i--) {
    maxHeapify(arr, i, heapSize)
  }
}

function heapSort(arr) {
  if (!Array.isArray(arr) || arr.length < 2) return arr
  buildMaxHeap(arr)
  for (var i = arr.length - 1; i > 0; i--) {
    var temp = arr[0]
    arr[0] = arr[i]
    arr[i] = temp
    maxHeapify(arr, 0, i)
  }
  return arr
}