let users = [
    {
        name: "Stiven Quiroz",
        age: 23,
        ocupation: "fullstack developer",
        aboutme: `
    Hola a todos, soy un Fullstack Developer con tres años de experiencia en el mundo de la programación. Me encanta aprender, codear y correr, y estoy constantemente buscando nuevas formas de mejorar mis habilidades y mantenerme actualizado en mi campo.
    `,
        hobbies: ["Codear", "Aprender", "Comer", "Hacer deporte", "Dormir"],
    },
    {
        name: "Laura Marcela Orjuela",
        age: 23,
        ocupation: "Ingeniera Industrial",
        aboutme: `Ingeniera industrial con sentido humano, responsabilidad social y ambiental, que con los conocimientos y las habilidades propias de su formación básica disciplinar, socio humanística y profesional específica, puede diseñar, planear, gestionar, modelar y evaluar sistemas de transformación de bienes y servicios, con el fin de incrementar su productividad y competitividad. Además, con capacidad para formular y evaluar proyectos de ingeniería.`,
        hobbies: ["Leer", "Bailar", "Hacer deporte", "Programar"],
    },
    {
        name: "Erick",
        age: 23,
        ocupation: "frontend developer",
        aboutme:
            "He aprendido a trabajar con herramientas de diseño web como HTML, CSS y JavaScript, y estoy emocionado de aplicar estas habilidades para crear diseños elegantes y funcionales.",
        hobbies: ["Codear", "Comer", "VideoGames", "Dormir"],
    },
    {
        name: "milton",
        age: 34,
        ocupation: "asesor",
        aboutme: ` me gusta la programación, actualemnete me estoy capacitando para ello, 
    `,
        hobbies: ["futbol", "leer", "correr", "bailar ", "cantar"],
    },
    {
        name: "alejandro",
        age: 25,
        ocupation: "student",
        aboutme: `
            Hola! Soy alejandro, y actualmente estoy estudiando programación y diseño UX. Me apasiona el proceso de crear productos digitales que sean atractivos, intuitivos y fáciles de usar. Me encanta la tecnología y cómo puede ayudar a las personas a lograr sus objetivos de manera más eficiente y efectiva.
    `,
        hobbies: ["gym", "leer", "comer"],
    },
    {
        name: "Walter",
        age: 18,
        ocupation: "Estudiante",
        aboutme: `Soy Walter recien termino el colegio, estudio en academlo, futuro programador. No entiendo los ejercicios si no tienen "brayan" de por medio y seguro que pasare fundamentos  
  `,
        hobbies: ["Hacer deporte", "leer", "Cocinar", "Dormir", "Estudiar"],
    },
    {
        name: "Brandon",
        age: 19,
        ocupation: "Student at Academlo",
        aboutme:
            "Hi everyone, my name is Brandon and I'm a student who is passionate about programming. I'm excited to tell you a little bit about myself and my interests today.",
        hobbies: ["Learn", "Exercises", "Read", "Programming today", "Run"],
    },
    {
        name: "David Galvez",
        age: 25,
        ocupation: "Frontend Developer",
        aboutme: `insert lorem ipsum XD
    `,
        hobbies: [
            "voleyball",
            "codear",
            "musica",
            "crear videos ",
            "fotografia",
        ],
    },
    {
        name: "Jorge Uceta",
        age: 25,
        ocupation: "Customer Services",
        aboutme: ` Mido 6'.0'', me interesa mucho aprender cosas nuevas y estar con mi familia
    `,
        hobbies: [
            "Comer",
            "BaseBall",
            "Hacer ejercicio",
            "Aprender cosas nuevas",
        ],
    },
    {
        name: "Sergio Olivo",
        age: 30,
        ocupation: "Estudiante",
        aboutme: ` Fresco, me gusta la física, la programación entre otras cosas
    `,
        hobbies: ["Futbol", "Musica", "Programacion", "arte", "Breakdance"],
    },
    {
        name: "Cristian",
        age: 36,
        ocupation: "Psicologo",
        aboutme:
            "Como psicólogo y baterista con experiencia, puedo decir que ambas facetas de mi vida me han ayudado a desarrollar habilidades y perspectivas únicas. Como psicólogo, he trabajado con una variedad de personas de diferentes edades, antecedentes y problemas de salud mental. He aprendido a escuchar activamente, a empatizar y a ser sensible a las necesidades de cada persona. También he desarrollado habilidades en la evaluación y el diagnóstico de problemas de salud mental, así como en la planificación y ejecución de tratamientos adecuados. Como baterista, he tocado en varios grupos y bandas, y he tenido la oportunidad de tocar en vivo y grabar en estudio. He aprendido a trabajar en equipo, a ser disciplinado y a tener una buena técnica. También he desarrollado habilidades en la creatividad y la improvisación, lo que me permite expresarme de manera única a través de la música..",
        hobbies: ["TocarBateria", "leer", "jugarfutbol", "Dormir"],
    },
];

function printHobbies(hobbies) {
    let html = "";

    for (const hobbie of hobbies) {
        html += `<li>${hobbie}</li>`;
    }

    return html;
}

function printUsers(users) {
    const usersHTML = document.querySelector(".users");

    let html = "";

    for (const { aboutme, age, hobbies, name, ocupation } of users) {
        html += `
            <div class="user">
                <h3 class="user__title">${name}</h3>
                <p>
                    <small>${age} años | ${ocupation}</small>
                </p>
                <p>
                    ${aboutme}
                </p>
                <div class="user__hobbies">
                    <h3>Hobbies</h3>
                    <ul>
                        ${printHobbies(hobbies)}
                    </ul>
                </div>
            </div>
        `;
    }

    usersHTML.innerHTML = html;
}

function main() {
    let usersCopi=structuredClone(users)
    const startHTML = document.querySelector(".start");
    const sortNameHtml = document.querySelector(".sortName");
    const ageMeHtaml=document.querySelector(".ageMe");
    const ageMaHtaml=document.querySelector(".ageMa");


    startHTML.addEventListener("click", function () {
        printUsers(users);
    });

    sortNameHtml.addEventListener("click", function () {
        
        usersCopi.sort((persona1, persona2) =>
            persona1.name.localeCompare(persona2.name)
        );
        printUsers(usersCopi);

        
    });
    ageMeHtaml.addEventListener("click",function(){
        usersCopi.sort((persona1, persona2) =>
            persona1.age - persona2.age
        );
        printUsers(usersCopi);
    })
    ageMaHtaml.addEventListener("click",function(){
        usersCopi.sort((persona2, persona1) =>
            persona1.age - persona2.age
        );
        printUsers(usersCopi);
    })
}

main();
