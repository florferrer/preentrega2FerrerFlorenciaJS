class consulta {
  constructor(objeto) {
    this.nombre = objeto.nombreConsulta;
    this.email = objeto.emailConsulta;
    this.telefono = objeto.telefonoConsulta;
    this.mensaje = objeto.mensajeConsulta;
  }
  mostrarDatos() {
    this.nombre = this.nombre.toUpperCase();
    let contenido = `<b>Nombre:</b> ${this.nombre}<br>
        <b>Email:</b> ${this.email}<br>
        <b>Teléfono:</b> ${this.telefono}<br>
        <b>Mensaje:</b> ${this.consulta}<br>`;
    document.getElementById("resultado").innerHTML = contenido;
  }
}

function guardarDatos() {
  let nombre = document.getElementById("nombre").value;
  let email = document.getElementById("email").value;
  let telefono = document.getElementById("telefono").value;
  let consulta = document.getElementById("consulta").value;

  const datos = {
    nombreConsulta: nombre,
    emailConsulta: email,
    telefonoConsulta: telefono,
    mensajeConsulta: mensaje,
  };
  console.log(datos);
  guardarDatosEnLS(datos);

  let datos_web = cargarDatosEnLS();
  console.log(datos_web);
  const datosConsulta = new consulta(datos_web);
  console.log(datosConsulta);
  datosConsulta.mostrarDatos();
}

function guardarDatosEnLS(datos) {
  localStorage.setItem("datosConsulta", JSON.stringify(datos));
  console.log("Datos guardados en Local Storage!");
}

function cargarDatosEnLS() {
  return JSON.parse(localStorage.getItem("datosConsulta"));
}

document.getElementById("enviar").addEventListener("click", guardarDatos);

/* function consultas() {
  let nombre = document.getElementById("nombre");
  let apellido = document.getElementById("apellido");
  let telefono = document.getElementById("telefono");
  let consulta = document.getElementById("consulta");

  if (telefono == 0) {
    alert("el telefono es obligatorio");
    document.getElementById("telefono").focus();

  } else {
    console.log(nombre + "" + apellido + "" + telefono + "" + consulta);
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("consulta").value = "";
    document.getElementById("nombre").focus();
  }

  alert(nombre);
  alert(apellido);
  alert(telefono);
  alert(consulta);
}
 */
