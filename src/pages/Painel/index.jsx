import {useState} from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import {PainelDiv, PainelMain} from './styled'
import { ToastContainer } from 'react-toastify'
import Alarm from './Alertas'
import Editar from './Editar'

export default function Painel() {

    const [aba, setAba] = useState('Alarme')
    
    function changeAba(value) {
        return value === 'Alarme' ? setAba('Alarme') : setAba('Editar')
    }
  
    
    return(
        <>
        <Header/>
        <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
        <PainelDiv>
            <PainelMain colorH3={aba}>
                <div className='abaDiv'>
                    <h3 onClick={()=>changeAba('Alarme')} className='Alarm'>Meus Alertas</h3>
                    <h3 onClick={()=>changeAba('Editar')} className='Editar'>Editar Cadastro</h3>
                </div>
                {
                    aba === 'Editar' ? <Editar/> : <Alarm/>
                }
            </PainelMain>
        </PainelDiv>
        <Footer/>
        </>
    )
}