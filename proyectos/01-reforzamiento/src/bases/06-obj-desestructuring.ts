const persona={
    name:"armando",
    age:31,
    key:"CDMX"
}

const { name:ironmanName,age:ageIronMan,key}=persona;

console.log({ ironmanName,ageIronMan,key});
interface Hero{
    name:string;
    age:number;
    key:string;
    rank?:string
}


const useContext=({age,key,name,rank="sin rango"}:Hero)=>{
    return{
        keyName:key,
        user:{
            name,
            age
        },
        rank
    }
}

const context= useContext(persona);
console.log(context);


const {
    keyName,
    rank,
    user
    //user:{name}
}= useContext(persona);

const{name,age}=user;
console.log({keyName,rank,name,age});

// const {age,name}= user;
// console.log({keyName,rank,user});