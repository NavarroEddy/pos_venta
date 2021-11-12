<?php include "Views/Templates/header.php"; ?>
<div class="card">
    <div class="card">
        <div class="card-header bg-opacity-55 text-white bg-primary">
            <h4>Nueva Venta</h4>
        </div>
    </div>
    <div class="card-body">
        <form id="frmVenta">
            <div class="row">
                <div class="col-md-3">
                    <div class="form-floating mb-3">
                        <input type="hidden" id="id" name="id">
                        <input id="codigo" class="form-control" type="text" name="codigo" placeholder="Codigo de barras" onkeyup="buscarCodigoVenta(event)">
                        <label for="codigo"><i class="fas fa-barcode me-xxl-2"></i>Codigo de barras</label>
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="form-floating mb-3">
                        <input id="nombre" class="form-control" type="text" name="nombre" placeholder="Descripcion del Producto" disabled>
                        <label for="nombre">Descripcion</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-floating mb-3">
                        <input id="cantidad" class="form-control" type="number" name="cantidad" onkeyup="calcularPrecioVenta(event)" disabled>
                        <label for="cantidad">Cantidad</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-floating mb-3">
                        <input id="precio" class="form-control" type="text" name="precio" placeholder="Precio venta" disabled>
                        <label for="precio">Precio</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-floating mb-3">
                        <input id="sub_total" class="form-control" type="text" name="sub_total" placeholder="Sub total" disabled>
                        <label for="sub_total">Sub total</label>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
<table class="table table-light table-bordered table-hover">
    <thead class="table-dark">
        <tr>
            <th>ID</th>
            <th>Descripcion</th>
            <th>Cantidad</th>
            <th>Aplicar</th>
            <th>Descuento</th>
            <th>Precio</th>
            <th>Subtotal</th>
            <th>Acciones</th>
        </tr>
    </thead>

    <tbody id="tblDetalleVenta">
    </tbody>
</table>
<div class="row">
    <div class="col-md-4 me-auto">
        <div class="form-group mb-3">
            <label for="cliente">Seleccionar Cliente</label>
            <select id="cliente" class="form-control" name="cliente">
                <?php foreach ($data as $row) {  ?>

                    <option value="<?php echo $row['id']; ?>"><?php echo $row['nombre']; ?> </option>
                <?php  }  ?>
            </select>
        </div>
    </div>
    <div class="col-md-3 ms-auto">
        <div class="form-floating mb-3">
            <input id="total" class="form-control" type="text" name="total" placeholder="Total" disabled>
            <label for="total" class="fw-bold">Total a Pagar</label>
            <button class="btn btn-primary mt-2 w-100" type="button" onclick="procesar(0)">Generar venta</button>
        </div>
    </div>
</div>

<?php include "Views/Templates/footer.php"; ?>