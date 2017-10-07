function shellSort(arr) {
  if (!Array.isArray(arr) || arr.length < 2) return arr
  var len = arr.length, temp, gap = Math.floor(len / 2)
  for (gap; gap > 0; gap = Math.floor(gap / 2)) {
    for (var i = gap; i < len; i++) {
      temp = arr[i]
      for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j]
      }
      arr[j + gap] = temp
    }
  }
  return arr
}

var arr = [-35, 1, 32, -14, 0, 44, 5, 9, 10, -2]
shellSort(arr) // [-35, -14, -2, 0, 1, 5, 9, 10, 23, 44]