
import {Form, PainelLembretes} from './styled'
import InputName from '../../../components/inputName'
import InputMask from 'react-input-mask'
import Email from '../../../components/emailAutocompletee'
import { useEffect, useContext, useState } from 'react'
import { AuthContext } from '../../../contexts/auth'
import ModalError from '../../../components/modalError'
import { Api } from '../../../api'



export default function Editar () {
    const [dados, setDados] = useState('')
    const { usuario } = useContext(AuthContext)

    useEffect(()=>{
        const token = {
            'x-acess-token' : usuario.token,
            'Content-Type': 'application/json',
        }
        async function acharLoterias() {
            await Api.post('/alertasorte/AboutUser',[],{
                headers: token
            }).then(response=> {
                console.log(response.data)
                setDados(response.data)
            })
            .catch(reponse=> ModalError('não foi possivel carregar as loterias'))
        } 
        acharLoterias()

    },[])

    return (
        <Form action="" method="post" id='editarCadastro'>
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
                            <input type="date" defaultValue={dados?dados.datanascimento : 'seu niver'} onFocus="(this.type='date')"/>  
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
                <button className='btncCadastro'>Cancelar cadastro</button>
        </Form>
    )
}