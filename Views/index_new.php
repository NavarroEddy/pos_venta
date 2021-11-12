<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap" rel="stylesheet" />

  <link rel="stylesheet" href="<?php echo base_url; ?>Assets/fonts/icomoon/style.css" />

  <link rel="stylesheet" href="<?php echo base_url; ?>Assets/css/owl.carousel.min.css" />

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="<?php echo base_url; ?>Assets/css/bootstrap.min.css" />

  <!-- Style -->
  <link rel="stylesheet" href="<?php echo base_url; ?>Assets/css/style.css" />

  <title>Ingresar a Sistema</title>
</head>

<body>
  <div class="d-lg-flex half">
    <div class="bg order-1 order-md-2" style="background-image: url('<?php echo base_url; ?>Assets/img/bg_1.jpg')"></div>
    <div class="contents order-2 order-md-1">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-7">
            <h3>Ingresar a <strong>Sistema Ventas</strong></h3>
            <p class="mb-4">
              Sistema para la administracion de ventas en sitio
            </p>
            <form id="frmLogin">
              <div class="form-group first">
                <label for="usuario"><i class="fas fa-user"></i>Usuario</label>
                <input type="text" class="form-control" id="usuario" name="usuario" placeholder="Ingrese Usuario" />
              </div>

              <div class="form-group first">
                <label for="clave"><i class="fas fa-key"></i>Contraseña</label>
                <input type="password" class="form-control" id="clave" name="clave" placeholder="Ingrese Contraseña" />
              </div>
              <div class="alert alert-danger text-center d-none" id="alerta" role="alert"></div>

              <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                <button class="btn btn-primary w-100" type="submit" onclick="frmLogin(event);">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script src="<?php echo base_url; ?>Assets/js/jquery-3.3.1.min.js"></script>
  <script src="<?php echo base_url; ?>Assets/js/popper.min.js"></script>
  <script src="<?php echo base_url; ?>Assets/js/bootstrap.min.js"></script>
  <script src="<?php echo base_url; ?>Assets/js/main.js"></script>
  <script src="<?php echo base_url; ?>Assets/js/scripts.js"></script>
  <script>
    const base_url = "<?php echo base_url; ?>";
  </script>
  <script src="<?php echo base_url; ?>Assets/js/login.js"></script>
</body>

</html>