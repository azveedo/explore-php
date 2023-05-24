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
}