import {InputDiv} from './styled'
import { useState } from 'react'

export default function InputName({className, name, id, placeholder}) {
    const [labelError, setLabelError] = useState(false)
    const [text, setText] =  useState('')

    function validadorName(value) {
        value = value.replace(/[^a-zA-Z' ']/g, '')
        let res = value.split(' ')
        if (res.length <= 1 || res[0].length <= 3) {
            setLabelError({
                msg: 'minimo: Nome e Sobrenome'
            })
            return setText(value)
        }else {
           setLabelError('')
           return setText(value)
        }
    }

    return(
        <InputDiv className={className} border={labelError}>
            <input type="text" name={name} placeholder={placeholder} id={id}
            value={text} onChange={(e)=> {validadorName(e.target.value)}}/>
            {labelError ? <p>{labelError.msg}</p> : null}
        </InputDiv>
    )
}