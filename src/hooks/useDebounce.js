import { useEffect } from "react";
import useTimeout from "./useTimeout";

// does something i.e. the callback after some delay depending on the dependencies
export default function useDebounce(callback, delay, deps) {
    const { reset, clear } = useTimeout(callback, delay);

    useEffect(reset, [...deps, reset]);
    //want to clear initailly
    useEffect(clear, []);
}
