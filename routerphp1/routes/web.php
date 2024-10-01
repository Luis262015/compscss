<?php

class web
{
  public static function home()
  {
    include __DIR__ . '/../views/home.php';
  }

  public static function about()
  {
    include __DIR__ . '/../views/about.php';
  }
}