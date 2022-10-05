import {BtnDiv} from './btnStyled'

export default function BtnFlip({btnW, btnH, text}) {
    return(
        <BtnDiv>
            <div className='flip-animate'>
                <span data-back={text}>{text}</span>
            </div>
        </BtnDiv>
    )
}