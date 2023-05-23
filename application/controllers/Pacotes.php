<?php

use Application\core\Controller;
use Application\models\Pack;

class Pacotes extends Controller
{
  public function index()
  {
    $ListPacks = $this->model('Pack');
    $data = $ListPacks::findAll();
    $this->view('pacotes/index', ['pacotes' => $data]);
  }

  public function ver($id = null)
  {
    if (is_numeric($id)) {
      $ListPacks = $this->model('Pack');
      $data = $ListPacks->findById($id);

      print_r($data);

      $this->view('pacotes/listar', ['listar', $data]);
    } else {
      $this->pageNotFound();
    }
  }
}