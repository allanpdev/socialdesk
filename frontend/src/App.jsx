import './styles/global.css'
import Dropdown from './components/Dropdown.jsx'
import {Outlet} from 'react-router-dom'

function App() {
  return (
    <>
      <Dropdown/>
      <Outlet/>
    </>
  )
}

export default App