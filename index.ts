
//interfaces

interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    executarRugido(alturaEmDecibeis: number): void;
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

const animal: IAnimal = {
    nome:'Elefante',
    tipo: 'terrestre',
    executarRugido: (alturaEmDecibeis) => (`$(alturaEmDecibeis)dB`)
}

animal.executarRugido(200)
const felino: IFelino = {
    nome:'Leão',
    tipo: 'terrestre',
    visaoNoturna: true,
}

//types
 
