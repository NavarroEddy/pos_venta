<?php

class Medidas extends Controller{
    public function __construct() {
        session_start();
        if(empty($_SESSION['activo'])) {
            header("location:".base_url);
        }
        parent::__construct();
    }
    public function index()
    {
        $this->views->getView($this, "index");
    }
    public function listar()
    {
    $data = $this->model->getMedidas();
    for ($i=0; $i < count($data); $i++) {
        if ($data[$i]['estado'] == 1) {
            $data[$i]['estado'] ='<span class="badge bg-success">Activo</span';
            $data[$i]['acciones'] = '<div> 
            <button class="btn btn-primary" type="button"  onclick="btnEditarMedida('.$data[$i]['id'].');"> <i class= "fas fa-edit"></i> </button>
            <button class="btn btn-danger" type="button" onclick="btnEliminarMedida('.$data[$i]['id'].');"><i class="fas fa-toggle-off"></i></button>  
            </div>';   
        }else{
            $data[$i]['estado'] ='<span class="badge bg-danger">Inactivo</span';
            $data[$i]['acciones'] = '<div> 
            <button class="btn btn-success" type="button" onclick="btnReingresarMedida('.$data[$i]['id'].');"><i class= "fas fa-toggle-on"></i> </button>  
            </div>';                                
        }
    }
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    die();
    }
    public function registrar()
    {
        $nombre = $_POST['nombre'];
        $nombre_corto = $_POST['nombre_corto'];
        $id = $_POST['id'];
 
        if (empty($nombre) || empty($nombre_corto)){
            $msg = "Todos los campos son obligatorios";
        }else{
            if($id == "")  {
                    $data = $this->model->registrarMedida($nombre, $nombre_corto);
                    if ($data == "ok") {
                        $msg= "si";
                    }else if($data == "existe"){
                        $msg = "La MEDIDA ya EXISTE";
                    }else {
                        $msg = "Error al registrar LA MEDIDA";
                    }
            }else{ 
                    $data = $this->model->modificarMedida ($nombre,$nombre_corto,$id);
                    if ($data == "modificado") {
                        $msg= "modificado";
                    }else{
                        $msg = "Error al modificar el MEDIDA";
                    }    
            }
        }
        echo json_encode($msg, JSON_UNESCAPED_UNICODE);
        die();

    }
    public function editar(int $id)
    {
       $data = $this->model->editarMedida($id);
       echo json_encode($data, JSON_UNESCAPED_UNICODE);
       die();

    }
    public function eliminar(int $id)
    {
       $data = $this->model->accionMedida(0, $id);
       if ($data == 1) {
           $msg = "ok";
       }else {
           $msg = "Erorr al eliminar MEDIDA";
       }
       echo json_encode($msg, JSON_UNESCAPED_UNICODE);
       die();
    }
    public function reingresar(int $id)
    {
       $data = $this->model->accionMedida(1, $id);
       if ($data == 1) {
           $msg = "ok";
       }else {
           $msg = "Erorr al REINGRESAR MEDIDA";
       }
       echo json_encode($msg, JSON_UNESCAPED_UNICODE);
       die();
    }

}

?>

