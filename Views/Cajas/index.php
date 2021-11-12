<?php include "Views/Templates/header.php"; ?>
<ol class="breadcrumb mb-4">

    <li class="breadcrumb-item active">Cajas</li>

</ol>
<button class="btn btn-primary mb-4" type="button" onclick="frmCajas();">Nueva Caja <i class="fas fa-cash-register me-xxl-2"></i></button>
<table class="table table-light" id="tblCajas">
    <thead class="table-dark">
        <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Estado</th>
            <th>Acciones</th>
        </tr>
    </thead>
    <tbody>

    </tbody>
</table>
<div id="nueva_caja" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="my-modal-title" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header bg-primary">
                <h5 class="modal-title text-white" id="title">Nueva Caja</h5>
                <button type="button" class="btn-close cerrarModal" aria-label="Close" data-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <form method="post" id='frmCajas'>
                    <div class="form-floating mb-3">
                        <input type="hidden" id="id" name='id'>
                        <input id="caja" class="form-control m-" type="text" name="caja" placeholder="Nombre de la Caja">
                        <label for="dni">Caja</label>
                    </div>
                    <button class="btn btn-primary m-2" type="button" onclick="registrarCaja(event);" id="btnAccion">Regsitrar</button>
                    <button class="btn btn-danger cerrarModal m-2" type="button">Cancelar</button>
                </form>
            </div>
        </div>
    </div>
</div>
<?php include "Views/Templates/footer.php"; ?>