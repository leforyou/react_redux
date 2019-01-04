
import {createStore} from 'redux'
import reducer from '../Reducer' 
const initValue={
    addressArr:[
        {
            address:'广东省广州市天河区上元岗长湴西大街25号',
            default:false
        },{
            address:'广东省广州市天河区上元岗长湴西大街25号',
            default:false
        }
    ]
}
const store = createStore(reducer,initValue);
export default store