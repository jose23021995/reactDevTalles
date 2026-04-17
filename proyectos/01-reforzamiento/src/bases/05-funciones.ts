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

function getUser():{}{
    return{
        uid:"ABC-123",
        username:"EL_PAPI23"
    }
}

const getUser2=():{}=>{
    return{
        uid:"ABC-123",
        username:"EL_PAPI23"
    }
}
const user2= getUser2();
console.log(user2)