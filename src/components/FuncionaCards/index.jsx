import {FuncionaA} from './styled'

export default function FuncionaCard({className, img, text, number}) {
    return (
        <FuncionaA className="funcionaCard" href='#BannerCadastrar'>
            <span className='cardN'>{number}</span>
            <p>
            {text}
            </p>
            <img src={img} alt="card" />
        </FuncionaA>
    )
}