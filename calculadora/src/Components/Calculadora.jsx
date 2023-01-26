import React, { useState } from 'react';
import './Calculadora.css';

export default function Calculadora() {
  const[numero, setNumero]=useState(0);// coloco para aparecer na tela, para não ser estatico, vou usar ele nas tag abaixo, toda aplicação esta sendo salva aqui
  const[pegarNumeroVelho, setPegarNumeroVelho]=useState(0);// eu pego o numero que digitei e quando eu clicar para soamar ele retorna a zero
  const[operadorDesinaisSelecionado, setOperadorDesinaisSelecionado]=useState();

function colocarNumeroAoClicar(valor){// quando eu clicar nos numeros eles realmente viram numeros
  let pegandoSoOValorDoNumero = valor.target.value //eu uso isso só para pegar o numero não o botão todo
  if(numero===0){//faço o if pra quando eu for limpar o numero e digitar de novo o 0 não fique na frente
    setNumero(pegandoSoOValorDoNumero);//aqui vai substituir o zero quando eu clicar em outro numero
  } else {
    setNumero(numero + pegandoSoOValorDoNumero);// isso é praquando quero somar um numero igual a 100 na tela
  }
  
}
function botaoDeApagar(){// botão de apagar
  setNumero(0);// quando eu limpar ele retorna pra zero
}
function botaoDePorcentagem(){
  setNumero(numero/100); // vai pegar o numero do estate e dividir por 100
}
function somarDiminuirMultiplicarDividir(valor){
  let sinaisSelecionados = valor.target.value //eu uso isso só para pegar o numero não o botão todo
  setOperadorDesinaisSelecionado(sinaisSelecionados);//qual sinal estou usando
  setPegarNumeroVelho(numero);//salvar o numero antigo digitado na hora que eu clico no sinal escolhido
  setNumero(0); //numero atual ou seja digitado depois do velho

}
function botaoDeIgual(){
  if(operadorDesinaisSelecionado==='/'){
    setNumero(parseFloat(pegarNumeroVelho)/parseFloat(numero));//pego o numero velho e divido pelo numero escolhido por ultimo
  } else if (operadorDesinaisSelecionado==='x'){
    setNumero(parseFloat(pegarNumeroVelho)*parseFloat(numero))//parseFloat garanto que numero seja numero
  }else if (operadorDesinaisSelecionado==='-'){
    setNumero(parseFloat(pegarNumeroVelho)-parseFloat(numero))//parseFloat garanto que numero seja numero
  }else if (operadorDesinaisSelecionado==='+'){
    setNumero(parseFloat(pegarNumeroVelho)+parseFloat(numero))//parseFloat garanto que numero seja numero
  }

}
  return(
    <div className="contenier">
          <div className="embrulhar">
            <h1 className="tela" >{numero}</h1>
            <button className="verde" onClick={botaoDeApagar}> AC</button>
            <button className="cor" onClick={botaoDePorcentagem}>%</button>
            <button className="cor" onClick={somarDiminuirMultiplicarDividir} value='/'>/</button>
            <button className="cor" onClick={somarDiminuirMultiplicarDividir} value='x'>x</button>
            <button className='cinza' onClick={colocarNumeroAoClicar} value={1}>1</button>
            <button className='cinza' onClick={colocarNumeroAoClicar} value={2}>2</button>
            <button className='cinza'  onClick={colocarNumeroAoClicar} value={3}>3</button>
            <button className="cor" onClick={somarDiminuirMultiplicarDividir} value='+'>+</button>
            <button className='cinza' onClick={colocarNumeroAoClicar} value={4}>4</button>
            <button className='cinza' onClick={colocarNumeroAoClicar} value={5}>5</button>
            <button className='cinza' onClick={colocarNumeroAoClicar} value={6}>6</button>
            <button className="cor" onClick={somarDiminuirMultiplicarDividir} value='-'>-</button>
            <button className='cinza' onClick={colocarNumeroAoClicar} value={7}>7</button>
            <button className='cinza' onClick={colocarNumeroAoClicar} value={8}>8</button>
            <button className='cinza' onClick={colocarNumeroAoClicar} value={9}>9</button>
            <button className="cor" onClick={botaoDeIgual}>=</button> 
            <button className='cinza' onClick={colocarNumeroAoClicar} value={0}>0</button>
            <button className='cinza' onClick={colocarNumeroAoClicar} value={'.'}>.</button>
            </div>       
    </div>
  )
}