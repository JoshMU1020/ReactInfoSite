import reactLogo from './assets/react.svg'

function Header() {
    return (
        <header>
            <nav className="nav">
                <div className="logo-title">
                    <img className="logo" src={reactLogo} />
                    <h2>ReactFacts</h2>
                </div>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header