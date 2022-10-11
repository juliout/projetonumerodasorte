import {useEffect, useState} from 'react'
import axios from 'axios'
import InputMask from 'react-input-mask'
import {ModalDiv} from './modalStyled'
import InputName from '../inputName'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalError from '../modalError'
import ModalSucess from '../modalSucess'
import Email from '../emailAutocompletee';

export default function MCadastro({setCadastrar, form}) {
    const [emailC ,setEmailC]  = useState(lete())

    function lete () {
        if(form.social === 'e-mail'){
            return form.socialContact
        }
        else return null
    }
    
    const closebox = (e) => {
        e.preventDefault()
        setCadastrar(false)        
    }

    const sendCadastro = async (e) => {
        e.preventDefault()
        let {name, nascimento, email, password} = e.target

        let user = {
            name: name.value,
            nascimento: nascimento.value,
            email: email.value,
            password: password.value,
            social: form.social,
            socialContact : form.socialContact,
            loteria : form.loteria,
            site: 'alerta-da-sorte'
        }

        const response = await axios.post('/createuser', user).catch(async error => {
            return await ModalError(error.message)
        })
        if(response.status === 400) { return ModalError(response.data.message)}
        const reload = () => {
            return setTimeout(()=>{
                window.location.reload();
            }, 3500);
        }
        return ModalSucess('Cadastradi com sucesso', reload)
    
    }   

    return (
        <ModalDiv>
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
            <div className="modalMain">
                <button className='btnClose' onClick={closebox}> X </button>
                <form id='formSendCadastro' onSubmit={sendCadastro}>
                    <h2 className='formTitle'>
                        Complete seu cadastro e escolha uma senha para que você possa
                        editar ou cancelar seus alertas aqui pelo site.
                    </h2>
                    <div className='divForm'>
                        
                        <div className='stwo'>
                            <div className='input fullname'>
                                <label htmlFor="name">Nome Completo:</label>
                                <InputName type="text" name='name' id='name' required/>
                            </div>
                            <div className="select">
                                <label htmlFor="">genero</label>
                                <select name="genero" id="genero" className='.input'>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Feminino">Feminino</option>
                                </select>
                            </div>
                            <div className='input'>
                                <label htmlFor="nascimento">Data Nasci.:</label>
                                <input type='date' name='nascimento' id='nascimento' required/>
                            </div>
                            
                        </div>
                        <div className="sone">
                            <div className='input '>
                                <label htmlFor="email">E-mail</label>
                                <Email name='email' id='email' required value={emailC} onChange={(e)=>{setEmailC(e.target.value)}} autoComplete='off' />
                            </div>
                            <div className='input'>
                                <label htmlFor="name">Senha</label>
                                <input type="password" name='password' id='password' required/>
                            </div>
                        </div>
                       
                        <div className='divtemos'>
                            <input type="checkbox" name="termodal" id="termodal" required/>
                            <label htmlFor="temodal">Li e aceito os <span>termos de uso</span>.</label>
                        </div>
                        <button className='prontobtn'>Pronto!</button>
                    </div>
                </form>                
            </div>
        </ModalDiv>
    )
}