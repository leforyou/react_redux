/**写法一 */
export const ADD_ADDRESS = 'ADD_ADDRESS';
export const DELETE_ADDRESS_ITEM = 'DELETE_ADDRESS_ITEM';
export const DELETE_ADDRESS_ALL = 'DELETE_ADDRESS_ALL';
export const SET_ADDRESS_DEFAULT = 'SET_ADDRESS_DEFAULT';


export function addAddress(value) {
    return {
        type: ADD_ADDRESS,
        value
    }
}

export function deleteAddressItem(id) {
    return {
        type: DELETE_ADDRESS_ITEM,
        id
    }
}

export function deleteAddressAll() {
    return {
        type: DELETE_ADDRESS_ALL
    }
}

export function setAddressDefault(id) {
    return {
        type: SET_ADDRESS_DEFAULT,
        id
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

export const deleteAddressItem = index => {
    return {
        type: DELETE_ADDRESS_ITEM,
        index
    }
}

export const deleteAddressAll = index => {
    return {
        type: DELETE_ADDRESS_ALL,
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



