import { useState } from "react";

export default function useToggle(defaultValue) {
    const [value, setValue] = useState(defaultValue);

    const toggle = (value) => {
        setValue(currentValue => typeof value === 'boolean' ? value : !currentValue);
    };

    return [value, toggle];
}