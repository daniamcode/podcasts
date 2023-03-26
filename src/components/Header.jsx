import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "../styles/Header.css";

function Header() {
  const { flag } = useSelector(state => state)

  return (
    <div className='header'>
      <Link to='/' className='header-title'>Podcaster</Link>
      <div className='notification' data-mounted={flag.showFlag}></div>
    </div>
  );
}

export default Header;
