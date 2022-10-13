import {PainelLembretes, Form} from './styled'
import SwitchC from '../../../components/SwitchC'
import { useEffect, useState } from 'react'
import { Api } from '../../../api'
import { useContext } from 'react'
import { AuthContext } from '../../../contexts/auth'
import axios from 'axios'
import ModalError from '../../../components/modalError'

export default function Alarm() {

    const [loteriaData, setLoteriaData] = useState('')

    const { usuario } = useContext(AuthContext)
    useEffect(()=>{
        const token = {
            'x-acess-token' : usuario.token,
            'Content-Type': 'application/json',
        }
        async function acharLoterias() {
            await Api.post('/alertasorte/allloterias',[],{
                headers: token
            }).then(response=> {
                setLoteriaData(response.data)
            })
            .catch(reponse=> ModalError('não foi possivel carregar as loterias'))
        } 
        acharLoterias()

    },[])

    const TrDiv = ({value}) =>{

        return (
        <tr className='trBody'>
            <td className='tdName'><input type="checkbox" name={value.name} id={value.name} className='inpTd' defaultChecked={value.actived} /> {value.name}</td>
            <td className='tdDia'><p>Terça, Quarta e Quinta</p></td>
            <td className='tdRadio'> 
                <SwitchC id={value.name + '-resultado'} name={value.name + '-resultado'} actived={value.resultado.resultado}/>
            </td>
            <td className='tdRadio' >
                <SwitchC id={value.name + '-apostas'} name={value.name + '-apostas'} actived={value.resultado.apostas}/>
            </td>
            <td className='tdAlarme'>
                <select name="" id="" disabled>
                    <option value="">1 dia antes</option>
                </select>
            </td>
        </tr>
        )
    }

    return (
        <Form method="post" id='formLoterias'>
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
                            {loteriaData?   loteriaData.map((datas, index)=> {
                                return (
                                    <TrDiv value={datas} key={datas.id}/>
                                )
                            })                                                    
                                : null
                            }
                        </tbody>
                        
                    </table>
                </PainelLembretes>
                <span>Você pode desativar os lembretes que não quiser receber ou editar os horários para melhor se encaixarem em sua rotina!</span>         
                <button className='btnSalvar'>salvar</button>
                <button className='btncCadastro'>Cancelar cadastro</button>
        </Form>
    )
}