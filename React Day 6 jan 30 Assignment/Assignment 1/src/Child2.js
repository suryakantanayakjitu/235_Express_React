import Child3 from "./Child3";

function Child2(){
    return (<div style={{ margin: "10px", border: "2px solid Black" }}>
    <h3>This is Child2 Component</h3>
    <hr />
    <Child3/>
  </div>);
}

export default Child2;