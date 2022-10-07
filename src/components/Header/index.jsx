import {HeaderDiv} from './headerStyled'
import { GiHamburgerMenu, GiPadlock } from 'react-icons/gi'
import {FiEdit} from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <HeaderDiv>
            <div className="divlogo">
                <img src="/image/trevo.png" alt="horoscopologo" />
                <h1>Alerta da Sorte</h1>
            </div>
            <div className='logindiv'>
                <input type="text" name="" id="" autoComplete='none'/>
                <input type="password" name="" id="" autoComplete='off'/>
                <Link to='/user/painel'><button>Login</button></Link>
                <GiPadlock className='iconH'/>
                <FiEdit className='iconH'/>
                <Link to='/'><GiHamburgerMenu className='hamburgerMenu'/></Link>
            </div>

        </HeaderDiv>
    )
}