export function shuffle(arr) {
    arr.sort(() => Math.random() - 0.5)
}

export function swap(arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}