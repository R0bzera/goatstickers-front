import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from './pages/Cadastro.tsx';
import CartPage from './pages/carrinho.tsx';
import OrderHistory from "./pages/OrderHistory";
import AccountSettings from './pages/AccountSettings.tsx';
import React from 'react';


createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/orders" element={<OrderHistory />} />
        <Route path="/accountsettings" element={<AccountSettings />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);