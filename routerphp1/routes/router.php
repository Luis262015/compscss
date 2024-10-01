<?php

class Router
{
  private $routes = [];

  // Método para registrar rutas GET
  public function get($path, $callback)
  {
    // echo $path;
    // echo "<br>";
    // echo $callback;
    // echo "<br>";

    $this->routes['GET'][$path] = $callback;
  }

  // Método para registrar rutas POST
  public function post($path, $callback)
  {
    $this->routes['POST'][$path] = $callback;
  }

  // Método para registrar rutas PUT
  public function put($path, $callback)
  {
    $this->routes['PUT'][$path] = $callback;
  }

  // Método para registrar rutas DELETE
  public function delete($path, $callback)
  {
    $this->routes['DELETE'][$path] = $callback;
  }

  // Método para despachar las rutas basadas en la petición
  // public function dispatch()
  public function dispatch($_path)
  {
    $method = $_SERVER['REQUEST_METHOD'];

    // echo "<br>";
    // echo "METHOD:" . $method;
    // echo "<br>";

    // $path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    // echo "<br>";
    // echo $path;
    // echo "<br>";
    $path = "/" . $_path;

    // echo "<br>";
    // echo $path;
    // echo "<br>";

    if (isset($this->routes[$method][$path])) {
      // Llamamos al callback asociado a la ruta
      call_user_func($this->routes[$method][$path]);
    } else {
      // Si la ruta no está registrada, mostramos un 404
      http_response_code(404);
      echo "404 - Ruta no encontrada.";
    }
  }
}