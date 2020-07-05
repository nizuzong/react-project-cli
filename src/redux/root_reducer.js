import React, { useReducer, createContext } from "react"

export const StoreContext = createContext({});

export const UPDATE_COLOR = 'UPDATE_COLOR';
export const LOGIN_NAME = 'LOGIN_NAME';
const initialState = {
  color: 'red',
  userInfo: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_COLOR:
      return { ...state, color: action.color };
    case LOGIN_NAME:
      return { ...state, userInfo: action.userInfo};
    default:
      return state
  }
};

/**
 *  action 支持传入一个异步的函数,如：
 *  const increaseCount = async dispatch => {
 *      await sleep(1000);
 *      dispatch({ type: 'increase' });
 *  }
 *  调用：
 *  dispatch(increaseCount)
 */
const StoreReducer = (props) => {
  const [state, origin_dispatch] = useReducer(reducer, initialState);
  const dispatch = action => {
    if (typeof action === 'function') {
      return action(origin_dispatch);
    }
    return origin_dispatch(action);
  };
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  )
};

/*
*
* loginName
* */
const StoreLoginName = (props) => {
  const [stte, login_dispatch ] = useReducer(reducer, initialState);
  const dispatch = action => {
    if (typeof action === "function") {
      return action(login_dispatch);
    }
    return login_dispatch(action);
  };
  return (
    <StoreContext.provider value={{state, dispatch}}>
      {props.children}
    </StoreContext.provider>
  )
};
export default StoreReducer

