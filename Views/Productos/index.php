
<?php include "Views/Templates/header.php"; ?>

<ol class="breadcrumb mb-4">

     <li class="breadcrumb-item active">Productos</li>

</ol>
<button class="btn btn-primary mb-4" type="button" onclick ="frmProducto();">Nuevo <i class="fab fa-product-hunt"></i></button>
<div class="table-responsive"><table class="table table-light" id="tblProductos">
    <thead class="table-dark">
        <tr>
            <th>Id</th>
            <th>Imagen del Producto</th>
            <th>Codigo</th>
            <th>Descripcion</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Estado</th>
            <th>Acciones</th>
        </tr>
    </thead>
    <tbody>
    
    </tbody>
</table></div>
<div id="nuevo_producto" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="my-modal-title" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header bg-primary">
                <h5 class="modal-title text-white" id="title">Nuevo Producto</h5>
                <button type="button" class="btn-close cerrarModal" aria-label="Close" data-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <form method="post" id='frmProducto'>        
                    <div class="row" >
                        <div class="col-md-6">
                            <div class="form-floating mb-3 ">
                                <input type="hidden" id="id" name='id'>
                                <input id="codigo" class="form-control m-1" type="text" name="codigo" placeholder = "Codigo de barras">
                                <label for="codigo">Codigo de barras</label>
                            </div>
                        </div>
                    <div class="col-md-6">
                         <div class="form-floating mb-3">
                             <input id="nombre" class="form-control m-1" type="text" name="nombre" placeholder = "Nombre del Producto">
                             <label for="nombre">Descripcion</label>
                        </div>
                    </div>
                        <div class="col-md-6">
                           <div class="form-floating mb-3">
                               <input id="precio_compra" class="form-control m-1" type="text" name="precio_compra" placeholder ="Precio Compra">
                               <label for="precio_compra">Precio Compra</label>
                           </div>
                        </div>
                            <div class="col-md-6">
                             <div class="form-floating mb-3">
                                 <input id="precio_venta" class="form-control m-1" type="text" name="precio_venta" placeholder ="Precio Venta">
                                 <label for="precio_venta">Precio Venta</label>
                             </div>
                            </div>
                        </div>
                        <div class="row" >
                        <div class="col-md-6">
                            <div class="form-floating mb-3">
                                <select id="medida" class="form-control m-1" name="medida">
                                    <?php foreach ($data['medidas'] as $row ) { ?>
                                        <option value = "<?php echo $row['id'] ?>"><?php echo $row['nombre'] ?></option>
                                        <?php } ?>
                                    </select>
                                    <label for="medida">Medidas</label>
                            </div>
                         </div>
                        <div class="col-md-6">
                            <div class="form-floating mb-3">
                                <select id="categoria" class="form-control m-1" name="categoria">
                                    <?php foreach ($data['categorias'] as $row ) { ?>
                                        <option value = "<?php echo $row['id'] ?>"><?php echo $row['nombre'] ?></option>
                                        <?php } ?>
                                    </select>
                                    <label for="categoria">Categoria</label>
                            </div>
                        </div>
                        <div class="col md-12">
                            <div class="form-floating mb-3">
                                <div class="card border-primary">
                                    <div class="card-body">
                                        <label for="imagen" id="icon-image" class= "btn btn-primary"><i class ="fas fa-image"></i></label>
                                        <span id="icon-cerrar"></span>
                                        <input id="imagen" class="d-none" type="file" name="imagen" onchange="preview(event)">
                                        <input type="hidden" id="foto_actual" name = "foto_actual">
                                        <input type="hidden" id="foto_delete" name = "foto_delete">
                                        <img class="img-thumbnail" id="img-preview">
                                        <label>Foto</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-primary m-2" type="button" onclick ="registrarPro(event);" id="btnAccion">Regsitrar</button>
                    <button class="btn btn-danger cerrarModal m-2" type="button">Cancelar</button>
                </form>
            </div>
        </div>
    </div>
</div>
<?php include "Views/Templates/footer.php";?>
