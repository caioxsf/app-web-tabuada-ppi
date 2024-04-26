import express from 'express';

const host = '0.0.0.0';
const porta = 3000;
const app = express();

function paginaInicial (requisicao, resposta) {
    resposta.write('<!DOCTYPE html>');
    resposta.write('<html>');
    resposta.write('<head>');
    resposta.write('<meta charset="utf-8">');
    resposta.write('<title>Página Inicial</title>');
    resposta.write('</head>');
    resposta.write('<body>');
    resposta.write('<h1>Página inicial Programação para internet</h1>');
    resposta.write('<p>Acesse http://localhost:3000/tabuada ou ' + '<a href="http://localhost:3000/tabuada">Clique aqui</a>'+'</p>');
    resposta.write('</body>');
    resposta.write('</html>');
    resposta.end();
}

function tabuada (requisicao, resposta)
{
    let valorTab = requisicao.query.valor;
    let sequencia = requisicao.query.sequencia;
    if(!sequencia) {
        sequencia = 0;
    }

    resposta.write('<!DOCTYPE html>');
    resposta.write('<html>');
    resposta.write('<head>');
    resposta.write('<meta charset="utf-8">');
    resposta.write('<title>Página Inicial</title>');
    resposta.write('</head>');
    resposta.write('<body>');

    if(valorTab) {
        sequencia = parseInt (sequencia);
        valorTab = parseInt (valorTab);

        for (let i=0 ; i<=sequencia; i++) {
            const resultado = valorTab * i;
            resposta.write('<h1>' + valorTab + 'x' + i + '=' + resultado);
        }
    }
    else {
        resposta.write('<h1>Informe o parâmetro valor na url: http://localhost:3000/tabuada?valor=3&sequencia=10</h1>');
        resposta.write('<p>O valor e sequencia pode ser qualquer um!</p>');
    }

    resposta.write('</body>');
    resposta.write('</html>');
    resposta.end();
}

app.get("/", paginaInicial);
app.get("/tabuada", tabuada);

app.listen(porta, host, () => {
    console.log("Servidor iniciado em http://" + host +":"+ porta);
})