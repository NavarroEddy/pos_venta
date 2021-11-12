let tblUsuarios,
  tblClientes,
  tblCajas,
  tblMedidas,
  tblCategorias,
  tblProductos,
  t_h_c,
  t_arqueo;
document.addEventListener("DOMContentLoaded", function () {
  $("#cliente").select2();

  tblUsuarios = $("#tblUsuarios").DataTable({
    ajax: {
      url: base_url + "Usuarios/listar",
      dataSrc: "",
    },
    columns: [
      { data: "id" },
      { data: "usuario" },
      { data: "nombre" },
      { data: "caja" },
      { data: "estado" },
      { data: "acciones" },
    ],
    language: {
      url: "//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json",
    },
    dom:
      "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
      "<'row'<'col-sm-12'tr>>" +
      "<'row'<'col-sm-5'i><'col-sm-7'p>>",
    buttons: [
      {
        //Botón para Excel
        extend: "excelHtml5",
        footer: true,
        title: "Archivo",
        filename: "Export_File",

        //Aquí es donde generas el botón personalizado
        text: '<span class="badge badge-success"><i class="fas fa-file-excel"></i></span>',
      },
      //Botón para PDF
      {
        extend: "pdfHtml5",
        download: "open",
        footer: true,
        title: "Reporte de usuarios",
        filename: "Reporte de usuarios",
        text: '<span class="badge  badge-danger"><i class="fas fa-file-pdf"></i></span>',
        exportOptions: {
          columns: [0, ":visible"],
        },
      },
      //Botón para copiar
      {
        extend: "copyHtml5",
        footer: true,
        title: "Reporte de usuarios",
        filename: "Reporte de usuarios",
        text: '<span class="badge  badge-primary"><i class="fas fa-copy"></i></span>',
        exportOptions: {
          columns: [0, ":visible"],
        },
      },
      //Botón para print
      {
        extend: "print",
        footer: true,
        filename: "Export_File_print",
        text: '<span class="badge badge-light"><i class="fas fa-print"></i></span>',
      },
      //Botón para cvs
      {
        extend: "csvHtml5",
        footer: true,
        filename: "Export_File_csv",
        text: '<span class="badge  badge-success"><i class="fas fa-file-csv"></i></span>',
      },
      {
        extend: "colvis",
        text: '<span class="badge  badge-info"><i class="fas fa-columns"></i></span>',
        postfixButtons: ["colvisRestore"],
      },
    ],
  });
  //FIN DE TABLA USUARIOS************************************
  tblClientes = $("#tblClientes").DataTable({
    ajax: {
      url: base_url + "Clientes/listar",
      dataSrc: "",
    },
    columns: [
      { data: "id" },
      { data: "dni" },
      { data: "nombre" },
      { data: "telefono" },
      { data: "direccion" },
      { data: "estado" },
      { data: "acciones" },
    ],
    language: {
      url: "//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json",
    },
    dom:
      "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
      "<'row'<'col-sm-12'tr>>" +
      "<'row'<'col-sm-5'i><'col-sm-7'p>>",
    buttons: [
      {
        //Botón para Excel
        extend: "excelHtml5",
        footer: true,
        title: "Archivo",
        filename: "Export_File",

        //Aquí es donde generas el botón personalizado
        text: '<span class="badge badge-success"><i class="fas fa-file-excel"></i></span>',
      },
      //Botón para PDF
      {
        extend: "pdfHtml5",
        download: "open",
        footer: true,
        title: "Reporte de usuarios",
        filename: "Reporte de usuarios",
        text: '<span class="badge  badge-danger"><i class="fas fa-file-pdf"></i></span>',
        exportOptions: {
          columns: [0, ":visible"],
        },
      },
      //Botón para copiar
      {
        extend: "copyHtml5",
        footer: true,
        title: "Reporte de usuarios",
        filename: "Reporte de usuarios",
        text: '<span class="badge  badge-primary"><i class="fas fa-copy"></i></span>',
        exportOptions: {
          columns: [0, ":visible"],
        },
      },
      //Botón para print
      {
        extend: "print",
        footer: true,
        filename: "Export_File_print",
        text: '<span class="badge badge-light"><i class="fas fa-print"></i></span>',
      },
      //Botón para cvs
      {
        extend: "csvHtml5",
        footer: true,
        filename: "Export_File_csv",
        text: '<span class="badge  badge-success"><i class="fas fa-file-csv"></i></span>',
      },
      {
        extend: "colvis",
        text: '<span class="badge  badge-info"><i class="fas fa-columns"></i></span>',
        postfixButtons: ["colvisRestore"],
      },
    ],
  });
  ///FIN TABLA CLIENTES*************************************
  tblCajas = $("#tblCajas").DataTable({
    ajax: {
      url: base_url + "Cajas/listar",
      dataSrc: "",
    },
    columns: [
      { data: "id" },
      { data: "caja" },
      { data: "estado" },
      { data: "acciones" },
    ],
    language: {
      url: "//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json",
    },
    dom:
      "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
      "<'row'<'col-sm-12'tr>>" +
      "<'row'<'col-sm-5'i><'col-sm-7'p>>",
    buttons: [
      {
        //Botón para Excel
        extend: "excelHtml5",
        footer: true,
        title: "Archivo",
        filename: "Export_File",

        //Aquí es donde generas el botón personalizado
        text: '<span class="badge badge-success"><i class="fas fa-file-excel"></i></span>',
      },
      //Botón para PDF
      {
        extend: "pdfHtml5",
        download: "open",
        footer: true,
        title: "Reporte de usuarios",
        filename: "Reporte de usuarios",
        text: '<span class="badge  badge-danger"><i class="fas fa-file-pdf"></i></span>',
        exportOptions: {
          columns: [0, ":visible"],
        },
      },
      //Botón para copiar
      {
        extend: "copyHtml5",
        footer: true,
        title: "Reporte de usuarios",
        filename: "Reporte de usuarios",
        text: '<span class="badge  badge-primary"><i class="fas fa-copy"></i></span>',
        exportOptions: {
          columns: [0, ":visible"],
        },
      },
      //Botón para print
      {
        extend: "print",
        footer: true,
        filename: "Export_File_print",
        text: '<span class="badge badge-light"><i class="fas fa-print"></i></span>',
      },
      //Botón para cvs
      {
        extend: "csvHtml5",
        footer: true,
        filename: "Export_File_csv",
        text: '<span class="badge  badge-success"><i class="fas fa-file-csv"></i></span>',
      },
      {
        extend: "colvis",
        text: '<span class="badge  badge-info"><i class="fas fa-columns"></i></span>',
        postfixButtons: ["colvisRestore"],
      },
    ],
  });
  ///FIN TABLA CAJAS*************************************
  tblMedidas = $("#tblMedidas").DataTable({
    ajax: {
      url: base_url + "Medidas/listar",
      dataSrc: "",
    },
    columns: [
      { data: "id" },
      { data: "nombre" },
      { data: "nombre_corto" },
      { data: "estado" },
      { data: "acciones" },
    ],
    language: {
      url: "//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json",
    },
    dom:
      "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
      "<'row'<'col-sm-12'tr>>" +
      "<'row'<'col-sm-5'i><'col-sm-7'p>>",
    buttons: [
      {
        //Botón para Excel
        extend: "excelHtml5",
        footer: true,
        title: "Archivo",
        filename: "Export_File",

        //Aquí es donde generas el botón personalizado
        text: '<span class="badge badge-success"><i class="fas fa-file-excel"></i></span>',
      },
      //Botón para PDF
      {
        extend: "pdfHtml5",
        download: "open",
        footer: true,
        title: "Reporte de usuarios",
        filename: "Reporte de usuarios",
        text: '<span class="badge  badge-danger"><i class="fas fa-file-pdf"></i></span>',
        exportOptions: {
          columns: [0, ":visible"],
        },
      },
      //Botón para copiar
      {
        extend: "copyHtml5",
        footer: true,
        title: "Reporte de usuarios",
        filename: "Reporte de usuarios",
        text: '<span class="badge  badge-primary"><i class="fas fa-copy"></i></span>',
        exportOptions: {
          columns: [0, ":visible"],
        },
      },
      //Botón para print
      {
        extend: "print",
        footer: true,
        filename: "Export_File_print",
        text: '<span class="badge badge-light"><i class="fas fa-print"></i></span>',
      },
      //Botón para cvs
      {
        extend: "csvHtml5",
        footer: true,
        filename: "Export_File_csv",
        text: '<span class="badge  badge-success"><i class="fas fa-file-csv"></i></span>',
      },
      {
        extend: "colvis",
        text: '<span class="badge  badge-info"><i class="fas fa-columns"></i></span>',
        postfixButtons: ["colvisRestore"],
      },
    ],
  });
  ///FIN TABLA MEDIDAS*************************************
  tblCategorias = $("#tblCategorias").DataTable({
    ajax: {
      url: base_url + "Categorias/listar",
      dataSrc: "",
    },
    columns: [
      { data: "id" },
      { data: "nombre" },
      { data: "estado" },
      { data: "acciones" },
    ],
    language: {
      url: "//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json",
    },
    dom:
      "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
      "<'row'<'col-sm-12'tr>>" +
      "<'row'<'col-sm-5'i><'col-sm-7'p>>",
    buttons: [
      {
        //Botón para Excel
        extend: "excelHtml5",
        footer: true,
        title: "Archivo",
        filename: "Export_File",

        //Aquí es donde generas el botón personalizado
        text: '<span class="badge badge-success"><i class="fas fa-file-excel"></i></span>',
      },
      //Botón para PDF
      {
        extend: "pdfHtml5",
        download: "open",
        footer: true,
        title: "Reporte de usuarios",
        filename: "Reporte de usuarios",
        text: '<span class="badge  badge-danger"><i class="fas fa-file-pdf"></i></span>',
        exportOptions: {
          columns: [0, ":visible"],
        },
      },
      //Botón para copiar
      {
        extend: "copyHtml5",
        footer: true,
        title: "Reporte de usuarios",
        filename: "Reporte de usuarios",
        text: '<span class="badge  badge-primary"><i class="fas fa-copy"></i></span>',
        exportOptions: {
          columns: [0, ":visible"],
        },
      },
      //Botón para print
      {
        extend: "print",
        footer: true,
        filename: "Export_File_print",
        text: '<span class="badge badge-light"><i class="fas fa-print"></i></span>',
      },
      //Botón para cvs
      {
        extend: "csvHtml5",
        footer: true,
        filename: "Export_File_csv",
        text: '<span class="badge  badge-success"><i class="fas fa-file-csv"></i></span>',
      },
      {
        extend: "colvis",
        text: '<span class="badge  badge-info"><i class="fas fa-columns"></i></span>',
        postfixButtons: ["colvisRestore"],
      },
    ],
  });
  ///FIN TABLA CATEGORIAS
  tblProductos = $("#tblProductos").DataTable({
    ajax: {
      url: base_url + "Productos/listar",
      dataSrc: "",
    },
    columns: [
      { data: "id" },
      { data: "imagen" },
      { data: "codigo" },
      { data: "descripcion" },
      { data: "precio_venta" },
      { data: "cantidad" },
      { data: "estado" },
      { data: "acciones" },
    ],
    language: {
      url: "//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json",
    },
    dom:
      "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
      "<'row'<'col-sm-12'tr>>" +
      "<'row'<'col-sm-5'i><'col-sm-7'p>>",
    buttons: [
      {
        //Botón para Excel
        extend: "excelHtml5",
        footer: true,
        title: "Archivo",
        filename: "Export_File",

        //Aquí es donde generas el botón personalizado
        text: '<span class="badge badge-success"><i class="fas fa-file-excel"></i></span>',
      },
      //Botón para PDF
      {
        extend: "pdfHtml5",
        download: "open",
        footer: true,
        title: "Reporte de usuarios",
        filename: "Reporte de usuarios",
        text: '<span class="badge  badge-danger"><i class="fas fa-file-pdf"></i></span>',
        exportOptions: {
          columns: [0, ":visible"],
        },
      },
      //Botón para copiar
      {
        extend: "copyHtml5",
        footer: true,
        title: "Reporte de usuarios",
        filename: "Reporte de usuarios",
        text: '<span class="badge  badge-primary"><i class="fas fa-copy"></i></span>',
        exportOptions: {
          columns: [0, ":visible"],
        },
      },
      //Botón para print
      {
        extend: "print",
        footer: true,
        filename: "Export_File_print",
        text: '<span class="badge badge-light"><i class="fas fa-print"></i></span>',
      },
      //Botón para cvs
      {
        extend: "csvHtml5",
        footer: true,
        filename: "Export_File_csv",
        text: '<span class="badge  badge-success"><i class="fas fa-file-csv"></i></span>',
      },
      {
        extend: "colvis",
        text: '<span class="badge  badge-info"><i class="fas fa-columns"></i></span>',
        postfixButtons: ["colvisRestore"],
      },
    ],
  });
  ///FIN DE PRODUCTOS
  t_h_c = $("#t_historial_c").DataTable({
    ajax: {
      url: base_url + "Compras/listar_historial",
      dataSrc: "",
    },
    columns: [
      { data: "id" },
      { data: "total" },
      { data: "fecha" },
      { data: "estado" },
      { data: "acciones" },
    ],
    language: {
      url: "//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json",
    },
    dom:
      "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
      "<'row'<'col-sm-12'tr>>" +
      "<'row'<'col-sm-5'i><'col-sm-7'p>>",
    buttons: [
      {
        //Botón para Excel
        extend: "excelHtml5",
        footer: true,
        title: "Archivo",
        filename: "Export_File",

        //Aquí es donde generas el botón personalizado
        text: '<span class="badge badge-success"><i class="fas fa-file-excel"></i></span>',
      },
      //Botón para PDF
      {
        extend: "pdfHtml5",
        download: "open",
        footer: true,
        title: "Reporte de usuarios",
        filename: "Reporte de usuarios",
        text: '<span class="badge  badge-danger"><i class="fas fa-file-pdf"></i></span>',
        exportOptions: {
          columns: [0, ":visible"],
        },
      },
      //Botón para copiar
      {
        extend: "copyHtml5",
        footer: true,
        title: "Reporte de usuarios",
        filename: "Reporte de usuarios",
        text: '<span class="badge  badge-primary"><i class="fas fa-copy"></i></span>',
        exportOptions: {
          columns: [0, ":visible"],
        },
      },
      //Botón para print
      {
        extend: "print",
        footer: true,
        filename: "Export_File_print",
        text: '<span class="badge badge-light"><i class="fas fa-print"></i></span>',
      },
      //Botón para cvs
      {
        extend: "csvHtml5",
        footer: true,
        filename: "Export_File_csv",
        text: '<span class="badge  badge-success"><i class="fas fa-file-csv"></i></span>',
      },
      {
        extend: "colvis",
        text: '<span class="badge  badge-info"><i class="fas fa-columns"></i></span>',
        postfixButtons: ["colvisRestore"],
      },
    ],
  });
  $("#t_historial_v").DataTable({
    ajax: {
      url: base_url + "Compras/listar_historial_venta",
      dataSrc: "",
    },
    columns: [
      { data: "id" },
      { data: "nombre" },
      { data: "total" },
      { data: "fecha" },
      { data: "acciones" },
    ],
    language: {
      url: "//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json",
    },
    dom:
      "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
      "<'row'<'col-sm-12'tr>>" +
      "<'row'<'col-sm-5'i><'col-sm-7'p>>",
    buttons: [
      {
        //Botón para Excel
        extend: "excelHtml5",
        footer: true,
        title: "Archivo",
        filename: "Export_File",

        //Aquí es donde generas el botón personalizado
        text: '<span class="badge badge-success"><i class="fas fa-file-excel"></i></span>',
      },
      //Botón para PDF
      {
        extend: "pdfHtml5",
        download: "open",
        footer: true,
        title: "Reporte de usuarios",
        filename: "Reporte de usuarios",
        text: '<span class="badge  badge-danger"><i class="fas fa-file-pdf"></i></span>',
        exportOptions: {
          columns: [0, ":visible"],
        },
      },
      //Botón para copiar
      {
        extend: "copyHtml5",
        footer: true,
        title: "Reporte de usuarios",
        filename: "Reporte de usuarios",
        text: '<span class="badge  badge-primary"><i class="fas fa-copy"></i></span>',
        exportOptions: {
          columns: [0, ":visible"],
        },
      },
      //Botón para print
      {
        extend: "print",
        footer: true,
        filename: "Export_File_print",
        text: '<span class="badge badge-light"><i class="fas fa-print"></i></span>',
      },
      //Botón para cvs
      {
        extend: "csvHtml5",
        footer: true,
        filename: "Export_File_csv",
        text: '<span class="badge  badge-success"><i class="fas fa-file-csv"></i></span>',
      },
      {
        extend: "colvis",
        text: '<span class="badge  badge-info"><i class="fas fa-columns"></i></span>',
        postfixButtons: ["colvisRestore"],
      },
    ],
  });
  t_arqueo = $("#t_arqueo").DataTable({
    ajax: {
      url: base_url + "Cajas/listar_arqueo",
      dataSrc: "",
    },
    columns: [
      { data: "id" },
      { data: "monto_inicial" },
      { data: "monto_final" },
      { data: "fecha_apertura" },
      { data: "fecha_cierre" },
      { data: "total_ventas" },
      { data: "monto_total" },
      { data: "estado" },
    ],
    language: {
      url: "//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json",
    },
    dom:
      "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
      "<'row'<'col-sm-12'tr>>" +
      "<'row'<'col-sm-5'i><'col-sm-7'p>>",
    buttons: [
      {
        //Botón para Excel
        extend: "excelHtml5",
        footer: true,
        title: "Archivo",
        filename: "Export_File",

        //Aquí es donde generas el botón personalizado
        text: '<span class="badge badge-success"><i class="fas fa-file-excel"></i></span>',
      },
      //Botón para PDF
      {
        extend: "pdfHtml5",
        download: "open",
        footer: true,
        title: "Reporte de usuarios",
        filename: "Reporte de usuarios",
        text: '<span class="badge  badge-danger"><i class="fas fa-file-pdf"></i></span>',
        exportOptions: {
          columns: [0, ":visible"],
        },
      },
      //Botón para copiar
      {
        extend: "copyHtml5",
        footer: true,
        title: "Reporte de usuarios",
        filename: "Reporte de usuarios",
        text: '<span class="badge  badge-primary"><i class="fas fa-copy"></i></span>',
        exportOptions: {
          columns: [0, ":visible"],
        },
      },
      //Botón para print
      {
        extend: "print",
        footer: true,
        filename: "Export_File_print",
        text: '<span class="badge badge-light"><i class="fas fa-print"></i></span>',
      },
      //Botón para cvs
      {
        extend: "csvHtml5",
        footer: true,
        filename: "Export_File_csv",
        text: '<span class="badge  badge-success"><i class="fas fa-file-csv"></i></span>',
      },
      {
        extend: "colvis",
        text: '<span class="badge  badge-info"><i class="fas fa-columns"></i></span>',
        postfixButtons: ["colvisRestore"],
      },
    ],
  });
});

