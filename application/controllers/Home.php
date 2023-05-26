<?php

use Application\core\Controller;
use Application\models\Depoiment;

class Home extends Controller
{


  public function index()
  {
    $Testimony = $this->model('Depoiment');
    $testimonials = $Testimony::findAll();
    $this->view('home/index', ['testimonials' => $testimonials], 'home');
  }

}