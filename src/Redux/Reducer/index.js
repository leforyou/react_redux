import {
    ADD_ADDRESS,
    DELETE_ADDRESS,
    SET_ADDRESS_DEFAULT
} from '../Action';

export default(state,action)=>{

    const {counterCaption}=action
    switch (action.type){
        case ADD_ADDRESS:

        return {
            
        }

        case DELETE_ADDRESS:
        return {...state,[counterCaption]:state[counterCaption]-1}

        case SET_ADDRESS_DEFAULT:

        return {
            
        }
        default:
        return state
    }
}
