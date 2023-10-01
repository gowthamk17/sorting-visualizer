import { useState, useEffect } from "react";
import Bars from "./Bars";
import bubbleSort from "../algorithms/bubblesort";
import Alert from "./alert";
import insertionSort from "../algorithms/insertionsort";
import { shuffle, swap } from "../algorithms/helper";

const DELAY = 100
const BAR_COUNT = 50

function SortingVisualizer() {
    const [arr, setArr] = useState([])
    const [isSorting, setIsSorting] = useState(false)
    const [showAlert, setShowAlert] = useState(false)

    useEffect(initializeArray, [])

    function initializeArray() {
        if (isSorting) {
            showAlertMessage()
            return
        }
        const arr = Array.from({ length: BAR_COUNT }, (_, i) => i + 1)
        shuffle(arr)
        setArr(arr)
    }

    function showSorting(swaps) {
        if (isSorting) {
            showAlertMessage()
            return
        }
        setIsSorting(true)
        swaps.forEach((swapPair, index) => {
            setTimeout(() => {
                setArr((prevArray) => {
                    const [i, j] = swapPair
                    const arr = [...prevArray]
                    swap(arr, i, j)
                    return arr;
                })
            }, index * DELAY)
        })
        setTimeout(() => {
            sortingCompleted()
        }, swaps.length * DELAY);
    }

    function sortingCompleted() {
        setIsSorting(false)
    }

    function showBubbleSort() {
        const swaps = bubbleSort(arr)
        showSorting(swaps)
    }

    function showInsertionSort() {
        const swaps = insertionSort(arr)
        showSorting(swaps)
    }

    function showAlertMessage() {
        setShowAlert(true)
        setTimeout(() => {
            setShowAlert(false)
        }, 3000);
    }

    return (
        <div className="h-full w-full flex flex-col lg:flex-row-reverse border-2 bg-teal-100 border-teal-900 ">
            <div className="lg:w-4/5 w-full h-full p-4">
                <Bars array={arr} />
            </div>
            <div className="lg:w-1/5 flex justify-center lg:min-w-12 lg:flex-col gap-4 p-2 bg-teal-500 border-2 border-t-4 lg:border-r-4 lg:border-t-2 border-teal-900 overflow-clip">
                <button onClick={initializeArray} className="p-2 border-2 rounded font-bold bg-teal-100 text-teal-900 border-t-4 border-teal-900">Suffle Array</button>
                <button onClick={showBubbleSort} className="p-2 border-2 rounded font-bold bg-teal-100 text-teal-900 border-t-4 border-teal-900">BubbleSort</button>
                <button onClick={showInsertionSort} className="p-2 border-2 rounded font-bold bg-teal-100 text-teal-900 border-t-4 border-teal-900">InsertionSort</button>
            </div>
            {showAlert && <Alert />}
        </div>
    )
}

export default SortingVisualizer