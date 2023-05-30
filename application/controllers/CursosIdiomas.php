<?php

use Application\core\Controller;

class CursosIdiomas extends Controller
{
  public function index()
  {
    $Testimony = $this->model('Depoiment');
    $Packages = $this->model('Pack');
    $testimonials = $Testimony::findOne();
    $testimonials1 = $Testimony::findTwo();
    $packages = $Packages = $Packages::findOnePack();
    $this->view('cursosIdiomas/index',['testimonials' => $testimonials, 'pacotes' => $packages, 'testimonials1' => $testimonials1], 'cursosIdiomas');
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