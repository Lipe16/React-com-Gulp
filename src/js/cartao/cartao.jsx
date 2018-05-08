import React from 'react';

class Cartao extends React.Component{

    constructor(props){
        super(props);
        this.addClique = this.addClique.bind(this);

    }
    
    addClique(){
        this.props.addCliques();
    }
    
    render(){
        return (

        <div className="card sticky-action">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={this.props.item.imagem} onClick={this.addClique} />
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">{this.props.item.titulo}<i className="material-icons right">more_vert</i></span>
              <p><a href="#">{this.props.item.descricao}</a></p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">Titulo detalhe<i className="material-icons right">close</i></span>
              <p>{this.props.item.detalhe}</p>
            </div>
            <div className="card-action">
                <a href="#">Ver mais...</a>
            </div>
        </div>

        );
    }
}

export default Cartao;