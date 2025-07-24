import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import NewArrivals from "./pages/NewArrivals/NewArrivals";
import SignIn from "./pages/Auth/SignIn";
import EnterCode from "./pages/Auth/EnterCode/EnterCode";
import ShippingPolicy from "./pages/CustomarServicePolicy/ShippingPolicy";
import ReturnExchangePolicy from "./pages/CustomarServicePolicy/ReturnExchangePolicy/ReturnExchangePolicy";
import PrivacyPolicy from "./pages/CustomarServicePolicy/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "./pages/CustomarServicePolicy/TermsConditions/TermsConditions";
import ContactUs from "./pages/CustomarServicePolicy/ContactUs/ContactUs";
import About from "./pages/About/About";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/NewArrivals" element={<NewArrivals />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/EnterCode" element={<EnterCode />} />
        <Route path="/ShippingPolicy" element={<ShippingPolicy />} />
        <Route
          path="/ReturnExchangePolicy"
          element={<ReturnExchangePolicy />}
        />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsConditions" element={<TermsConditions />} />
        <Route path="/ContactUs" element={<ContactUs />} /> 
         <Route path="/ProductDetail" element={<ProductDetail />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
