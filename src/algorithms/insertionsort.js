export default function insertionSort(array) {
    const arr = [...array]
    const swaps = []
    for (let i = 1; i < arr.length; i++) {
      let currentValue = arr[i]
      let j
      for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
        arr[j + 1] = arr[j]
        swaps.push([j,j+1])
      }
      arr[j + 1] = currentValue
    }
    return swaps
  }