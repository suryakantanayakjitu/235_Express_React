import { useState } from "react";
function Product(){
    const [unitPrice] = useState(25);
    const [numberOfUnit] = useState(5);
    var [result, setResult] = useState("");

    function buttonClick(){
        result = unitPrice*numberOfUnit;
        setResult(result);
    }
    return (
        <>
        <div>
            <h3>Total Amounts:</h3>
            Unit Price: {unitPrice} <br/>
            Number Of Unit: {numberOfUnit} <br/>
            <input type="button" onClick={buttonClick} value="total"></input>
            <p>Total Amount is: {result}</p>
        </div>
        </>
    );
}
export default Product;