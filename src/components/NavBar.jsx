import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="header">
        <NavLink to='/' className='w-10 h-10 bg-white flex justify-center items-center rounded-lg font-bold shadow-md p-6' >
            <p className='blue-gradient_text '>MK_7</p>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
            <NavLink to='/about' className={({isActive})=> isActive ? 'text-blue-500' : 'text-black'} >About</NavLink>
            <NavLink to='/projects' className={({isActive})=> isActive ? 'text-blue-500' : 'text-black'} >Projects</NavLink>
        </nav>
    </header>
  )
}

export default NavBar;