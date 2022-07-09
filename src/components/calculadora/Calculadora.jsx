import React from "react";
import "./Calculadora.css"

class Calculadora extends React.Component {
    constructor(props) {
        super(props);
        this.state = {valor1:"", valor2:"", resultado:""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.limpar = this.limpar.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]:event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        let resultado = parseFloat(this.state.valor1) + parseFloat(this.state.valor2);
        this.setState({resultado:resultado});
        alert(resultado);
    }

    limpar(event) {
        this.setState({valor1:'',valor2:'',resultado:''});
    }

    render() {
        return(
            <div className="Calculadora">
                <h1>Calculadora </h1> <br/>
                <div>
                    <h3>
                        Calcular valores:
                    </h3><br /><br />
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Valor 1 <br />
                            <input type="text" name="valor1" value={this.state.valor1} onChange={this.handleChange}/><br /><br />
                        </label>
                        <label>
                            Valor 2<br />
                            <input type="text" name="valor2" value={this.state.valor2} onChange={this.handleChange}/><br /><br />
                        </label>
                        <input type="submit" value="Calcular" /><br /><br />
                        <input type="button" value="Limpar" onClick={this.limpar}/>
                    </form>
                    <p>
                        {this.state.resultado}
                    </p>
                </div>
                
            </div>
        )
    }
}

export default Calculadora