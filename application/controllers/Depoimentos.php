<?php

use Application\core\Controller;
use Application\models\Depoiment;

class Depoimentos extends Controller
{
  public function index()
  {
    $ListDepoiment = $this->model('Depoiment');
    $data = $ListDepoiment::findAll();
    $this->view('home/index', ['depoimentos' => $data]);
  }

  public function ver($id = null)
  {
    if (is_numeric($id)) {
      $ListDepoiment = $this->model('Depoiment');
      $data = $ListDepoiment->findById($id);

      print_r($data);

      $this->view('home/index', ['index', $data]);
    } else {
      $this->pageNotFound();
    }
  }
}