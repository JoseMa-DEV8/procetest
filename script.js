const preguntas = [
  {
    letra: "1",
    pregunta: "Ana Pérez, afiliada a un sindicato mayoritario fue despedida por la empresa MAFESA, SA., para que la que venía prestando trabajo desde 2012. El despido ha sido declarado improcedente por sentencia de la correspondiente Plaza de lo Social.",
    opciones: ["La sentencia condenará a Mafesa a que readmita a Ana en su puesto, pagando salarios de tramitación, o le abone la indemnización correspondiente, siendo opción de Ana por estar afiliada.", "La sentencia condenará a Mafesa a la readmisión obligatoria de Ana y al pago de salarios de tramitación, sin que haya derecho de opción.", "La sentencia condenará a Mafesa a que opte entre readmitir a Ana en su puesto, pagando salarios de tramitación, o abonarle la indemnización correspondiente.", "La sentencia condenará a Mafesa a que readmita a Ana en su puesto, pagando salarios de tramitación, o le abone la indemnización correspondiente, siendo la opción tanto de Ana como del sindicato."],
    correcta: 2
  },
  {
    letra: "2",
    pregunta: " Pablo, trabajador de la empresa MURIDOR, S.L., que no ostenta la condición de representante de los trabajadores, fue despedido verbalmente por su empresa al entender esta que Pablo había descendido voluntariamente en su rendimiento. El despido ha sido declarado improcedente por sentencia de la Plaza de la Selección de lo Social.",
    opciones: ["Pablo debe optar entre su readmisión con pago de los salarios de tramitación o que se le abone una indemnización; en primer caso, Muridor podría efectuar un nuevo despido subsanando los defectos procesales en el plazo de 7 días.", "MURIDOR, SL., debe optar entre readmitir a Pablo con pago de salarios de tramitación o abonarle una indemnización; en el primer caso, podría efectuar un nuevo despido subsanando los defectos formales en el plazo de 20 días.", "Pablo debe optar entre su readmisión con pago de salarios de tramitación o que se le abone una indemnización; en el primer caso, MURIDOR podría efectuar un nuevo despido subsanando los defectos formales en el plazo de 20 días.", "MURIDOR debe optar entre readmitir a Pablo con pago de salarios de tramitación o abonarle una indemnización; en el primer caso, podría efectuar un nuevo despido subsanando los defectos formales en el plazo de 7 días."],
    correcta: 1
  },
  {
    letra: "3",
    pregunta: "Amelia fue despedida por su empresa METRIKA, S.A., con fundamento en razones disciplinarias. Amelia impugnó el despido y la Plaza de la Sección de lo Social del Tribunal de Instancia de Albacete lo ha declarado nulo. METRIKA ha interpuesto recurso de suplicación.",
    opciones: ["Amelia no puede solicitar la ejecución de la sentencia hasta que la misma sea firme.", "Amelia puede solicitar la ejecución provisional de la sentencia y, en este caso, consistirá en la percepción de anticipos reintegrables que serán como máximo del 50% del importe de los salarios que debería percibir y sin rebasar el doble del SMI para mayores de 18 años", "Amelia no puede solicitar la ejecución provisional de la sentencia ya que esta únicamente puede instarse cuando el despido se declara improcedente y se opta por la indemnización.", "Amelia puede solicitar la ejecución provisional de la sentencia, lo que determinará que, en principio, Amelia se reincorpore a la empresa, perciba su retribución y siga de alta en la Seguridad Social."],
    correcta: 3
  },
  {
    letra: "4",
    pregunta: "Alfredo suscribió un contrato con la empresa BRUNILSA, S.L., como jefe ventas en la zona de Castilla La Mancha, ejerciendo su trabajo desde Albacete. El trabajador ha sido despedido y la Plaza de la Sección de lo Social del Tribunal de Instancia de Albacete, ha dictado sentencia declarando la nulidad del despido, que ha sido confirmada por la Sala de lo Social del TSJ de Castilla La Mancha. La empresa, siendo firme la sentencia, ha readmitido al trabajador, pero en la categoría de Oficial 1ª y en un centro de trabajo de Pontevedra.",
    opciones: ["Se trata de una readmisión irregular y Alfredo puede instar la ejecución definitiva de sentencia que se llevará a cabo en sus propios términos", "Se trata de una readmisión irregular y Alfredo puede instar la ejecución definitiva que se llevará a cabo procediendo a extinguir el contrato y fijando una indemnización", "Se trata de una readmisión irregular y Alfredo tiene como única opción instar la ejecución provisional de la sentencia, mientras prepara una nueva demanda.", "BRUNILSA SA, ha procedido a readmitir al trabajador correctamente y Alfredo solo tiene ahora como salida presentar una nueva demanda declarativa de clasificación profesional y acumularla a otra de impugnación de movilidad geográfica."],
    correcta: 0
  },
  {
    letra: "5",
    pregunta: "Guzmán suscribió un contrato como Jefe de Ventas en la zona de Levante, y trabaja desde Castellón. El trabajador fue despedido y ha recaído sentencia de la Plaza de la Sección de lo Social del Tribunal de instancia de Castellón declarando la improcedencia de despido, que ha sido confirmada por la Sala de lo Social del TSJ de la Comunidad Valenciana. La empresa optó por la readmisión; no obstante, siendo ya firme la sentencia, lo cierto es que no ha permitido la reincorporación del trabajador.",
    opciones: ["Guzmán puede instar la ejecución definitiva de sentencia que se llevará a cabo en sus propios términos.", "Guzmán tiene como única opción instar la ejecución provisional de la sentencia", "Guzmán puede instar la ejecución definitiva de sentencia que se llevará a cabo extinguiendo el contrato y fijándose una indemnización", "Guzmán debe presentar una nueva demanda por despido ante el Juzgado competente."],
    correcta: 2
  },
  {
    letra: "6",
    pregunta: "Mauricia trabaja como jefa de ventas en la empresa PERTINAZ, S.L, siendo la única mujer que ostenta un puesto de mando en la misma. Todos los jefes de venta perciben un complemento de productividad, excepto Mauricia. La trabajadora pretende interponer una demanda en reclamación de cantidad.",
    opciones: ["Mauricia podría interponer una demanda de derechos fundamentales, un proceso que se caracteriza, entre otras cosas, por su preferencia y sumariedad", "Mauricia podría interponer una demanda de tutela de derechos fundamentales, un proceso que carece de previsiones específicas en materia probatoria.", "Mauricia podría interponer una demanda de tutela de derechos fundamentales, un proceso sujeto a un específico plazo de prescripción de seis meses desde el momento en que se produce la vulneración denunciada", "Mauricia podría interponer una demanda de tutela de derechos fundamentales, un proceso en que puede intervenir como coadyuvante cualquier miembro de la representación unitaria en la empresa."],
    correcta: 0
  },
  {
    letra: "7",
    pregunta: "El recurso de suplicación:",
    opciones: ["La parte interesada debe personarse desde el primer momento, ante la Sala de lo Social del TSJ.", "La parte interesada debe anunciar el recurso ante la correspondiente Plaza de la Sección de lo Social del Tribunal de Instancia pero, a continuación, todas las actuaciones se desarrollan ante la Sala de lo Social del TSJ.", "La parte interesada anuncia el recurso, realiza todas sus actividades preparatorias y formaliza la impugnación ante la Plaza de la Sección de lo Social del Tribunal de Instancia que ha dictado la sentencia, correspondiendo luego su resolución al TSJ.","No es cierta ninguna de las respuestas anteriores."],
    correcta: 2
  },
  {
    letra: "8",
    pregunta: "La casación ordinaria ante el Tribunal Supremo procede frente a:",
    opciones: ["Las sentencias dictadas por las Secciones de lo Social de los Tribunales de Instancia, cuando el objeto procesal afecte a una pluralidad de trabajadores o beneficiarios de la Seguridad Social.", "Las sentencias y algunos autos dictados en instancia por las Salas de lo Social de los Tribunales Superiores de Justicia o la Sala de lo Social de la Audiencia Nacional.", "Las sentencias dictadas en suplicación por un TSJ cuando las mismas, al ser contradictorias con otras dictadas por otros Tribunales Superiores de Justicia o por el Tribunal Supremo, quebrantan la interpretación uniforme del derecho.", "Las sentencias firmes ganadas injustamente por concurrir algunas de las causas prevenidas en la Ley de Enjuiciamiento Civil."],
    correcta: 1
  },
  {
    letra: "9",
    pregunta: " La Plaza de la Sección de lo Social del Tribunal de Instancia de Albacete ha dictado una sentencia por la que el despido de una persona trabajadora se declara improcedente y la empresa CASTILLEJO, S.L., pretender recurrirla cuando se le notifica la sentencia.",
    opciones: ["La sentencia no es recurrible.", "La sentencia es recurrible en suplicación y el órgano competente para resolverlo es la Sala de lo Social del Tribunal Supremo.", "La sentencia es recurrible en suplicación y el órgano competente para resolverlo es la Sala de lo Social del Tribunal Superior de Justicia de Castilla La Mancha.", "La sentencia es recurrible en suplicación y el órgano competente para resolverlo es el Tribunal de Instancia, en su Sección de lo Social, de Albacete."],
    correcta: 2
  },
  {
    letra: "10",
    pregunta: "Una sentencia dictada por la Plaza de la Sección de lo Social del Tribunal de Instancia de Albacete, en proceso de reclamación de cantidad, condena a CONSTRUCCIONES PAQUIN, S.L., al pago de 1.500 euros que habían sido reclamados por un trabajador. La empresa no está conforme y pretende recurrir la sentencia:",
    opciones: ["Esta sentencia es recurrible en suplicación.", "Esta sentencia no es recurrible por razón de la cuantía.", "Esta sentencia es recurrible en reposición.", "Esta sentencia es recurrible en revisión."],
    correcta: 1
  }
];

