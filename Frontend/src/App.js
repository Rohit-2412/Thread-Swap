import React, { useState, createContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Sell from "./Components/Sell";
import Shop from "./Components/Shop";
import Products from "./Components/Products";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Item from "./Components/Item";
import SellingForm from "./Components/SellingForm";
import Cart from "./Components/Cart";
import PageNotFound from "./Components/PageNotFound";
import Profile from "./Components/Profile";
import Orders from "./Components/Orders";
import ModifyUserDetails from "./Components/ModifyUserDetails";
import ModifyProductDetails from "./Components/ModifyProductDetails";
import Subcategory from "./Components/Subcategory";

const domain = process.env.REACT_APP_DOMAIN;

// Create AppContext
export const AppContext = createContext({
  totalQuantity: 0,
  setTotalQuantity: () => {},
});

function App() {
  const [message, setMessage] = useState();
  const [totalQuantity, setTotalQuantity] = useState(0); // Total quantity state

  //   useEffect(() => {
  //     fetch("http://localhost:8000/message")
  //       .then((res) => res.json())
  //       .then((data) => setMessage(data.home));
  // },[]);

  return (
    <BrowserRouter>
      {/* Provide AppContext to all children */}
      <AppContext.Provider value={{ totalQuantity, setTotalQuantity }}>
        {/* <p>{message}</p> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} index />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/products/:category/:subcat" element={<Products />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/selling-form" element={<SellingForm />} />
          <Route path="/subcategory/:id" element={<Subcategory />} />
          <Route path="/item/:id" element={<Item />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/my-orders" element={<Orders />} />
          <Route path="/modify-user-details" element={<ModifyUserDetails />} />
          <Route
            path="/modify-product-details"
            element={<ModifyProductDetails />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
