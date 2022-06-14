import { Link } from 'react-router-dom';
import { IconGroup } from '../UI/Icons.js';
import './Header.css';

export default function Header() {
  // Properties ----------------------------------
  // Hooks ---------------------------------------
  // Context -------------------------------------
  // Methods -------------------------------------
  // View ----------------------------------------
  return (
    <header className="Header">
      <Link to='/'><IconGroup /></Link>
      <Link to={'/'}><h1>My Learning</h1></Link>
      <div className="welcome"><p>Welcome Graeme!</p></div>
    </header>
  )
}
