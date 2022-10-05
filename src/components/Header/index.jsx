import {HeaderDiv} from './headerStyled'
import { GiHamburgerMenu } from 'react-icons/gi'
export default function Header() {
    return (
        <HeaderDiv>
            <div className="divlogo">
                <img src="/image/horosicon.png" alt="horoscopologo" />
                <h1>HOROSCOPOZAP.<span>org</span></h1>
            </div>
            <GiHamburgerMenu className='hamburgerMenu'/>

        </HeaderDiv>
    )
}