function frmCambiarPass(e) {
  e.preventDefault();
  const actual = document.getElementById("clave_actual").value;
  const nueva = document.getElementById("clave_nueva").value;
  const confirmar = document.getElementById("confirmar_clave").value;
  if (actual == "" || nueva == "" || confirmar == "") {
    alertas("Todos los campos son obligatorios", "warning");
    return false;
  } else {
    if (nueva != confirmar) {
      alertas("Las contraseñas no coinciden", "warning");
      return false;
    } else {
      const url = base_url + "Usuarios/cambiarPass";
      const frm = document.getElementById("frmCambiarPass");
      const http = new XMLHttpRequest();
      http.open("POST", url, true);
      http.send(new FormData(frm));
      http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          //console.log(this.responseText);
          const res = JSON.parse(this.responseText);
          $("#cambiarPass").modal("hide");
          alertas(res.msg, res.icono);
          frm.reset();
        }
      };
    }
  }
}
function frmUsuario() {
  document.getElementById("title").innerHTML = "Nuevo Usuario";
  document.getElementById("btnAccion").innerHTML = "Registrar";
  document.getElementById("claves").classList.remove("d-none");
  document.getElementById("frmUsuario").reset();
  $("#nuevo_usuario").modal("show");
  document.getElementById("id").value = "";
}
function registrarUser(e) {
  e.preventDefault();
  const usuario = document.getElementById("usuario");
  const nombre = document.getElementById("nombre");
  const caja = document.getElementById("caja");

  if (usuario.value == "" || nombre.value == "" || caja.value == "") {
    alertas("Alerta con la funcion", "success");
  } else {
    const url = base_url + "Usuarios/registrar";
    const frm = document.getElementById("frmUsuario");
    const http = new XMLHttpRequest();
    http.open("POST", url, true);
    http.send(new FormData(frm));
    http.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        //console.log(this.responseText);
        const res = JSON.parse(this.responseText);
        $("#nuevo_usuario").modal("hide");
        alertas(res.msg, res.icono);
        tblUsuarios.ajax.reload();
      }
    };
  }
}
function btnEditarUser(id) {
  document.getElementById("title").innerHTML = "Actualizar Usuario";
  document.getElementById("btnAccion").innerHTML = "Modificar";
  const url = base_url + "Usuarios/editar/" + id;
  const http = new XMLHttpRequest();
  http.open("GET", url, true);
  http.send();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const res = JSON.parse(this.responseText);
      document.getElementById("id").value = res.id;
      document.getElementById("usuario").value = res.usuario;
      document.getElementById("nombre").value = res.nombre;
      document.getElementById("caja").value = res.id_caja;
      document.getElementById("claves").classList.add("d-none");
      $("#nuevo_usuario").modal("show");
    }
  };
}
function btnEliminarUser(id) {
  Swal.fire({
    title: "Estas seguro de DESACTIVAR este Usuario?",
    text: "El Usuario NO se eliminara de forma permanente, solo pasara a INACTIVO!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si!",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      const url = base_url + "Usuarios/eliminar/" + id;
      const http = new XMLHttpRequest();
      http.open("GET", url, true);
      http.send();
      http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          const res = JSON.parse(this.responseText);
          alertas(res.msg, res.icono);
          tblUsuarios.ajax.reload();
        }
      };
    }
  });
}
function btnReingresarUser(id) {
  Swal.fire({
    title: "Estas seguro de REINGRESAR?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si!",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      const url = base_url + "Usuarios/reingresar/" + id;
      const http = new XMLHttpRequest();
      http.open("GET", url, true);
      http.send();
      http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          const res = JSON.parse(this.responseText);
          tblUsuarios.ajax.reload();
          alertas(res.msg, res.icono);
        }
      };
    }
  });
}
//****************Fin Usuarios*********************************

