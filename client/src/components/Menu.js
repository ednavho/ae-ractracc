import { Link } from 'react-router-dom';
import '../styles/Menu.css';


function Menu() {
  return (
    <div className='menu'>
      <Link className='category' to='/feed'>
        <div className='cat-text'>Feed</div>
      </Link>
      <Link className='category' to='/userprofile'>
        <div className='cat-text'>Profile</div>
      </Link>
      <Link className='category' to='/post'>
        <div className='cat-text'>Post</div>
      </Link>
    </div>
  )
}

export default Menu

{/* <Link className='header-itm' to='/'>
                <div className='link'>Home</div>
            </Link> */}