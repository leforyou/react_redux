/**写法一 */
export const ADD_ADDRESS = 'ADD_ADDRESS';
export const DELETE_ADDRESS = 'DELETE_ADDRESS';
export const SET_ADDRESS_DEFAULT = 'SET_ADDRESS_DEFAULT';


export function addAddress(value) {
    return {
        type: ADD_ADDRESS,
        value
    }
}

export function deleteAddress(index) {
    return {
        type: DELETE_ADDRESS,
        index
    }
}

export function setAddressDefault(value) {
    return {
        type: SET_ADDRESS_DEFAULT,
        value
    }
}

/** 写法二：如下
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const addAddress =  (value)=> {
    return {
        type: ADD_ADDRESS,
        value
    }
}

export const deleteAddress = index => {
    return {
        type: DELETE_ADDRESS,
        index
    }
}

export const setAddressDefault = (value) => {
    return {
        type: SET_ADDRESS_DEFAULT,
        value
    }
}



 * 
 */



