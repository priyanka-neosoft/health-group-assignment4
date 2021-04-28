import * as React from 'react';
import { Button } from 'react-bootstrap';
import Employees  from './ManageEmployees';
import Counter  from './ManageCounter';

const Menu: React.FC = () => {
    const [empFlag, setEmpFlag] = React.useState(false)
    const [counterFlag, setCounterFlag] = React.useState(false)

    const viewEmployees = () => {
        setEmpFlag(true);
        setCounterFlag(false);
    }

    const viewCounter = () => {
        setEmpFlag(false);
        setCounterFlag(true);
    }

    return (<>    
    <Button onClick={viewEmployees} variant="primary" >View Employees</Button> | <Button onClick={viewCounter}  variant="primary" >View Counter</Button>
    
    { empFlag ?
        <Employees></Employees> : ''
    }

    { counterFlag ? 
        <Counter></Counter> : ''
    }    

     </>
    )
}

export default Menu;