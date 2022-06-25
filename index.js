// Import stylesheets
import './style.css';

/* Variabili let e const e i tipi in JS */

let name; 
const surname = 'Pallo';
name = 'Pinco';
console.log(name, surname);

name = 'Caio';
console.log(name, surname);
console.log('------1');

let variabileLet = 'stringa';
console.log(typeof variabileLet);

variabileLet = 4.67;
console.log(typeof variabileLet);

variabileLet = false;
console.log(typeof variabileLet);

variabileLet = {};
console.log(typeof variabileLet);
console.log('------2');

let a = 5
let b = 8
console.log(a + b);
b = '8';
console.log(a + b);
console.log(a - b);
console.log('------3');

/* Gli Objects in JS, accesso alle proprietà e il loro output */

const user = {
  name: 'Paolino',
  surname: 'Paperino' 
};
console.log(typeof user);
console.log(user);
console.log(user.name, user.surname); // accesso con operatore punto .
console.log(user['name'], user['surname']); // accesso con [] in caso di risposta Json del backend che utilizza kebab-case per definire proprietà: es. user-name
console.log(`${user.name} ${user.surname}`); // stampa con uso del backtick ` (ALT+96 su bloc num)

user.name = 'Paperone'; // modifica di una proprietà dell'oggetto dichiarato const
user.surname = 'De Paperoni';
user.city = 'Paperopoli'; // si possono aggiungere a runtime proprietà ad un oggetto
console.log(`${user.name} ${user.surname}, ${user.city}`); 

/* Don't use 'var': dichiarare una variabile con var avrà come conseguenza che la variabile avrà come scope l'intera funzione o tutto il codice di una pagina. */
/* Dont use variabili non dichiarate: usare le variabili senza prima averle dichiarate le rende variabili globali, quindi potenzialmente capaci di modificare il sottostante oggetto 'Window' di JS e quindi le sue proprietà o metodi che abbiano un nome identico a quello della variabile non dichiarata, in quanto lo scope diventa globale */
console.log('------4');

/* Il costrutto condizionale 'if' */

let num1 = 11;
let num2 = 9;
console.log(`Confronta i seguenti numeri: ${num1} e ${num2}`);

if(num1 < num2) {
  console.log('Numero1 minore di Numero2');
} else {
  console.log('Numero1 maggiore o uguale a Numero2')
}
console.log('------5');

/* Array e cicli */

const pizze = ['Margherita', 'Bufalina', 'Carlofortina'];
console.log(pizze); // accede al json dell'array
console.log(`${pizze}`); // accede a tutti gli elementi dell'array
console.log(pizze[0]); // accede al singolo e primo elemento dell'array

/* Don't use!! Array eterogenei: */
const anagrafiche = [{nome: 'Pinco', cognome: 'Pallo'}, true, 40, 'Roma'];
console.log(`${anagrafiche}`);
for(let i = 0; i < anagrafiche.length; i++) {
  console.log(anagrafiche[i]);
}

const menuPizze = [
{nome: 'Margherita', prezzo: 7},
{nome: 'Bufalina', prezzo: 10}, 
{nome: 'Carlofortina', prezzo: 8}
];
console.log({menuPizze});

// Cicli for: for 'classico', 'for in' e 'for of'
console.log('---for classico');
for(let i = 0; i < menuPizze.length; i++) {
  console.log(menuPizze[i]);
}

console.log('---for in');
for(let index in menuPizze) {
  console.log(menuPizze[index]);
}

console.log('---for of');
for(let pizza of menuPizze) {
  console.log(pizza);
}
console.log('------6');

/* Funzioni in JS */

// Function declaration
function saluta(name, surname) {
  console.log(`Ciao ${name} ${surname}!!`)
}
saluta('Antonio', 'Gramsci')

// Il backtick consente di spezzare l'output e andare a capo
function salutaACapo(name, surname) {
  const saluto = `Ciao ${name} 
  ${surname}!!`;
  console.log(saluto);
}
salutaACapo('Caio', 'Giulio')

// La funzione può avere anche dei valori di ritorno con return 

function salutaConReturn(name, surname) {
  const saluto = `Ciao ${name} ${surname}!!`;
  return saluto;
}

const risposta = salutaConReturn('Caio', 'Giulio');
console.log(risposta)

// Function expression: in JS le funzioni sono cd. di primo ordine (first-class function), ovvero possono essere trattate come qualsiasi altra variabile e passate come parametri ad altre funzioni o assegnate ad altre variabili o diventare proprietà di un oggetto

// come variabile: questa sintassi è utile quando vogliamo assegnare una funzione come proprietà di un oggetto
const maledici = function nomiMaledetti(name, surname) {
  console.log(`Ti maledico ${name} ${surname}!!`);
}

maledici('Matteo', 'Salvini');