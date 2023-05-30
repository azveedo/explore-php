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
 
public static function findAll(){$connection = new Database();$result = $connection->executeQuery('SELECT * FROM depoimentos');
  return $result->fetchAll(PDO::FETCH_ASSOC);}

  public static function findOne(){
    $connection = new Database();
    $result = $connection->executeQuery('SELECT * FROM depoimentos WHERE idDepoimento ORDER BY RAND() LIMIT 1');
    return $result->fetchAll(PDO::FETCH_ASSOC);
  }

  public static function findTwo(){
    $connection = new Database();
    $result = $connection->executeQuery('SELECT * FROM depoimentos WHERE idDepoimento ORDER BY RAND() LIMIT 1');
    return $result->fetchAll(PDO::FETCH_ASSOC);
  }
}