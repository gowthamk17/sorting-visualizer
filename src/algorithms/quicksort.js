import { swap } from "./helper"

export default function getQuickSort(array, start, end) {
    const swapList = []
    if (start === undefined) {
      start = 0
      end = array.length - 1
    } else if (start >= end) {
      return swapList
    }
    var rStart = start, rEnd = end
    var pivot = array[Math.floor(Math.random() * (end - start + 1) + start)]
    while (start < end) {
      while (array[start] <= pivot) {
        swapList.push([[start], false])
        start++
      } 
      while (array[end] > pivot) {
        swapList.push([[end], false])
        end--
      }
      if (start < end) {
        swapList.push([[start, array[end]], true])
        swapList.push([[end, array[start]], true])
        swap(array, start, end)
      }
    }
    swapList.push(...getQuickSort(array, rStart, start - 1))
    swapList.push(...getQuickSort(array, start, rEnd))
    return swapList
  }