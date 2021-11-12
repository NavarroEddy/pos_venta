<?php
class Compras extends Controller
{
    public function __construct()
    {
        session_start();
        parent::__construct();
    }
    public function index()
    {
        $this->views->getView($this, "index");
    }
    public function Ventas()
    {
        $data = $this->model->getClientes();
        $this->views->getView($this, "ventas", $data);
    }
    public function historial_Ventas()
    {
        $this->views->getView($this, "historial_ventas");
    }

    public function buscarCodigo($cod)
    {
        $data = $this->model->getProCod($cod);
        //print_r($data);
        //die();
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
    }

    public function ingresar()
    {
        //print_r($_POST);
        $id = $_POST['id'];
        $datos = $this->model->getProductos($id);
        $id_producto = $datos['id'];
        $id_usuario = $_SESSION['id_usuario'];
        $precio = $datos['precio_compra'];
        $cantidad = $_POST['cantidad'];
        $comprobar = $this->model->consultarDetalle('detalle', $id_producto, $id_usuario);
        if (empty($comprobar)) {
            $sub_total = $precio * $cantidad;
            $data = $this->model->registrarDetalle('detalle', $id_producto, $id_usuario, $precio, $cantidad, $sub_total);
            if ($data == "ok") {

                $msg = array('msg' => 'Producto ingresado a la Lista de compra', 'icono' => 'success');
            } else {
                $msg = array('msg' => 'Error al ingresar el producto a la Lista de compra', 'icono' => 'error');
            }
        } else {
            $total_cantidad = $comprobar['cantidad'] + $cantidad;
            $sub_total = $total_cantidad * $precio;
            $data = $this->model->actualizarDetalle('detalle', $precio, $total_cantidad, $sub_total, $id_producto, $id_usuario);
            if ($data == "modificado") {
                $msg = array('msg' => 'Producto MODIFICADO', 'icono' => 'success');
            } else {
                $msg = array('msg' => 'Error al modificar producto', 'icono' => 'error');
            }
        }
        echo json_encode($msg, JSON_UNESCAPED_UNICODE);
        die();
    }
    public function ingresarVenta()
    {
        //print_r($_POST);
        $id = $_POST['id'];
        $datos = $this->model->getProductos($id);
        $id_producto = $datos['id'];
        $id_usuario = $_SESSION['id_usuario'];
        $precio = $datos['precio_venta'];
        $cantidad = $_POST['cantidad'];
        $comprobar = $this->model->consultarDetalle('detalle_temp', $id_producto, $id_usuario);
        if (empty($comprobar)) {
            if ($datos['cantidad'] >= $cantidad) {
                $sub_total = $precio * $cantidad;
                $data = $this->model->registrarDetalle('detalle_temp', $id_producto, $id_usuario, $precio, $cantidad, $sub_total);
                if ($data == "ok") {

                    $msg = array('msg' => 'Producto ingresado a la Lista de venta', 'icono' => 'success');
                } else {
                    $msg = array('msg' => 'Error al ingresar el producto a la Lista de venta', 'icono' => 'error');
                }
            } else {
                $msg = array('msg' => 'No hay existencia de producto, Stock Actual: ' . $datos['cantidad'], 'icono' => 'error');
            }
        } else {
            $total_cantidad = $comprobar['cantidad'] + $cantidad;
            $sub_total = $total_cantidad * $precio;
            if ($datos['cantidad'] < $total_cantidad) {
                $msg = array('msg' => 'No hay existencia de producto, Stock Actual: ' . $datos['cantidad'], 'icono' => 'error');
            } else {
                $data = $this->model->actualizarDetalle('detalle_temp', $precio, $total_cantidad, $sub_total, $id_producto, $id_usuario);
                if ($data == "modificado") {
                    $msg = array('msg' => 'Producto MODIFICADO', 'icono' => 'success');
                } else {
                    $msg = array('msg' => 'Error al modificar producto', 'icono' => 'error');
                }
            }
        }
        echo json_encode($msg, JSON_UNESCAPED_UNICODE);
        die();
    }
    public function listar($table)
    {

        $id_usuario = $_SESSION['id_usuario'];
        $data['detalle'] = $this->model->getDetalle($table, $id_usuario);
        $data['total_pagar'] = $this->model->calcularCompra($table, $id_usuario);
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
        die();
    }

