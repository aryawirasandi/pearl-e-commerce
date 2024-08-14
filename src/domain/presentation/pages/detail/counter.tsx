"use client"

import {RoundedButton} from "@/domain/presentation/components/button";
import {Minus, Plus} from "@/domain/presentation/components/icons";
import {useAtom} from "jotai";
import {counter} from "@/domain/presentation/store";
import { useMemo } from "react";

export function Counter(){
    const [count, setCount] = useAtom(counter);
    
    const countProgress = useMemo(() => {
        if(count < 0)  setCount(0)
        return count;
    }, [count]);

    return <>
        <RoundedButton onClick={() => setCount(count => count += 1)}>
            <Plus/>
        </RoundedButton>
            <span>
               {countProgress}
            </span>
        <RoundedButton onClick={() => setCount(count => count -= 1)}>
            <Minus/>
        </RoundedButton>
    </>
}