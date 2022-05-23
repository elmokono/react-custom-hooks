import { useState } from "react"

//custom hook
export const useCounter = (initialCounter = 10) => {

    const [counter, setCounter] = useState(initialCounter);

    //const increment = (factor = 1) => {
    const increment = () => {
        setCounter(x => x + 1);
    }
    //const decrement = (factor = 1) => {
    const decrement = () => {
        setCounter(x => x - 1);
    }
    const reset = () => {
        setCounter(x => initialCounter);
    }
    return {
        counter,
        increment,
        decrement,
        reset
    };
}
