/*
- [ ]  Possui array de estudantes
- [ ]  Possui array de cursos
- [ ]  Possui array de turmas
- [ ]  Todos os arrays são arrays de objeto
- [ ]  Possui função de parcelamento de curso
- [ ]  Função de parcelamento de curso valida desconto para múltiplos cursos
- [ ]  Possui função de reajuste de valores dos cursos
- [ ]  Possui busca de cursos
- [ ]  Possui busca de turmas
- [ ]  Possui busca de estudantes
*/

const curso1B ={
id: "M1-HTMLeCSS",
curso: "HTML e CSS",
conteudo: [
             [
                {
                    id: "a017",
                    tema: "HTML-1",
                    template: "",
                    exercicios: "https://github.com/botechiadev/botechiadev-html-I-exercicios.git",
                    exemplo1:"",
                    exemplo2:"",
                    status:0,
                    createdAt: "",
                    updatedAt: "",
                    responsable: "@BotechiaDev",
                    tags: []
                }, 
                {
                    id: "a018",
                    tema: "HTML-2",
                    template: "https://github.com/botechiadev/botechiadev-html-II-template.git",
                    exercicios: "https://github.com/botechiadev/botechiadev-html-II-exercicios.git",
                    exemplo1:"",
                    exemplo2:"",
                    status:0,
                    createdAt: "",
                    updatedAt: "",
                    responsable: "@BotechiaDev",
                    tags: []
                },
                {
                    id: "a019",
                    tema: "CSS-1",
                    template: "https://github.com/botechiadev/botechiadev-css-I-template.git",
                    exercicios: "https://github.com/botechiadev/botechiadev-css-I-exercicios.git",
                    exemplo1:"",
                    exemplo2:"",
                    status:0,
                    createdAt: "",
                    updatedAt: "",
                    responsable: "@BotechiaDev",
                    tags: []
                },
                {
                    id: "a020",
                    tema: "CSS-2",
                    template: "https://github.com/botechiadev/botechiadev-css-II-template.git",
                    exercicios: "https://github.com/botechiadev/botechiadev-css-II-exercicios.git",
                    exemplo1: "",
                    exemplo2: "",
                    status:0,
                    createdAt: "",
                    updatedAt: "",
                    responsable: "@BotechiaDev",
                    tags: []
                }, 
                {
                    id: "a021",
                    tema: "FLEX-BOX",
                    template: "https://github.com/botechiadev/botechiadev-flexbox-template.git",
                    exercicios: "https://github.com/botechiadev/botechiadev-flexbox-exercicios.git",
                    exemplo2: "",
                    status:0,
                    createdAt: "",
                    updatedAt: "",
                    responsable: "@BotechiaDev",
                    tags: []
                },
                {
                    id: "a022",
                    tema: "GRID",
                    template: "https://github.com/botechiadev/botechiadev-flexbox-template.git",
                    exercicios: "https://github.com/botechiadev/botechiadev-flexbox-exercicios.git",
                    exemplo1: 'https://github.com/botechiadev/botechiadev-grid-container-exemplo.git',
                    exemplo2: "https://github.com/botechiadev/botechiadev-grid-item-exemplo.git",
                    status:0,
                    createdAt: "",
                    updatedAt: "",
                    responsable: "@BotechiaDev",
                    tags: [],       
                },
                {
                    id: "a023",
                    tema: "RESPONSIVIDADE",
                    template: "https://github.com/botechiadev/botechiadev-responsividade-template.git",
                    exercicios: "https://github.com/botechiadev/botechiadev-responsividade-exercicios.git",
                    exemplo1: 'https://github.com/botechiadev/botechiadev-responsividade-exemplo.git',
                    exemplo2: "",
                    status:0,
                    createdAt: "",
                    updatedAt: "",
                    responsable: "@BotechiaDev",
                    tags: []
                },
                {
                    id: "a024-R",
                    tema: "R-HTML-CSS",
                    template: "",
                    exercicios: "",
                    exemplo1: '',
                    exemplo2: "",
                    status:0,
                    createdAt: "",
                    updatedAt: "",
                    responsable: "@BotechiaDev",
                    tags: []
              
                }
            ]
            ,
            [
                {
                    id: "PF-LP",
                    modulo: "M1",
                    title: "BOTECHIADEV-PROJETO-LANDING-PAGE",
                    repo: "https://github.com/botechiadev/botechiadev-projeto-landing-page.git",
                    deploy:"",
                    descricao: "Construcao de Landing Page vainilla usando HTML, CSS , JS",
                    imgUrl: "",
                    videoUrl: "",
                    tags: ["FUNDAMENTOS-WEB", "HTML","CSS", "Flexbox", "Grid", "DOM", "JS", "JAVASCRIPT"]
                }
            ]
        ],
duracao: "6 meses",
valor: 500
}

const estudanteM1 = {
    id: "m1-a0XX",
    primeiroNome: "Vini",
    turma: "Burnell",
    curso: "APIs-Rest",
    notas: [10, 8, 5],
    relatorioFinanceiro: {
        valor: 32481,
        nParcelas: 4,
        desconto: false,
        parcelas: 500
    },
    isGraduado: false,
    modulo: 1
}

//estudante.modulo = "Módulo 1"
estudante['modulo'] = "Módulo 1"

console.log("nome: " , estudante.nome)
console.log("Segunda nota: " , estudante["notas"][1])
console.log("Módulo: ", estudante.modulo)


const novoEstudante = {
    ...estudante,
    nome: "Clara Santos",//Astrodev
    matricula: 221249,
    sobrenome: "MUNHOZ",//Oliveira
    notas :[...estudante.notas, 9],
    modulo: "Módulo 2"
}


const astroEstudante = {
    ...estudante,
    nome: "ASTRODEV Oliveira",
    matricula: 324,
    sobrenome: "AMMAL",
    notas :[...estudante.notas, 9],
    modulo: "Módulo 3"
}

const bobEstudante = {
    ...estudante,
    nome: "BOB",
    matricula: 23001,
    sobrenome: "NEWTON",
    notas :[...estudante.notas, 9],
    modulo: "Módulo 4"
}

const estudantes = [estudante, novoEstudante]





const turma ={}




const validaDesconto = ()=>{}

const parcelaCurso = ()=>{}

const buscaCurso = ()=>{}

const buscaTurmas= ()=>{}

const buscaEstudantes= ()=>{}



