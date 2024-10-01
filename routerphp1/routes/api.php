<?php

class api
{
  public static function getData()
  {
    // Enviar una respuesta JSON
    header('Content-Type: application/json');
    echo json_encode([
      'status' => 'success',
      'message' => 'Datos recibidos con éxito',
      'data' => ['item1', 'item2', 'item3']
    ]);
  }

  public static function postData()
  {
    // Recibir datos POST y responder
    $data = json_decode(file_get_contents('php://input'), true);
    header('Content-Type: application/json');
    echo json_encode([
      'status' => 'success',
      'message' => 'Datos enviados con éxito',
      'received' => $data
    ]);
  }

  public static function updateData()
  {
    // Logica para actualizar datos
    $data = json_decode(file_get_contents('php://input'), true);
    header('Content-Type: application/json');
    echo json_encode([
      'status' => 'success',
      'message' => 'Datos actualizados con éxito',
      'updated' => $data
    ]);
  }

  public static function deleteData()
  {
    // Logica para eliminar datos
    $data = json_decode(file_get_contents('php://input'), true);
    header('Content-Type: application/json');
    echo json_encode([
      'status' => 'success',
      'message' => 'Datos eliminados con éxito',
      'deleted' => $data
    ]);
  }
}