let indice = 0;
let seleccionada = null;
let aciertos = 0;
let fallos = 0;
let pasadas = 0;
let respondidas = 0;

const rosco = document.getElementById("rosco");
const preguntaTexto = document.getElementById("pregunta");
const opcionesDiv = document.getElementById("opciones");
const contador = document.getElementById("contador");
const resultado = document.getElementById("resultado");
const empieza = document.getElementById("empieza");
const estado = document.getElementById("estado");
const progressFill = document.getElementById("progressFill");

const aciertosHTML = document.getElementById("aciertos");
const fallosHTML = document.getElementById("fallos");
const pasadasHTML = document.getElementById("pasadas");

function crearRosco() {
  rosco.innerHTML = "";

  preguntas.forEach((p, i) => {
    const div = document.createElement("div");
    div.classList.add("letra");
    div.textContent = p.letra;
    div.id = `letra-${i}`;
    rosco.appendChild(div);
  });
}

function mostrarPregunta() {
  if (respondidas === preguntas.length) {
    finalizarJuego();
    return;
  }

  seleccionada = null;
  resultado.textContent = "";
  estado.textContent = "Elige una respuesta";

  document.querySelectorAll(".letra").forEach(letra => {
    letra.classList.remove("activa");
  });

  document.getElementById(`letra-${indice}`).classList.add("activa");

  empieza.textContent = `EMPIEZA POR ${preguntas[indice].letra}`;
  preguntaTexto.textContent = preguntas[indice].pregunta;

  opcionesDiv.innerHTML = "";

  preguntas[indice].opciones.forEach((opcion, i) => {
    const btn = document.createElement("button");
    btn.classList.add("opcion");
    btn.textContent = opcion;

    btn.onclick = () => {
      document.querySelectorAll(".opcion").forEach(boton => {
        boton.classList.remove("seleccionada");
      });

      btn.classList.add("seleccionada");
      seleccionada = i;
      estado.textContent = "Respuesta seleccionada";
    };

    opcionesDiv.appendChild(btn);
  });

  actualizarProgreso();
}

