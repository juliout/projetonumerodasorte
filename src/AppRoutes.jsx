import { useContext } from 'react'
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom'
import AuthProvider, { AuthContext } from './contexts/auth'
// import Route from './routes/Route'
import Home from './pages/Home'
import Painel from './pages/Painel'

export default function AppRoutes() {
    const Private = ({children}) => {
        const {authenticated} = useContext(AuthContext)
        if (!authenticated){
            return <Navigate to='/'/>
        }
        return children
    }
    const Logado = ({children}) =>{
        const {authenticated} = useContext(AuthContext)
        if(authenticated) {
            return <Navigate to='/user/painel'/>
        }
        return children
    }

  return (
    
      <BrowserRouter>
        <AuthProvider>
            <Routes>
                <Route exact path='/' element={<Logado><Home/></Logado>}/>
                <Route exact path='/user/painel' element={<Private><Painel/></Private>} isPrivate/> 
            </Routes>
        </AuthProvider>
      </BrowserRouter> 
     
  );
  }
