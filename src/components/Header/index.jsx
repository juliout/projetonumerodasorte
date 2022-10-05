import {HeaderDiv} from './headerStyled'
import { GiHamburgerMenu, GiPadlock } from 'react-icons/gi'
import {FiEdit} from 'react-icons/fi'


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
                <button>Login</button>
                <GiPadlock className='iconH'/>
                <FiEdit className='iconH'/>
                <GiHamburgerMenu className='hamburgerMenu'/>
            </div>

        </HeaderDiv>
    )
}