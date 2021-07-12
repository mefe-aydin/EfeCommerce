import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import CartScreen from "./secreens/CartScreen";
import HomeScreen from "./secreens/HomeScreen";
import ProductScreen from "./secreens/ProductScreen";
import SigninScreen from "./secreens/SigninScreen";
import { signout } from "./actions/userActions";
import RegisterScreen from "./secreens/RegisterScreen";
import ShippingAddressScreen from "./secreens/ShippingAddressScreen";
import PaymentMethodSecreen from "./secreens/PaymentMethodSecreen";
import PlaceOrderScreen from "./secreens/PlaceOrderScreen";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              Efe Commerce
            </Link>
          </div>
          <div>
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge"> {cartItems.length} </span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"> </i>
                </Link>
                <ul className="dropdown-content">
                  <Link to="signout" onClick={signoutHandler}>
                    Sign Out
                  </Link>
                </ul>
              </div>
            ) : (
              <Link to="/signin"> Sign In </Link>
            )}
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/payment" component={PaymentMethodSecreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center"> All right reserved </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
