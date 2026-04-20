type Owner='DC'| 'Marvel'
//ternario
// enum Owner{
//     DC="DC", //0
//     Marvel="Marvel" //1
// }


export interface Hero{
    id: number;
    name: string;
    owner: Owner;
}


export const heroes:Hero[] = [
  {
    id: 1,
    name: 'Batman',
    owner:"DC",
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: "Marvel",
  },
  {
    id: 3,
    name: 'Superman',
    owner: "Marvel",
  },
  {
    id: 4,
    name: 'Flash',
    owner: "DC",
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: "Marvel",
  },
];

//exportacion por defecto
//export default heroes;
//Owner ==> Dueño | no es una funcion