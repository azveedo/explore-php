<?php

namespace Application\core;

use Application\models\Depoiment;

class Controller
{
  public function model($model)
  {
    require './application/models/' . $model . '.php';
    $classe = 'application\\models\\' . $model;
    return new $classe();

  }

  public function view(string $view, $data = [], $bodyClass = '', $renderBaseTemplate = true)
  {
    if($renderBaseTemplate){
      require './application/views/template/header.php';
    } else {
      require './application/views/template/headerCadastroLogin.php';
    }

    require './application/views/' . $view . '.php';

    if($renderBaseTemplate){
      require './application/views/template/footer.php';
    } else {
      return false;
    }
  }

  public function pageNotFound()
  {
    $this->view('not-found/index');
  }
}