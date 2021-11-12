<?php include "Views/Templates/header.php"; ?>

<ol class="breadcrumb mb-4">

    <li class="breadcrumb-item active">Clientes</li>

</ol>
<button class="btn btn-primary mb-4" type="button" onclick="frmCliente();">Nuevo <i class="fas fa-user-plus"></i></button>
<table class="table table-light" id="tblClientes">
    <thead class="table-dark">
        <tr>
            <th>Id</th>
            <th>INE</th>
            <th>Nombre</th>
            <th>Telefono</th>
            <th>Direccion</th>
            <th>Estado</th>
            <th>Acciones</th>
        </tr>
    </thead>
    <tbody>

    </tbody>
</table>
<div id="nuevo_cliente" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="my-modal-title" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header bg-primary">
                <h5 class="modal-title text-white" id="title">Nuevo Cliente</h5>
                <button type="button" class="btn-close cerrarModal" aria-label="Close" data-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <form method="post" id='frmCliente'>
                    <div class="form-floating mb-3">
                        <input type="hidden" id="id" name='id'>
                        <input id="dni" class="form-control m-1" type="text" name="dni" placeholder="Documento de Identidad">
                        <label for="dni">INE</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input id="nombre" class="form-control m-1" type="text" name="nombre" placeholder="Nombre del Cliente">
                        <label for="nombre">Nombre</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input id="telefono" class="form-control m-1" type="text" name="telefono" placeholder="Telefono">
                        <label for="telefono">Telefono</label>
                    </div>
                    <div class="form-floating mb-3">
                        <textarea id="direccion" class="form-control m-1" name="direccion" rows="3" placeholder="Direccion"></textarea>
                        <label for="direccion">Direccion</label>
                    </div>
                    <button class="btn btn-primary m-2" type="button" onclick="registrarCli(event);" id="btnAccion">Regsitrar</button>
                    <button class="btn btn-danger cerrarModal m-2" type="button">Cancelar</button>
                </form>
            </div>
        </div>
    </div>
</div>
<?php include "Views/Templates/footer.php"; ?>