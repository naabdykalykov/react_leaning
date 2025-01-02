import { useEffect, useState } from "react";
import React from "react";

export function CountdownTimer(){
    const [seconds, setSeconds] = useState(10);

    useEffect(()=>{
        if (seconds === 0){
            return;
        }
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [seconds]);

    return <div>Осталось {seconds} секунд</div>
}