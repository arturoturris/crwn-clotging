import { all, call, takeLatest, put, select } from "redux-saga/effects";

import { getUserCartRef } from "../../firebase/firebase.utils";
import UserActionTypes from "../user/user.types";
import { clearCart, setCartItemsFromFirestore } from "./cart.actions";
import CartActionTypes from "./cart.types";
import { selectCurrentUser } from "../user/user.selector";
import { selectCartItems } from "../cart/cart.selectors";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* setCartFromFirestore({ payload: user }) {
  const cartRef = yield getUserCartRef(user.id);
  const cartSnapshot = yield cartRef.get();
  yield put(setCartItemsFromFirestore(cartSnapshot.data().cartItems));
}

export function* updateCartItems() {
  const currentUser = yield select(selectCurrentUser);
  if (!currentUser) {
    try {
      const cartRef = yield getUserCartRef(currentUser.id);
      const cartItems = yield select(selectCartItems);
      yield cartRef.update({
        cartItems,
      });
    } catch (error) {
      console.log("FIRESTRORE CART ERROR", error);
    }
  }
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* onSignInSuccess() {
  yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, setCartFromFirestore);
}

export function* onUpdateCartItems() {
  yield takeLatest(
    [
      CartActionTypes.ADD_ITEM,
      CartActionTypes.REMOVE_ITEM,
      CartActionTypes.CLEAR_ITEM_FROM_CART,
    ],
    updateCartItems
  );
}

export function* cartSaga() {
  yield all([
    call(onSignOutSuccess),
    call(onSignInSuccess),
    call(onUpdateCartItems),
  ]);
}
