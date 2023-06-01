<?php

use Application\core\Controller;

class CursosIdiomas extends Controller
{
  public function index()
  {
    $Testimony = $this->model('Depoiment');
    $Package = $this->model('Pack');
    $testimonials = $Testimony::findLast(2);
    $packagesByCategory = $Package::findByCategory('"ingles", "espanhol"');

     $data = [
      'testimonials' => $testimonials, 
      'pacotes' => $packagesByCategory
     ];

    $this->view('cursosIdiomas/index', $data, 'cursosIdiomas');
  }

  public function ver($id = null)
  {
    if (is_numeric($id)) {
      $Packages = $this->model('Pack');
      $data = $Packages->findById($id);

      $this->view('cursosIdiomas/show',['testimonials' => $data, 'pacotes' => $data]);
    } else {
      $this->pageNotFound();
    }
  }
}