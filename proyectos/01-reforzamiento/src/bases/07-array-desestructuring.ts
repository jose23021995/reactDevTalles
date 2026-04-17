const caracterNames=["goku","vegueta","trunks"];
const[,,trunks]=caracterNames;
console.log({trunks});

const returnArrayFn=()=>{
    return ["ABC",123] as const
}

const[letras,numeros]=returnArrayFn();
console.log(numeros+200);