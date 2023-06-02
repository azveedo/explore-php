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

  public function validateEmail($user)
  {
    $connection = new Database();

    $result = $connection->executeQuery('select idUser from usuario where emailUser = :email', array(
      ':email' => $user['email'],
    ));

    if ($user['email']->rowCount() > 0) {
      echo ($user['email']);
    } else {
      $this->create($user);
    }

    return $result->fetchAll(PDO::FETCH_ASSOC);
  }

  public function create($user)
  {
    $connection = new Database();

    print_r($user);

    $result = $connection->executeQuery(
      'INSERT INTO usuario (nomeUser, emailUser, senhaUser, telefoneUser, paisUser, estadoUser, cidadeUser, bairroUser, ruaUser, numeroUser) VALUES (:nome, :email, :senha, :telefone, :pais, :estado, :cidade, :bairro, :rua, :numero)',
      array(
        ':nome' => $user['nome'],
        ':email' => $user['email'],
        ':senha' => $user['senha'],
        ':telefone' => $user['telefone'],
        ':pais' => $user['pais'],
        ':estado' => $user['estado'],
        ':cidade' => $user['cidade'],
        ':bairro' => $user['bairro'],
        ':rua' => $user['rua'],
        ':numero' => $user['numero']
      )
    );

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