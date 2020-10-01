import React, { useState } from 'react'

export default props => {

    const [valor, setValor] = useState('Inicial')

    function chn(e) {
        setValor(e.target.value)
    }
    return (
        <div>
            <input value={valor} onChange={chn} />
        </div>
    )
}