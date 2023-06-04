<?php

use Application\core\Controller;

class CursosEspeciais extends Controller
{
  public function index()
  {
    $Testimony = $this->model('Depoiment');
    $Package = $this->model('Pack');
    $testimonials = $Testimony::findLast(2);
    $packagesByCategory = $Package::findByCategory('"cursos especiais"', 'cursosespecias');

     $data = [
      'testimonials' => $testimonials, 
      'pacotes' => $packagesByCategory
     ];

    $this->view('cursosEspeciais/index', $data, 'cursosEspeciais');
  }

  public function ver($id = null)
  {
    if (is_numeric($id)) {
      $Packages = $this->model('Pack');
      
      $package = $Packages->findById($id, 'cursosespeciais');

      $data = [
        'pacote' => $package
      ];

      $this->view('cursosEpeciais/show', $data, 'details');
    } else {
      $this->pageNotFound();
    }
  }
}