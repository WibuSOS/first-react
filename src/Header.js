import logo from './logo.svg';
import './Header.css';

function Header() {
  return (
    <header className="App-header">
      <nav className="App-nav">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 className="App-title">ReactFacts</h3>
        <h4>React Course - Project 1</h4>
      </nav>
    </header>
  );
}

export default Header;