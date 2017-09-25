function insertionSort(arr) {
  if (!Array.isArray(arr) || arr.length < 2) return arr
  var len = arr.length
  for (var i = 1; i < len; i++) {  // 默认第0项已排序 从第1项开始
    var prevIndex = i - 1 // 初始保存当前遍历的前一项下标 后续动态改变
    while (prevIndex >= 0 && arr[prevIndex + 1] < arr[prevIndex]) { // 当前项与前一项作对比 比较条件为当前项 < 前一项 && 下标 >=0
      var temp = arr[prevIndex + 1]    // 交换当前项与前一项
      arr[prevIndex + 1] = arr[prevIndex]
      arr[prevIndex] = temp
      prevIndex--  // 每遍历一次递减，直到0，目的是为了把前一项设置为当前项于下次遍历
    }
  }
  return arr
}

var arr = [-35, 1, 32, -14, 0, 44, 5, 9, 10, -2]
insertionSort(arr) // [-35, -14, -2, 0, 1, 5, 9, 10, 23, 44]