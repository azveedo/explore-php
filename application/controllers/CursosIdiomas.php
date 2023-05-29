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
}