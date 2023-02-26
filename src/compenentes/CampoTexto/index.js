import './CampoTexto.css'
import { useState } from 'react'

const CampoTexto = (props) => { //props é um parâmetro padrão, mas pode ser qualquer coisa. Por convenção é props, significa 'propriedade'.
    const placeholderModificada = `${props.placeholder}...`

    // let valor = 'Flávio Marques' ao invés de usar um let, é usado um hook, um useState

    const [valor, setValor] = useState('') // useState gera um pseudovariável, com um parâmetro de valor e outro de leitura

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className="campo-texto" >
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}></input>
        </div>
    )
}

export default CampoTexto