import React from 'react';
import NavMenu from './nav-menu';

class Navbar extends React.Component{
    render(){

        let cor = " nav-wrapper " + this.props.cor;

        let menu = [
            {titulo:"home", link:"/"},
            {titulo:"contato", link:"/contato"},
            {titulo:"sobre", link:"/sobre"}
        ];

    return (
        <nav>
        <div className={cor}>
            <a href="#" className="brand-logo">{this.props.titulo}</a>

            <NavMenu menu={menu}/>
        </div>
      </nav>
    );
    }
}

export default Navbar;