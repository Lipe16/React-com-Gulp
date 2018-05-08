import ReactDOM from 'react-dom';
import React from 'react';

import Titulo from './titulo/titulo';
import Navbar from './navbar/navbar';
import Cartao from './cartao/cartao';
import ListaCartao from './cartao/lista-cartao';
import {BrowserRouter, browserHistory,} from 'react-router-dom';
import AppShell from './AppShell/AppShell';



let App = (
    <div>
        <div >
            
            <BrowserRouter history={browserHistory} >
                <AppShell/>          
            </BrowserRouter>
        </div>
    </div>

);


ReactDOM.render(App, document.getElementById('app'));