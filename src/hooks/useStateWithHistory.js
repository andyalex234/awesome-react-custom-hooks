import {useState, useCallback, useRef} from "react";

export default function useStateWithHistory(defaultValue, {capacity = 10}={}){
 
    const [value, setValue] = useState(defaultValue);  
    const historyRef = useRef([value]);
    const pointerRef = useRef(0);

    const set = useCallback((newValue) => {
        historyRef.current[pointerRef.current] = newValue;
        pointerRef.current = (pointerRef.current + 1) % capacity;
        setValue(newValue);
    }, [setValue, capacity]);

    const undo = useCallback(() => {
        pointerRef.current = (pointerRef.current - 1 + capacity) % capacity;
        setValue(historyRef.current[pointerRef.current]);
    }, [setValue, capacity]);


    const redo = useCallback(() => {
        pointerRef.current = (pointerRef.current + 1) % capacity;
        setValue(historyRef.current[pointerRef.current]);
    }, [setValue, capacity]);

    const reset = useCallback(() => {
        pointerRef.current = 0;
        setValue(defaultValue);
    }, [setValue, defaultValue]);

    return [value, set, undo, redo, reset];
}

 