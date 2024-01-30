import Child2 from "./Child2";

function Child1(){
    return (<div style={{ margin: "10px", border: "2px solid Yellow" }}>
    <h3>This is Child1 Component</h3>
    <hr />
    <Child2/>
  </div>);
}

export default Child1;