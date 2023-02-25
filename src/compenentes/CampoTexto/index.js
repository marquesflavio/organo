import './CampoTexto.css'

const CampoTexto = (props) => { //props é um parâmetro padrão, mas pode ser qualquer coisa. Por convenção é props, significa 'propriedade'.
    return(
        <div className="campo-texto" >
            <label>{props.label}</label>
            <input placeholder={props.placeholder}></input>
        </div>
    )
}

export default CampoTexto