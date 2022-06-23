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
console.log('------2');

let a = 5
let b = 8
console.log(a + b);
b = '8';
console.log(a + b);
console.log(a - b);
console.log('------3');





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
