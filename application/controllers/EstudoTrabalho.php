<?php

use Application\core\Controller;

class EstudoTrabalho extends Controller
{
  public function index()
  {
    $Testimony = $this->model('Depoiment');
    $Package = $this->model('Pack');
    $testimonials = $Testimony::findLast(2);
    $packagesByCategory = $Package::findByCategory('"ingles", "espanhol", "alemao"');

     $data = [
      'testimonials' => $testimonials, 
      'pacotes' => $packagesByCategory
     ];

    $this->view('estudoTrabalho/index', $data, 'estudoTrabalho');
  }

  public function ver($id = null)
  {
    if (is_numeric($id)) {
      $Packages = $this->model('Pack');
      
      $package = $Packages->findById($id);

      $data = [
        'pacote' => $package
      ];

      $this->view('estudoTrabalho/show', $data);
    } else {
      $this->pageNotFound();
    }
  }
}