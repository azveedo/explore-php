<?php

use Application\core\Controller;

class Pacotes extends Controller
{
  public function index()
  {
    $this->view('pacotes/index');
  }

  public function listar()
  {
    $this->view('pacotes/listar');
  }

}