import './login.css'

export default function Login(){
    return(
        <div>
            <div id="titlebar" draggable="true">
                <span>SocialDesk</span>

                <div id="titlebar-controls">
                    <button id="btnMinimize"><img src="minimize.svg" alt=""/></button>
                    <button id="btnClose"><img src="close.svg" alt=""/></button>
                </div>
            </div>
            <div id="login">
                <img src="logo.svg" width="48" height="48" alt="" id="logo"/>
                <h1>Fazer login</h1>
                <h2>Por favor, insira seus dados</h2>
                <form>
                    <div class="input_field">
                        <img src="email.png" alt=""/>
                        <input type="email" name="email" placeholder="Email"/>
                    </div>

                    <div class="input_field">
                        <img src="senha.png" alt=""/>
                        <input type="password" name="senha" placeholder="Senha"/>
                    </div>
                    
                    <input type="submit" value="Entrar" id="btn-login"/>
                </form>
            </div>

        </div>
    )
}