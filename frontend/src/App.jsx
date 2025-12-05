import './styles/global.css'

function App() {
  const submenu = document.querySelectorAll('.submenu');
  function toggleMenu() {
    submenu.forEach((item) => {
      item.classList.toggle('active');
    })
  }
  return (
    <div id='interface'>
      <div id="header">
        <div id="header_logo">
          <img src="/logo.png" alt="" />
        </div>

        <div id='menu'>
          <div className="menu_item">
            <div className="menu_item_title" onClick={toggleMenu()}>
              <i className='fa-solid fa-gauge'></i>
              <a href="">Painel</a>
              <i className='fa-solid fa-angle-right icone_expandir_menu'></i>
            </div>

            <div className='submenu'>
              <a>Buscar</a>
              <a>Gerenciar entregas</a>
              <a>Nova entrega</a>
            </div>
          </div>

          <div className="menu_item">
            <div className="menu_item_title">
              <i className='fa-solid fa-gauge'></i>
              <a href="">Painel</a>
              <i className='fa-solid fa-angle-right icone_expandir_menu'></i>
            </div>

            <div className='submenu'>
              <a>Buscar</a>
              <a>Gerenciar entregas</a>
              <a>Nova entrega</a>
            </div>
          </div>

          <div className="menu_item">
            <div className="menu_item_title">
              <i className='fa-solid fa-gauge'></i>
              <a href="">Painel</a>
              <i className='fa-solid fa-angle-right icone_expandir_menu'></i>
            </div>

            <div className='submenu'>
              <a>Buscar</a>
              <a>Gerenciar entregas</a>
              <a>Nova entrega</a>
            </div>
          </div>

          {/* <div className="menu_item">
            <i class="fa-solid fa-box"></i>
            <a href="">Entregas</a>

            <i className='fa-solid fa-angle-right icone_expandir_menu'></i>
          </div>

          <div className="menu_item">
            <i class="fa-solid fa-user"></i>
            <a href="">Usuários</a>

            <i className='fa-solid fa-angle-right icone_expandir_menu'></i>
          </div>

          <div className="menu_item">
            <i class="fa-solid fa-building"></i>
            <a href="">Dispositivos</a>

            <i className='fa-solid fa-angle-right icone_expandir_menu'></i>
          </div>

          <div className="menu_item">
            <i class="fa-solid fa-location-dot"></i>
            <a href="">Endereços</a>

            <i className='fa-solid fa-angle-right icone_expandir_menu'></i>
          </div> */}
        </div>
      </div>
      <div id='body'>
        <h1>Conteúdo</h1>

        <table>
          <thead>
            <tr>
              <th>Data de Lançamento</th>
              <th>Nome completo</th>
              <th>Solicitação</th>
              <th>Entrega</th>
              <th>CPF/NIS</th>
              <th>Benefício</th>
              <th>Dispositivo</th>
              <th>Bairro</th>
              <th>Endereço</th>
              <th>Técnico</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>05/12/2025 14:35</td>
              <td>João Silva</td>
              <td>01/12/2025</td>
              <td>03/12/2025</td>
              <td>123.456.789-00</td>
              <td>Cesta básica</td>
              <td>CRAS São Joaquim</td>
              <td>São Joaquim</td>
              <td>Rua das Flores, 123</td>
              <td>Maria Oliveira</td>
            </tr>

            <tr>
              <td>05/12/2025 14:35</td>
              <td>João Silva</td>
              <td>01/12/2025</td>
              <td>03/12/2025</td>
              <td>123.456.789-00</td>
              <td>Cesta básica</td>
              <td>CRAS São Joaquim</td>
              <td>São Joaquim</td>
              <td>Rua das Flores, 123</td>
              <td>Maria Oliveira</td>
            </tr>

            <tr>
              <td>05/12/2025 14:35</td>
              <td>João Silva</td>
              <td>01/12/2025</td>
              <td>03/12/2025</td>
              <td>123.456.789-00</td>
              <td>Cesta básica</td>
              <td>CRAS São Joaquim</td>
              <td>São Joaquim</td>
              <td>Rua das Flores, 123</td>
              <td>Maria Oliveira</td>
            </tr>

            <tr>
              <td>05/12/2025 14:35</td>
              <td>João Silva</td>
              <td>01/12/2025</td>
              <td>03/12/2025</td>
              <td>123.456.789-00</td>
              <td>Cesta básica</td>
              <td>CRAS São Joaquim</td>
              <td>São Joaquim</td>
              <td>Rua das Flores, 123</td>
              <td>Maria Oliveira</td>
            </tr>

            <tr>
              <td>05/12/2025 14:35</td>
              <td>João Silva</td>
              <td>01/12/2025</td>
              <td>03/12/2025</td>
              <td>123.456.789-00</td>
              <td>Cesta básica</td>
              <td>CRAS São Joaquim</td>
              <td>São Joaquim</td>
              <td>Rua das Flores, 123</td>
              <td>Maria Oliveira</td>
            </tr>
          </tbody> 
        </table>
      </div>
    </div>
  )
}

export default App