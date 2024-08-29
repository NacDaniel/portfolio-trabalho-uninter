<?php
   $nome = $POST[firstname]; 
   $email = $POST[email];
   $assunto = $POST[subject];
   $mensagem = $POST[mensagemFormulario];
/*
mail (
    "contato@daniel.com",
    "Nome: $nome
     Email: $email
     Assunto: $assunto
     Mensagem: $mensagem", "FROM:$nome<$email>");
?>

*/

//window.open('mailto:contato@daniel.com?subject=' + subject + '?attachment=' + areaSelectFile + '?body=' + message + '', '_blank');
