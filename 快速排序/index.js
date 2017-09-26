function quickSort(arr) {
  if (!Array.isArray(arr) || arr.length < 2) return arr  // 递归调用至left或者right项为1项时 直接返回arr
  var pivotIndex = Math.floor(arr.length / 2)  // 算出基准下标
  var pivot = arr.splice(pivotIndex, 1)[0]  // 算出基准  并在原数组中删除基准项
  var left = []  // 存放比基准小的项
  var right = []  // 存放比基准大的项
  for (var i = 0, len = arr.length; i < len; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])  // 比基准小的项
    } else {
      right.push(arr[i])  // 比基准大的项
    }
  }
  return quickSort(left).concat([pivot], quickSort(right)) //  递归调用 并拼接left、基准、right
}

var arr = [-35, 1, 32, -14, 0, 44, 5, 9, 10, -2]
quickSort(arr) // [-35, -14, -2, 0, 1, 5, 9, 10, 23, 44]