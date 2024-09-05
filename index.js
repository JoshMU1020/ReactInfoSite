import React from 'https://unpkg.com/react@18/umd/react.development.js';
import ReactDOM from 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';

import Header from "./Header"

const root = ReactDOM.createRoot(document.getElementById("root"))

function Content() {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

function Footer() {
    return (
        <small>
            © 2024 Murillo development. All rights reserved.
        </small>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

root.render(<Page />)