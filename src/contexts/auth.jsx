import { useState, createContext, useEffect } from 'react'
import {Api} from '../api'
import ModalError from '../components/modalError';
import ModalSucess from '../components/modalSucess';
import { useNavigate } from 'react-router-dom'
export const AuthContext = createContext()

export default function AuthProvider({ children }){
    const [usuario, setUsuario] = useState(null);
 
    const navigate = useNavigate()
    useEffect(()=>{
        async function loadUsuario(){

        let usuarioStorage = localStorage.getItem('userToken')

            if(usuarioStorage){
                usuarioStorage  = JSON.parse(usuarioStorage)
                await Api.post('/session', {
                    id: usuarioStorage.id,
                    token: usuarioStorage.token
                })
                .then(async response => {
                    setUsuario(usuarioStorage)
                    return navigate('/user/painel')                        
                })
                .catch(async response=> {
                    await ModalError('Logue novamenete')
                    localStorage.removeItem('userToken')
                })
            }
        
    }
    loadUsuario()

    },[])
    
    async function Login(login){
        const response = await Api.post('/login', login).catch(async response=> {
            if(!response.response.data){
                return await ModalError('Erro ao logar, tente mais tarde')
            }
            return await ModalError(response.response.data.message)
        })
        if(response) {
            localStorage.setItem('userToken',JSON.stringify(response.data.user))
            await ModalSucess(response.data.message)
            setUsuario(response.data.user)
            return navigate('/user/painel')
        }
    }
    function Sair(){
        localStorage.removeItem('userToken')
        return window.location.reload()
    }

    // function storageSave(data){
    //     localStorage.setItem('userToken',JSON.stringify(data))
    // }

    async function cancelarCadastro(){
        const token = {
            'x-acess-token' : usuario.token,
            'Content-Type': 'application/json',
        }
        await Api.post('/alertasorte/desativar', [],{
            headers: token
        }).then(async response => {
            localStorage.removeItem('userToken')
            await ModalSucess('Desativado', ()=> {
                setTimeout(() => {
                    window.location.reload() 
                 }, 2000);
            })
        })
        .catch(reponse=> ModalError('não foi possivel desativar'))
    }

    return(
        <AuthContext.Provider
            value={{ 
                authenticated: !!usuario, 
                usuario, 
                Login,
                Sair,
                cancelarCadastro
            }}>
            {children}
        </AuthContext.Provider>
        
    )
}