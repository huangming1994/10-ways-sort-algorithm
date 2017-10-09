function selectSort(arr) {
  if (!Array.isArray(arr) || arr.length < 2) return arr
  var len = arr.length
  for (var i = 0; i < len - 1; i++) { // 第一层遍历到len - 1就可以了，因为下面第二层是从i + 1开始
    var minIndex = i
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) { // 找最小值并动态赋值minIndex
        minIndex = j
      }
    }
    var temp = arr[minIndex]
    arr[minIndex] = arr[i]
    arr[i] = temp
  }
  return arr
}

var arr = [-35, 1, 32, -14, 0, 44, 5, 9, 10, -2]
selectSort(arr) // [-35, -14, -2, 0, 1, 5, 9, 10, 23, 44]