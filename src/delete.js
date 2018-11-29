import React from "react";

class Delete extends React.Component{
    constructor(props){
        super(props);
        this.state   = {
            
        }
    }
    render (){
            let  arr = this.props.arr;
            for(let i = 0; i<arr.length;i++){
                var listItems = arr.map((arr,item,i) => <li key={arr.toString()}>{arr}
                <button onClick = { (e) => this.props.scadd(arr.toString(), e)}>删除</button>
               <button onClick = { (e) => this.props.wcAdd(arr.toString(), e)} >完成</button></li>);
            }
       
        return (
            <div>
                <ul>
                    <h3>未完成</h3>
                    {listItems}
                </ul>
            </div>
        )
    }
};

export {
    Delete
}