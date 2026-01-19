import './system.css'
import Titlebar from '../../components/titlebar/Titlebar.jsx'
import MenuLateral from '../../components/menu/Dropdown.jsx'
import {Outlet} from 'react-router-dom'

function App() {
  return (
    <>
      <Titlebar/>
      
      <div id="container">
        <MenuLateral/>
        <Outlet/>
      </div>
    </>
  )
}

export default App