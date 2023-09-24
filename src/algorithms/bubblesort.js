export default function bubbleSort(array) {
    const swaps = []
    const arr = [...array]
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                swaps.push([j,j+1])
                const temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return swaps
}