import {useState} from 'react'
import axios from 'axios'
import InputMask from 'react-input-mask'
import {ModalDiv} from './modalStyled'
import InputName from '../inputName'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Email from '../emailAutocompletee';

export default function MCadastro({setCadastrar, form}) {

    const [name, setName] = useState(form.name)
    const [dataNascimento, setDataNascimento] = useState(form.nascimento)
    const [email, setEmail] = useState(form.email)

    const closebox = (e) => {
        e.preventDefault()
        setCadastrar(false)        
    }

    async function toastError(message) {
        return toast.error(`${message}`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            className: 'error-toast'
        })        
    }

    async function toastSucess(message) {
        toast.success(`${message}`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        return setTimeout(()=>{
            window.location.reload();
        }, 3500);
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
            site: 'horoscopozap'
        }

        const reponse = await axios.post('/createuser', user).catch(async error => {
            return await toastSucess(error.message)
        })
        if(reponse.status === 400) { return console.log(reponse.data.message)}
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
                        <div className='input fullname'>
                            <label htmlFor="name">Nome Completo:</label>
                            <InputName type="text" name='name' id='name' required value={name} onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div className='stwo'>
                        <div className='input'>
                            <label htmlFor="nascimento">Data Nasci.:</label>
                            <InputMask  mask={'99-99-9999'} type='date' id='nascimento' required value={dataNascimento} onChange={(e)=>setDataNascimento(e.target.value)}/>
                        </div>
                        <div className='input '>
                            <label htmlFor="name">E-mail</label>
                            <Email type="email" name='email' id='email'  required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className='input'>
                            <label htmlFor="name">Senha</label>
                            <input type="password" name='password' id='password' required/>
                        </div>
                        </div>
                        <p className='pform'>
                            Para cadastrar mais veículos, editar ou cancelar o envio dos alertas,
                            acesse a área administrativa do site com sua senha.
                        </p>

                        <div className='divtemos'>
                            <input type="checkbox" name="" id="" required/>
                            <label htmlFor="">Li e aceito os <span>termos de uso</span>.</label>
                        </div>
                        <button className='prontobtn'>Pronto!</button>
                    </div>
                </form>                
            </div>
        </ModalDiv>
    )
}