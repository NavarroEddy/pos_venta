<?php

class Categorias extends Controller
{
    public function __construct()
    {
        session_start();
        if (empty($_SESSION['activo'])) {
            header("location:" . base_url);
        }
        parent::__construct();
    }
    public function index()
    {
        $id_user = $_SESSION['id_usuario'];
        $verificar = $this->model->verificarPermiso($id_user, 'categorias');
        if (!empty($verificar) || $id_user == 20) {
            $this->views->getView($this, "index");
        } else {
            header('Location: ' . base_url . 'Errors/permisos');
        }
    }
    public function listar()
    {
        $data = $this->model->getCategorias();
        for ($i = 0; $i < count($data); $i++) {
            if ($data[$i]['estado'] == 1) {
                $data[$i]['estado'] = '<span class="badge bg-success">Activo</span>';
                $data[$i]['acciones'] = '<div> 
            <button class="btn btn-primary" type="button"  onclick="btnEditarCategoria(' . $data[$i]['id'] . ');"> <i class= "fas fa-edit"></i> </button>
            <button class="btn btn-danger" type="button" onclick="btnEliminarCategoria(' . $data[$i]['id'] . ');"><i class="fas fa-toggle-off"></i></button>  
            </div>';
            } else {
                $data[$i]['estado'] = '<span class="badge bg-danger">Inactivo</span>';
                $data[$i]['acciones'] = '<div> 
            <button class="btn btn-success" type="button" onclick="btnReingresarCategoria(' . $data[$i]['id'] . ');"><i class= "fas fa-toggle-on"></i> </button>  
            </div>';
            }
        }
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
        die();
    }
    public function registrar()
    {
        $nombre = $_POST['nombre'];
        $id = $_POST['id'];

        if (empty($nombre)) {
            $msg = "Todos los campos son obligatorios";
        } else {
            if ($id == "") {
                $data = $this->model->registrarCategoria($nombre);
                if ($data == "ok") {
                    $msg = "si";
                } else if ($data == "existe") {
                    $msg = "La Categoria ya EXISTE";
                } else {
                    $msg = "Error al registrar LA CATEGORIA";
                }
            } else {
                $data = $this->model->modificarCategoria($nombre, $id);
                if ($data == "modificado") {
                    $msg = "modificado";
                } else {
                    $msg = "Error al modificar La Categoria";
                }
            }
        }
        echo json_encode($msg, JSON_UNESCAPED_UNICODE);
        die();
    }
    public function editar(int $id)
    {
        $data = $this->model->editarCategoria($id);
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
        die();
    }
    public function eliminar(int $id)
    {
        $data = $this->model->accionCategoria(0, $id);
        if ($data == 1) {
            $msg = "ok";
        } else {
            $msg = "Erorr al eliminar CATEGORIA";
        }
        echo json_encode($msg, JSON_UNESCAPED_UNICODE);
        die();
    }
    public function reingresar(int $id)
    {
        $data = $this->model->accionCategoria(1, $id);
        if ($data == 1) {
            $msg = "ok";
        } else {
            $msg = "Erorr al REINGRESAR CATEGORIA";
        }
        echo json_encode($msg, JSON_UNESCAPED_UNICODE);
        die();
    }
}
