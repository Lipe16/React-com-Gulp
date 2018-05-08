import React from 'react';
import Cartao from './cartao';
import Busca from '../busca/busca';
import axios from 'axios';

class ListaCartao extends React.Component{

    constructor(props){
        super(props);
        this.state = {cliques: 0, busca: '',dados: [], servidor: []};
        this.addCliques = this.addCliques.bind(this);
        this.atualizaBusca = this.atualizaBusca.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    addCliques(){
       //this.setState({cliques: this.state.cliques+1}); ou -->
       this.setState((prevState)=> ({cliques: prevState.cliques +1}));//maneira certa
    }

    atualizaBusca(evento){
        this.setState({busca: evento.target.value});
        if(evento.target.value == ""){
          this.setState({dados: this.state.servidor});
        }
      }


      //implementação da pesquisa
      onSubmit(evento){
        evento.preventDefault();
        let busca = this.state.busca;
        let dados = this.state.servidor;

        let novaLista = dados.filter(function(item){
          if(item.titulo.toUpperCase().indexOf(busca.toUpperCase()) > -1
          || item.descricao.toUpperCase().indexOf(busca.toUpperCase()) > -1
          || item.detalhe.toUpperCase().indexOf(busca.toUpperCase()) > -1){
            return item;
          }
        });
        this.setState({dados: novaLista});
    
        evento.preventDefault();
      }
    
    componentDidMount(){
        let self = this;
        axios.get('http://localhost:8000/servidor.php?dados=1').then(function(response){
          self.setState({
            dados: response.data,
            servidor: response.data
          });
        });
    
      }




    render(){
        let noticias = this.state.dados;

        let aux = [];
        let novalista = [];

        let qtd = 3;

        for(let k = 0; k < noticias.length; k++){

            aux.push(noticias[k]);

            if(aux.length == qtd){
                novalista.push(aux);
                aux = [];
            }else if(k == (noticias.length - 1)){
                novalista.push(aux);
                aux = [];
            }
        }


        let tamanho = "col m4";

        let listaCartoes = function(grupo, self, index){
            return grupo.map(function(item){
                return(
                    <div key={index} className={tamanho}>
                        <Cartao item={item} addCliques={self.addCliques}/>
                    </div>
                );
            });
        }

        let self = this;
        let linhas = novalista.map(function(grupo, index){
            return(
                <div key={index} className="row">
                    {listaCartoes(grupo, self)}
                </div>
            );

        });

        return (
            <div >
                <div className="row">
                    <Busca atualizaBusca={this.atualizaBusca} busca={this.state.busca} onSubmit={this.onSubmit} />
                </div>
                {this.state.busca}
                <p>Quantidade de cliques: {this.state.cliques}</p>
                {linhas}

            </div>
        );
    }
}

export default ListaCartao;