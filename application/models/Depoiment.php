<?php

namespace Application\models;

use Application\core\Database;
use Exception;
use PDO;

class Depoiment
{
  /** Poderiamos ter atributos aqui */

  /**
   * Este método busca todos os usuários armazenados na base de dados
   *
   * @return   array
   */
  public static function findAll()
  {
    $connection = new Database();
    $result = $connection->executeQuery('SELECT * FROM depoimentos');
    return $result->fetchAll(PDO::FETCH_ASSOC);
  }
}