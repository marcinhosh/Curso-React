import React, { Component } from 'react'

class Contador extends Component {

    state = {
        numero: this.props.nInicial || 0,
        passo: this.props.passoInicial || 1,
    };

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (e) => {
        this.setState({
            passo: + e.target.value
        })
    }

    render() {
        return (
            <div>
                <h2>Contador</h2>
                <h3> {this.state.numero} </h3>
                <div>
                    <label htmlFor='passoInput'>Passo: </label>
                    <input id='passoInput' type='number'
                        value={this.state.passo} 
                        onChange={this.setPasso} ></input>
                </div>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        )

    }
}

export default Contador