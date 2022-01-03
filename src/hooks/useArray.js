import {useState} from 'react';

export default function useArray(defaultValue) {
    const [array, setArray] = useState(defaultValue);

    const push = (value) => {
        setArray(currentArray => [...currentArray, value]);
    }

    const set = (value) => {
        setArray(value);
    }   

    const filter = (callback) => {
        setArray(currentArray => currentArray.filter(callback));
    }
    const update = (index, newElement) => {
        setArray(currentArray => {
            const newArray = [...currentArray];
            newArray[index] = newElement;
            return newArray;
        });
    }
    const remove = (index) => {
        setArray(currentArray => {
            const newArray = [...currentArray];
            newArray.splice(index, 1);
            return newArray;
        });
    }
    const clear = () => {
        setArray([]);
    }

    return { array, set, push, filter, update, remove, clear };

}