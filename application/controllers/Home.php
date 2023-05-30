<?php

use Application\core\Controller;
use Application\models\Depoiment;

class Home extends Controller
{


  public function index()
  {
    $Testimony = $this->model('Depoiment');
    $testimonials = $Testimony::findOne();

    $testimonials1 = $Testimony::findTwo();

    $this->view('home/index', ['testimonials' => $testimonials, 'testimonials1' => $testimonials1], 'home');
  }



}