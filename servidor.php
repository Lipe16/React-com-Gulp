<?php
header('Access-Control-Allow-Origin: *');


$dados = [
  ['titulo'=>"Notícia 1", 'descricao'=>"Descrição do cartão 1", 'detalhe'=>"Texto de detalhe do cartão 1", 'imagem'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"],
  ['titulo'=>"Cartão 2", 'descricao'=>"Descrição do cartão 2", 'detalhe'=>"Texto de detalhe do cartão 2", 'imagem'=>"https://materializecss.com/images/sample-1.jpg", 'link'=>"#link"],
  ['titulo'=>"Cartão 3", 'descricao'=>"Descrição do cartão 3", 'detalhe'=>"Texto de detalhe do cartão 3", 'imagem'=>"https://www.w3schools.com/bootstrap/paris.jpg", 'link'=>"#link"],
  ['titulo'=>"Cartão 4", 'descricao'=>"Descrição do cartão 4", 'detalhe'=>"Texto de detalhe do cartão 4", 'imagem'=>"https://www.w3schools.com/bootstrap/sanfran.jpg", 'link'=>"#link"],
  ['titulo'=>"Cartão 1", 'descricao'=>"Descrição do cartão 1", 'detalhe'=>"Texto de detalhe do cartão 1", 'imagem'=>"https://www.w3schools.com/w3images/lights.jpg", 'link'=>"#link"],
  ['titulo'=>"Cartão 2", 'descricao'=>"Descrição do cartão 2", 'detalhe'=>"Texto de detalhe do cartão 2", 'imagem'=>"https://www.w3schools.com/w3images/nature.jpg", 'link'=>"#link"],
  ['titulo'=>"Cartão 3", 'descricao'=>"Descrição do cartão 3", 'detalhe'=>"Texto de detalhe do cartão 3", 'imagem'=>"https://www.w3schools.com/w3images/fjords.jpg", 'link'=>"#link"],
  ['titulo'=>"Cartão 4", 'descricao'=>"Descrição do cartão 4", 'detalhe'=>"Texto de detalhe do cartão 4", 'imagem'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"],
  ['titulo'=>"Cartão 1", 'descricao'=>"Descrição do cartão 1", 'detalhe'=>"Texto de detalhe do cartão 1", 'imagem'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"],
  ['titulo'=>"Cartão 2", 'descricao'=>"Descrição do cartão 2", 'detalhe'=>"Texto de detalhe do cartão 2", 'imagem'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"],
  ['titulo'=>"Cartão 3", 'descricao'=>"Descrição do cartão 3", 'detalhe'=>"Texto de detalhe do cartão 3", 'imagem'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"]
];


if(isset($_GET['dados'])){
    echo json_encode($dados);exit;
}