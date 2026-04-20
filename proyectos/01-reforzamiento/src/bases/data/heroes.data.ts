//type Owner='DC'| 'Marvel'

export  const Owner ={
    DC: "DC",
    Marvel: "Marvel"
} as const;

export type Owner = typeof Owner[keyof typeof Owner];

export interface Hero{
    id: number;
    name: string;
    owner: Owner;
}


export const heroes:Hero[] = [
  {
    id: 1,
    name: 'Batman',
    owner:Owner.DC,
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: Owner.Marvel,
  },
  {
    id: 3,
    name: 'Superman',
    owner: Owner.Marvel,
  },
  {
    id: 4,
    name: 'Flash',
    owner: Owner.DC,
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: Owner.Marvel,
  },
];

//exportacion por defecto
//export default heroes;
//Owner ==> Dueño | no es una funcion