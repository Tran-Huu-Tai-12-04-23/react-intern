import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState<number | null>(0);

    const increment = () => {
        setCount((prevCount) => (prevCount !== null ? prevCount + 1 : null));
    };

    const decrement = () => {
        setCount((prevCount) => (prevCount !== null ? prevCount - 1 : null));
    };

    return (
        <div>
            <p>Count: {count !== null ? count : 'null'}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;
