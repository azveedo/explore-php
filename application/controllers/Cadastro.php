<?php

use Application\core\Controller;
use Application\models\Conexao;
use Application\models\User;

class Cadastro extends Controller
{
  public function index()
  {
    $this->view('cadastro/index',['' => ''], 'cadastro');
  }

  // public function sucesso() {
  //   $this->view('sucesso');
  // }

  // public function erro() {
  //   $this->view('erro');
  // }

  public function criar(){
    $User = $this->model('User');
    
    $registeringUser = array(
      'nome' => addslashes($_POST['usuario']),
      'email' => addslashes($_POST['email']),
      'senha' => addslashes($_POST['senha']),
      'telefone' => addslashes($_POST['telefone']),
      'pais' => addslashes($_POST['pais']),
      'estado' => addslashes($_POST['estado']),
      'cidade' => addslashes($_POST['cidade']),
      'bairro' => addslashes($_POST['bairro']),
      'rua' => addslashes($_POST['rua']),
      'numero' => addslashes($_POST['numero'])
    );

    // Criar um helper pra validar se vocês
    // está no localhost ou não
    // e retornar um valor dinâmico

    /// $isLocalhost = isLocalhost();
    // $baseUrl = $isLocalhost ? 'http://localhost:8888/explore-php' : 'http://explore-php.com.br';
    // header("Location: $baseUrl/cadastro");
    
    // Segunda lição: transformar a variável
    // $baseUrl em uma variável global
    
    if(empty($_POST['usuario'])) {
      header("Location: http://localhost:8888/explore-php/cadastro");

      die();
    }

    try {
      $User->create($registeringUser);
      $this->view('cadastro/sucesso');
    } catch(Exception $error) {
      $this->view('cadastro/erro');
    }
  }
}