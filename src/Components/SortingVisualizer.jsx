import { useState, useEffect } from "react";
import Bars from "./Bars";
import bubbleSort from "../algorithms/bubblesort";
import insertionSort from "../algorithms/insertionsort";


function SortingVisualizer() {
    const [numArray, setNumArray] = useState(Array.from({ length: 25 }, (_, i) => i + 1))

    function shuffleArray() {
        const arr = [...numArray]
        const shuffledArray = arr.sort(() => Math.random() - 0.5)
        setNumArray(shuffledArray)
    }

    useEffect(shuffleArray,[]);

    function showSorting(swaps) {
        swaps.forEach((swap, index) => {
            setTimeout(() => {
                setNumArray((prevArray)=> {
                    const [i,j] = swap
                    const arr = [...prevArray]
                    const temp = arr[i]
                    arr[i] = arr[j]
                    arr[j] = temp
                    return arr;
                })
            }, index * 200);
        })
    }

    function showBubbleSort() {
        const swaps = bubbleSort(numArray)
        showSorting(swaps)
    }

    function showInsertionSort() {
        const swaps = insertionSort(numArray)
        showSorting(swaps)
    }

    return (
        <div className="">
            <h1>Random Array</h1>
            <button onClick={shuffleArray} className="p-1 border-2 rounded">Suffle Array</button>
            <button onClick={showBubbleSort} className="p-1 border-2 rounded">BubbleSort</button>
            <button onClick={showInsertionSort} className="p-1 border-2 rounded">InsertionSort</button>
            <div className="flex absolute bottom-10 left-10 gap-1 items-end">
                <Bars array={numArray} />
            </div>
        </div>
    );
}

export default SortingVisualizer