function frmCliente() {
  document.getElementById("title").innerHTML = "Nuevo Cliente";
  document.getElementById("btnAccion").innerHTML = "Registrar";
  document.getElementById("frmCliente").reset();
  $("#nuevo_cliente").modal("show");
  document.getElementById("id").value = "";
}
function registrarCli(e) {
  e.preventDefault();
  const dni = document.getElementById("dni");
  const nombre = document.getElementById("nombre");
  const telefono = document.getElementById("telefono");
  const direccion = document.getElementById("direccion");

  if (
    dni.value == "" ||
    nombre.value == "" ||
    telefono.value == "" ||
    direccion.value == ""
  ) {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Todos los campos son obligatorios",
      showConfirmButton: false,
      timer: 4000,
    });
  } else {
    const url = base_url + "Clientes/registrar";
    const frm = document.getElementById("frmCliente");
    const http = new XMLHttpRequest();
    http.open("POST", url, true);
    http.send(new FormData(frm));
    http.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        const res = JSON.parse(this.responseText);
        if (res == "si") {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Cliente REGISTRADO con EXITO",
            showConfirmButton: false,
            timer: 4000,
          });
          frm.reset();
          $("#nuevo_cliente").modal("hide");
          tblClientes.ajax.reload();
        } else if (res == "modificado") {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Cliente MODIFCADO con EXITO",
            showConfirmButton: false,
            timer: 4000,
          });
          $("#nuevo_cliente").modal("hide");
          tblClientes.ajax.reload();
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: res,
            showConfirmButton: false,
            timer: 4000,
          });
        }
      }
    };
  }
}
function btnEditarCli(id) {
  document.getElementById("title").innerHTML = "Actualizar Cliente";
  document.getElementById("btnAccion").innerHTML = "Modificar";
  const url = base_url + "Clientes/editar/" + id;
  const http = new XMLHttpRequest();
  http.open("GET", url, true);
  http.send();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const res = JSON.parse(this.responseText);
      document.getElementById("id").value = res.id;
      document.getElementById("dni").value = res.dni;
      document.getElementById("nombre").value = res.nombre;
      document.getElementById("telefono").value = res.telefono;
      document.getElementById("direccion").value = res.direccion;
      $("#nuevo_cliente").modal("show");
    }
  };
}
function btnEliminarCli(id) {
  Swal.fire({
    title: "Estas seguro de DAR DE BAJA este Cliente?",
    text: "El Cliente NO se eliminara de forma permanente, solo pasara a INACTIVO!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si!",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      const url = base_url + "Clientes/eliminar/" + id;
      const http = new XMLHttpRequest();
      http.open("GET", url, true);
      http.send();
      http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          const res = JSON.parse(this.responseText);
          if (res == "ok") {
            Swal.fire("Mensaje!", "Cliente DADO DE BAJA con exito", "success");
            tblClientes.ajax.reload();
          } else {
            Swal.fire("Mensaje!", res, "error");
          }
        }
      };
    }
  });
}
function btnReingresarCli(id) {
  Swal.fire({
    title: "Estas seguro de REACTIVAR este Cliente?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si!",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      const url = base_url + "Clientes/reingresar/" + id;
      const http = new XMLHttpRequest();
      http.open("GET", url, true);
      http.send();
      http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          const res = JSON.parse(this.responseText);
          if (res == "ok") {
            Swal.fire("Mensaje!", "Cliente REACTIVADO con exito", "success");
            tblClientes.ajax.reload();
          } else {
            Swal.fire("Mensaje!", res, "error");
          }
        }
      };
    }
  });
}
//****************Fin CLIENTES*********************************
function frmCajas() {
  document.getElementById("title").innerHTML = "Nueva Caja";
  document.getElementById("btnAccion").innerHTML = "Registrar";
  document.getElementById("frmCajas").reset();
  $("#nueva_caja").modal("show");
  document.getElementById("id").value = "";
}
function registrarCaja(e) {
  e.preventDefault();
  const nombre = document.getElementById("caja");
  if (nombre.value == "") {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Todos los campos son obligatorios",
      showConfirmButton: false,
      timer: 4000,
    });
  } else {
    const url = base_url + "Cajas/registrar";
    const frm = document.getElementById("frmCajas");
    const http = new XMLHttpRequest();
    http.open("POST", url, true);
    http.send(new FormData(frm));
    http.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        const res = JSON.parse(this.responseText);
        if (res == "si") {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Caja REGISTRADA con EXITO",
            showConfirmButton: false,
            timer: 4000,
          });
          frm.reset();
          $("#nueva_caja").modal("hide");
          tblCajas.ajax.reload();
        } else if (res == "modificado") {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Caja MODIFCADO con EXITO",
            showConfirmButton: false,
            timer: 4000,
          });
          $("#nueva_caja").modal("hide");
          tblCajas.ajax.reload();
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: res,
            showConfirmButton: false,
            timer: 4000,
          });
        }
      }
    };
  }
}
function btnEditarCaja(id) {
  document.getElementById("title").innerHTML = "Actualizar Caja";
  document.getElementById("btnAccion").innerHTML = "Modificar";
  const url = base_url + "Cajas/editar/" + id;
  const http = new XMLHttpRequest();
  http.open("GET", url, true);
  http.send();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const res = JSON.parse(this.responseText);
      document.getElementById("id").value = res.id;
      document.getElementById("caja").value = res.caja;
      $("#nueva_caja").modal("show");
    }
  };
}
function btnEliminarCaja(id) {
  Swal.fire({
    title: "Estas seguro de DAR DE BAJA esta CAJA?",
    text: "La Caja NO se eliminara de forma permanente, solo pasara a INACTIVO!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si!",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      const url = base_url + "Cajas/eliminar/" + id;
      const http = new XMLHttpRequest();
      http.open("GET", url, true);
      http.send();
      http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          const res = JSON.parse(this.responseText);
          if (res == "ok") {
            Swal.fire("Mensaje!", "Caja DADA DE BAJA con exito", "success");
            tblCajas.ajax.reload();
          } else {
            Swal.fire("Mensaje!", res, "error");
          }
        }
      };
    }
  });
}
function btnReingresarCaja(id) {
  Swal.fire({
    title: "Estas seguro de REACTIVAR esta Caja?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si!",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      const url = base_url + "Cajas/reingresar/" + id;
      const http = new XMLHttpRequest();
      http.open("GET", url, true);
      http.send();
      http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          const res = JSON.parse(this.responseText);
          if (res == "ok") {
            Swal.fire("Mensaje!", "Caja REACTIVADO con exito", "success");
            tblCajas.ajax.reload();
          } else {
            Swal.fire("Mensaje!", res, "error");
          }
        }
      };
    }
  });
}
//****************Fin CAJAS*********************************
function frmMedidas() {
  document.getElementById("title").innerHTML = "Nueva Medida";
  document.getElementById("btnAccion").innerHTML = "Registrar";
  document.getElementById("frmMedidas").reset();
  $("#nueva_medida").modal("show");
  document.getElementById("id").value = "";
}
function registrarMedida(e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre");
  const nombre_corto = document.getElementById("nombre_corto");
  if (nombre.value == "" || nombre_corto.value == "") {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Todos los campos son obligatorios",
      showConfirmButton: false,
      timer: 4000,
    });
  } else {
    const url = base_url + "Medidas/registrar";
    const frm = document.getElementById("frmMedidas");
    const http = new XMLHttpRequest();
    http.open("POST", url, true);
    http.send(new FormData(frm));
    http.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        const res = JSON.parse(this.responseText);
        if (res == "si") {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Medida REGISTRADA con EXITO",
            showConfirmButton: false,
            timer: 4000,
          });
          frm.reset();
          $("#nueva_medida").modal("hide");
          tblMedidas.ajax.reload();
        } else if (res == "modificado") {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Caja MODIFCADO con EXITO",
            showConfirmButton: false,
            timer: 4000,
          });
          $("#nueva_medida").modal("hide");
          tblMedidas.ajax.reload();
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: res,
            showConfirmButton: false,
            timer: 4000,
          });
        }
      }
    };
  }
}
function btnEditarMedida(id) {
  document.getElementById("title").innerHTML = "Actualizar nombre";
  document.getElementById("btnAccion").innerHTML = "Modificar";
  const url = base_url + "Medidas/editar/" + id;
  const http = new XMLHttpRequest();
  http.open("GET", url, true);
  http.send();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const res = JSON.parse(this.responseText);
      document.getElementById("id").value = res.id;
      document.getElementById("nombre").value = res.nombre;
      document.getElementById("nombre_corto").value = res.nombre_corto;
      $("#nueva_medida").modal("show");
    }
  };
}
function btnEliminarMedida(id) {
  Swal.fire({
    title: "Estas seguro de DAR DE BAJA esta MEDIDA?",
    text: "La Medida NO se eliminara de forma permanente, solo pasara a INACTIVO!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si!",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      const url = base_url + "Medidas/eliminar/" + id;
      const http = new XMLHttpRequest();
      http.open("GET", url, true);
      http.send();
      http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          const res = JSON.parse(this.responseText);
          if (res == "ok") {
            Swal.fire("Mensaje!", "Caja DADA DE BAJA con exito", "success");
            tblMedidas.ajax.reload();
          } else {
            Swal.fire("Mensaje!", res, "error");
          }
        }
      };
    }
  });
}
function btnReingresarMedida(id) {
  Swal.fire({
    title: "Estas seguro de REACTIVAR esta MEDIDA?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si!",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      const url = base_url + "Medidas/reingresar/" + id;
      const http = new XMLHttpRequest();
      http.open("GET", url, true);
      http.send();
      http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          const res = JSON.parse(this.responseText);
          if (res == "ok") {
            Swal.fire("Mensaje!", "Medida REACTIVADA con exito", "success");
            tblMedidas.ajax.reload();
          } else {
            Swal.fire("Mensaje!", res, "error");
          }
        }
      };
    }
  });
}
//****************Fin MEDIDAS*********************************
function frmCategoria() {
  document.getElementById("title").innerHTML = "Nueva Categoria";
  document.getElementById("btnAccion").innerHTML = "Registrar";
  document.getElementById("frmCategoria").reset();
  $("#nueva_categoria").modal("show");
  document.getElementById("id").value = "";
}
function registrarCat(e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre");
  if (nombre.value == "") {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Todos los campos son obligatorios",
      showConfirmButton: false,
      timer: 4000,
    });
  } else {
    const url = base_url + "Categorias/registrar";
    const frm = document.getElementById("frmCategoria");
    const http = new XMLHttpRequest();
    http.open("POST", url, true);
    http.send(new FormData(frm));
    http.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        const res = JSON.parse(this.responseText);
        if (res == "si") {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Categoria REGISTRADA con EXITO",
            showConfirmButton: false,
            timer: 4000,
          });
          frm.reset();
          $("#nueva_categoria").modal("hide");
          tblCategorias.ajax.reload();
        } else if (res == "modificado") {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Caja MODIFCADO con EXITO",
            showConfirmButton: false,
            timer: 4000,
          });
          $("#nueva_categoria").modal("hide");
          tblCategorias.ajax.reload();
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: res,
            showConfirmButton: false,
            timer: 4000,
          });
        }
      }
    };
  }
}
function btnEditarCategoria(id) {
  document.getElementById("title").innerHTML = "Actualizar Categoria";
  document.getElementById("btnAccion").innerHTML = "Modificar";
  const url = base_url + "Categorias/editar/" + id;
  const http = new XMLHttpRequest();
  http.open("GET", url, true);
  http.send();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const res = JSON.parse(this.responseText);
      document.getElementById("id").value = res.id;
      document.getElementById("nombre").value = res.nombre;
      $("#nueva_categoria").modal("show");
    }
  };
}
function btnEliminarCategoria(id) {
  Swal.fire({
    title: "Estas seguro de DAR DE BAJA esta CATEGORIA?",
    text: "La Categoria NO se eliminara de forma permanente, solo pasara a INACTIVO!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si!",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      const url = base_url + "Categorias/eliminar/" + id;
      const http = new XMLHttpRequest();
      http.open("GET", url, true);
      http.send();
      http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          const res = JSON.parse(this.responseText);
          if (res == "ok") {
            Swal.fire("Mensaje!", "Caja DADA DE BAJA con exito", "success");
            tblCategorias.ajax.reload();
          } else {
            Swal.fire("Mensaje!", res, "error");
          }
        }
      };
    }
  });
}
function btnReingresarCategoria(id) {
  Swal.fire({
    title: "Estas seguro de REACTIVAR esta CATEGORIA?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si!",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      const url = base_url + "Categorias/reingresar/" + id;
      const http = new XMLHttpRequest();
      http.open("GET", url, true);
      http.send();
      http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          const res = JSON.parse(this.responseText);
          if (res == "ok") {
            Swal.fire("Mensaje!", "Categoria REACTIVADA con exito", "success");
            tblCategorias.ajax.reload();
          } else {
            Swal.fire("Mensaje!", res, "error");
          }
        }
      };
    }
  });
}
///////FIN CATEGORIAS///////////////////////

