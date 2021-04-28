import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Table } from 'react-bootstrap';

/**
 * @description Employees Component.
 * used for showing employees in a table.
 */

const Employees: React.FC = (props) => {
    const [emp_data, setEmpData] = React.useState([{ id: '', 'Name': '', 'Email': '', 'Position': '' }]);
    let txtName = React.createRef<any>();
    let txtEmail = React.createRef<any>();
    let txtPosition = React.createRef<any>();
    const apUrl = 'https://6086b481a3b9c200173b69ab.mockapi.io/api/getEmployees';
    const [visibledata, setVisibleData] = useState(10);

    useEffect(() => {
        getEmployees();
    }, []);
    
    /**
     * @description getEmployees function.
     * used for getting employee data from api.
     */

    function getEmployees() {
        axios.get(apUrl)
            .then(response => setEmpData(response.data));
    }

    function handleClick(ev: any) {
        let empObj = { Name: txtName.current.value, Email: txtEmail.current.value, Position: txtPosition.current.value };
        axios.post(apUrl, empObj).then(response => {
            getEmployees();
        });
    }

    /**
     * @description loadMoreData Function.
     * used for loading next 10 records.
     */

    function loadMoreData() {
        setVisibleData((prevValue)=> prevValue + 10);         
      }

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                {emp_data.slice(0,visibledata).map(function (object, i) {
                    // {emp_data.map(function (object, i) {
                        return (
                            <tr key={i}>
                                <td>{object.id}</td>
                                <td>{object.Name}</td>
                                <td>{object.Email}</td>
                                <td>{object.Position}</td>
                            </tr>
                        )
                    })}
                    
                    <tr>
                        <Button variant="primary" value="Save" id="save" onClick={() => handleClick(Event)}>+</Button>{' '}
                        <td>
                            <input ref={txtName} />
                        </td>
                        <td>
                            <input ref={txtEmail} />
                        </td>
                        <td>
                            <input ref={txtPosition} />
                        </td>
                        <td>
                        </td>
                    </tr>

                    <tr>
                    {/* <Pagination
                        activePage={activePage}
                        itemsCountPerPage={10}
                        totalItemsCount={450}
                        pageRangeDisplayed={5}
                        onChange={handlePageChange.bind(this)}
                        /> */}
                    </tr>

                </tbody>
            </Table>
            <Button variant="primary" onClick={() => loadMoreData()}>Load More</Button>{' '}

        </>
    )
}

export default Employees;