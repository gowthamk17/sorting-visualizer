export default function getInsertionSort(arr) {
  const swapList = []
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i]
    let j
    for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      swapList.push([[i, j], false])
      swapList.push([[j + 1, arr[j]], true])
      arr[j + 1] = arr[j]
    }
    swapList.push([[j + 1, currentValue], true])
    arr[j + 1] = currentValue
  }
  return swapList
}