import React, { Component } from 'react';

import {addAddress,deleteAddressItem,setAddressDefault} from './Redux/Action/index';
import {connect} from 'react-redux'; // redux与react-redux两者配合使用方式如下：

//import store from './Redux/Store/index.js';//console.log(store.getState());//获取Redux的数据

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:'react redux demo测试！',
      inputValue:''
    };
    //console.log("this.state: \n",this.state);//值：name,inputValue
    //console.log("this.props: \n",this.props);//数组：arr,函数：add,delete,setDefault
  }
  render() {
    return (
      <div className="address">
        <div className="input-box">
          <input 
            type="text" 
            placeholder="请输入地址" 
            value={this.state.inputValue} 
            onChange={this.addressChange.bind(this)} 
            onKeyDown={this.addFn.bind(this,'keydown')}
          />
          <span className="none-select" onClick={this.addFn.bind(this,'click')}>添加</span>
          {/*<span className="none-select" onClick={this.props.add.bind(this,this.state.inputValue)}>添加</span> */}
        </div>
        <ul>
          {
            this.props.arr.map((item,index)=>{
              return (
                <li key={index}>
                  <div className="head">{item.address}</div>
                  <div className="foot">
                    <p 
                      className={`setting none-select ${item.default?'selected':''}`}
                      onClick={this.settingFn.bind(this,item,index)}
                    >
                      默认地址
                    </p>
                    <p className="delete none-select" onClick={this.deleteFn.bind(this,item,index)}>删除</p>
                  </div>
                </li>
              )
            })
          }
        </ul>


      </div>
    );
  }
  addressChange(event){
    this.setState({
      inputValue:event.target.value
    });
  }
  addFn = (type,event)=>{
    //console.log(type,event);//第一个才是传递的参数，第二个才是event对象
    let inputValue = this.state.inputValue;
    if(event.keyCode === 13 && type === 'keydown'){
      this.props.add(inputValue);
      this.setState({
        inputValue:''
      });
    }else if(type === 'click'){
      this.props.add(inputValue);
      this.setState({
        inputValue:''
      });
    }
  }
  settingFn = (item,index)=>{
    console.log(item,index);
    this.props.setDefault(item.id);
  }
  deleteFn = (item,index)=>{
    console.log(item,index);
    this.props.delete(item.id);
  }
}
/**/
function mapStateToProps(state,ownProps){
  //console.log(state,ownProps);//第一个：addressArr数组，第二个：{}空对象
  return{
      arr:state.addressArr
  }
}
function mapDispatchToProps(dispatch,ownProps){
  console.log(dispatch,'\n\n',ownProps)
  return {
    add:(inputValue)=>{
        console.log(ownProps,inputValue)
        dispatch(addAddress(inputValue))
    },
    delete:(id)=>{
        dispatch(deleteAddressItem(id))
    },
    setDefault:(id)=>{
        dispatch(setAddressDefault(id))
    }
  }
}
//export default App; //不使用connect的导出方式
export default connect(mapStateToProps,mapDispatchToProps)(App);//连接并返回

