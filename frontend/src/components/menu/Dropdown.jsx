import './dropdown.css'
import {useState} from 'react'
import {Link} from 'react-router-dom'

const menuItems = [
  {
      title: 'Painel',
      icon: 'fa-solid fa-gauge',
      route: '/sistema'
  },
  {
    title: 'Entregas',
    icon: 'fa-solid fa-box',
    submenu: [
      {
         title: 'Buscar',
         route: '/sistema/buscar-entrega'
      },
      {
         title: 'Gerenciar entregas',
         route: '/sistema/gerenciar-entregas'
      }]
  },
  {
      title: 'Usuários',
      icon: 'fa-solid fa-user',
      submenu: [
         {
            title: 'Buscar',
            route: '/usuarios/buscar'
         },
         {
            title: 'Gerenciar usuários',
            route: '/usuarios/gerenciar'
         }
      ]
  },
  {
    title: 'Dispositivos',
    icon: 'fa-solid fa-building',
    route: '/dispositivos',
  },
  {
    title: 'Endereços',
    icon: 'fa-solid fa-location-dot',
    route: '/enderecos',
    submenu: ['Buscar', 'Gerenciar endereços', 'Novo endereço']
  }
]

export default function Dropdown(){
   const [isMenuOpen, setOpenMenu] = useState(null)

   function toggleActiveMenu(index){
      console.log(isMenuOpen)
      if(isMenuOpen === index){
         setOpenMenu(null)
      } else {
         setOpenMenu(index)
      }
   }

    return(
      <div id="header">
         <div id="header_logo">
            <img src="/logo.png" alt="" />
         </div>

         <div id='menu'>
            {menuItems.map((item, index) => {
               return(  
                  <div className={`menu_item`} key={index}>
                     <Link to={item.route ? item.route : "#"} className={`menu_item_title ${window.location.pathname === item.route ? 'active' : ''}`} onClick={() => toggleActiveMenu(index)}>
                        <i className={`fa-solid ${item.icon}`}></i>
                        <span>{item.title}</span>
                        {item.submenu ? <i className={`fa-solid fa-angle-right icone_expandir_menu`}></i> : null}
                     </Link>
                     
                     {item.submenu ? item.submenu.map((subitem, subIndex) => (
                        <div className={`submenu ${isMenuOpen === index ? 'active' : ''}`} key={subIndex}>
                           <Link to={subitem.route}>- {subitem.title}</Link>
                        </div>
                     )) : null}
                  </div>
               )
            })}
         </div>
      </div>
    )
}