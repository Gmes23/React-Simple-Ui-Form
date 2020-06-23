import React from 'react';

function Footer() {
    return (
        <footer className="footer-container">
            <a className="back-button" href="/">BACK </a>
            <div>
                <a className="userPageRef" href="/"></a>
                <a className="userPageRef" href="/"></a>
                <a className="userPageRef" href="/"></a>
                <a className="userPageRef" href="/"></a>
                <a className="userPageRef userPageRef-active" href="/"></a>
            </div>
            <a className="finished-button" href="/"> DONE </a>
        </footer>
    )
}

export default Footer;
