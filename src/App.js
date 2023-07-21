import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import '../src/App.css'
import Customers from './components/Customers';
import Orders from "./components/Orders";
import Transaction from "./components/Transaction";
import Message from "./components/Message";
import NotFound from "./components/NotFound";
import Support from "./components/Support";
import Setting from "./components/Setting";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customer" element={<Customers />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/message" element={<Message />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/support" element={<Support />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

    </BrowserRouter>
  );
};

export default App;