function siguientePregunta() {
  if (seleccionada === null) {
    alert("Selecciona una respuesta o pulsa Pasapalabra.");
    return;
  }

  const letraActual = document.getElementById(`letra-${indice}`);

  if (seleccionada === preguntas[indice].correcta) {
    aciertos++;
    letraActual.classList.add("correcta");
  } else {
    fallos++;
    letraActual.classList.add("incorrecta");
  }

  respondidas++;
  actualizarStats();
  avanzar();
}

function pasarPregunta() {
  pasadas++;
  actualizarStats();
  avanzar();
}

function avanzar() {
  if (respondidas === preguntas.length) {
    finalizarJuego();
    return;
  }

  let intentos = 0;

  do {
    indice = (indice + 1) % preguntas.length;
    intentos++;
  } while (
    (
      document.getElementById(`letra-${indice}`).classList.contains("correcta") ||
      document.getElementById(`letra-${indice}`).classList.contains("incorrecta")
    ) &&
    intentos < preguntas.length
  );

  mostrarPregunta();
}

function actualizarStats() {
  aciertosHTML.textContent = aciertos;
  fallosHTML.textContent = fallos;
  pasadasHTML.textContent = pasadas;
}

function actualizarProgreso() {
  contador.textContent = `Pregunta ${respondidas + 1} de ${preguntas.length}`;
  const porcentaje = (respondidas / preguntas.length) * 100;
  progressFill.style.width = `${porcentaje}%`;
}

function finalizarJuego() {
  preguntaTexto.textContent = "Juego terminado";
  empieza.textContent = "RESULTADO FINAL";
  estado.textContent = "Partida finalizada";
  opcionesDiv.innerHTML = "";
  contador.textContent = `Completado ${preguntas.length} de ${preguntas.length}`;
  progressFill.style.width = "100%";

  resultado.innerHTML = `
    Aciertos: ${aciertos}<br>
    Fallos: ${fallos}<br>
    Nota final: ${(aciertos / preguntas.length * 10).toFixed(2)}
  `;

  document.querySelector(".actions").style.display = "none";
}

crearRosco();
mostrarPregunta();
