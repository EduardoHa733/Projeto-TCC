<?php

$hostname = "localhost";
$user = "root";
$password = "";
$database= "bdcadastro";
$conexao = mysqli_connect($hostname,$user,$password,$database);

if(!$conexao){
	print "Falha na conexao com o banco de dados";
}
?>