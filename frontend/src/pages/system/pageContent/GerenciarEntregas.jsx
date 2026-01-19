import '@/styles/table.css'
import {useState, useEffect} from 'react'
import Modal from '@/components/modal/Modal.jsx'

export default function GerenciarEntregas(){
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/entregas')
            .then((res) => res.json()
            .then((result) => {
                setData(result)
            })
        )
    }, [])

    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)
    return(
        <div id='body'>
            <div id='heading'>
                <h2>Entregas - Gerenciar entregas</h2>
                <button onClick={() => openModal()}>Nova entrega</button>
            </div>
            
            {/* <input type="search" placeholder="Fazer busca..." /> */}
            <Modal isOpen={isModalOpen} onClose={closeModal}/>
            

            <div id='table'>
                <table>
                <thead>
                    <tr>
                        <th>Data de Lançamento</th>
                        <th>Nome completo</th>
                        <th>Solicitação</th>
                        <th>Entrega</th>
                        <th>CPF/NIS</th>
                        <th>Benefício</th>
                        <th>Dispositivo</th>
                        <th>Bairro</th>
                        <th>Endereço</th>
                        <th>Técnico</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{new Date(item.data_lancamento).toLocaleDateString('pt-BR')}</td>
                            <td>{item.nome}</td>
                            <td>{new Date(item.data_solicitacao).toLocaleDateString('pt-BR')}</td>
                            <td>{new Date(item.data_entrega).toLocaleDateString('pt-BR')}</td>
                            <td>{item.cpf}</td>
                            <td>{item.beneficio}</td>
                            <td>{item.dispositivo}</td>
                            <td>{item.bairro}</td>
                            <td>{item.endereco}</td>
                            <td>{item.tecnico_responsavel}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    )
}