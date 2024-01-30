import react from 'react';
function IterateArrayObj() {

    var empArray =   [
        { empid: 10, ename: "Accounts", empOffice: "Hyd", empSalary: "20,000" },
        { empid: 20, ename: "Sales", empOffice: "Pune", empSalary: "20,000" },
        { empid: 30, ename: "Marketing", empOffice: "Hyd", empSalary: "20,000" },
        { empid: 40, ename: "Operations", empOffice: "Chennai", empSalary: "20,000" },
    ];

    return (
        <table border="2">
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>Employee Name</th>
                    <th>Office</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                {empArray.map((item, index)=>(
                    <tr key={index}>
                        {Object.values(item).map((value, index) =>(
                            <td key={index}>{value}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
export default IterateArrayObj;