// Import stylesheets
import './style.css';

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

const user = {
  name: 'Paolino',
  surname: 'Paperino' 
};
console.log(typeof user);
console.log(user);
console.log(user.name, user.surname); // accesso con operatore punto .
console.log(user['name'], user['surname']); // accesso con [] in caso di risposta Json del backend che utilizza kebab-case per definire proprietà: es. user-name
console.log(`${user.name} ${user.surname}`); // stampa con uso del backtick `

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


const pizze = ['Margherita', 'Bufalina', 'Carlofortina'];
/* const anagrafiche = [{nome: 'Pinco', cognome: 'Pallo'}, true, 40, 'Roma'];
console.log(pizze);
console.log(anagrafiche);
const menuPizze = [
{nome: 'Margherita', prezzo: 7},
{nome: 'Bufalina', prezzo: 10}, 
{nome: 'Carlofortina', prezzo: 8}
];
console.log({menuPizze});
console.log(menuPizze); */

for(let i = 0; i < pizze.lenght; i++) {
  console.log(pizze[i]);
}
