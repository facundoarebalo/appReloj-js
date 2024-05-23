const mostrarReloj = () => {
  const fecha = new Date();
  const hora = formatoHora(fecha.getHours());
  const minutos = formatoHora(fecha.getMinutes());
  const segundos = formatoHora(fecha.getSeconds());

  document.getElementById("hora").innerHTML = `${hora}:${minutos}:${segundos}`;

  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1;
  const anio = fecha.getFullYear();
  const diaSemana = fecha.getDay();
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const dias = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  document.getElementById("fecha").innerHTML = `${dias[diaSemana]} ${dia} de ${
    meses[mes - 1]
  }`;
};

const formatoHora = (hora) => {
  if (hora < 10) {
    return `0${hora}`;
  } else {
    return hora;
  }
};

setInterval(mostrarReloj, 1000);
