function heapify(arr, index, heapSize) {
  var temp, iMax = index, left = 2 * index + 1, right = 2 * index + 2
  if (left < heapSize && arr[iMax] < arr[left]) {
    iMax = left
  }
  if (right < heapSize && arr[iMax] < arr[right]) {
    iMax = right
  }
  if (iMax !== index) {
    temp = arr[index]
    arr[index] = arr[iMax]
    arr[iMax] = temp
    heapify(arr, iMax, heapSize)
  }
}

function buildMaxHeap(arr) {
  for(var i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    heapify(arr, i, arr.length)
  }
}

function heapSort(arr) {
  if (!Array.isArray(arr) || arr.length < 2) return arr
  buildMaxHeap(arr)
  for (var i = arr.length - 1; i > 0; i--) {
    var temp = arr[0]
    arr[0] = arr[i]
    arr[i] = temp
    heapify(arr, 0, i)
  }
  return arr
}

var arr = [-35, 1, 32, -14, 0, 44, 5, 9, 10, -2]
heapSort(arr) // [-35, -14, -2, 0, 1, 5, 9, 10, 23, 44]