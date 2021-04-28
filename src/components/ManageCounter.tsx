import * as React from 'react';
import { Button } from 'react-bootstrap';

/**
 * @description Counter Component.
 * used to display incremental counter value on button click.
 */

const Counter: React.FC = () => {
    const [counter, setCounter] = React.useState<number>(0)
    return (<>
        <h1>{counter}</h1>

        <Button variant="primary" onClick={() => {
            setCounter(prevCounter => prevCounter + 1)
        }}>
            Increment ++
             </Button>

        <Button variant="primary" onClick={() => {
            setCounter(0);
        }}>
            Reset
      </Button>
        <div>
        </div>
    </>
    )
}

export default Counter;