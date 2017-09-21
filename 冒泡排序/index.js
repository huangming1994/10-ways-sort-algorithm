function bubbleSort(arr) {
  var len = arr.length
  for (var i = 0; i < len; i++) {
    for (var j = 0; i< len - 1 - i; j++) { // -1是因为下面arr[j]与arr[j+1]作比较了，所以不需要遍历到最后一项;
      if (arr[j] > arr[j+1]) {            // -i是因为外层每遍历一次,就能得到一个最大的数排到数组最后一项,遍历i项,就有i项已排序的在最后,所以里层j遍历时不需要遍历该些i项
        var temp = arr[j+1]
        arr[j+1] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}