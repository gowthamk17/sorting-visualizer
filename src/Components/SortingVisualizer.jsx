import { useState, useEffect, useRef } from "react";
import bubbleSort from "../algorithms/bubblesort";
import Alert from "./alert";
import insertionSort from "../algorithms/insertionsort";
import { shuffle, swap } from "../algorithms/helper";

const DELAY = 10
const ANIME_DELAY = 10
const BAR_COUNT = 50

function SortingVisualizer() {
    const [arr, setArr] = useState([])
    const [isSorting, setIsSorting] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const barsRef = useRef(null)
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
        animateSortedBars()
        setIsSorting(false)
    }

    function animateSortedBars() {
        const bars = Array.from(barsRef.current.children)
        for(let i = 0; i < bars.length; i++) {
            const bar = bars[i]
            setTimeout(() => {
                bar.classList.add('bg-teal-800')
            }, i * ANIME_DELAY )
            setTimeout(() => {
                bar.classList.remove('bg-teal-800')
            }, i * ANIME_DELAY * 2 )
        }
    }

    function showBubbleSort() {
        if (isSorting) {
            showAlertMessage()
            return
        }
        const swaps = bubbleSort(arr)
        showSorting(swaps)
    }

    function showInsertionSort() {
        if (isSorting) {
            showAlertMessage()
            return
        }
        const swaps = insertionSort(arr)
        showSorting(swaps)
    }

    function showAlertMessage() {
        setShowAlert(true)
        setTimeout(() => {
            setShowAlert(false)
        }, 4000);
    }

    return (
        <div className="h-full w-full flex flex-col lg:flex-row-reverse border-2 bg-teal-100 border-teal-900">
            <div className="lg:w-4/5 w-full h-full p-4">
                <div className="h-full w-full flex gap-1 items-end" ref={barsRef}>
                    {arr.map((number, index) => {
                        return <div key={index} className={`w-6 rounded-sm bg-teal-500`} style={{ height: `${number * 10}px` }}></div>
                    })}
                </div>
            </div>
            <div className="lg:w-1/5 flex justify-center items-stretch lg:flex-col gap-4 p-2 overflow-x-scroll space-x-4 lg:overflow-x-hidden bg-teal-500 border-2 border-t-4 lg:border-r-4 lg:border-t-2 border-teal-900">
                <button onClick={initializeArray} className="p-2 border-2 rounded font-bold bg-teal-100 text-teal-900 border-t-4 border-teal-900">SuffleArray</button>
                <button onClick={showInsertionSort} className="p-2 border-2 rounded font-bold bg-teal-100 text-teal-900 border-t-4 border-teal-900">QuickSort</button>
                <button onClick={showInsertionSort} className="p-2 border-2 rounded font-bold bg-teal-100 text-teal-900 border-t-4 border-teal-900">MergeSort</button>
                <button onClick={showBubbleSort} className="p-2 border-2 rounded font-bold bg-teal-100 text-teal-900 border-t-4 border-teal-900">BubbleSort</button>
                <button onClick={showInsertionSort} className="p-2 border-2 rounded font-bold bg-teal-100 text-teal-900 border-t-4 border-teal-900">InsertionSort</button>
            </div>
            {showAlert && <Alert />}
        </div>
    )
}

export default SortingVisualizer