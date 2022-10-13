import { useState } from "react"
import { Switch } from "./styled"

export default function SwitchC({ id, name, actived}){
    const [ativado, setAtivado] = useState(actived)
    return(
        <>
        <Switch className="switch">
            <input type="checkbox" name={name} id={id} defaultChecked={actived} onChange={(e)=> setAtivado(e.target.checked)}/>
            <span className="slider round"></span>
        </Switch>
        <p>{ativado === true ? 'ativado' : 'desativado'}</p>
        </>
    )
}