import { Link } from 'react-router-dom';

import logo from '../logo.svg';

function Home() {
  return (
    <header className="app-header">
      <img src={logo} className="app-logo" alt="logo" />
      <Link className="app-link" to="/about">
        About
      </Link>
      <Link className="app-link" to="/profile">
        Profile
      </Link>
      <a className="app-link" href="https://developer.blocklet.io/docs/" target="_blank" rel="noopener noreferrer">
        Learn Blocklet
      </a>
      <pre style={{ textAlign: 'left' }}>
        <code>window.blocklet = {JSON.stringify(window.blocklet, null, 2)}</code>
      </pre>
   
    </header>
  );
}

export default Home;
