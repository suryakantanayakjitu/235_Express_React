function ProductDetails(props){
    return (
        <div> 
            <div style={ {border : "2px solid blue", padding :  "1px",  margin :  "2px",borderTopWidth :  "20px", borderRadius :  "10px", width : "250px", float: "left"} }>
                <h4>Product id: {props.prdObj.id}  </h4>           
                <span> Product Name  :  {props.prdObj.name}  </span> <br/>
                <span> category  :  {props.prdObj.category}  </span> <br/> 
                <hr/>
                <p style={{"textAlign" : "center", "margin" : "0px"}}>
                    <a href="javascript:void(0);">
                        <img  src="images/delete.png"  width="50"  />
                    </a>
                </p>
                
            </div>
        </div>
    );
}

export default ProductDetails;


