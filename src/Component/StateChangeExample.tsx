import { useState, useEffect } from 'react';

const StateChangeExample = () => {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        console.log(`Count has changed: ${count}`);
        return () => {
            console.log('Cleanup function');
        };
    }, [count]);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default StateChangeExample;
