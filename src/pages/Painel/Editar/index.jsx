
import {Form, PainelLembretes} from './styled'
import InputName from '../../../components/inputName'
import InputMask from 'react-input-mask'
import Email from '../../../components/emailAutocompletee'




export default function Editar () {

    return (
        <Form action="" method="post" id='editarCadastro'>
                <PainelLembretes>
                    <div className='topCadas'>
                        <div>
                            <label htmlFor="">Nome Completo:</label>
                            <InputName type="text"  className={'inputName'}/>  
                        </div>
                        <div>
                            <label htmlFor="">Gênero:</label>
                            <input type="text" />  
                        </div>
                        <div>
                            <label htmlFor="">Data de Nascimento:</label>
                            <input type="date" />  
                        </div>
                        <div>
                            <label htmlFor="">E-mail:</label>
                            <Email type='email' className='' name='socialContact' id=''/>  
                        </div>
                    </div>
                    <div className='botCadas'>
                        <div className='binput'>
                            <label htmlFor="">Senha:</label>
                            <input type="password" />  
                        </div>
                        <div className='binput'>
                            <label htmlFor="">Telefone</label>
                            <InputMask className='' mask={'(99)99999-9999'} name='socialContact' id='' /> 
                        </div>
                        <div className='tipEnvio'>
                            <p>Tipo de Envio:</p>
                            <div className='divC'>
                                <div>
                                    <img src="/image/bwpp.png" alt="" />
                                    <input type="radio" />
                                </div>
                                <div>
                                    <img src="/image/btele.png" alt="" />
                                    <input type="radio" />
                                </div>
                                <div>
                                    <img src="/image/bemail.png" alt="" />
                                    <input type="radio" />
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