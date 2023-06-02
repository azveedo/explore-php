<?php

namespace Application\models;

use Application\core\Database;
use Exception;
use PDO;

function group_by($key, $array) {
  $result = array();

  foreach($array as $item) {
    if(array_key_exists($key,$item)) {
      $result[$item[$key]][] = $item;
    } else {
      $result[''][] = $item;
    }
  }

  return $result;
}

class Pack
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
    $result = $connection->executeQuery('SELECT * FROM cursosIdiomas');
    return $result->fetchAll(PDO::FETCH_ASSOC);
  }

    public static function findOnePack()
  {
    $connection = new Database();
    $result = $connection->executeQuery('SELECT * FROM cursosIdiomas WHERE idCurso =');
    return $result->fetchAll(PDO::FETCH_ASSOC);
  }

  public static function findByCategory($categories) {
    $connection = new Database();

    $result = $connection->executeQuery("SELECT * from cursosIdiomas WHERE categoria IN ($categories)");
    $parsedResult = $result->fetchAll(PDO::FETCH_ASSOC);
    $packagesByCategory = group_by('categoria', $parsedResult);

    return $packagesByCategory;

  }

  /**
   * Este método busca um usuário armazenados na base de dados com um
   * determinado ID
   * @param    int     $id   Identificador único do usuário
   *
   * @return   array
   */
  public static function findById(int $id)
  {
    $connection = new Database();
    $result = $connection->executeQuery(
      'SELECT * FROM cursosIdiomas WHERE idCurso = :ID LIMIT 1',
      array(
        ':ID' => $id
      )
    );

    return $result->fetch(PDO::FETCH_ASSOC);
  }

}