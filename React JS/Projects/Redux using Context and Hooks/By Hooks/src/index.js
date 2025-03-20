import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import configureProductsStore from './hooks-store/products-store';
import configureCounterStore from './hooks-store/counter-store';

import Provider from "./context/products-context.js";

configureProductsStore();
configureCounterStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>);