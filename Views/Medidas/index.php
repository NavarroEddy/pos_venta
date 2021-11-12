
<?php include "Views/Templates/header.php"; ?>

<ol class="breadcrumb mb-4">

     <li class="breadcrumb-item active">Medidas</li>

</ol>
<button class="btn btn-primary mb-4" type="button" onclick ="frmMedidas();">Nueva <i class="fas fa-ruler me-xxl-2"></i></button>
<table class="table table-light" id="tblMedidas">
    <thead class="table-dark">
        <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Nombre Corto</th>
            <th>Estado</th>
            <th>Acciones</th>
        </tr>
    </thead>
    <tbody>
    
    </tbody>
</table>
<div id="nueva_medida" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="my-modal-title" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header bg-primary">
                <h5 class="modal-title text-white" id="title">Nueva Medida</h5>
                <button type="button" class="btn-close cerrarModal" aria-label="Close" data-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <form method="post" id='frmMedidas'>
                    <div class="form-floating mb-3">
                        <input type="hidden" id="id" name='id'>
                        <input id="nombre" class="form-control m-1 " type="text" name="nombre" placeholder = "Nombre de la Medida">
                        <label for="medida">Medida</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input id="nombre_corto" class="form-control m-1" type="text" name="nombre_corto" placeholder = "Nombre Corto de la Medida">
                        <label for="medida">Abrevitura</label>
                    </div>
                    <button class="btn btn-primary m-2" type="button" onclick ="registrarMedida(event);" id="btnAccion">Regsitrar</button>
                    <button class="btn btn-danger cerrarModal m-2" type="button">Cancelar</button>
                </form>
            </div>
        </div>
    </div>
</div>
<?php include "Views/Templates/footer.php";?>
