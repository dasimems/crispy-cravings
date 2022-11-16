import React from 'react';
import ReactDOM from 'react-dom/client';
import { ProductsProvider } from './context/products_context';

import App from './App';
import 'antd/dist/antd.min.css';
import "./asset/styles/index.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductsProvider>
    <App />
  </ProductsProvider>
);


