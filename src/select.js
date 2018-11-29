import React from "react";

class Select extends React.Component{
    constructor(props){
        super(props);
        this.state   = {
           
        }
    }
    render (){
        let wcarr = this.props.wcArr1;
        //console.log(wcarr);
        //var listItems = arr.map((arr,item,i) => <li key={arr.toString()}>{arr}</li>);

       let  list =  wcarr.map((arr) => <li  key={arr.toString()} onClick={(e)=> this.props.tjWcx(arr.toString(),e)}>{arr}</li>)
        return (
            <div>
                <ul>
                    <h3>已完成</h3>
                    {list}
                </ul>
            </div>
           
        );
    }
};

export {
    Select
}