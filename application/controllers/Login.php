<?php

use Application\core\Controller;
use Application\models\Conexao;
use Application\models\User;

class Login extends Controller
{
  public function index()
  {
    $this->view('login/index',[''], 'login');
  }

    public function entrar(){
    $User = $this->model('User');

    $loginUser = array(
      'email' => addslashes($_POST['email']),
      'senha' => addslashes($_POST['senha'])
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
      header("Location: http://localhost:8888/explore-php/login");

      die();
    }

    try {
      $User->entrar($loginUser);
      $this->view('login/sucesso');
    } catch(Exception $error) {
      $this->view('login/erro');
    }
  }
}