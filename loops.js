//Iteracion#1
//Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". 
//Usa la función .includes de javascript.
const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

for(let product of products){
    product.includes('Camiseta') ? console.log(product) : '';
}

//Iteracion#2
//Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad 
//isApproved a true o false en consecuencia. Una vez lo tengas compruébalo con un console.log.
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

for(let alumn of alumns){
    alumn.isApproved = false;
    if((alumn.T1 && alumn.T2) || (alumn.T2 && alumn.T3) || (alumn.T1 && alumn.T3)){
        alumn.isApproved = true;
    }
}
console.log(alumns);

//Iteracion#3
//Usa un bucle forof para recorrer todos los destinos del array. Imprime en un console.log sus valores.
const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

for( places of placesToTravel){
    console.log(places);
}

//Iteracion#4
//Usa un for...in para imprimir por consola los datos del alienígena..
const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for(let key in alien){
    console.log(key, alien[key]);
}


//Iteracion#5
//Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un console log el array
const placesToTravel1 = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

for(let i = 0; i < placesToTravel1.length; i++){
    if( placesToTravel1[i].id === 11 || placesToTravel1[i].id === 40){
        placesToTravel1.splice(i, 1); 
        i--; //Si se modifica una array durante un loop hay que reajustar el indice porque la longitus ha cambiado
    }
}
console.log(placesToTravel1);


//Iteracion#6
//Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato. Recuerda que puedes usar 
//la función .includes() para comprobarlo.
const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]
const toErase = [];
let cont = 0;
for (let toy of toys){
    if(toy.name.includes('gato')){
        toErase.push(cont);
    }
    cont++;
}

for (let i=(toErase.length - 1); i >=0; i--){
    toys.splice(toErase[i],1);
}
console.log(toys);

//Iteracion#7
//Usa un bucle for...of para recorrer todos los juguetes y añade los que tengan más de 15 ventas (sellCount) al 
//array popularToys. Imprimelo por consola..
const popularToys = [];
const toys1 = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
]

for (let toy of toys1){
    toy.sellCount > 15 ? popularToys.push(toy) : '';
}
console.log(popularToys);
