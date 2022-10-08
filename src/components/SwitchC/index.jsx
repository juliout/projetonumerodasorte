import { Switch } from "./styled"

export default function SwitchC({label, id, name}){
    return(
        <>
        <Switch className="switch">
            <input type="checkbox" name={name} id={id}/>
            <span className="slider round"></span>
        </Switch>
        <p>{label ? label : 'status'}</p>
        </>
    )
}