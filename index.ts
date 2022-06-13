
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
 
interface Estudante{
    nome: string
    idade: number
}

interface estudante{
    serie: string
}

import $ from 'jquery';

$.fn.extend({
    novaFuncao() {
        console.log('Chamou nova função');
    }
});

interface Pessoa {
    nome: string;
    idade: number;
    nacionalidade: string;

}

interface Brasileiro extends Omite<Pessoa, 'nacionalidade'>{

}
const brasileiro: Brasileiro = {
    
}
