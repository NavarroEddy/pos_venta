<?php include "Views/Templates/header.php"; ?>
<ol class="breadcrumb mb-4">

    <li class="breadcrumb-item active">Arqueo de caja</li>

</ol>
<button class="btn btn-primary mb-4" type="button" onclick="arqueoCaja();">Nueva <i class="fas fa-cash-register me-xxl-2"></i></button>
<button class="btn btn-warning mb-4" id="btnCerrarCaja" type="button" onclick="cerrarCaja();">Cerrar Caja</button>
<table class="table table-light" id="t_arqueo">
    <thead class="table-dark">
        <tr>
            <th>Id</th>
            <th>Saldo Inicial</th>
            <th>Monto de Ventas del dia</th>
            <th>Fecha Apertura</th>
            <th>Fecha Cierre</th>
            <th>Cantidad de Ventas</th>
            <th>Saldo Total</th>
            <th>Estado</th>
        </tr>
    </thead>
    <tbody>

    </tbody>
</table>
<div id="abrir_caja" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="my-modal-title" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header bg-primary">
                <h5 class="modal-title text-white" id="title">Arqueo Caja</h5>
                <button type="button" class="btn-close cerrarModal" aria-label="Close" data-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <form method="post" id='frmAbrirCaja'onsubmit="abrirArqueo(event);">
                    <div class="form-group">
                        <input type="hidden" id="id" name='id'>
                        <label for="monto_inicial">Saldo Inicial</label>
                        <input id="monto_inicial" class="form-control m-" type="text" name="monto_inicial" placeholder="Ingrese monto inicial" required >
                    </div>
                     <div id="ocultar_campos">
                        <div class="form-group">
                            <label for="monto_final">Monto de Ventas del dia</label>
                            <input id="monto_final" class="form-control" type="text" disabled>
                        </div>
                        <div class="form-group">
                            <label for="total_ventas">Cantidad total de Ventas</label>
                            <input id="total_ventas" class="form-control" type="text" disabled>
                        </div>
                        <div class="form-group">
                            <label for="monto_general">Saldo Total al Cierre</label>
                            <input id="monto_general" class="form-control" type="text" disabled>
                        </div>  
                     </div>
                    <button class="btn btn-primary m-2" type="submit" id="btnAccion">Abrir Caja</button>
                    <button class="btn btn-danger cerrarModal m-2" type="button">Cancelar</button>
                </form>
            </div>
        </div>
    </div>
</div>
<?php include "Views/Templates/footer.php"; ?>