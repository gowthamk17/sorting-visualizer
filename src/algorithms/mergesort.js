export default function getMergeSort(arr) {
    const len = arr.length
    const aux = Array(len)
    const swapList = []
    mergeSortHelper(arr, aux, 0, len - 1, swapList)
    return swapList
  }
  
  function mergeSortHelper(arr, aux, left, right, swapList) {
    if (right <= left) return
    const mid = left + Math.floor((right - left) / 2)
    mergeSortHelper(arr, aux, left, mid, swapList)
    mergeSortHelper(arr, aux, mid + 1, right, swapList)
    merge(arr, aux, left, mid, right, swapList)
  }
  
  function merge(arr, aux, left, mid, right, swapList) {
    for (let i = left; i <= right; i++) aux[i] = arr[i]
    let i = left
    let j = mid + 1
    for (let k = left; k <= right; k++) {
      if (i > mid) {
        swapList.push([[j], false])
        swapList.push([[k, aux[j]], true])
        arr[k] = aux[j++]
      } else if (j > right) {
        swapList.push([[i], false])
        swapList.push([[k, aux[i]], true])
        arr[k] = aux[i++]
      } else if (aux[j] < aux[i]) {
        swapList.push([[i, j], false])
        swapList.push([[k, aux[j]], true])
        arr[k] = aux[j++]
      } else {
        swapList.push([[i, j], false])
        swapList.push([[k, aux[i]], true])
        arr[k] = aux[i++]
      }
    }
  }
  