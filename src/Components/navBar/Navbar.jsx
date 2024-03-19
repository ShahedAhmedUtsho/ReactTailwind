import React, { useState } from 'react';
import Link from '../Link/Link';
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [open,setOpen] = useState(false)
    const routers = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "Blog", path: "/blog" }
      ];
      
    return (
        <nav>
            <div className='md:hidden text-2xl duration-1000 ease-linear' onClick={()=>{setOpen(!open)}}>
              



        {open === true ? <IoMdClose ></IoMdClose> : <FaBars ></FaBars>}


            </div>
        <ul className=
        {`md:flex  duration-500 bg-slate-400 min-w-96 p-5  absolute
       
        ${ open? 'top-16' : '-top-56'} 
         `
        }
        >
            {
                routers.map(route => <Link key={route.id} route={route}></Link>
               
                )
            }
            </ul>
        </nav>

    );
};

export default Navbar;