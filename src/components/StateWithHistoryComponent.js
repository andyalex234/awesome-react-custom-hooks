import {useState} from 'react'
import useStateWithHistory from '../hooks/useStateWithHistory'

export default function StateWithHistoryComponent() {
    const [value, set, undo, redo, reset] = useStateWithHistory(0, {capacity: 10});
    const [count, setCount] = useState(0);

    return (
        <div>
            <div>Initial value: {count}</div>        
            <div>History value: {value}</div>
            <button onClick={() => set(count)}>Set to count</button>       
            <button onClick={() => setCount(count => count + 1)}>Increment</button>
            <button onClick={undo}>Undo</button>
            <button onClick={redo}>Redo</button>
            <button onClick={reset}>Reset</button> 
        </div>
    )
}
