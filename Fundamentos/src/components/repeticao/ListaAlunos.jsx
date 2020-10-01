import React from 'react';
import alunos from '../../data/alunos'

export default props => {

    const li1 = (
        alunos.map((alunos) => {
            return (
                <li key={alunos.id}>
                    {alunos.id} - {alunos.nome} -> {alunos.nota}
                </li>
            )
        })
    )

    return (
        <div>
            <ul style={{listStyle:'none'}}>
                {li1}

            </ul>
        </div>
    )
}