function frmProducto() {
  document.getElementById("title").innerHTML = "Nuevo Producto";
  document.getElementById("btnAccion").innerHTML = "Registrar";
  document.getElementById("frmProducto").reset();
  document.getElementById("id").value = "";
  $("#nuevo_producto").modal("show");
  deleteImg();
}
function registrarPro(e) {
  e.preventDefault();
  const codigo = document.getElementById("codigo");
  const nombre = document.getElementById("nombre");
  const precio_compra = document.getElementById("precio_compra");
  const precio_venta = document.getElementById("precio_venta");
  const id_medida = document.getElementById("medida");
  const id_categoria = document.getElementById("categoria");

  if (
    codigo.value == "" ||
    nombre.value == "" ||
    precio_compra.value == "" ||
    precio_venta.value == ""
  ) {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Todos los campos son obligatorios",
      showConfirmButton: false,
      timer: 4000,
    });
  } else {
    const url = base_url + "Productos/registrar";
    const frm = document.getElementById("frmProducto");
    const http = new XMLHttpRequest();
    http.open("POST", url, true);
    http.send(new FormData(frm));
    http.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        //console.log(this.responseText);
        const res = JSON.parse(this.responseText);
        if (res == "si") {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Producto REGISTRADO con EXITO",
            showConfirmButton: false,
            timer: 4000,
          });
          frm.reset();
          $("#nuevo_producto").modal("hide");
          tblProductos.ajax.reload();
        } else if (res == "modificado") {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Producto MODIFCADO con EXITO",
            showConfirmButton: false,
            timer: 4000,
          });
          $("#nuevo_producto").modal("hide");
          tblProductos.ajax.reload();
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: res,
            showConfirmButton: false,
            timer: 4000,
          });
        }
      }
    };
  }
}
function btnEditarPro(id) {
  document.getElementById("title").innerHTML = "Actualizar Productos";
  document.getElementById("btnAccion").innerHTML = "Modificar";
  const url = base_url + "Productos/editar/" + id;
  const http = new XMLHttpRequest();
  http.open("GET", url, true);
  http.send();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const res = JSON.parse(this.responseText);
      document.getElementById("id").value = res.id;
      document.getElementById("codigo").value = res.codigo;
      document.getElementById("nombre").value = res.descripcion;
      document.getElementById("precio_compra").value = res.precio_compra;
      document.getElementById("precio_venta").value = res.precio_venta;
      document.getElementById("medida").value = res.id_medida;
      document.getElementById("categoria").value = res.id_categoria;
      document.getElementById("img-preview").src =
        base_url + "Assets/img/" + res.foto;
      document.getElementById("icon-cerrar").innerHTML = `
                <button class="btn btn-danger" onclick ="deleteImg()"><i class= "fas fa-times"></i></button>`;
      document.getElementById("icon-image").classList.add("d-none");
      document.getElementById("foto_actual").value = res.foto;

      $("#nuevo_producto").modal("show");
    }
  };
}
function btnEliminarPro(id) {
  Swal.fire({
    title: "Estas seguro de DESACTIVAR este Produto?",
    text: "El Producto NO se eliminara de forma permanente, solo pasara a INACTIVO!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si!",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      const url = base_url + "Productos/eliminar/" + id;
      const http = new XMLHttpRequest();
      http.open("GET", url, true);
      http.send();
      http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          const res = JSON.parse(this.responseText);
          if (res == "ok") {
            Swal.fire("Mensaje!", "Producto DADO DE BAJA con exito", "success");
            tblProductos.ajax.reload();
          } else {
            Swal.fire("Mensaje!", res, "error");
          }
        }
      };
    }
  });
}
function btnReingresarPro(id) {
  Swal.fire({
    title: "Estas seguro de REINGRESAR este Producto?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si!",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      const url = base_url + "Productos/reingresar/" + id;
      const http = new XMLHttpRequest();
      http.open("GET", url, true);
      http.send();
      http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          const res = JSON.parse(this.responseText);
          if (res == "ok") {
            Swal.fire("Mensaje!", "Producto REACTIVADO con exito", "success");
            tblProductos.ajax.reload();
          } else {
            Swal.fire("Mensaje!", res, "error");
          }
        }
      };
    }
  });
}
function preview(e) {
  const url = e.target.files[0];
  const urlTmp = URL.createObjectURL(url);
  document.getElementById("img-preview").src = urlTmp;
  document.getElementById("icon-image").classList.add("d-none");
  document.getElementById(
    "icon-cerrar"
  ).innerHTML = `<button class="btn btn-danger" onclick ="deleteImg()"><i class= "fas fa-times"></i></button>
    ${url["name"]}`;
}
function deleteImg() {
  document.getElementById("icon-cerrar").innerHTML = "";
  document.getElementById("icon-image").classList.remove("d-none");
  document.getElementById("img-preview").src = "";
  document.getElementById("imagen").value = "";
  document.getElementById("foto_actual").value = "";
}

