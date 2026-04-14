// estas intefaces estan hechas 
// para el ejercicio de la clase 4, pero se pueden usar en la clase 3 tambien, 
// ya que no hay nada que impida su uso en esa clase, es mas, es recomendable usar 
// interfaces para definir los tipos de objetos literales, ya que esto nos permite tener una mejor 
// organizacion y una mejor legibilidad del codigo, ademas de que nos permite reutilizar el mismo tipo 
// de objeto en diferentes partes del codigo sin tener que repetir la definicion del tipo cada vez.


interface Addres{
        postalCity:string;
        city:string;
}
//Adres es una interface que define el tipo de objeto que se espera 
// en la propiedad addres del objeto Person, esta interface tiene dos propiedades, postalCity y city, 
// ambas son de tipo string, y la propiedad addres es opcional, lo que significa que un objeto de tipo 
// Person puede tener o no tener esta propiedad.
interface Person{
    fistName: string;
    lastName: string;
    age: number;
    addres?:Addres
}

//clase 3
// const ironMan={
//     fistName:"Tony",
//     lastName:"Starck",
//     age:45,
//     addres:{
//         postalCode:"07900",
//         city:"New york"
//     }
// }
 

// const spidrman= structuredClone(ironMan);
//     spidrman.fistName="Peter";
//     spidrman.lastName="Parker";
//     spidrman.age=22; 

// //console.log(ironMan,spidrman);

// const iori={...spidrman};
//     iori.fistName="iori";
//     iori.lastName="yagami";
//     iori.age=27;
//     iori.addres.city="Japon"
//     iori.addres.postalCode="2222";
//     console.log(iori);

//clase 4

const ironMan:Person={
    fistName:"Tony",
    lastName:"Starck",
    age:45
}
console.log("Iron man",ironMan)

const spiderman:Person={
    fistName: "Peter",
    lastName: "Parker",
    age: 22,
    addres:{
        postalCity:"07900",
        city:"New york"
    }
}
console.log("Spiderman",spiderman);

