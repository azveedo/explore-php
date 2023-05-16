<?php

use Application\core\Controller;

class NotFound extends Controller
{
  public function index()
  {
    $this->view('not-found/index');
  }

}