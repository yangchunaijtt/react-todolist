import React from "react";
import { Form } from "./form.js";
import { Delete}  from "./delete.js";
import { Select } from "./select.js";


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            arr:["今天任务","明日学习","张三"], // 原本未完成的初始数据
            xin_arr:[],     // 临时存储 onChange的 数据
            wcArr:['本周加班到9dian','数据量很大']         // 存储完成的数据
        }
    }
    tjWcx(id,e){
        //console.log(id,e);
        let wcArr = this.state.wcArr;
        let arr = this.state.arr;
        for(let i = 0 ; i<wcArr.length;i++){
            if(id===wcArr[i]){
                console.log(wcArr[i]);
                wcArr.splice(i,1);
                arr.push(id);
                this.setState({

                })
            }
        }
    };
    //onChange 用于向临时arr中添加数据
    add(e){
        this.state.xin_arr.push(e.target.value);      
    }
    // 
    scadd(id,e){
        //console.log(id);
        let arr = this.state.arr;
        for(var i = 0;i<arr.length;i++){
            if(id===arr[i]){
                arr.splice(i,1);
                this.setState({     
                })
            }
        }
    }
    // 向完成arr 中添加数据
    wcAdd(id,e){
        //console.log(id,this,e,"点击完成");
        let arr = this.state.arr;
        let wcArr =  this.state.wcArr;
        for(var i = 0;i<arr.length;i++){
            if(id===arr[i]){
                arr.splice(i,1);
                wcArr.push(id);
                //console.log(wcArr,id);
                this.setState({      
                })
            }
        }
    };
    
    changeAdd(e){
        // 用  refs 获取到值 
        this.refs.childRef.refs.textInput.value = "";
        //console.log(this.refs.childRef.refs.textInput.value);
        let tj_sj = this.state.xin_arr[this.state.xin_arr.length-1];
        this.state.arr.push(tj_sj);   
        this.setState({
            
        })
    };
    /* 哇哇哇，终于成功取到数据了。。。 */
    render(){
        let arr = this.state.arr;
        let wcArr1 = this.state.wcArr;
        return (
            <div>
               
                <Form arr={arr} xin_arr={this.state.xin_arr} 
                changeAdd={this.changeAdd.bind(this)} 
                add={this.add.bind(this)}
                ref='childRef'/>
                <Delete arr={arr}  wcAdd = {this.wcAdd.bind(this)} scadd={this.scadd.bind(this)}/>
                <Select wcArr1={wcArr1} tjWcx={this.tjWcx.bind(this)}/>
            </div>
        )
    }
}

export {
    App
}