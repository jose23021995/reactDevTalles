const ironMan={
    fistName:"Tony",
    lastName:"Starck",
    age:45,
    addres:{
        postalCode:"07900",
        city:"New york"
    }
}
const spidrman= structuredClone(ironMan);
spidrman.fistName="Peter";
spidrman.lastName="Parker";
spidrman.age=22;
spidrman.addres.city="San Jose"

//console.log(ironMan,spidrman);

const iori={...spidrman};
iori.fistName="iori";
iori.lastName="yagami";
iori.age=27;
iori.addres.city="Japon"
iori.addres.postalCode="2222";
console.log(iori);

