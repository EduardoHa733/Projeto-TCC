<html>
<body>

<?php
    if ($_POST){
        $nome = $_POST["nome"];
        $email = $_POST["email"];
        $complemento = $_POST["complemento"];
        $cep = $_POST["cep"];
        $endereco = $_POST["endereco"];
        $telefone = $_POST["phone"];
        $metodopag = $_POST["formapag"];
        $valortotal = $_POST["total-cart"];
    };
?>
    <?php echo "Seu nome é: $nome" ?><br>
    <?php echo "Seu complemento é: $complemento" ?><br>
    <?php echo "Seu CEP é: $cep" ?><br>
    <?php echo "Sua rua é: $endereco" ?><br>
    <?php echo "Seu telefone é: $telefone" ?><br>
    <?php echo "Valor total: $valortotal" ?><br>
    <?php if ($metodopag == 1){
            echo "Seu metodo de pagamento é: Cartão de Crédito";
    }elseif ($metodopag == 2){
            echo "Seu metodo de pagamento é: Boleto";
    }else{
            echo "Seu metodo de pagamento é: Paypal";
    }
     ?><br>

<script>

</script>

</body>
</html>