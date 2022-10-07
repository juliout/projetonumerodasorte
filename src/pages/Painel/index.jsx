import {useState} from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import {PainelDiv, PainelMain, PainelLembretes, Form} from './styled'

export default function Painel() {

    const [aba, setAba] = useState('Alarme')

    function changeAba(value) {
        return value === 'Alarme' ? setAba('Alarme') : setAba('Editar')
    }
    const Alarm = () => {
        return (
            <Form action="" method="post">
                    <PainelLembretes>
                        <table>
                            <thead>
                                <tr className='trhead'>
                                    <td className='tdName'>Loterias:</td>
                                    <td className='tdDia'><p> Dias do sorteio: </p></td>
                                    <td className='tdRadio'>Resultado do sorteio:</td>
                                    <td className='tdRadio'>Fim de Apostas</td>
                                    <td className='tdAlarme'>Enviar Alertas:</td>
                                </tr>
                            </thead>
                            <tbody className='tbody'>
                                
                                
                            <tr className='trBody'>
                                    <td className='tdName'><input type="checkbox" name="" id="" className='inpTd'/> MegaSena</td>
                                    <td className='tdDia'><p>Terça, Quarta e Quinta</p></td>
                                    <td className='tdRadio'> 
                                        <label className="switch">
                                            <input type="checkbox" name='megasena' id=''/>
                                            <span className="slider round"></span>
                                        </label>
                                    </td>
                                    <td className='tdRadio'>
                                        <label className="switch">
                                            <input type="checkbox" name='megasena' id=''/>
                                            <span className="slider round"></span>
                                        </label>
                                    </td>
                                    <td className='tdAlarme'>
                                        <select name="" id="">
                                            <option value="">1 dia antes</option>
                                        </select>
                                    </td>
                                </tr><tr className='trBody'>
                                    <td className='tdName'><input type="checkbox" name="" id="" className='inpTd'/> MegaSena</td>
                                    <td className='tdDia'><p>Terça, Quarta e Quinta</p></td>
                                    <td className='tdRadio'> 
                                        <label className="switch">
                                            <input type="checkbox" name='megasena' id=''/>
                                            <span className="slider round"></span>
                                        </label>
                                    </td>
                                    <td className='tdRadio'>
                                        <label className="switch">
                                            <input type="checkbox" name='megasena' id=''/>
                                            <span className="slider round"></span>
                                        </label>
                                    </td>
                                    <td className='tdAlarme'>
                                        <select name="" id="">
                                            <option value="">1 dia antes</option>
                                        </select>
                                    </td>
                                </tr><tr className='trBody'>
                                    <td className='tdName'><input type="checkbox" name="" id="" className='inpTd'/> MegaSena</td>
                                    <td className='tdDia'><p>Terça, Quarta e Quinta</p></td>
                                    <td className='tdRadio'> 
                                        <label className="switch">
                                            <input type="checkbox" name='megasena' id=''/>
                                            <span className="slider round"></span>
                                        </label>
                                    </td>
                                    <td className='tdRadio'>
                                        <label className="switch">
                                            <input type="checkbox" name='megasena' id=''/>
                                            <span className="slider round"></span>
                                        </label>
                                    </td>
                                    <td className='tdAlarme'>
                                        <select name="" id="">
                                            <option value="">1 dia antes</option>
                                        </select>
                                    </td>
                                </tr><tr className='trBody'>
                                    <td className='tdName'><input type="checkbox" name="" id="" className='inpTd'/> MegaSena</td>
                                    <td className='tdDia'><p>Terça, Quarta e Quinta</p></td>
                                    <td className='tdRadio'> 
                                        <label className="switch">
                                            <input type="checkbox" name='megasena' id=''/>
                                            <span className="slider round"></span>
                                        </label>
                                    </td>
                                    <td className='tdRadio'>
                                        <label className="switch">
                                            <input type="checkbox" name='megasena' id=''/>
                                            <span className="slider round"></span>
                                        </label>
                                    </td>
                                    <td className='tdAlarme'>
                                        <select name="" id="">
                                            <option value="">1 dia antes</option>
                                        </select>
                                    </td>
                                </tr><tr className='trBody'>
                                    <td className='tdName'><input type="checkbox" name="" id="" className='inpTd'/> MegaSena</td>
                                    <td className='tdDia'><p>Terça, Quarta e Quinta</p></td>
                                    <td className='tdRadio'> 
                                        <label className="switch">
                                            <input type="checkbox" name='megasena' id=''/>
                                            <span className="slider round"></span>
                                        </label>
                                    </td>
                                    <td className='tdRadio'>
                                        <label className="switch">
                                            <input type="checkbox" name='megasena' id=''/>
                                            <span className="slider round"></span>
                                        </label>
                                    </td>
                                    <td className='tdAlarme'>
                                        <select name="" id="">
                                            <option value="">1 dia antes</option>
                                        </select>
                                    </td>
                                </tr><tr className='trBody'>
                                    <td className='tdName'><input type="checkbox" name="" id="" className='inpTd'/> MegaSena</td>
                                    <td className='tdDia'><p>Terça, Quarta e Quinta</p></td>
                                    <td className='tdRadio'> 
                                        <label className="switch">
                                            <input type="checkbox" name='megasena' id=''/>
                                            <span className="slider round"></span>
                                        </label>
                                    </td>
                                    <td className='tdRadio'>
                                        <label className="switch">
                                            <input type="checkbox" name='megasena' id=''/>
                                            <span className="slider round"></span>
                                        </label>
                                    </td>
                                    <td className='tdAlarme'>
                                        <select name="" id="">
                                            <option value="">1 dia antes</option>
                                        </select>
                                    </td>
                                </tr><tr className='trBody'>
                                    <td className='tdName'><input type="checkbox" name="" id="" className='inpTd'/> MegaSena</td>
                                    <td className='tdDia'><p>Terça, Quarta e Quinta</p></td>
                                    <td className='tdRadio'> 
                                        <label className="switch">
                                            <input type="checkbox" name='megasena' id=''/>
                                            <span className="slider round"></span>
                                        </label>
                                    </td>
                                    <td className='tdRadio'>
                                        <label className="switch">
                                            <input type="checkbox" name='megasena' id=''/>
                                            <span className="slider round"></span>
                                        </label>
                                    </td>
                                    <td className='tdAlarme'>
                                        <select name="" id="">
                                            <option value="">1 dia antes</option>
                                        </select>
                                    </td>
                                </tr><tr className='trBody'>
                                    <td className='tdName'><input type="checkbox" name="" id="" className='inpTd'/> MegaSena</td>
                                    <td className='tdDia'><p>Terça, Quarta e Quinta</p></td>
                                    <td className='tdRadio'> 
                                        <label className="switch">
                                            <input type="checkbox" name='megasena' id=''/>
                                            <span className="slider round"></span>
                                        </label>
                                    </td>
                                    <td className='tdRadio'>
                                        <label className="switch">
                                            <input type="checkbox" name='megasena' id=''/>
                                            <span className="slider round"></span>
                                        </label>
                                    </td>
                                    <td className='tdAlarme'>
                                        <select name="" id="">
                                            <option value="">1 dia antes</option>
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                            
                        </table>
                    </PainelLembretes>
                    <span>Você pode desativar os lembretes que não quiser receber ou editar os horários para melhor se encaixarem em sua rotina!</span>         
                    <button className='btnSalvar'>salvar</button>
                    <button className='btncCadastro'>Cancelar cadastro</button>
            </Form>
        )
    }

    const Editar = () => {
        return (
            <Form action="" method="post">
                    <PainelLembretes>
                    </PainelLembretes>
                    <span>Você pode desativar os lembretes que não quiser receber ou editar os horários para melhor se encaixarem em sua rotina!</span>         
                    <button>salvar</button>
                    <button>Cancelar cadastro</button>
            </Form>
        )
    }
    
    return(
        <>
        <Header/>
        <PainelDiv>
            <PainelMain colorH3={aba}>
                <div className='abaDiv'>
                    <h3 onClick={()=>changeAba('Alarme')} >Meus Alertas</h3>
                    <h3 onClick={()=>changeAba('Editar')}>Editar Cadastro</h3>
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