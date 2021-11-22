<?php
include_once('conexao.php');

$nome = $_POST['nome'];
$login = $_POST['email'];
$senha = $_POST['senha'];

$query = "INSERT INTO usuario(nome,email,senha ) VALUES ('".$nome."','".$login."', '".$senha."')";
mysqli_query($conexao, $query);
$rows = mysqli_affected_rows($conexao);

$queryNome = "SELECT nome,email FROM usuario where nome = '$nome' AND email = '$login'";
$novoUsuario = mysqli_query($conexao, $queryNome);
$resultadoNome = mysqli_num_rows($novoUsuario);


if($rows > 0){ 
    $nome_bd = mysqli_fetch_assoc($novoUsuario);
    $nome = $nome_bd['nome'];
    echo "<script>
    alert('Cadastrado com sucesso!');    
    alert('Bem vindo, $nome!'); location= './estacionamento.html';
    </script>";
    exit();
}else{
    echo "<script>
    alert('Efetue um cadastro antes!');
    </script>";
    exit();
}

?>