function buscarCodigo(e) {
  e.preventDefault();
  const cod = document.getElementById("codigo").value;
  if (cod != "") {
    if (e.which == 13) {
      const url = base_url + "Compras/buscarCodigo/" + cod;
      const http = new XMLHttpRequest();
      http.open("GET", url, true);
      http.send();
      http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          const res = JSON.parse(this.responseText);
          if (res) {
            document.getElementById("nombre").value = res.descripcion;
            document.getElementById("precio").value = res.precio_compra;
            document.getElementById("id").value = res.id;
            document.getElementById("cantidad").removeAttribute("disabled");
            document.getElementById("cantidad").focus();
          } else {
            alertas("El producto NO EXISTE", "warning");
            document.getElementById("codigo").value = "";
            document.getElementById("codigo").focus();
          }
        }
      };
    }
  } else {
    alertas("Ingrese el CODIGO DE BAARAS ", "warning");
  }
}

function calcularPrecio(e) {
  e.preventDefault();
  const cant = document.getElementById("cantidad").value;
  const precio = document.getElementById("precio").value;
  document.getElementById("sub_total").value = precio * cant;
  if (e.which == 13) {
    if (cant > 0) {
      const url = base_url + "Compras/ingresar/";
      const frm = document.getElementById("frmCompra");
      const http = new XMLHttpRequest();
      http.open("POST", url, true);
      http.send(new FormData(frm));
      http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          const res = JSON.parse(this.responseText);
          alertas(res.msg, res.icono);
          frm.reset();
          cargarDetalle();
          document
            .getElementById("cantidad")
            .setAttribute("disabled", "disabled");
          document.getElementById("codigo").focus();
        }
      };
    }
  }
}
function calcularPrecioVenta(e) {
  e.preventDefault();
  const cant = document.getElementById("cantidad").value;
  const precio = document.getElementById("precio").value;
  document.getElementById("sub_total").value = precio * cant;
  if (e.which == 13) {
    if (cant > 0) {
      const url = base_url + "Compras/ingresarVenta/";
      const frm = document.getElementById("frmVenta");
      const http = new XMLHttpRequest();
      http.open("POST", url, true);
      http.send(new FormData(frm));
      http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          const res = JSON.parse(this.responseText);
          alertas(res.msg, res.icono);
          frm.reset();
          cargarDetalleVenta();
          document
            .getElementById("cantidad")
            .setAttribute("disabled", "disabled");
          document.getElementById("codigo").focus();
        }
      };
    }
  }
}
if (document.getElementById("tblDetalle")) {
  cargarDetalle();
}
if (document.getElementById("tblDetalleVenta")) {
  cargarDetalleVenta();
}
function cargarDetalle() {
  const url = base_url + "Compras/listar/detalle";
  const http = new XMLHttpRequest();
  http.open("GET", url, true);
  http.send();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const res = JSON.parse(this.responseText);
      let html = "";
      res.detalle.forEach((row) => {
        html += `<tr> 
                 <td>${row["id"]}</td>
                 <td>${row["descripcion"]}</td>
                 <td>${row["cantidad"]}</td>
                 <td>${row["precio"]}</td>
                 <td>${row["sub_total"]}</td>
                 <td>
                 <button class="btn btn-danger" type="button" onclick ="deleteDetalle(${row["id"]},1)"><i class="fas fa-trash-alt"></i></button>
                 </td>
                 </tr>`;
      });
      document.getElementById("tblDetalle").innerHTML = html;
      document.getElementById("total").value = res.total_pagar.total;
    }
  };
}
function cargarDetalleVenta() {
  const url = base_url + "Compras/listar/detalle_temp";
  const http = new XMLHttpRequest();
  http.open("GET", url, true);
  http.send();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const res = JSON.parse(this.responseText);
      let html = "";
      res.detalle.forEach((row) => {
        html += `<tr> 
                 <td>${row["id"]}</td>
                 <td>${row["descripcion"]}</td>
                 <td>${row["cantidad"]}</td>
                 <td><input class="form-control" placeholder ="Descuento" type="text" onkeyup="calcularDescuento(event, ${row["id"]})"></td>
                 <td>${row["descuento"]}</td>
                 <td>${row["precio"]}</td>
                 <td>${row["sub_total"]}</td>
                 <td>
                 <button class="btn btn-danger" type="button" onclick ="deleteDetalle(${row["id"]},2)"><i class="fas fa-trash-alt"></i></button>
                 </td>
                 </tr>`;
      });
      document.getElementById("tblDetalleVenta").innerHTML = html;
      document.getElementById("total").value = res.total_pagar.total;
    }
  };
}
function calcularDescuento(e, id) {
  e.preventDefault();
  if (e.target.value == "") {
    alertas("Ingrese el Descuento", "warning");
  } else {
    if (e.which == 13) {
      const url =
        base_url + "Compras/calcularDescuento/" + id + "/" + e.target.value;
      const http = new XMLHttpRequest();
      http.open("GET", url, true);
      http.send();
      http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          console.log(this.responseText);
          const res = JSON.parse(this.responseText);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Descuento Aplicado",
            showConfirmButton: false,
            timer: 1000,
          });
          cargarDetalleVenta();
        }
      };
    }
  }
}
function deleteDetalle(id, accion) {
  let url;
  if (accion == 1) {
    url = base_url + "Compras/delete/" + id;
  } else {
    url = base_url + "Compras/deleteVenta/" + id;
  }
  const http = new XMLHttpRequest();
  http.open("GET", url, true);
  http.send();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const res = JSON.parse(this.responseText);
      if (res == "ok") {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Producto ELIMINADO",
          showConfirmButton: false,
          timer: 2000,
        });
        if (accion == 1) {
          cargarDetalle();
        } else {
          cargarDetalleVenta();
        }
      } else {
        Swal.fire({
          position: "top-end",
          icon: "warning",
          title: "Error al eliminar el PRODUCTO",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    }
  };
}

