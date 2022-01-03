import React from 'react'
import useArray from '../hooks/useArray'

export default function ArrayComponent() {
    const  { array, set, push, remove, filter, update, clear } = useArray([1,2,3,4,5,6,7,8,9,10]);

    return (
        <div>
            <div>{array.join(",")}</div>
            <button onClick={() => set([1,2])}>Set To 1, 2</button>
            <button onClick={() => push(11)}>Push 11</button>
            <button onClick={() => remove(0)}>Remove 1</button>
            <button onClick={() => filter(value => value > 5)}>Filter gt than 5</button>
            <button onClick={() => update(0, 100)}>Update 1 to 100</button>
            <button onClick={clear}>Clear</button>
        </div>
    )
}
