<?php

class Cajas extends Controller{
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
    public function arqueo()
    {
        $this->views->getView($this, "arqueo");
    }
    public function listar()
    {
    $data = $this->model->getCajas('caja');
    for ($i=0; $i < count($data); $i++) {
        if ($data[$i]['estado'] == 1) {
            $data[$i]['estado'] ='<span class="badge bg-success">Activo</span>';
            $data[$i]['acciones'] = '<div> 
            <button class="btn btn-primary" type="button"  onclick="btnEditarCaja('.$data[$i]['id'].');"> <i class= "fas fa-edit"></i> </button>
            <button class="btn btn-danger" type="button" onclick="btnEliminarCaja('.$data[$i]['id'].');"><i class="fas fa-toggle-off"></i></button>  
            </div>';   
        }else{
            $data[$i]['estado'] ='<span class="badge bg-danger">Inactivo</span>';
            $data[$i]['acciones'] = '<div> 
            <button class="btn btn-success" type="button" onclick="btnReingresarCaja('.$data[$i]['id'].');"><i class= "fas fa-toggle-on"></i> </button>  
            </div>';                                
        }
    }
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    die();
    }
    public function registrar()
    {
        $nombre = $_POST['caja'];
        $id = $_POST['id'];
 
        if (empty($nombre)){
            $msg = "Todos los campos son obligatorios";
        }else{
            if($id == "")  {
                    $data = $this->model->registrarCaja($nombre);
                    if ($data == "ok") {
                        $msg= "si";
                    }else if($data == "existe"){
                        $msg = "La CAJA ya EXISTE";
                    }else {
                        $msg = "Error al registrar LA CAJA";
                    }
            }else{ 
                    $data = $this->model->modificarCaja ($nombre,$id);
                    if ($data == "modificado") {
                        $msg= "modificado";
                    }else{
                        $msg = "Error al modificar el CAJA";
                    }    
            }
        }
        echo json_encode($msg, JSON_UNESCAPED_UNICODE);
        die();

    }
    public function editar(int $id)
    {
       $data = $this->model->editarCaja($id);
       echo json_encode($data, JSON_UNESCAPED_UNICODE);
       die();

    }
    public function eliminar(int $id)
    {
       $data = $this->model->accionCaja(0, $id);
       if ($data == 1) {
           $msg = "ok";
       }else {
           $msg = "Erorr al eliminar CAJA";
       }
       echo json_encode($msg, JSON_UNESCAPED_UNICODE);
       die();
    }
    public function reingresar(int $id)
    {
       $data = $this->model->accionCaja(1, $id);
       if ($data == 1) {
           $msg = "ok";
       }else {
           $msg = "Erorr al REINGRESAR Caja";
       }
       echo json_encode($msg, JSON_UNESCAPED_UNICODE);
       die();
    }
    public function abrirArqueo()
    {
        $monto_inicial = $_POST['monto_inicial'];
        $fecha_apertura = date('Y-m-d');
        $id_usuario = $_SESSION['id_usuario'];
        $id = $_POST['id'];
        if (empty($monto_inicial)){
            $msg = array('msg'=>'Todos los campos son oblifatorios', 'icono'=>'warning');
        }else{
            if ($id =='') {
                $data = $this->model->registrarArqueo($id_usuario, $monto_inicial, $fecha_apertura);
            if ($data == "ok") {
                $msg= array('msg'=>'Caja abierta con exito', 'icono'=>'success');
            }else if($data == "existe"){
                $msg = array('msg'=>' La Caja ya esta abierta', 'icono'=>'warning');
            }else {
                $msg = array('msg'=>'Error al abrir caja', 'icono'=>'error');
            }
            }else {
                $monto_final= $this->model->getVentas($id_usuario);
                $total_ventas = $this->model->getTotalVentas($id_usuario);
                $inicial = $this->model->getMontoInicial($id_usuario);
                $general = $monto_final['total'] + $inicial['monto_inicial'];
                $data = $this->model->actualizarArqueo($monto_final['total'], $fecha_apertura, $total_ventas['total'],$general, $inicial['id']);
                if ($data == "ok") {
                    $this->model->actualizarApertura($id_usuario);
                    $msg= array('msg'=>'Caja cerrada con exito', 'icono'=>'success');
                }else {
                    $msg = array('msg'=>'Error al cerrar caja', 'icono'=>'error');
                }
            }
        }
        echo json_encode($msg, JSON_UNESCAPED_UNICODE);
        die();

    }
    public function listar_arqueo()
    {
    $data = $this->model->getCajas('cierre_caja');
    for ($i=0; $i < count($data); $i++) {
        if ($data[$i]['estado'] == 1) {
            $data[$i]['estado'] ='<span class="badge bg-success">Caja Abierta</span>';   
        }else{
            $data[$i]['estado'] ='<span class="badge bg-danger">Caja Cerrada</span>';}
    }
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    die();
    }
    public function getVentas()    
    {
        $id_usuario = $_SESSION['id_usuario'];
        $data['monto_total'] = $this->model->getVentas($id_usuario);
        $data['total_ventas'] = $this->model->getTotalVentas($id_usuario);
        $data['inicial'] = $this->model->getMontoInicial($id_usuario);
        $data['monto_general'] = $data['monto_total']['total'] + $data['inicial']['monto_inicial'];
        

       echo json_encode($data, JSON_UNESCAPED_UNICODE);
       die();
    }
}