function procesar(accion) {
  Swal.fire({
    title: "Estas seguro de REALIZAR LA COMPRA?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si!",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      let url;
      if (accion == 1) {
        url = base_url + "Compras/registraCompra";
      } else {
        const id_cliente = document.getElementById("cliente").value;
        url = base_url + "Compras/registraVenta/" + id_cliente;
      }
      const http = new XMLHttpRequest();
      http.open("GET", url, true);
      http.send();
      http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          console.log(this.responseText);
          const res = JSON.parse(this.responseText);
          if (res.msg == "ok") {
            Swal.fire("Mensaje!", "Compra Generada", "success");
            let ruta;
            if (accion == 1) {
              ruta = base_url + "Compras/generarPdf/" + res.id_compra;
            } else {
              ruta = base_url + "Compras/generarPdfVenta/" + res.id_venta;
            }
            window.open(ruta);
            setTimeout(() => {
              window.location.reload();
            }, 300);
          } else {
            Swal.fire("Mensaje!", res, "error");
          }
        }
      };
    }
  });
}
function modificarEmpresa() {
  const frm = document.getElementById("frmEmpresa");
  const url = base_url + "Administracion/modificar";
  const http = new XMLHttpRequest();
  http.open("POST", url, true);
  http.send(new FormData(frm));
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const res = JSON.parse(this.responseText);
      if (res == "ok") {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Datos modificados",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    }
  };
}
function alertas(mensaje, icono) {
  Swal.fire({
    position: "top-end",
    icon: icono,
    title: mensaje,
    showConfirmButton: false,
    timer: 2000,
  });
}
function buscarCodigoVenta(e) {
  e.preventDefault();
  const cod = document.getElementById("codigo").value;
  if (cod != "") {
    if (e.which == 13) {
      const url = base_url + "Compras/buscarCodigo/" + cod;
      const http = new XMLHttpRequest();
      http.open("GET", url, true);
      http.send();
      http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          const res = JSON.parse(this.responseText);
          if (res) {
            document.getElementById("nombre").value = res.descripcion;
            document.getElementById("precio").value = res.precio_venta;
            document.getElementById("id").value = res.id;
            document.getElementById("cantidad").removeAttribute("disabled");
            document.getElementById("cantidad").focus();
          } else {
            alertas("El producto NO EXISTE", "warning");
            document.getElementById("codigo").value = "";
            document.getElementById("codigo").focus();
          }
        }
      };
    }
  } else {
    alertas("Ingrese el CODIGO DE BAARAS ", "warning");
  }
}

