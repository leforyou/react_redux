import {
    ADD_ADDRESS,
    DELETE_ADDRESS_ITEM,
    DELETE_ADDRESS_ALL,
    SET_ADDRESS_DEFAULT
} from '../Action';
/*注意：不能直接修改state,否则不会触发视图数据更新。
返回的state必须是全新的对象，否则，redux不会执行listening方法，
因为redux会认为state没有更新过，没必要重新渲染view。
*/
export default(state,action)=>{
    //console.log('state,action',state,action)
    switch (action.type){
        //添加
        case ADD_ADDRESS:
        let obj = {
            id:state.addressArr.length+1,
            address:action.value || '广东省佛山桂城',
            default:false
        };
        return Object.assign({
            addressArr:[
                ...state.addressArr,
                obj
            ]
        });

        //删除单个
        case DELETE_ADDRESS_ITEM:
        return {
            addressArr:state.addressArr.filter(function(item){
                return action.id !== item.id
            })
        }

        //全部删除
        case DELETE_ADDRESS_ALL:
        state.addressArr = [];
        return Object.assign({addressArr:[]});

        //设置默认值
        case SET_ADDRESS_DEFAULT:
        return {
            addressArr:state.addressArr.map(function(item){
                item.default = false;
                if(action.id === item.id)item.default = true;
                return item;
            })
        }
        default:
        return state
    }
}
