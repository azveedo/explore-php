<?php

use Application\core\Controller;
use Application\models\Conexao;

class Cadastro extends Controller
{
  public function index()
  {
    $this->view('cadastro/index',['' => ''], 'cadastro');

      $nomeUs = addslashes($_POST['usuario']);
      $emailUs = addslashes($_POST['email']);
      $senhaUS = addslashes($_POST['senha']);
      $telefoneUs = addslashes($_POST['telefone']);
      $paisUS = addslashes($_POST['pais']);
      $estadoUs = addslashes($_POST['estado']);
      $cidadeUs = addslashes($_POST['cidade']);
      $bairroUS = addslashes($_POST['bairro']);
      $ruaUS = addslashes($_POST['rua']);
      $numeroUS = addslashes($_POST['numero']);
      var_dump($nomeUs, $emailUs, $senhaUS, $telefoneUs, $paisUS, $estadoUs, $cidadeUs, $bairroUS, $ruaUS, $numeroUS);


      // FALTA VALIDAÇÃO
      
  }
}