import { useContext } from 'react';
import { userDetailsContext } from '../App';
// import { userDetailsContext } from './App';



function Child3() {
    var contextData = useContext(userDetailsContext);
    // var 
    return <div style={{ margin: "10px", border: "2px solid Red" }}>
        <h3>This is Child3 Component</h3>
        <hr />

        <div>
            {/* All User Name  :  {contextData} <br /> */}
            1st user name: {contextData[0]}<br/>
            2nd user name: {contextData[1]}<br/>
            3rd user name: {contextData[2]}<br/>
        </div>

    </div>;
}

export default Child3;