import { Link } from 'react-router-dom';
import '../styles/Menu.css';
import { AiOutlineHome, AiOutlineAudit, AiOutlineHighlight } from "react-icons/ai";

function Menu() {
  return (
    <div className='menu'>
      <Link className='category' to='/feed'>
        <div className='cat-text'><AiOutlineHome /></div>
      </Link>
      <Link className='category' to='/userprofile'>
        <div className='cat-text'><AiOutlineAudit /></div>
      </Link>
      <Link className='category' to='/post'>
        <div className='cat-text'><AiOutlineHighlight /></div>
      </Link>
    </div>
  )
}

export default Menu;