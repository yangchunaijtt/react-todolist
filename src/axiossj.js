import React from "react";


class  Axiossj extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render (){
        console.log(this.props.axios_json,this.props.axios_arr[1]);
        return (
            <div>
                <p>{this.props.axios_json.code}</p>
                <p></p>
            </div>
        )
    }
}

export {
    Axiossj
}