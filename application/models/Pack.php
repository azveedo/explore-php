<?php

namespace Application\models;

use Application\core\Database;
use Exception;
use PDO;

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
    $result = $connection->executeQuery('SELECT * FROM programaIntercambio');
    return $result->fetchAll(PDO::FETCH_ASSOC);
  }

    public static function findOnePack()
  {
    $connection = new Database();
    $result = $connection->executeQuery('SELECT * FROM programaIntercambio WHERE idPrograma =');
    return $result->fetchAll(PDO::FETCH_ASSOC);
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
      'SELECT * FROM programaIntercambio WHERE idPrograma = :ID LIMIT 1',
      array(
        ':ID' => $id
      )
    );

    return $result->fetchAll(PDO::FETCH_ASSOC);
  }

}