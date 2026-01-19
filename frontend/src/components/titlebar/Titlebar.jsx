import './titlebar.css'

export default function Titlebar(){
    return(
        <div id="titlebar" draggable="true">
            <span>Sistema de lançamentos</span>

            <div id="titlebar-controls">
                <button id="btnMinimize" onClick={() => electron.minimizeWindow()}>
                    <svg width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_30_118)">
                            <path d="M15.3571 2C15.3571 2.76055 14.7826 3.375 14.0714 3.375H-0.0714635C-0.782624 3.375 -1.35718 2.76055 -1.35718 2C-1.35718 1.23945 -0.782624 0.625 -0.0714635 0.625H14.0714C14.7826 0.625 15.3571 1.23945 15.3571 2Z" fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_30_118">
                        <rect width="14" height="2.75" fill="white" transform="translate(0 0.625)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </button>

                <button id="btnMaximize" onClick={() => electron.maximizeWindow()}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1_39_389" fill="white">
                            <rect x="0.5" y="0.5" width="13" height="13" rx="1"/>
                        </mask>
                        <rect x="0.5" y="0.5" width="13" height="13" rx="1" stroke="white" strokeWidth="4.6" mask="url(#path-1-inside-1_39_389)"/>
                    </svg>
                </button>

                <button id="btnClose" onClick={() => electron.closeWindow()}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.2553 2.23928C11.6847 1.79327 11.6847 1.06896 11.2553 0.622956C10.8258 0.176951 10.1283 0.176951 9.6988 0.622956L6.08081 4.38367L2.45938 0.626524C2.0299 0.180519 1.33241 0.180519 0.902925 0.626524C0.473439 1.07253 0.473439 1.79684 0.902925 2.24285L4.52435 5.99999L0.906361 9.7607C0.476875 10.2067 0.476875 10.931 0.906361 11.377C1.33585 11.823 2.03333 11.823 2.46282 11.377L6.08081 7.61631L9.70224 11.3735C10.1317 11.8195 10.8292 11.8195 11.2587 11.3735C11.6882 10.9275 11.6882 10.2031 11.2587 9.75713L7.63727 5.99999L11.2553 2.23928Z" fill="white"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}