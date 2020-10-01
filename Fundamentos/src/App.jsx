import React from 'react'
import Primeiro from './components/basicos/Primeiro';
import Input from './components/formulario/input'
import ComParametro from './components/basicos/ComParametro';
import Card from './components/layout/Card.jsx';
import './App.css';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from './components/repeticao/ListaAlunos';
import ProductLista from './components/repeticao/ProductLista';
import ParOuImpar from './components/condicional/ParOuImpart';
import Contador from './components/contador/Contador'

export default function App(props) {
    return (
        <div className='App'>
            <h1>Fundamentos React</h1>
            <div className='Cards' >

            <Card titulo='#10 - Cotador' color = '#0099'>
                    <Contador nInicial = {40} />
                </Card>

            <Card titulo='#09 - Formulario' color = '#aaf8'>
                    <Input />
                </Card>

            <Card titulo='#08 - Renderização Condicional' color = '#aaa'>
                    <ParOuImpar numero = {21}></ParOuImpar>
                </Card>
                
                 <Card titulo='#07 - Exercicio de Repetições' color='red'>
                    <ProductLista></ProductLista>
                </Card>

                <Card titulo='#06 - Repetições' color='yellow'>
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo='#5 - Componente com filhos' color='blue'>
                    <Familia sobrenome=' Garcia'>
                        <FamiliaMembro nome='Marcio' />
                        <FamiliaMembro nome='Milka' />
                        <FamiliaMembro nome='Milane' />
                    </Familia>
                </Card>

                <Card titulo='Primeiro' color='#080'>
                    <Primeiro />
                </Card>

                <Card titulo='Com Parametro'>
                    <ComParametro
                        titulo='Aluno Marcio'
                        subtitulo='Classe A'
                        nota={9.3}
                    />
                </Card>

                <Card
                    titulo='Exemplo de Card' />
            </div>
        </div>
    )
}
