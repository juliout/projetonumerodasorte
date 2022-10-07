import { Switch } from 'react-router-dom'
import Route from './Route'

import Home from '../pages/Home'
import Painel from '../pages/Painel'

export default function Routers() {
    return (    
        <>
            <Route exact path='/' component={Home}/>
            <Route exact path='/user/painel' component={Painel} isPrivate/>    
        </>    
    );
}