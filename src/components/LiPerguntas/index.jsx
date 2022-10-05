import {RiArrowDropDownLine} from 'react-icons/ri'
import {ListDiv} from './listyled'

import { useState } from 'react'

export default function LiPerguntas({title,text}) {
    
    const [flexText, setFlexText] = useState(false)
    const openText = () =>{
       return flexText === false ? setFlexText(true) : setFlexText(false)
    }


    return(
        <ListDiv className="listDiv" hidden={flexText} onClick={openText}>
            <div className='top'>
              <h3>Punctuation conventions used in Chinese languages</h3>
              <RiArrowDropDownLine className='arrowIcon'/>
            </div>
            <div className='bot'>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lore
              </p>
            </div>
          </ListDiv>
)
}