import React, { Component } from 'react';

import {deleteAddressAll} from './Redux/Action/index';
import {connect} from 'react-redux'; // redux与react-redux两者配合使用方式如下：
//import store from './Redux/Store/index.js';//console.log(store.getState());//获取Redux的数据
class App extends Component {
  
  render() {
    return (
        <div className="deleteAll">
          <div className="btn none-select" onClick={this.DeleteAll.bind(this)}>全部删除</div>
        </div>
    );
  }
  DeleteAll(){
    //console.log(this.props);
    this.props.delAll();
  }
  
}
function mapStateToProps(state,ownProps){
  return{
      
  }
}
function mapDispatchToProps(dispatch,ownProps){
  return {
    delAll:()=>{
      console.log(dispatch,'\n\n ',ownProps);//ownProps = {foo: "bar传递测试"}
      dispatch(deleteAddressAll());
    }
  }
}
//export default App; //不使用connect的导出方式
export default connect(mapStateToProps,mapDispatchToProps)(App);//连接并返回
