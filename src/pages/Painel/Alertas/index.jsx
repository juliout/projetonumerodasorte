import {PainelLembretes, Form} from './styled'
import SwitchC from '../../../components/SwitchC'
import { useEffect, useState } from 'react'
import { Api } from '../../../api'
import { useContext } from 'react'
import { AuthContext } from '../../../contexts/auth'
import axios from 'axios'
import ModalError from '../../../components/modalError'
import ModalSucess from '../../../components/modalSucess'

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

    async function attDados(e){
        e.preventDefault()
        
        let arrayTarget = [...e.target]
        let newArray = []

        let allLoterias = ['megasena', 'lotofacil', 'duplasena', 'quina', 'supersete', 'timemania', 'lotomania', 'diadesorte', 'federal', 'loteca', 'milionaria']
        allLoterias = allLoterias.sort()
        let contador = 0

        allLoterias.map((elem, index)=> {
            elem = {
                nome: elem,
                actived: arrayTarget[contador].checked,
                resultado: arrayTarget[contador+1].checked,
                aposta: arrayTarget[contador+2].checked       
            }
            contador += 4
            return newArray.push(elem)
        })
        
        const token = {
            'x-acess-token' : usuario.token,
            'Content-Type': 'application/json',
        }
        await Api.post('/alertasorte/attloteria',newArray,{
            headers: token
        }).then(async response=> {
            await ModalSucess('Atualizado', ()=> {
                setTimeout(() => {
                    window.location.reload() 
                 }, 2000);
            })
        })
        .catch(reponse=> ModalError('não foi possivel carregar as loterias'))
                    
    }

    const TrDiv = ({value}) =>{
        return (
        <tr className='trBody' id={value.name}>
            <td className='tdName'><input type="checkbox" name={value.name+'check'} id={value.name+'check'} className='inpTd' defaultChecked={value.actived} /> {value.name}</td>
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
        <Form method="post" id='formLoterias' onSubmit={(e)=>attDados(e)}>
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