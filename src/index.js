import React from 'react';
import ReactDOM from 'react-dom/client';
import { ProductsProvider } from './context/products_context';

import 'antd/dist/antd.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from './App';
import "./asset/styles/index.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductsProvider>
    <App />
  </ProductsProvider>
);


