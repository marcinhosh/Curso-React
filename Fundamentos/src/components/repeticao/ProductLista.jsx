import React from 'react';
import produtos from '../../data/products';

export default props => {

    function getLinhas() {
        return produtos.map(produto => {
            return (
                <tr key={produto.id}>
                    <th>{produto.id}</th>
                    <th>{produto.nome}</th>
                    <th>R$ {produto.preco}</th>
                </tr>
            )
        })
    }
    
   
    return (
        <div>
            <table border='1'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>

                        {getLinhas()}

                </tbody>
            </table>

        </div>
    )
}