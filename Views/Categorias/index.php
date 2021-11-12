
<?php include "Views/Templates/header.php"; ?>

<ol class="breadcrumb mb-4">

     <li class="breadcrumb-item active">Categorias</li>

</ol>
<button class="btn btn-primary mb-4" type="button" onclick ="frmCategoria();">Nueva <i class="fas fa-certificate  me-xxl-2" ></i></button>
<table class="table table-light" id="tblCategorias">
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
<div id="nueva_categoria" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="my-modal-title" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header bg-primary">
                <h5 class="modal-title text-white" id="title">Nueva Categoria</h5>
                <button type="button" class="btn-close cerrarModal" aria-label="Close" data-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <form method="post" id='frmCategoria'>
                    <div class="form-floating mb-3">
                        <input type="hidden" id="id" name='id'>
                        <input id="nombre" class="form-control m-1" type="text" name="nombre" placeholder = "Nombre de la Categoria">
                        <label for="categoria">Categoria</label>
                    </div>
                    <button class="btn btn-primary m-2" type="button" onclick ="registrarCat(event);" id="btnAccion">Regsitrar</button>
                    <button class="btn btn-danger cerrarModal m-2" type="button">Cancelar</button>
                </form>
            </div>
        </div>
    </div>
</div>
<?php include "Views/Templates/footer.php";?>
