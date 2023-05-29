<?php

use Application\core\Controller;

class CursosIdiomas extends Controller
{
  public function index()
  {
     $Testimony = $this->model('Depoiment');
    $testimonials = $Testimony::findAll();
    $this->view('cursosIdiomas/index',['testimonials' => $testimonials], 'cursosIdiomas');
  }
}