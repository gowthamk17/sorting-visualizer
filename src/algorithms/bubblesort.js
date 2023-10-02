import { swap } from "./helper"

export default function getBubbleSort(arr) {
    const swaps = []
    for (var i = 0; i < arr.length; i++) {
        let isSorted = true
        for (var j = 0; j < (arr.length - i - 1); j++) {
            swaps.push([[j,j+1], false])
            if (arr[j] > arr[j + 1]) {
                swaps.push([[j,j+1], true])
                swap(arr, j, j+1)
                isSorted = false
            }
        }
        if(isSorted) {
            break
        }
    }
    return swaps
}