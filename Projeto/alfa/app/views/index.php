<?php

/*
Index.php
Beta
Davi Ribeiro
*/
/*Carrega a pagina atual pela URL */
$pagina = 'home';

if (isset($_GET['i'])) {

	$pagina = addslashes($_GET['i']);
}

include 'header.php';


?>