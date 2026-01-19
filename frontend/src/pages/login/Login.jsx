import './login.css'

export default function Login(){
    return(
        <div>
            <div id="titlebar" draggable="true">
                <span>SocialDesk</span>

                <div id="titlebar-controls">
                    <button id="btnMinimize" onClick={() => electron.minimizeWindow()}>
                        <svg width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_30_118)"><path d="M15.3571 2C15.3571 2.76055 14.7826 3.375 14.0714 3.375H-0.0714635C-0.782624 3.375 -1.35718 2.76055 -1.35718 2C-1.35718 1.23945 -0.782624 0.625 -0.0714635 0.625H14.0714C14.7826 0.625 15.3571 1.23945 15.3571 2Z" fill="white"/></g><defs><clipPath id="clip0_30_118"><rect width="14" height="2.75" fill="white" transform="translate(0 0.625)"/></clipPath></defs></svg>
                    </button>

                    <button id="btnClose" onClick={() => electron.closeWindow()}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.2553 2.23928C11.6847 1.79327 11.6847 1.06896 11.2553 0.622956C10.8258 0.176951 10.1283 0.176951 9.6988 0.622956L6.08081 4.38367L2.45938 0.626524C2.0299 0.180519 1.33241 0.180519 0.902925 0.626524C0.473439 1.07253 0.473439 1.79684 0.902925 2.24285L4.52435 5.99999L0.906361 9.7607C0.476875 10.2067 0.476875 10.931 0.906361 11.377C1.33585 11.823 2.03333 11.823 2.46282 11.377L6.08081 7.61631L9.70224 11.3735C10.1317 11.8195 10.8292 11.8195 11.2587 11.3735C11.6882 10.9275 11.6882 10.2031 11.2587 9.75713L7.63727 5.99999L11.2553 2.23928Z" fill="white"/></svg>
                    </button>
                </div>
            </div>

            <div id="login">
                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="45" height="45" rx="12" fill="url(#paint0_linear_12_48)"/><path d="M27 17.7857H33V33.5H27V17.7857Z" fill="white"/><path d="M18 27.2143H27V33.5H18V27.2143Z" fill="white"/><path d="M12 11.5H18L18 27.2143L12 27.2143V11.5Z" fill="white"/><path d="M18 11.5L27 11.5V17.7857H18L18 11.5Z" fill="white"/><defs><linearGradient id="paint0_linear_12_48" x1="8.83929" y1="-1.00925e-06" x2="35.3571" y2="45" gradientUnits="userSpaceOnUse"><stop stop-color="#454DEB"/><stop offset="1" stop-color="#55BDEA"/></linearGradient></defs></svg>
                
                <h1>Fazer login</h1>
                <h2>Por favor, insira seus daados</h2>
                
                <form onSubmit={(e) => {
                    e.preventDefault()

                    const email = document.getElementById("inputEmail").value
                    const senha = document.getElementById("inputSenha").value

                    fetch("http://localhost:3000/login", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({email: email, senha: senha})
                    }).then((res) => {
                        return res.json()
                    }).then((data) => {
                        if(data.ok){
                            electron.successLogin()
                        }else{
                            console.log('Senha invalida')
                        }
                    })
                }}>
                    
                    <div className="input_field">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="16.000000pt" height="14.000000pt" viewBox="0 0 16.000000 14.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,14.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M0 111 c0 -4 18 -20 40 -35 l40 -26 40 26 c22 15 40 31 40 35 0 5 -36 9 -80 9 -44 0 -80 -4 -80 -9z"/><path d="M0 55 l0 -35 80 0 80 0 0 36 c0 37 -1 38 -52 2 -27 -19 -28 -19 -68 7 l-40 25 0 -35z"/></g></svg>
                        <input required type="email" name="email" placeholder="Email" id='inputEmail'/>
                    </div>

                    <div className="input_field">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="13.000000pt" height="14.000000pt" viewBox="0 0 13.000000 14.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,14.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M45 132 c-24 -17 -46 -65 -43 -95 l3 -32 60 0 60 0 3 32 c4 42 -33 103 -63 103 -5 0 -15 -4 -20 -8z m43 -29 c2 -8 -6 -13 -22 -13 -25 0 -33 10 -19 24 10 10 36 3 41 -11z"/></g></svg>
                        <input required type="password" name="senha" placeholder="Senha" id='inputSenha'/>
                    </div>
                    
                    <input type="submit" value="Entrar" id="btn-login"/>
                </form>
            </div>
        </div>
    )
}