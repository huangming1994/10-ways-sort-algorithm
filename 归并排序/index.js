function merge(left, right) {
  var temp = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {  // 从小到大排序进temp
      temp.push(left.shift())
    } else {
      temp.push(right.shift())
    }
  }
  return temp.concat(left, right) // 合并temp
}

function mergeSort(arr) {
  if (!Array.isArray(arr) || arr.length < 2) return arr //递归出口
  var mid = Math.floor(arr.length / 2)
  var left = arr.slice(0, mid)
  var right = arr.slice(mid)
  return merge(mergeSort(left), mergeSort(right)) // 递归调用
}

var arr = [-35, 1, 32, -14, 0, 44, 5, 9, 10, -2]
mergeSort(arr) // [-35, -14, -2, 0, 1, 5, 9, 10, 23, 44]