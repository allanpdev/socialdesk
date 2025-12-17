import {createRoot} from 'react-dom/client'
import {HashRouter, Routes, Route} from 'react-router-dom'
import App from './App.jsx'

import Painel from './pages/Painel.jsx'
import GerenciarEntregas from './pages/GerenciarEntregas.jsx'
import GerenciarUsuarios from './pages/GerenciarUsuarios.jsx'

createRoot(document.getElementById('interface')).render(
  <HashRouter>
    <Routes>
      <Route path='/*' element={<App/>}>
        <Route index element={<Painel/>} />
        <Route path='painel' element={<Painel/>}/>
        <Route path='entregas/gerenciar' element={<GerenciarEntregas/>} />
        <Route path='usuarios/gerenciar' element={<GerenciarUsuarios/>} />
      </Route>
    </Routes>
  </HashRouter>
)