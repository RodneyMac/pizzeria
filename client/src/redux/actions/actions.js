import * as actionTypes from "./types";

export const addToCart = (ItemId) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: ItemId,
    }
  }
}

export const removeFromCart = (ItemId) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: ItemId
    }
  }
}

export const adjustItemQuantity = (ItemId, qty) => {
  return {
    type: actionTypes.ADJUST_ITEM_QUANTITY,
    payload: {
      id: ItemId,
      qty,
    }
  }
}

export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  }
}

