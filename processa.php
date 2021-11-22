<?php
include_once('conexao.php');

$nome = $_POST['nome'];
$login = $_POST['login'];
$senha = $_POST['senha'];

$query = "INSERT INTO usuarios( nome,login, senha ) VALUES ('".$nome."','".$login."', '".$senha."')";
mysqli_query($conexao, $query);
$rows = mysqli_affected_rows($conexao);

if($rows > 0){ 
    echo('Sucesso ao se cadastrar');
}

?>