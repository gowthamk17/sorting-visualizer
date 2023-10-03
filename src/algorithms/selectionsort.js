import { swap } from "./helper"

export default function getSelectionSort(arr) {
    const swapList = []
    for(let i = 0; i < arr.length; i++) {
        let min = i
        for(let j = i+1; j < arr.length; j++) {
            swapList.push([[i,j], false])
            if(arr[min] > arr[j]) {
                min = j
            }
        }
        if(min != i) {
            swapList.push([[min, arr[i]], true])
            swapList.push([[i, arr[min]], true])
            swap(arr, min, i)
        }
    }
    return swapList
}