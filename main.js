
// //array
// // const person1 = [
// //     'Gaetano',
// //     39,
// //     'm',
// //     false,
// //     true,
// //     'Frascolla'
// // ];


// // //oggetto
// // const person = {
// //     firstName: 'Gaetano',
// //     lastName: 'Frascolla',
// //     age: 39,
// //     gender: 'm',
// //     isMarried: false,
// //     friends: ['Manuel', 'Paolo', 'Marco']
// // };


// // const nomeChiave = 'dimensione';
// // const palla = {
// //     colore: 'rosso',
// //     nome: 'Palla Grande',
// //     [nomeChiave]: 'grande'
// // }

// // palla.dimensione = 'piccola'; //variazione di una proprietà

// // //ciclo sulle proprietà di un oggetto
// // for (let key in palla) {
// //     console.log(palla[key]);
// // }

// // //array di oggetti
// // const classi =

// //     [

// //         {
// //             'nome': 'Classe 1',
// //             'numero_studenti': 10
// //         },

// //         {
// //             'nome': 'Classe 2',
// //             'numero_studenti': 15
// //         }

// //     ];

// // //definizione di un nuovo oggetto
// // const newClasse = {
// //     'nome': 'Classe 3',
// //     'numero_studenti': 20
// // }

// // //push array di un nuovo oggetto
// // classi.push(newClasse);


// // //oggetto con funzione
// // const human = {
// //     altezza: 1.5,
// //     eyesColor: 'green',
// //     talk() {
// //         return 'parole';
// //     }
// // }

// // human.talk();


// // //oggetto con array
// // const humanWithFriends = {
// //     friends: [
// //         {
// //             nome: 'Marco',
// //             eta: 30
// //         },
// //         {
// //             nome: 'Luca',
// //             eta: 29
// //         }
// //     ]
// // }

// // console.log(humanWithFriends);


// // //esempio di blog post
// // const post = {
// //     title: 'Nome Post',
// //     data: '07/03/2023',
// //     author: 'Giorgia',
// //     comments: [
// //         {
// //             title: 'Titolo commento',
// //             author: 'Bimal'
// //         }
// //     ],
// //     like: 76,
// //     isValid: true,
// //     order: 100
// // }


// // const listPost = [
// //     {
// //         title: 'Nome Post',
// //         data: '07/03/2023',
// //         author: 'Giorgia',
// //         comments: [
// //             {
// //                 title: 'Titolo commento',
// //                 author: 'Bimal'
// //             }
// //         ],
// //         like: 76,
// //         isValid: true,
// //         order: 100,
// //         img: 'http://img'
// //     },
// //     {
// //         title: 'Nome Post',
// //         data: '07/03/2023',
// //         author: 'Giorgia',
// //         comments: [
// //             {
// //                 title: 'Titolo commento',
// //                 author: 'Bimal'
// //             }
// //         ],
// //         like: 76,
// //         isValid: true,
// //         order: 100
// //     },
// //     {
// //         title: 'Nome Post',
// //         data: '07/03/2023',
// //         author: 'Giorgia',
// //         comments: [
// //             {
// //                 title: 'Titolo commento',
// //                 author: 'Bimal'
// //             }
// //         ],
// //         like: 76,
// //         isValid: true,
// //         order: 100
// //     }
// // ]


// // //ciclo su elementi array
// // for (let i = 0; i < listPost.length; i++) {
// //     const currentobject = listPost[i];
// //     //ciclo su chiavi oggetto
// //     for (let key in currentobject) {
// //         console.log(key);
// //         console.log(currentobject[key])
// //     }
// // }


// // const firstName = 'Gaetanoz';
// // const lastName = 'Frascolla';
// // const age = 39;


// // const person = {
// //     nome: 'Gaetano',
// //     cognome: 'Frascolla',
// //     eta: 39
// // };

// // const person = {
// //     nome: firstName,
// //     cognome: lastName,
// //     eta: age
// // };

// // const nome = 'Gaetanoz';
// // const cognome = 'Frascolla';
// // const age = 39;
// // const newKey = 'secondoNome';
// // const franco = 'nome3';




// const person = {
//     nome: 'Gaetanoz',
//     cognome: 'Frascolla',
//     eta: 39,
// };

// //const nome = person.nome;

// const { nome } = person;




// // const nomePersona = person.nome; //person['nome'];
// // const etaPersona = person.eta;

// // const nome = person.nome;
// // const eta = person.eta;



// //  console.log(nome);



// // console.log(person);


// //rest


// // function sum(num1, num2){
// //     return num1 + num2;
// // }

// // const sumOld = (num1, num2, num3 = 0) => num1 + num2 + num3;
// // console.log(sumOld(2,3, 2));

// function calculation(operation, ...num ) {

//     let result = 0;
//     if(operation === 'sum'){

//         num.forEach((element) => {
//             result += element;
//         });

   
//     } else if(operation === 'sub'){
        
//         num.forEach((element) => {
//             result -= element;
//         });



//     } else {
//         return 'specifica una operazione';
//     }

//     return result;

// }

// console.log(calculation('sum', 1,2,3));
// console.log(calculation('sub', 1,2,3));


// // const obj = {name: 'palla', peso: 50};
// // const newObj = obj;

// // //aggiungendo proprietà
// // newObj.colore = 'blue';

// // console.log(obj);
// // console.log(newObj);
// // const copyObj = {...obj, colore: 'blue'};
// // console.log(copyObj); 
// //{name: "palla", peso: 50, colore: "blue"}

// const obj = {name: 'palla', peso: 50};
// //const newObj = obj;
// const newObj = {...obj, colore: 'blue'};

// console.log(obj);
// console.log(newObj);

// const studenti = [
//     {
//         nome: 'Gaetano',
//         eta: 39
//     },
//     {
//         nome: 'Cosimo',
//         eta: 21
//     }
// ];

// const nuoviStudenti = studenti.map((element) => {

//     let cool = false;
//     if(element.eta < 39){
//         cool = true;
//     }


//     return {...element, cool}

//    // return element;
// });

// console.log(nuoviStudenti);



const cosimo =  {
    nome: 'Cosimo',
    eta: 21,
    prova: {
        key1: 'ciao',
        key2: 'nociao'
    }
};

const {nome, prova} = cosimo;
const {key1, key} = prova;


//const nome = cosimo.nome;

console.log(nome);


const numbers = [[0,1], [1,2]];

// const num0 = numbers[0];
// const num4 = numbers[4];

// console.log(num0);
// console.log(num4);

const [num0,num4] = numbers;

console.log(num0);
console.log(num4);

