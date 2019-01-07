
import {createStore} from 'redux'
import reducer from '../Reducer' 
const initValue={
    flag:'redux ',
    addressArr:[
        {
            id:1,
            address:'广东省广州市天河区上元岗长湴西大街25号',
            default:true
        },{
            id:2,
            address:'广东省化州市下郭饭店后背',
            default:false
        }
    ]
}
const store = createStore(reducer,initValue);
export default store