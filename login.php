<?php
$_SESSION['logged'] = $_SESSION ['logged'] ?? False;

//Parametros para pegar o login/senha
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

$verifica = $mysqli -> query("SELECT email,senha,nome FROM usuario WHERE email = '$login' AND senha = '$senha' AND nome = '$nome'");

//Checa se está valido e redireciona
if ($verifica && mysqli_num_rows($verifica) == 1){
  echo "<script>
	alert('Bem vindo, $nome!'); location= './estacionamento.html';
	</script>";
}else{
  echo "<script>
	alert('Usuário ou senha incorretos!'); location= './index.html';
	</script>";
};
?>