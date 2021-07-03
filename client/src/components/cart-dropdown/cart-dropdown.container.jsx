import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch, { history }) => ({
  onClick: () => {
    history.push("/checkout");
    dispatch(toggleCartHidden());
  },
});

const CartDropdownContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(CartDropdown);

export default CartDropdownContainer;
