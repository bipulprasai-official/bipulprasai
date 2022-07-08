import React,{useState,useEffect} from 'react'
import {FaBars,FaTimes} from 'react-icons/fa';
import {AiFillLinkedin,AiFillFacebook,AiFillGithub,AiOutlineMail} from 'react-icons/ai';
import { navigation } from '../data/data';

// import Link
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav,setNav] = useState(false);
    const [bg, setBg] = useState(false);

    useEffect(() => {
      window.addEventListener('scroll', () => {
        return window.scrollY > 50 ? setBg(true) : setBg(false);
      });
    });
  
    const handleNavbar = () => setNav(!nav)
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <h4>Bipul Prasai</h4>
      </div>

      {/* menus */}

    <ul className='hidden md:flex'>
    {navigation.map((item, idx) => {
          return (
            <li
              className='text-white hover:text-accent cursor-pointer'
              key={idx}
            >
              <Link
                to={item.href}
                activeClass='active'
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className='transition-all duration-300'
              >
                {item.name}
              </Link>
            </li>
          );
        })}
    </ul>

{/* hamburger icon */}
<div className='md:hidden z-10' onClick={handleNavbar}>
   {!nav ?  <FaBars/> : <FaTimes/>}  
</div>
{/* mobile menu */}
<ul className={!nav ? 'hidden':'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
        <Link to='/' className='flex justify-between items-center w-full text-[#ffff]'>Home</Link></li>
        <li className='py-6 text-4xl'>Projects</li>
        <li className='py-6 text-4xl'>Skills</li>
        <li className='py-6 text-4xl'>Contacts</li>
    </ul>

    {/* social icons */}
   <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
<ul>
    <li className='w-[115px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
        <Link to='/' className='flex justify-between items-center w-full text-[#ffff]'>
          Resume <AiFillFacebook size={30}/>
        </Link>
    </li>
    <li className='w-[115px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0E76A8]'>
        <Link to='/' className='flex justify-between items-center w-full text-[#ffff]'>
         Linkedin <AiFillLinkedin size={30}/>
        </Link>
    </li>
    <li className='w-[115px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#171515]'>
        <Link to='/' className='flex justify-between items-center w-full text-gray-300'>
            Github <AiFillGithub size={30}/>
        </Link>
    </li>
    <li className='w-[115px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#9CDAF1]'>
        <Link to='/' className='flex justify-between items-center w-full text-[#ffff]'>
         Email <AiOutlineMail size={30}/>
        </Link>
    </li>
</ul>
   </div>
    </div>
  )
}

export default Navbar