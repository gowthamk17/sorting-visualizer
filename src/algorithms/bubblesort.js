import { swap } from "./helper"

export default function getBubbleSort(arr) {
    const swapList = []
    for (var i = 0; i < arr.length; i++) {
        let isSorted = true
        for (var j = 0; j < (arr.length - i - 1); j++) {
            swapList.push([[j,j+1], false])
            if (arr[j] > arr[j + 1]) {
                swapList.push([[j, arr[j+1]], true])
                swapList.push([[j+1, arr[j]], true])
                swap(arr, j, j+1)
                isSorted = false
            }
        }
        if(isSorted) {
            break
        }
    }
    return swapList
}