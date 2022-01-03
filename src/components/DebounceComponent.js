import {useState} from 'react'
import useDebounce from '../hooks/useDebounce';

export default function DebounceComponent() {
    const [inputValue, setInputValue] = useState("");
    useDebounce(() => alert(`Searching ${inputValue}`), 1000, [inputValue]);
    return (
        <div>
            <div>⚠️ An altert will popup 1 sec after input value change</div>
            <div>{inputValue} </div> 
            <label htmlFor='input' > Search </label>
            <input placeholder='Search anything here' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        </div>
    )
}
