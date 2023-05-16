<?php

use Application\core\Controller;
use Application\models\User;

class Usuarios extends Controller
{
  public function index()
  {
    $ListUsers = $this->model('User');
    $data = $ListUsers::findAll();
    $this->view('usuarios/index', ['usuarios' => $data]);
  }

  public function ver($id = null)
  {
    if (is_numeric($id)) {
      $ListUser = $this->model('User');
      $data = $ListUser->findById($id);

      print_r($data);

      $this->view('usuarios/usuario', ['usuario', $data]);
    } else {
      $this->pageNotFound();
    }
  }
}