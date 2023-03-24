import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Header.css";

function Header() {
  const [mounted, setMounted] = useState(false)

  useEffect(()=> {
    setMounted(true)
    return ()=>setMounted(false)
  }, [])

  return (
    <div className='header'>
      <Link to='/' className='header-title'>Podcaster</Link>
      <div className='notification' data-mounted={mounted}></div>
    </div>
  );
}

export default Header;
