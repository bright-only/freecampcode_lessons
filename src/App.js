import './App.css';
import logo from './Images/logo.svg';

function App() {
  return (
    <div>
        <h1>my first free camp project</h1>
        <nav>
          <img  src={logo} alt="logo.svg" className="App-Logo"/>
          <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
    </div>
    
  );
}

export default App;
