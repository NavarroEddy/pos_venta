<?php
class Conexion{
    private $conect;
    public function __construct()
    {
        $pdo = "mysql:host=".DB_SERVER.";dbname=".DB_DATABASE.";.charset.";
        try {
            $this->conect = new PDO($pdo, DB_USER, DB_PASSWORD);
            $this->conect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo "Error en la conexion".$e->getMessage();
        }
    }
    public function conect()
    {
        return $this->conect;
    }
}

?>