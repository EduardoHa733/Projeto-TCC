<?php
/*session_start();

 $servidor = "localhost";
$usuario = "root";
$susenha = "";
$db = "estacionamento";*/ 
$login = $_POST['email'];
$senha = $_POST['senha'];

//Conexão com servidor
$mysqli = mysqli_connect ("localhost","root","","estacionamento");

//Checa conexão
if ($mysqli -> connect_errno){
  echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
  exit();
}

//Acessa a tabela usuario

$login = mysqli_real_escape_string($mysqli, $_POST['email']);
$senha = $_POST['senha'];

$verifica = $mysqli -> query("SELECT email,senha FROM usuario WHERE email = '$login' AND senha = '$senha'");

if ($verifica && mysqli_num_rows($verifica) == 1){
  echo "Logado com sucesso";
  header("Location: estacionamento.html");
}else{
  header("Location: index-erro.html");
}


?>