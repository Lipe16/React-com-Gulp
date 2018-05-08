# Projeto construído a partir de um curso na Udemy ministrado por GuiaCódigo - Guilherme Ferreira


## Neste projeto trabalhei com a criação de estrutura de um projeto react, componentes, requisições HTTP, envio de parametros entre componentes e rotas(que eu busquei em aulas de outro curso).





# Instruções de como instalar dependências do projeto caso precise(e como instalei tais dependências  na criação do projeto):

1. iniciando projeto com npm:
    "npm init"
    "npm install --save-dev gulp gulp-concat gulp-rebane gulp-react-easy"
    
2. instalando o gulp com npm:
    "npm install -g gulp"
    
3. instalando react:
    "npm install --save-dev react-dom react"
    
4. instalando servidor JS (express):
    "npm install --save express"
    
    criar arquivo server.js no diretório raiz com seguinte código:
        var express = require('express');
        var app = express();

        app.use(express.static(__dirname + '/'));

        app.listen(process.env.PORT || 8080);

        console.log("server ok na porta 8080");

5. instalar o axios para fazer requisições http e receber responses:
    "sudo npm install --save-dev axios"


6. instalar rotas no react:
     "npm install react-router-dom --save-dev"

### mini-servidor php para responder requisições
![php](https://image.ibb.co/g1wuYn/servidor_PHP.png)

### mini-servidor Express para rodar o front-End
![express](https://image.ibb.co/fUD8tn/servidor_Express_JS.png)
     

### ilustração do front
![front](https://image.ibb.co/nv6uYn/Home.png)

### ilustração do front2
![front](https://image.ibb.co/nv6uYn/Home2.png)

### ilustração do filtro
![filtro](https://image.ibb.co/cOegDn/filtro.png)


