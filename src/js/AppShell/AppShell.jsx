import React,{Component} from 'react';

import {Switch, Route, Link} from 'react-router-dom';
import ListaCartao from '../cartao/lista-cartao';
import Contato from '../contato/contato';
import Sobre from '../sobre/sobre';
import Navbar from '../navbar/navbar';
import Titulo from '../titulo/titulo';

class AppShell extends React.Component{
    render(){
        return (
            <div>
                <Navbar titulo="React" cor="red" />
                <Titulo/>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={ListaCartao} />
                        <Route path="/contato" component={Contato} />
                        <Route path="/sobre" component={Sobre} />
                    </Switch>
                </div>

            </div>
        );
    }
}

export default AppShell;