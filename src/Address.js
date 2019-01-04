import React, { Component } from 'react';

import {addAddress,deleteAddress,setAddressDefault} from './Redux/Action/index'
import {connect} from 'react-redux';

//import store from './Redux/Store/index.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:'react redux demo测试！'
    };
    //console.log(store.getState());//获取Redux的数据
    //console.log("this.state: \n",this.state);//值：name
    //console.log("this.props: \n",this.props);//数组：arr,函数：add,delete,setDefault
  }
  render() {
    return (
      <div className="address">
        <div className="input-box">
          <input type="text" placeholder="请输入地址"/>
          <span className="none-select">添加</span>
        </div>
        <ul>
          {
            this.props.arr.map((item,index)=>{
              return (
                <li key={index}>
                  <div className="head">{item.address}</div>
                  <div className="foot">
                    <p className="setting selected none-select">默认地址</p>
                    <p className="delete none-select">删除</p>
                  </div>
                </li>
              )
            })
          }
        </ul>


      </div>
    );
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
  //console.log(dispatch,ownProps)
  return {
    add:()=>{
        dispatch(addAddress(ownProps.caption))
    },
    delete:()=>{
        dispatch(deleteAddress(ownProps.caption))
    },
    setDefault:()=>{
        dispatch(setAddressDefault(ownProps.caption))
    }
  }
}
//export default App; //不使用connect的导出方式
export default connect(mapStateToProps,mapDispatchToProps)(App);//连接并返回

