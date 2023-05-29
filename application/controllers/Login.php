<?php

use Application\core\Controller;

class Login extends Controller
{
  public function index()
  {
    $this->view('login/index',['' => ''], 'login');
  }
}