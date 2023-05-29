<?php

use Application\core\Controller;

class CursosIdiomas extends Controller
{
  public function index()
  {
    $Testimony = $this->model('Depoiment');
    $Packages = $this->model('Pack');
    $testimonials = $Testimony::findOne();
    $packages = $Packages = $Packages::findAll();
    $this->view('cursosIdiomas/index',['testimonials' => $testimonials, 'pacotes' => $packages], 'cursosIdiomas');
  }

  public function ver($id = null)
  {
    if (is_numeric($id)) {
      $Packages = $this->model('Pack');
      $data = $Packages->findById($id);

      print_r($data);

      $this->view('cursosIdiomas/show',['testimonials' => $data, 'pacotes' => $data]);
    } else {
      $this->pageNotFound();
    }
  }
}