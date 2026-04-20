const caracterNames=["goku","vegueta","trunks"];
const[,,trunks]=caracterNames;
console.log({trunks});

const returnArrayFn=()=>{
    return ["ABC",123] as const
}

const[letras,numeros]=returnArrayFn();
console.log(numeros+200);

const useState= (setName:string)=>{
    return{
        name:"Goku",
        setName:setName
    }
}


const [name, setName] = useState('Goku');
console.log(name);       // Goku
setName('Vegeta');       // Imprime "Vegeta"