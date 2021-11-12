</div>
</main>
<footer class="py-4 bg-light mt-auto">
    <div class="container-fluid px-4">
        <div class="d-flex align-items-center justify-content-between small">
            <div class="text-muted">Copyright &copy; E. Navarro System 2021</div>
            <div>
                <a href="#">Privacy Policy</a>
                &middot;
                <a href="#">Terms &amp; Conditions</a>
            </div>
        </div>
    </div>
</footer>
</div>
</div>
<div id="cambiarPass" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="my-modal-title" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header bg-dark text-white">
                <h5 class="modal-title">Modificar Contraseña</h5>
                <button type="button" class="btn-close cerrarModal" aria-label="Close" data-dismiss="modal">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form id="frmCambiarPass" onsubmit="frmCambiarPass">
                    <div class="form-floating mb-3">
                        <input id="clave_actual" class="form-control" type="password" name="clave_actual" placeholder="Contraseña Actual">
                        <label for="clave_actual">Contraseña Actual</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input id="clave_nueva" class="form-control" type="password" name="clave_nueva" placeholder="Contraseña Nueva">
                        <label for="clave_nueva">Contraseña Nueva</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input id="confirmar_clave" class="form-control" type="password" name="confirmar_clave" placeholder="Confirmar Contraseña">
                        <label for="confirmar_clave">Confirmar Contraseña</label>
                    </div>
                    <button class="btn btn-primary" type="submit">Modificar</button>
                </form>
            </div>
        </div>
    </div>
</div>
<script src="<?php echo base_url; ?>Assets/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
<script src="<?php echo base_url; ?>Assets/js/jquery-3.6.0.min.js" crossorigin="anonymous"></script>
<script src="<?php echo base_url; ?>Assets/js/scripts.js"></script>
<script src="<?php echo base_url; ?>Assets/js/jquery.dataTables.js" crossorigin="anonymous"></script>
<script src="<?php echo base_url; ?>Assets/DataTables/datatables.min.js" crossorigin="anonymous"></script>
<script src="<?php echo base_url; ?>Assets/demo/datatables-demo.js"></script>
<script src="<?php echo base_url; ?>Assets/js/datatables-simple-demo.js"></script>
<script src="https://cdn.jsdelivr.net/npm/simple-datatables@latest" crossorigin="anonymous"></script>
<script>
    const base_url = "<?php echo base_url; ?>";
</script>
<script src="<?php echo base_url; ?>Assets/js/sweetalert2.all.min.js"></script>
<script src="<?php echo base_url; ?>Assets/js/select2.min.js"></script>
<script src="<?php echo base_url; ?>Assets/js/chart.min.js"></script>
<script src="<?php echo base_url; ?>Assets/js/funciones.js"></script>
</body>

</html>