import React    from 'react';
import { useCount } from 'host/store';

function Counter() {
    const {count, setCount} = useCount();

    return <div className="counter">
        <h5>Value: {count}</h5>
        <button onClick={() => setCount(count + 1)}>+</button>
    </div>
}

export default Counter;