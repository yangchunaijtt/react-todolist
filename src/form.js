import React from "react";
class Form extends React.Component{
    constructor(props){
        super(props);
        this.state   = {
            text:"111"
        }
      
    }
  
    render (){  
        return (
        <div>
            <input type="text"  onChange={this.props.add} ref='textInput' 
            />&nbsp;
            <input type="submit" value="添加" onClick = {this.props.changeAdd}/>   
        </div>
        );
    }
};

export {
    Form
}