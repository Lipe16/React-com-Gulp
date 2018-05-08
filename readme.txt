1. iniciando projeto com npm:
    npm init
    npm install --save-dev gulp gulp-concat gulp-rebane gulp-react-easy
2. instalando o gulp com npm:
    npm install -g gulp
3. instalando react
    npm install --save-dev react-dom react
4. instalando servidor JS (express)
    npm install --save express

    criar arquivo server.js no diretório raiz com seguinte código:
        var express = require('express');
        var app = express();

        app.use(express.static(__dirname + '/'));

        app.listen(process.env.PORT || 8080);

        console.log("server ok na porta 8080");

5. instalar o axios para fazer requisições http e receber responses:
    sudo npm install --save-dev axios


6. instalar rotas no react:
     npm install react-router-dom --save-dev

