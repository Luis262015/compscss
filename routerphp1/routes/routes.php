<?php


require 'router.php'; // Incluye la clase Router
require 'web.php'; // Controlador de vistas
require 'api.php'; // Controlador de API

$router = new Router();

// Rutas web
$router->get('/', 'web::home');
$router->get('/about', 'web::about');

// Rutas API
$router->get('/api/data', 'api::getData');
$router->post('/api/data', 'api::postData');

// Nuevas rutas para PUT y DELETE
$router->put('/api/data/update', 'api::updateData');
$router->delete('/api/data/delete', 'api::deleteData');

// Despachar rutas
// $router->dispatch();
$router->dispatch(isset($_GET['url']) ? $_GET['url'] : "");