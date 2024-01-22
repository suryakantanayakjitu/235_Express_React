function StudentDetails(){
    let sid= "20";
    let sname= "Surya";
    let course= "B.tech";
    let age = "23";

    return (
        <>
        <hr/>
            <div>
                <h3>Single Student Data</h3>
                Student Id :   {sid}    <br />
                Student Name :   {sname}    <br />
                Student Course  :   {course}    <br />
                Student Age  :   {age}    <br />
            </div>
        <hr/>
        </>
    );
}

export default StudentDetails;