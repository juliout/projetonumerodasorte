import { FooterDiv } from './footerStyled'
import { BiCopyright } from 'react-icons/bi'
import ReactTooltip from 'react-tooltip';

const tooltipText = 'Nós respeitamos sua privacidade. Projeto desenvolvido de acordo com as diretrizes da nova Lei Geral de Proteção de Dados.';

export default function Footer() {
    return (
        <FooterDiv> 
            <div className="reservDiv">
                <h3>
                    nomedosite.org 2021                    
                </h3>
                    <BiCopyright className='cIcon'/>
                <h3>
                    Todos os direitos reservados                   
                </h3>
            </div>
            <ReactTooltip className='texttool'/>
            <img src="/image/lgpd.png" alt="lgpd icon" className='imglgpd'
                data-tip={tooltipText}
            />
        </FooterDiv>
    )
}