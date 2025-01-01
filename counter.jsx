import React from "react";
import styles from "./counter.module.css";
import {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [clicks, setClicks] = useState(0);
    
    const handleClick = () => {
        setClicks(prevClicks => prevClicks +1);
        if (clicks + 1 === 2){
            setCount(prevCount => prevCount + 1);
            setClicks(0);
        };
    };

    return (
        <div className={styles.counter}>
            <p>Вы нажали {count} раз</p>
            <button onClick={handleClick}>
                Нажми сюда!
            </button>
        </div>
    );
};
export default Counter;