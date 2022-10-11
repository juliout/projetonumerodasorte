import {HeaderDiv} from './headerStyled'
import { GiHamburgerMenu, GiPadlock } from 'react-icons/gi'
import {FiEdit} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Header({sendLogin}) {

    const [emailLogin, setUserLogin] = useState('')
    const [senhaLogin, setSenhaLogin] = useState('')

    const login = {
        email: emailLogin,
        password : senhaLogin
    }
    function submit (e) {
        e.preventDefault()
        sendLogin(login)
    }
    
    return (
        <HeaderDiv>
            <Link to='/' style={{color:'white'}}>
            <div className="divlogo">
             <img src="/image/trevo.png" alt="horoscopologo" />
                <h1>Alerta da Sorte</h1>
            </div>
            </Link>
            <form className='logindiv' onSubmit={(e)=>submit(e)}>
                <input type="text" name="emailLogin" id="emailLogin" autoComplete='off' value={emailLogin} onChange={(e)=>setUserLogin(e.target.value)} placeholder='Seu e-mail'/>
                <input type="password" name="senhaLogin" id="senhaLogin" autoComplete='off' value={senhaLogin} onChange={(e)=>setSenhaLogin(e.target.value)} placeholder='Sua senha'/>
                <button>Login</button>
                <GiPadlock className='iconH'/>
                <FiEdit className='iconH'/>
                <GiHamburgerMenu className='hamburgerMenu'/>
            </form>

        </HeaderDiv>
    )
}