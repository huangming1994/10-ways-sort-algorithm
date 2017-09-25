function quickSort(arr) {
  if (!Array.isArray(arr) || arr.length < 2) return arr
  var pivotIndex = Math.floor(arr.length / 2)
  var pivot = arr.splice(pivotIndex, 1)[0]
  var left = []
  var right = []
  for (var i = 0, len = arr.length; i < len; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
}

var arr = [-35, 1, 32, -14, 0, 44, 5, 9, 10, -2]
quickSort(arr) // [-35, -14, -2, 0, 1, 5, 9, 10, 23, 44]