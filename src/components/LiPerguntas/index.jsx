import {RiArrowDropDownLine} from 'react-icons/ri'
import {ListDiv} from './listyled'

import { useState } from 'react'

export default function LiPerguntas({children}) {
    
    const [flexText, setFlexText] = useState(false)
    const [title, setTitle] = useState(children[0])
    const [text, setText] = useState(children[1])
    const openText = () =>{
      flexText === false ? setFlexText(true) : setFlexText(false)
    }
  
    return(
        <ListDiv className="listDiv" hidden={flexText} onClick={openText} colorx={flexText.toString()}>
            <div className='top'>
              {title ? title : null}
              <RiArrowDropDownLine className='arrowIcon'/>
            </div>
            <div className='bot'>
              {text ? text : null}             
            </div>
          </ListDiv>
)
}