<?php

namespace Application\models;

use Application\core\Database;
use Exception;
use PDO;

class User
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
    $result = $connection->executeQuery('SELECT * FROM usuario');
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
      'SELECT * FROM usuario WHERE idUser = :ID LIMIT 1',
      array(
        ':ID' => $id
      )
    );

    return $result->fetchAll(PDO::FETCH_ASSOC);
  }

}