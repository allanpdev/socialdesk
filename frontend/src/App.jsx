import './styles/global.css'
import Titlebar from './components/Titlebar.jsx'
import Dropdown from './components/Dropdown.jsx'
import {Outlet} from 'react-router-dom'

function App() {
  return (
    <>
      <Titlebar/>
      
      <div id="container">
        <Dropdown/>
        <Outlet/>
      </div>
    </>
  )
}

export default App