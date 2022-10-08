import {PainelLembretes, Form} from './styled'
import SwitchC from '../../../components/SwitchC'

export default function Alarm() {
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
                                    <SwitchC/>
                                </td>
                                <td className='tdRadio' >
                                    <SwitchC/>
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
                                    <SwitchC/>
                                </td>
                                <td className='tdRadio'>
                                    <SwitchC/>
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
                                    <SwitchC/>
                                </td>
                                <td className='tdRadio'>
                                    <SwitchC/>
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
                                    <SwitchC/>
                                </td>
                                <td className='tdRadio'>
                                    <SwitchC/>
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
                                    <SwitchC/>
                                </td>
                                <td className='tdRadio'>
                                    <SwitchC/>
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
                                    <SwitchC/>
                                </td>
                                <td className='tdRadio'>
                                    <SwitchC/>
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
                                    <SwitchC/>
                                </td>
                                <td className='tdRadio'>
                                    <SwitchC/>
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
                                    <SwitchC/>
                                </td>
                                <td className='tdRadio'>
                                    <SwitchC/>
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