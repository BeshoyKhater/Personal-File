import React, { useEffect, useState }  from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { RiMenu3Line } from 'react-icons/ri'
import {Link} from "react-router-dom"
import {menu} from "../data/data"

const Header = () => {
    const [mobile,setMobile]=useState(false)
    const [path, setPath] = useState(false);

    useEffect(() => {
    if (window.innerWidth > 778) {
      setMobile(false);
    }}, []);

    useEffect(() => {
    if (window.innerWidth < 778) {
        const element = document.getElementById(path);
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
      setMobile(false);
  }, [path]);

    function handleClick() {
        if (window.innerWidth < 778) {
        setMobile((prev) => !prev);
        }
    
    }
  return (
    <div>
        <header>
            <ul className={`${mobile ? "mobile-nav" : "menu"}`}>
                {menu.map((item)=>(
                    <li key={item.url}>
                        <Link to={item.url} className='link' onClick={()=>setPath(item.location)} >{item.text}</Link>
                        <span>{item.icon}</span>
                    </li>
                ))}
            </ul>
            <div className='icons'>
                <button onClick={()=> handleClick()}>
                    {mobile ? <AiOutlineClose /> :<RiMenu3Line />}
                </button>
            </div>
        </header>
    </div>
  )
}

export default Header