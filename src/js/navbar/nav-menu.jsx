import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';

class NavMenu extends React.Component{

    constructor(props){
        super(props);
        this.state = {menuAtivo:"home"};
        this.alterarActive = this.alterarActive.bind(this);
    }


    alterarActive(titulo, self){
        self.setState( {menuAtivo:titulo} );  
    }

    render(){

        let self = this;
        let lista = this.props.menu.map(function(value){

            return (

                <li key={value.titulo} onClick={self.alterarActive.bind(null, value.titulo, self)} className={self.state.menuAtivo == value.titulo ? 'active' : ''}><Link to={value.link}>{value.titulo}</Link></li>
            );
        });

        return (

            <ul id="nav-mobile" className="right hide-on-med-and-down">
                {lista}
            </ul>

        );
    }
}

export default NavMenu;