interface User{
    uid: string;
    username: string;
}

//tipo 1 de declarar funciones normales
function greet (name:string):string
{
    return `Hola ${name}`
}
const message= greet("goku");

//funcion de flecha
const greet2=(name:string):string => {
    return `Hola ${name}`
}




const messag2= greet("vegeta");

function getUser():User{
    return{
        uid:"ABC-123",
        username:"EL_PAPI23"
    }
}



//funcion de flecha simplificada
const greet3=(name:string) => `Hola ${name}`;
console.log(greet3("papi"))

const getUser2=():User=>({
        uid:"ABC-123",
        username:"EL_PAPI23"
    });

const user2= getUser2();
console.log(user2)


const myNumber:number[]=[1,2,3,4,5];

myNumber.forEach(function(value){console.log({value});})

myNumber.forEach((value)=>console.log({value}))

myNumber.forEach(console.log)