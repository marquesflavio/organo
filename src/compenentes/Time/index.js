import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    return(
        (props.colaboradores.length > 0) ? <section className='time' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>  {/* props é para gerar o título de forma dinâmica */}
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />) }
            </div>
        </section>
        : ''

        // o item inicial é um condicional ternário ? : - caso positivo retorna a section, senão retorna vazio.

    )
}
export default Time