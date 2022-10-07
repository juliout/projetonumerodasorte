import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthProvider from './contexts/auth'
// import Route from './routes/Route'

import Home from './pages/Home'
import Painel from './pages/Painel'

export default function App() {

  return (
    // <AuthProvider>
      <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/user/painel' element={<Painel/>} isPrivate/> 
        </Routes>
      </BrowserRouter> 
    // </AuthProvider> 
  );
  }
