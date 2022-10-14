
import {Form, PainelLembretes} from './styled'
import InputName from '../../../components/inputName'
import InputMask from 'react-input-mask'
import Email from '../../../components/emailAutocompletee'
import { useEffect, useContext, useState } from 'react'
import { AuthContext } from '../../../contexts/auth'
import ModalError from '../../../components/modalError'
import { Api } from '../../../api'
import ModalSucess from '../../../components/modalSucess'
import { BtnCancel } from './styled'


export default function Editar () {
    const [dados, setDados] = useState('')
    const { usuario, cancelarCadastro } = useContext(AuthContext)

    useEffect(()=>{
        async function acharAbout() {
            const token = {
                'x-acess-token' : usuario.token,
                'Content-Type': 'application/json',
            }
            await Api.post('/alertasorte/AboutUser',[],{
                headers: token
            }).then(response=> {
                setDados(response.data)
            })
            .catch(reponse=> ModalError('não foi possivel carregar as loterias'))
        } 
        acharAbout()

    },[])

    async function attCadastro(e) {
        e.preventDefault()
        let target = e.target
        
        
        let gen = target.genero.value.toLowerCase()
        if(gen) {
            if(gen !== 'masculino' || gen !== 'feminino') {
                return ModalError('Genero apenas Masculino ou Feminino')
            }
        }
        if(target.email.value) {
            if(target.email.value.indexOf('@') < 0) {
                return ModalError('Email errado')
            }
        } 

        let user = {
            name : target.name.value,
            genero : target.genero.value.toLowerCase(),
            datanascimento: target.nascimento.value,
            email: target.email.value,
            password: target.password.value,
            tel: target.tel.value
        }

        const token = {
            'x-acess-token' : usuario.token,
            'Content-Type': 'application/json',
        }
        await Api.post('/alertasorte/attuser', user, {
            headers: token
        }).then(async response=> {
            let usuarioStorage = localStorage.getItem('userToken')
            usuarioStorage  = JSON.parse(usuarioStorage)
            user.name = user.name.split(' ')
            if (user.name[0] !== usuarioStorage.name) {
                usuarioStorage.name = user.name[0]
                localStorage.setItem('userToken',JSON.stringify(usuarioStorage))
            }
            await ModalSucess('atualizado com sucesso.', ()=> {
                setTimeout(() => {
                    window.location.reload() 
                 }, 2000);
            })
        })
        .catch(reponse=> ModalError('não foi possivel carregar as loterias'))
       
    }

    return (
        <>
        <Form method="post" id='editarCadastro' onSubmit={(e)=>{attCadastro(e)}}>
                <PainelLembretes>
                    <div className='topCadas'>
                        <div>
                            <label htmlFor="name">Nome Completo:</label>
                            <InputName type="text" className={'inputName'} id={'name'} name={'name'} placeholder={dados?dados.name:'seu nome'}/>  
                        </div>
                        <div>
                            <label htmlFor="genero">Gênero:</label>
                            <input type="text" name='genero' id='genero' placeholder={dados?dados.genero : 'seu genero'} />  
                        </div>
                        <div>
                            <label htmlFor="">Data de Nascimento:</label>
                            <input type="date" name='nascimento' id='nascimento' defaultValue={dados? dados.datanascimento : ''}/>  
                        </div>
                        <div>
                            <label htmlFor="">E-mail:</label>
                            <Email type='email' className='' name='email' id='email' placeholder={dados?dados.email: null}/>  
                        </div>
                    </div>
                    <div className='botCadas'>
                        <div className='binput'>
                            <label htmlFor="password">Senha:</label>
                            <input type="password" name='password' id='password'/>  
                        </div>
                        <div className='binput'>
                            <label htmlFor="tel">Telefone</label>
                            <InputMask className='' mask={'(99)99999-9999'} name='tel' id='tel' /> 
                        </div>
                        <div className='tipEnvio'>
                            <p>Tipo de Envio:</p>
                            <div className='divC'>
                                <div>
                                    <img src="/image/bwpp.png" alt=""/>
                                    <input type="radio" disabled/>
                                </div>
                                <div>
                                    <img src="/image/btele.png" alt="" />
                                    <input type="radio" disabled/>
                                </div>
                                <div>
                                    <img src="/image/bemail.png" alt="" />
                                    <input type="radio" disabled/>
                                </div>
                            </div>
                        </div>
                    </div>

                </PainelLembretes>
                <span>Você pode desativar os lembretes que não quiser receber ou editar os horários para melhor se encaixarem em sua rotina!</span>         
                <button className='btnSalvar'>salvar</button>
        </Form>
         <BtnCancel className='btncCadastro' onClick={()=>cancelarCadastro()}>Cancelar cadastro</BtnCancel>
        </>
    )
}