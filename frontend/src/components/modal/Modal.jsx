import './modal.css'
import {useState} from 'react'

export default function Modal({isOpen, onClose, children}){
    const [dataLancamento, setDataLancamento] = useState("")
    const [nome, setNome] = useState("")
    const [cpf, setCpf] = useState("")
    const [dataSolicitacao, setDataSolicitacao] = useState("")
    const [dataEntrega, setDataEntrega] = useState("")
    const [beneficio, setBeneficio] = useState("")
    const [dispositivo, setDispositivo] = useState("")
    const [bairro, setBairro] = useState("")
    const [endereco, setEndereco] = useState("")
    const [tecnicoResponsavel, setTecnicoResponsavel] = useState("")

    const dadosFormulario = {dataLancamento, nome, cpf, dataSolicitacao, dataEntrega, beneficio, dispositivo, bairro, endereco, tecnicoResponsavel}
    
    if(!isOpen) return null

    return(
        <div id="modal">
            <div id="modal-box">
                <button onClick={onClose}>x</button>

                <form action="" id='modal-form' onSubmit={(e) => {
                    e.preventDefault()

                    fetch('http://localhost:3000/registrar-entrega', {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(dadosFormulario)
                    })
                }}>
                    <div className='m_input_field'>
                        <label htmlFor="dataLancamento">Data de Lancamento:</label>
                        <input type="date" name="dataLancamento" onChange={(e) => setDataLancamento(e.target.value)}/>
                    </div>

                    <div className='m_input_field'>
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" name="nome" onChange={(e) => setNome(e.target.value)}/>
                    </div>

                    <div className='m_input_field'>
                        <label htmlFor="cpf">CPF:</label>
                        <input type="text" name="cpf" onChange={(e) => setCpf(e.target.value)}/>
                    </div>

                    <div className='m_input_field'>
                        <label htmlFor="dataSolicitacao">Data da Solicitacao:</label>
                        <input type="date" name="dataSolicitacao" onChange={(e) => setDataSolicitacao(e.target.value)}/>
                    </div>

                    <div className='m_input_field'>
                        <label htmlFor="dataEntrega">Data de Entrega:</label>
                        <input type="date" name="dataEntrega" onChange={(e) => setDataEntrega(e.target.value)}/>
                    </div>

                    <div className='m_input_field'>
                        <label htmlFor="beneficio">Benefício:</label>
                        <select name="beneficio" id="" onChange={(e) => setBeneficio(e.target.value)}>
                            <option value="cesta_basica">Cesta básica</option>
                            <option value="colchao">Colchão</option>
                            <option value="kit_limpeza">Kit de limpeza</option>
                            <option value="kit_enxoval">Kit enxoval</option>
                        </select>
                    </div>

                    <div className='m_input_field'>
                        <label htmlFor="dispositivo">Dispositivo:</label>
                        <select name="dispositivo" id="" onChange={(e) => setDispositivo(e.target.value)}>
                            <option value="cras_sao_joaquim">CRAS São Joaquim</option>
                            <option value="cras_santa_terezinha">CRAS Santa Terezinha</option>
                            <option value="cras_belisario">CRAS Belisário</option>
                            <option value="cras_barra">CRAS Barra</option>
                            <option value="naas">NAAS</option>
                        </select>
                    </div>

                    <div className='m_input_field'>
                        <label htmlFor="bairro">Bairro:</label>
                        <input type="text" name="bairro" onChange={(e) => setBairro(e.target.value)}/>
                    </div>

                    <div className='m_input_field'>
                        <label htmlFor="endereco">Endereco:</label>
                        <input type="text" name="endereco" onChange={(e) => setEndereco(e.target.value)}/>
                    </div>

                    <div className='input_field'>
                        <label htmlFor="tecnicoResponsavel">Tecnico Responsavel:</label>
                        <input type="text" name="tecnicoResponsavel" onChange={(e) => setTecnicoResponsavel(e.target.value)}/>
                    </div>

                    <input type="submit" value="Registrar"/>
                </form>
            </div>
        </div>
    )
}