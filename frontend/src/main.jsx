import {createRoot} from 'react-dom/client'
import {HashRouter, Routes, Route} from 'react-router-dom'
// JANELA LOGIN
import Login from './pages/login/Login.jsx'
// JANELA SISTEMA
import System from './pages/system/System.jsx'
import Painel from './pages/system/pageContent/Painel.jsx'
import GerenciarEntregas from './pages/system/pageContent/GerenciarEntregas.jsx'
import GerenciarUsuarios from './pages/system/pageContent/GerenciarUsuarios.jsx'

createRoot(document.getElementById('interface')).render(
  <HashRouter>
    <Routes>
      <Route path='*' element={<System/>}>
        <Route index element={<Painel/>} />
        <Route path='painel' element={<Painel/>}/>
        <Route path='gerenciar-entregas' element={<GerenciarEntregas/>} />
        <Route path='usuarios/gerenciar' element={<GerenciarUsuarios/>} />
      </Route>

      <Route path='/login' element={<Login/>}/>
    </Routes>
  </HashRouter>
)