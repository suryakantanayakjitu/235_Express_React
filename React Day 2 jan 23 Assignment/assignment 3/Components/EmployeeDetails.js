import { useState } from "react";

function EmpDetails() {

    const [employeeArray, setemployeeArray] = useState([]);

    const [empno, setEmpno] = useState("");
    const [ename, setEname] = useState("");
    const [job, setJob] = useState("");
    const [sal, setSal] = useState("");
    const [deptno, setDeptno] = useState("");


    function getEmpButton_click() {
        let tempArray = [
            { empno: 101, ename: "Surya", job: "Accounts", sal: 15000, deptno: 10 },
            { empno: 102, ename: "Ashmin", job: "Sales", sal: 25000, deptno: 20 },
            { empno: 103, ename: "Anup", job: "Delivery", sal: 35000, deptno: 40 },
            { empno: 104, ename: "Vicky", job: "Marketing", sal: 45000, deptno: 30 },
            { empno: 105, ename: "Kamrul", job: "Operations", sal: 55000, deptno: 40 },
        ];

        setemployeeArray(tempArray);
    }

    function addEmpButton_click() {

        let tempArray = [...employeeArray];       
        
        let empObj = {};
        empObj.empno = empno;
        empObj.ename = ename;
        empObj.job = job;
        empObj.sal = sal;
        empObj.deptno = deptno;
        tempArray.push(empObj);        

        setemployeeArray(tempArray);

        
        //Clearing the Text box.
        setEmpno("");
        setEname("");
        setJob("");
        setSal("");
        setDeptno("");
    }

    function deleteEmp_click(eno) {

        let tempArray = [...employeeArray];    // cloning original array into temp array
        let index = tempArray.findIndex(item => item.empno == eno);
        tempArray.splice(index, 1);
        setemployeeArray(tempArray);
    }



    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ UPDATE OPERATION  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    function updateDetails(eno){
        let tempArray = [...employeeArray];
        let index = tempArray.findIndex(item => item.empno == eno);

        tempArray[index].ename = ename;
        tempArray[index].job = job;
        tempArray[index].sal = sal;
        tempArray[index].deptno = deptno;

        setemployeeArray(tempArray);
        

        //Clearing the Text box.
        setEmpno("");
        setEname("");
        setJob("");
        setSal("");
        setDeptno("");
    }

    let resultArray2 = employeeArray.map((item) => {
        return <tr>
            <td>   {item.empno}  </td>
            <td>   {item.ename}  </td>
            <td>   {item.job}  </td>
            <td>   {item.sal}  </td>
            <td>   {item.deptno}  </td>
            <td>
                <a href="javascript:void(0);" 
                   onClick={() => deleteEmp_click(item.empno)}>Delete</a>
            </td>
        </tr>
    });

    return (
        <>
            <h3>Working with State -- CRUD Operations on Array of Objects</h3>
            <hr />

            <input type="text" placeholder="Employee No" value={empno} onChange={ (e) => setEmpno(e.target.value)} />
            <input type="text" placeholder="Employee Name" value={ename} onChange={ (e) => setEname(e.target.value)} />
            <input type="text" placeholder="Job" value={job} onChange={ (e) => setJob(e.target.value)} />
            <input type="text" placeholder="Salary" value={sal} onChange={ (e) => setSal(e.target.value)} />
            <input type="text" placeholder="Dept Number" value={deptno} onChange={ (e) => setDeptno(e.target.value)} />
            <hr/>
            <input type="button" onClick={getEmpButton_click} value="Get Depts" />
            <input type="button" onClick={addEmpButton_click} value="Add Dept" />
            
            {/*  ~~~~~~~~~~~~~~~~~~~~Adding the Update Button  ~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
            <input type="button" onClick={() => updateDetails(empno)} value="Update Dept" />
            <hr />

            <table border="2" width="400" cellspacing="0" cellpadding="5">
                <tr>
                    <th>Employee Id</th>
                    <th>Employee Name</th>
                    <th>Job Description</th>
                    <th>Salary</th>
                    <th>Dept Number</th>
                    <th></th>
                </tr>
                {resultArray2}
            </table>
        </>
    );
}

export default EmpDetails;