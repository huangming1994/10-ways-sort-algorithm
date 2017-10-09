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

function heapSort(arr) {
  if (!Array.isArray(arr) || arr.length < 2) return arr
}