    public function delete($id)
    {
        $data = $this->model->deleteDetalle('detalle', $id);
        if ($data == 'ok') {
            $msg = 'ok';
        } else {
            $msg = 'error';
        }
        echo json_encode($msg);
        die();
    }
    public function deleteVenta($id)
    {
        $data = $this->model->deleteDetalle('detalle_temp', $id);
        if ($data == 'ok') {
            $msg = 'ok';
        } else {
            $msg = 'error';
        }
        echo json_encode($msg);
        die();
    }
    public function registraCompra()
    {
        $id_usuario = $_SESSION['id_usuario'];
        $total = $this->model->calcularCompra('detalle', $id_usuario);
        $data = $this->model->registraCompra($total['total']);
        if ($data == 'ok') {
            $detalle = $this->model->getDetalle('detalle', $id_usuario);
            $id_compra = $this->model->getId('compras');
            foreach ($detalle as $row) {
                $cantidad = $row['cantidad'];
                $precio = $row['precio'];
                $id_pro = $row['id_producto'];
                $sub_total = $cantidad * $precio;
                $this->model->registrarDetalleCompra($id_compra['id'], $id_pro, $cantidad, $precio, $sub_total);
                $stock_actual = $this->model->getProductos($id_pro);
                $stock = $stock_actual['cantidad'] + $cantidad;
                $this->model->actualizarStock($stock, $id_pro);
            }
            $vaciar = $this->model->vaciarDetalle('detalle', $id_usuario);
            if ($vaciar == 'ok') {
                $msg =  array('msg' => 'ok', 'id_compra' => $id_compra['id']);
            }
        } else {
            $msg = 'Error al realizar la compra';
        }
        echo json_encode($msg);
        die();
    }
    public function registraVenta($id_cliente)
    {
        $id_usuario = $_SESSION['id_usuario'];
        $verificar = $this->model->verificarCaja($id_usuario);
        if (empty($verificar)) {
            $msg = 'La caja esta CERRADA';
        } else {
            $fecha = date('Y-m-d');
            $hora = date('H:i:s');
            $total = $this->model->calcularCompra('detalle_temp', $id_usuario);
            $data = $this->model->registraVenta($id_usuario, $id_cliente, $total['total']);
            if ($data == 'ok') {
                $detalle = $this->model->getDetalle('detalle_temp', $id_usuario);
                $id_venta = $this->model->getId('ventas');
                foreach ($detalle as $row) {
                    $cantidad = $row['cantidad'];
                    $descuento = $row['descuento'];
                    $precio = $row['precio'];
                    $id_pro = $row['id_producto'];
                    $sub_total = ($cantidad * $precio) - $descuento;
                    $this->model->registrarDetalleVenta($id_venta['id'], $id_pro, $cantidad, $descuento, $precio, $sub_total);
                    $stock_actual = $this->model->getProductos($id_pro);
                    $stock = $stock_actual['cantidad'] - $cantidad;
                    $this->model->actualizarStock($stock, $id_pro);
                }
                $vaciar = $this->model->vaciarDetalle('detalle_temp', $id_usuario);
                if ($vaciar == 'ok') {
                    $msg =  array('msg' => 'ok', 'id_venta' => $id_venta['id']);
                }
            } else {
                $msg = 'Error al realizar la Venta';
            }
        }
        echo json_encode($msg);
        die();
    }
    public function generarPdf($id_compra)
    {
        $empresa = $this->model->getEmpresa();
        $productos = $this->model->getProCompra($id_compra);
        //rint_r($productos);
        //exit;
        require('Libraries/fpdf/fpdf.php');

        $pdf = new FPDF('P', 'mm', array(80, 150));
        $pdf->AddPage();
        $pdf->setMargins(5, 0, 0);

        $pdf->SetTitle('Reporte Compra');
        $pdf->SetFont('Arial', 'B', 14);
        $pdf->Cell(65, 10, utf8_decode($empresa['nombre']), 0, 3, 'L');
        $pdf->Image(base_url . 'Assets/Img/logo.png', 55, 15, 20, 20);

        $pdf->Ln(1);

        $pdf->SetFont('Arial', 'B', 6);
        $pdf->Cell(15, 3, 'RFC: ', 0, 0, 'L');
        $pdf->SetFont('Arial', '', 6);
        $pdf->Cell(20, 3, $empresa['ruc'], 0, 1, 'L');

        $pdf->SetFont('Arial', 'B', 6);
        $pdf->Cell(15, 3, utf8_decode('Dirección:'), 0, 0, 'L');
        $pdf->SetFont('Arial', '', 6);
        $pdf->Cell(20, 3, $empresa['direccion'], 0, 1, 'L');

        $pdf->SetFont('Arial', 'B', 6);
        $pdf->Cell(15, 3, utf8_decode('Teléfono:'), 0, 0, 'L');
        $pdf->SetFont('Arial', '', 6);
        $pdf->Cell(20, 3, $empresa['telefono'], 0, 1, 'L');


        $pdf->SetFont('Arial', 'B', 6);
        $pdf->Cell(15, 3, 'Compra #:', 0, 0, 'L');
        $pdf->SetFont('Arial', '', 6);
        $pdf->Cell(20, 3, $id_compra, 0, 1, 'L');

        $pdf->Ln();
        //ENCABEZADO DE PRODUCTOS


        $pdf->setTextColor(255, 255, 255);
        $pdf->SetFont('Arial', 'B', 7);
        $pdf->Cell(10, 5, 'Cant', 0, 0, 'L', true);
        $pdf->Cell(35, 5, utf8_decode('Descripción'), 0, 0, 'L', true);
        $pdf->Cell(10, 5, 'Precio', 0, 0, 'L', true);
        $pdf->Cell(15, 5, 'Subtotal', 0, 1, 'L', true);

        $pdf->setFillColor(255, 255, 255);
        $pdf->setTextColor(0, 0, 0);

        $total = 0.00;
        foreach ($productos as $row) {
            $total = $total + $row['sub_total'];
            $pdf->SetFont('Arial', '', 7);
            $pdf->Cell(10, 5, $row['cantidad'], 0, 0, 'L');
            $pdf->Cell(35, 5, utf8_decode($row['descripcion']), 0, 0, 'L');
            $pdf->Cell(10, 5, $row['precio'], 0, 0, 'L');
            $pdf->Cell(15, 5, number_format($row['sub_total'], 2, '.', ','), 0, 1, 'L');
        }
        $pdf->Ln();

        $pdf->SetFont('Arial', 'B', 8);
        $pdf->Cell(70, 5, 'Total a Pagar', 0, 1, 'R');
        $pdf->Cell(55, 5, '$', 0, 0, 'R', true);
        $pdf->Cell(15, 5, number_format($total, 2, '.', ','), 0, 1, 'R');

        $pdf->Output();
    }
    public function historial()
    {
        $this->views->getView($this, "historial");
    }
    public function listar_historial()
    {
        $data = $this->model->getHistorialCompras();
        for ($i = 0; $i < count($data); $i++) {

            if ($data[$i]['estado'] == 1) {
                $data[$i]['estado'] = '<span class="badge bg-success">Completada</span>';
                $data[$i]['acciones'] = '<div>
                <button class ="btn btn-warning" onclick="btnAnularC(' . $data[$i]['id'] . ')"><i class= "fas fa-ban"></i></button>
                <a class="btn btn-danger"  href ="' . base_url . "Compras/generarPdf/" . $data[$i]['id'] . '" target="_blank"><i class= "fas fa-file-pdf"></i> </a>
                </div>';
            } else {
                $data[$i]['estado'] = '<span class="badge bg-danger">Eliminada</span>';
                $data[$i]['acciones'] = '<div>
                <a class="btn btn-danger"  href ="' . base_url . "Compras/generarPdf/" . $data[$i]['id'] . '" target="_blank"><i class= "fas fa-file-pdf"></i> </a>
                </div>';
            }
        }
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
        die();
    }
    public function listar_historial_venta()
    {
        $data = $this->model->getHistorialVentas();
        for ($i = 0; $i < count($data); $i++) {
            $data[$i]['acciones'] = '<div><a class="btn btn-danger"  href ="' . base_url . "Compras/generarPdfVenta/" . $data[$i]['id'] . '" target="_blank"><i class= "fas fa-file-pdf"></i> </a></div>';
        }
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
        die();
    }
    public function generarPdfVenta($id_venta)
    {
        $empresa = $this->model->getEmpresa();
        $descuento = $this->model->getDescuento($id_venta);
        $productos = $this->model->getProVenta($id_venta);
        //rint_r($productos);
        //exit;
        require('Libraries/fpdf/fpdf.php');

        $pdf = new FPDF('P', 'mm', array(80, 150));
        $pdf->AddPage();
        $pdf->setMargins(5, 0, 0);

        $pdf->SetTitle('Reporte Venta');
        $pdf->SetFont('Arial', 'B', 14);
        $pdf->Cell(65, 10, utf8_decode($empresa['nombre']), 0, 3, 'L');
        $pdf->Image(base_url . 'Assets/Img/logo.png', 55, 15, 20, 20);

        $pdf->Ln(1);

        $pdf->SetFont('Arial', 'B', 6);
        $pdf->Cell(15, 3, 'RFC: ', 0, 0, 'L');
        $pdf->SetFont('Arial', '', 6);
        $pdf->Cell(20, 3, $empresa['ruc'], 0, 1, 'L');

        $pdf->SetFont('Arial', 'B', 6);
        $pdf->Cell(15, 3, utf8_decode('Dirección:'), 0, 0, 'L');
        $pdf->SetFont('Arial', '', 6);
        $pdf->Cell(20, 3, $empresa['direccion'], 0, 1, 'L');

        $pdf->SetFont('Arial', 'B', 6);
        $pdf->Cell(15, 3, utf8_decode('Teléfono:'), 0, 0, 'L');
        $pdf->SetFont('Arial', '', 6);
        $pdf->Cell(20, 3, $empresa['telefono'], 0, 1, 'L');


        $pdf->SetFont('Arial', 'B', 6);
        $pdf->Cell(15, 3, 'Venta #:', 0, 0, 'L');
        $pdf->SetFont('Arial', '', 6);
        $pdf->Cell(20, 3, $id_venta, 0, 1, 'L');

        $pdf->Ln();

        //ENCABEZADO DE clientes
        $pdf->setFillColor(0, 0, 0);
        $pdf->setTextColor(255, 255, 255);
        $pdf->SetFont('Arial', 'B', 7);
        $pdf->Cell(25, 5, 'Cliente ', 0, 0, 'L', true);
        $pdf->Cell(20, 5, utf8_decode('Teléfono'), 0, 0, 'L', true);
        $pdf->Cell(28, 5, utf8_decode('Domicilio'), 0, 1, 'L', true);
        $pdf->setTextColor(0, 0, 0);

        $clientes = $this->model->clientesVenta($id_venta);

        $pdf->SetFont('Arial', '', 7);
        $pdf->Cell(25, 5, utf8_decode($clientes['nombre']), 0, 0, 'L');
        $pdf->Cell(20, 5, $clientes['telefono'], 0, 0, 'L');
        $pdf->Cell(28, 5, utf8_decode($clientes['direccion']), 0, 1, 'L');
        $pdf->Ln();

        //ENCABEZADO DE PRODUCTOS
        $pdf->setFillColor(0, 0, 0);
        $pdf->setTextColor(255, 255, 255);
        $pdf->SetFont('Arial', 'B', 7);
        $pdf->Cell(7, 5, 'Cant', 0, 0, 'L', true);
        $pdf->Cell(31, 5, utf8_decode('Descripción'), 0, 0, 'L', true);
        $pdf->Cell(10, 5, 'Precio', 0, 0, 'L', true);
        $pdf->Cell(10, 5, 'Desc', 0, 0, 'L', true);
        $pdf->Cell(15, 5, 'Subtotal', 0, 1, 'L', true);
        $pdf->setTextColor(0, 0, 0);
        $total = 0.00;

        foreach ($productos as $row) {
            $total = $total + $row['sub_total'];
            $pdf->SetFont('Arial', '', 7);
            $pdf->Cell(7, 5, $row['cantidad'], 0, 0, 'L');
            $pdf->Cell(31, 5, utf8_decode($row['descripcion']), 0, 0, 'L');
            $pdf->Cell(10, 5, $row['precio'], 0, 0, 'L');
            $pdf->Cell(10, 5, $row['descuento'], 0, 0, 'L');
            $pdf->Cell(15, 5, number_format($row['sub_total'], 2, '.', ','), 0, 1, 'L');
        }

        $pdf->Ln();

        $pdf->SetFont('Arial', 'B', 8);
        $pdf->Cell(70, 5, 'Descuento en la compra', 0, 1, 'R');
        $pdf->Cell(55, 5, '$', 0, 0, 'R');
        $pdf->Cell(15, 5, number_format($descuento['total'], 2, '.', ','), 0, 1, 'R');

        $pdf->SetFont('Arial', 'B', 8);
        $pdf->Cell(70, 5, 'Total a Pagar', 0, 1, 'R');
        $pdf->Cell(55, 5, '$', 0, 0, 'R');
        $pdf->Cell(15, 5, number_format($total, 2, '.', ','), 0, 1, 'R');

        $pdf->Output();
    }
    public function calcularDescuento($datos)
    {
        $array = explode(",", $datos);
        $id = $array[0];
        $desc = $array[1];
        if (empty($id) || empty($desc)) {
            $msg = array('msg' => 'Error', 'icono' => 'error');
        } else {
            $descuento_actual = $this->model->verificarDescuento($id);
            $descuento_total = $descuento_actual['descuento'] + $desc;
            $sub_total = ($descuento_actual['cantidad'] * $descuento_actual['precio']) - $descuento_total;
            $data = $this->model->actualizarDesc($descuento_total, $sub_total, $id);
            if ($data == "ok") {
                $msg = array('msg' => 'Descuento Aplicado', 'icono' => 'success');
            } else {
                $msg = array('msg' => 'Error al aplicar el descuento', 'icono' => 'error');
            }
        }
        echo json_encode($msg);
        die();
    }
    public function anularCompra($id_compra)
    {
        $data = $this->model->getProCompra($id_compra);
        $anular = $this->model->getAnular($id_compra);
        foreach ($data as $row) {
            $stock_actual = $this->model->getProductos($row['id_producto']);
            $stock = $stock_actual['cantidad'] - $row['cantidad'];
            $this->model->actualizarStock($stock, $row['id_producto']);
        }
        if ($anular == 'ok') {
            $msg = array('msg' => 'Compra anulada', 'icono' => 'success');
        } else {
            $msg = array('msg' => 'Error al anular', 'icono' => 'error');
        }
        echo json_encode($msg);
        die();
    }
}
