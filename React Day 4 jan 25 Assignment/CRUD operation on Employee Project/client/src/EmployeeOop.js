import axios from 'axios';
import { useState } from 'react';
import './emp.css'
function EmployeeOperation() {
    const [empArray, setEmpArray] = useState([]);
    const [empno, setEmpno] = useState("");
    const [ename, setEname] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    function clearFields() {
        setEmpno("");
        setEname("");
        setEmail("");
        setUsername("");
        setPassword("");
    }


    function getDataButton_click() {

        let url = "http://localhost:3005/api/Emps";
        axios.get(url).then((resData) => {
            setEmpArray(resData.data);
        });
    }

    function addEmpButton_click() {

        let empObj = {};
        empObj.empno = empno;
        empObj.ename = ename;
        empObj.email = email;
        empObj.username = username;
        empObj.password = password;


        let url = "http://localhost:3005/api/Emps";
        axios.post(url, empObj).then((resData) => {
            alert(resData.data.status);
            getDataButton_click();
        });
        clearFields();
    }

    function updateDetails() {

        let empObj = {};
        empObj.empno = empno;
        empObj.ename = ename;
        empObj.email = email;
        empObj.username = username;
        empObj.password = password;


        let url = "http://localhost:3005/api/Emps/";
        axios.put(url, empObj).then((resData) => {
            alert(resData.data.status);
            getDataButton_click();
        });
    }

    function deleteEmp_click(eno) {

        let flag = window.confirm("Are you sure want to delete?");
        if (flag == false) {
            return;
        }

        let url = "http://localhost:3005/api/emps/" + eno;
        axios.delete(url).then((resData) => {
            alert(resData.data.status);
            getDataButton_click();
        });
    }

    let resultArray = empArray.map(item => {
        return <tr>
            <td>{item.empno}</td>
            <td>{item.ename}</td>
            <td>{item.email}</td>
            <td>{item.username}</td>
            <td>{item.password}</td>
            <td>
                <a href="javascript:void(0);" onClick={() => deleteEmp_click(item.empno)}>
                    <img src="images/delete.png" width="20" />
                </a>
            </td>
        </tr>;
    });

    return (
        <div style={{ "border": "2px solid blue", "padding": "10px", "padding-bottom": "15px", "backgroundColor": "aqua" }}>

            <h3 align='center'>Assignment 3 CRUD operation On Employee Data </h3>
            <hr />
            <div className='getdata'>
                <input type="text" placeholder="Emp Number" value={empno} onChange={(e) => setEmpno(e.target.value)} />
                <input type="text" placeholder="Emp Name" value={ename} onChange={(e) => setEname(e.target.value)} />
                <input type="text" placeholder="Emp Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder="Emp Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="text" placeholder="Emp Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            
            <hr />

            <div className='btnCls'>
                <input className='btn' type="button" onClick={getDataButton_click} value="Get Employee Data" />
                <input className='btn' type="button" onClick={addEmpButton_click} value="Add new Employee" />
                <input className='btn' type="button" onClick={() => updateDetails(empno)} value="Update Employee Deatils" />
            </div>

            <hr />
            <div className='EMployeeDetail'>
                <table border="2" cellSpacing="0" width="100%" style={{padding:"30px"}}>
                    <tr>
                        <th>Emp Number</th>
                        <th>Emp Name</th>
                        <th>Emp Email</th>
                        <th>Emp Username</th>
                        <th>Emp Password</th>
                        <th></th>
                    </tr>
                    {resultArray}
                </table>
            </div>

        </div>
    );
}

export default EmployeeOperation;