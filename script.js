// PRESENTACIÓN DEL BOT
const introBot = "Soy un asistente virtual especializado en arquitectura, historia urbana y arquitectos. ";

// BIBLIOTECA DE ARQUITECTURA
const bibliotecaArquitectura = [
    {
        claves: ["arquitectura", "definición"],
        texto: "La arquitectura es el arte y la técnica de proyectar, diseñar y construir espacios habitables, considerando aspectos funcionales, estéticos, culturales y tecnológicos."
    },
    {
        claves: ["elementos", "arquitectónicos"],
        texto: "Los elementos arquitectónicos incluyen muros, columnas, vigas, arcos, bóvedas, cúpulas, techos, puertas y ventanas, que conforman la estructura y forma de una edificación."
    },
    {
        claves: ["estilos", "arquitectura"],
        texto: "Algunos estilos arquitectónicos importantes son: arquitectura egipcia, griega, romana, románica, gótica, renacentista, barroca, neoclásica, moderna y contemporánea."
    },
    {
        claves: ["urbanismo", "ciudades"],
        texto: "El urbanismo estudia la planificación y organización de las ciudades, considerando la distribución de viviendas, espacios públicos, vías de circulación y servicios."
    },
    {
        claves: ["vivienda", "casas"],
        texto: "La vivienda es el espacio destinado a la habitación humana. A lo largo de la historia, su diseño ha estado influenciado por el clima, los materiales disponibles y la cultura."
    },
    {
        claves: ["egipto", "egipcia"],
        texto: "La arquitectura egipcia se caracteriza por construcciones monumentales como pirámides y templos, realizadas en piedra y con un fuerte sentido religioso."
    },
    {
        claves: ["grecia", "griega"],
        texto: "La arquitectura griega buscó la proporción y la armonía, desarrollando los órdenes dórico, jónico y corintio, visibles en templos como el Partenón."
    },
    {
        claves: ["roma", "romana"],
        texto: "La arquitectura romana se destacó por su ingeniería, el uso del arco, la bóveda y el hormigón, y la planificación urbana."
    },

    // ARQUITECTOS
    {
        claves: ["le corbusier"],
        texto: "Le Corbusier fue un arquitecto del movimiento moderno. Propuso los cinco puntos de la arquitectura moderna y diseñó viviendas funcionales y racionales."
    },
    {
        claves: ["frank lloyd wright"],
        texto: "Frank Lloyd Wright desarrolló la arquitectura orgánica, integrando los edificios con la naturaleza, como en la Casa de la Cascada."
    },
    {
        claves: ["zaha hadid"],
        texto: "Zaha Hadid fue una arquitecta contemporánea reconocida por sus diseños fluidos, innovadores y de geometrías complejas."
    },
    {
        claves: ["ludwig mies van der rohe"],
        texto: "Mies van der Rohe fue uno de los máximos exponentes del modernismo, conocido por el principio 'menos es más'."
    }
];

// FUNCIÓN PRINCIPAL DEL BOT
function enviarMensaje() {
    let input = document.getElementById("userInput");
    let mensaje = input.value.toLowerCase();
    let chat = document.getElementById("chat");

    if (mensaje === "") return;

    chat.innerHTML += `<div class="user">${input.value}</div>`;

    let respuesta = "";
    let encontrado = false;

    for (let item of bibliotecaArquitectura) {
        for (let clave of item.claves) {
            if (mensaje.includes(clave)) {
                respuesta = introBot + item.texto;
                encontrado = true;
                break;
            }
        }
        if (encontrado) break;
    }

    if (!encontrado) {
        respuesta = introBot + "Puedo ayudarte con definiciones de arquitectura, estilos arquitectónicos, urbanismo, viviendas antiguas o arquitectos famosos como Le Corbusier, Frank Lloyd Wright o Zaha Hadid.";
    }

    chat.innerHTML += `<div class="bot">${respuesta}</div>`;
    input.value = "";
    chat.scrollTop = chat.scrollHeight;
}
