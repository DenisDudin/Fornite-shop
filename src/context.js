import { createContext, useReducer } from "react";
import {reducer} from './reducer'
import { Shop } from "./components/Shop";

export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
  alertName: ''
}

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState)

  value.closeAlert = () => {
    dispatch({type: 'CLOSE_ALERT'})
  }

  value.removeFromBasket = (itemId) => {
    dispatch({type: 'REMOVE_FROM_BASKET', payload: {id: itemId}})
  }

  value.addToBasket = (itemId) => {
    dispatch({type: 'ADD_TO_BASKET', payload: itemId})
  }

  value.incQuantity = (mainId) => {
    dispatch({type: 'INC_QUANTITY', payload: {id: mainId}})
  }

  value.decQuantity = (mainId) => {
    dispatch({type: 'DEC_QUANTITY', payload: {id: mainId}})
  }

  value.handleBasketShow = () => {
    dispatch({type: 'BASKET_SHOW'})
  }

  value.setGoods = (data) => {
    dispatch({type: 'SET_GOODS', payload: data})
  }

  return <ShopContext.Provider value={value} >;
    {children}
  </ShopContext.Provider>
}