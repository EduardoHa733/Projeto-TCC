<?php

//Conexão com servidor
include('conexao.php');

//Parametros para pegar o login/senha
$login = $_POST['email'];
$senha = $_POST['senha'];

$query = "SELECT email,senha,nome FROM usuario WHERE email = '$login' AND senha = '$senha'";

$resultado = mysqli_query($conexao, $query);

$verifica = mysqli_num_rows($resultado);

//Checa se está valido e redireciona
if ($verifica == 1){
  $nome_bd = mysqli_fetch_assoc($resultado);
  $nome = $nome_bd['nome'];
  echo "<script>
	alert('Bem vindo, $nome!'); location= './estacionamento.html';
	</script>";
  exit();
}else{
  echo "<script>
	alert('Usuário ou senha incorretos!'); location= './index.html';
	</script>";
  exit();
};
?>