if (document.getElementById("stockMinimo")) {
  reporteStock();
  prodcutosVendidos();
}
function reporteStock() {
  const url = base_url + "Administracion/reporteStock";
  const http = new XMLHttpRequest();
  http.open("GET", url, true);
  http.send();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      //console.log(this.responseText);
      const res = JSON.parse(this.responseText);
      let nombre = [];
      let cantidad = [];
      for (let i = 0; i < res.length; i++) {
        nombre.push(res[i]["descripcion"]);
        cantidad.push(res[i]["cantidad"]);
      }
      var ctx = document.getElementById("stockMinimo");
      var myPieChart = new Chart(ctx, {
        type: "pie",
        data: {
          labels: nombre,
          datasets: [
            {
              data: cantidad,
              backgroundColor: [
                "#a1dbd4",
                "#bdc8c9",
                "#d2b4bd",
                "#e49eb2",
                "#ff699c",
                "#69b6ff",
                "#69e0ff",
                "#ff699c",
                "#ffb669",
                "#b4b4b4",
                "#aebebb",
              ],
            },
          ],
        },
      });
    }
  };
}
function prodcutosVendidos() {
  const url = base_url + "Administracion/productosVendidos";
  const http = new XMLHttpRequest();
  http.open("GET", url, true);
  http.send();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      //console.log(this.responseText);
      const res = JSON.parse(this.responseText);
      let nombre = [];
      let cantidad = [];
      for (let i = 0; i < res.length; i++) {
        nombre.push(res[i]["descripcion"]);
        cantidad.push(res[i]["total"]);
      }
      var ctx = document.getElementById("stockMinimo");
      var ctx = document.getElementById("productosVendidos");
      var myPieChart = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: nombre,
          datasets: [
            {
              data: cantidad,
              backgroundColor: [
                "#815664",
                "#5c7b61",
                "#835854",
                "#516886",
                "#487a8f",
                "#795e77",
                "#8aaea5",
                "#a6c2bb",
                "#2b433d",
                "#65617f",
                "#CE0063",
              ],
            },
          ],
        },
      });
    }
  };
}
function btnAnularC(id) {
  Swal.fire({
    title: "Estas seguro de ANULAR La Compra?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si!",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      const url = base_url + "Compras/anularCompra/" + id;
      const http = new XMLHttpRequest();
      http.open("GET", url, true);
      http.send();
      http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          console.log(this.responseText);
          const res = JSON.parse(this.responseText);
          alertas(res.msg, res.icono);
          t_h_c.ajax.reload();
        }
      };
    }
  });
}
function arqueoCaja() {
  document.getElementById("ocultar_campos").classList.add("d-none");
  document.getElementById("monto_inicial").value = "";
  document.getElementById("btnAccion").textContent = "Abrir Caja";
  $("#abrir_caja").modal("show");
}
function abrirArqueo(e) {
  e.preventDefault();
  const monto_inicial = document.getElementById("monto_inicial").value;
  if (monto_inicial == "") {
    alertas("Ingrese el monto inicial", "warning");
  } else {
    const frm = document.getElementById("frmAbrirCaja");
    const url = base_url + "Cajas/abrirArqueo";
    const http = new XMLHttpRequest();
    http.open("POST", url, true);
    http.send(new FormData(frm));
    http.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        const res = JSON.parse(this.responseText);
        alertas(res.msg, res.icono);
        t_arqueo.ajax.reload();
        $("#abrir_caja").modal("hide");
      }
    };
  }
}
function cerrarCaja() {
  const url = base_url + "Cajas/getVentas";
  const http = new XMLHttpRequest();
  http.open("GET", url, true);
  http.send();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const res = JSON.parse(this.responseText);
      document.getElementById("monto_final").value = res.monto_total.total;
      document.getElementById("total_ventas").value = res.total_ventas.total;
      document.getElementById("monto_inicial").value =
        res.inicial.monto_inicial;
      document.getElementById("monto_general").value = res.monto_general;
      document.getElementById("id").value = res.inicial.id;
      document.getElementById("ocultar_campos").classList.remove("d-none");
      document.getElementById("btnAccion").textContent = "Cerrar Caja";
      $("#abrir_caja").modal("show");
    }
  };
}
function registrarPermisos(e) {
  e.preventDefault();
  const url = base_url + "Usuarios/registrarPermiso";
  const frm = document.getElementById("formulario");
  const http = new XMLHttpRequest();
  http.open("POST", url, true);
  http.send(new FormData(frm));
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const res = JSON.parse(this.responseText);
      if (res != "") {
        alertas(res.msg, res.icono);
      } else {
        alertas("Error no identificado", "error");
      }
    }
  };
}
$(".cerrarModal").click(function () {
  $("#nueva_categoria").modal("hide"),
    $("#nuevo_usuario").modal("hide"),
    $("#nuevo_cliente").modal("hide"),
    $("#nueva_caja").modal("hide"),
    $("#nuevo_producto").modal("hide");
  $("#cambiarPass").modal("hide"),
    $("#nueva_medida").modal("hide"),
    $("#nueva_categoria").modal("hide"),
    $("#abrir_caja").modal("hide"),
    $("#frmCambiarPass").modal("hide");
});
