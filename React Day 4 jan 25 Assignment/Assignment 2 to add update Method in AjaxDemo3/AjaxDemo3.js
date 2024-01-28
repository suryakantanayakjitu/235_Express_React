import axios from 'axios';
import { useState } from 'react';

function AjaxDemo3() {   

   const [deptsArray, setDeptsArray] = useState([]);
   const [deptno, setDeptno] = useState("");
   const [dname, setDname] = useState("");
   const [loc, setLoc] = useState("");



  function getDataButton_click() {

      let url = "http://localhost:3005/api/depts";
      axios.get(url).then( (resData) => 
      {       
        setDeptsArray(resData.data);
      });
  }

  function addDeptButton_click() {
    
    let deptObj = {};
    deptObj.Deptno = deptno;
    deptObj.Dname = dname;
    deptObj.Loc = loc;
      

    let url = "http://localhost:3005/api/depts";
    axios.post(url, deptObj).then( (resData) => 
    {       
      alert(resData.data.status);
      getDataButton_click();
    });

   
    clearFields();
}

function clearFields()
{
    setDeptno("");
    setDname("");
    setLoc(""); 
}

function deleteDept_click(dno) {

  let flag = window.confirm("Are you sure want to delete?");    
  if(  flag == false   )
  {
      return;
  }

  let url = "http://localhost:3005/api/depts/" + dno;
  axios.delete(url).then( (resData) => 
  {       
    alert(resData.data.status);
    getDataButton_click();
  });
}


{/* ~~~~~~~~~~~~~~~~~~~~~~~ Assignment 2 to add Update api method ~~~~~~~~~~~~~~~~~~~~~~~*/}

function updateDetails(){
  
  let deptObj = {};
  deptObj.Deptno = deptno;
  deptObj.Dname = dname;
  deptObj.Loc = loc;
    

  let url = "http://localhost:3005/api/depts/";
  axios.put(url, deptObj).then( (resData) => 
  {
    alert(resData.data.status);
    getDataButton_click();
  });
}


  let resultArray = deptsArray.map(item => 
    {
      return <tr>
          <td>{item.Deptno}</td>
          <td>{item.Dname}</td>
          <td>{item.Loc}</td>
          <td>
          <a href="javascript:void(0);" 
                   onClick={() => deleteDept_click(item.Deptno)}>
                    <img  src="images/delete.png"  width="20"  />
                </a> 
          </td>
      </tr>;
    });


  return (
    <div style={ {"border":"2px solid blue", "padding":"10px", "padding-bottom":"15px", "backgroundColor" : "lightyellow"}}>

      <h3>MERN Stack Implementation</h3>
      <hr/>

      <input type="text" placeholder="Dept Number" value={deptno} onChange={ (e) => setDeptno(e.target.value)} />
            <input type="text" placeholder="Dept Name" value={dname} onChange={ (e) => setDname(e.target.value)} />
            <input type="text" placeholder="Dept Location" value={loc} onChange={ (e) => setLoc(e.target.value)} />
      <hr/>

      <input type="button" onClick={getDataButton_click} value="Get Data" />
      <input type="button" onClick={addDeptButton_click} value="Add Dept" />

      {/* ~~~~~~~~~~~~~~~~~~~~~~~ Assignment 2 to add Update api method ~~~~~~~~~~~~~~~~~~~~~~~*/}
      <input type="button" onClick={() => updateDetails(deptno)} value="Update Dept" />

      <hr/>

      <table  border="2" cellSpacing="0" width="500">
          <tr>
            <th>Dept Number</th>
            <th>Dept Name</th>
            <th>Dept Location</th>
            <th></th>
          </tr>
          {resultArray} 
      </table>         

    </div>
  );
}

export default AjaxDemo3;
