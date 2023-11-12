import React, { useRef, useEffect } from 'react'
import "./header.css"

const nav_links = [
    {
        path: '#home',
        display: "Home"
    },
    {
        path: '#about',
        display: "About"
    },
    {
        path: '#services',
        display: "Services"
    },
    {
        path: '#projects',
        display: "Projects"
    },
    {
        path: '#blog',
        display: "Blog"
    }
]

const Header = ({theme, toggleTheme}) => {
    
    //  navigation menu to stick on top when user scrolls
    const headerRef = useRef(null)

    const menuRef = useRef(null)

    const headerFunc = ()=>{
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
            headerRef.current.classList.add("header_shrink")
        } else{
            headerRef.current.classList.remove("header_shrink")
        }
    }
 
    useEffect(()=>{
        window.addEventListener('scroll', headerFunc)

        return ()=>window.removeEventListener('scroll', headerFunc)
    },[])

    // 

    const handleClick = (e) =>{
        e.preventDefault();

        const targetAttr = e.target.getAttribute('href')

        const location = document.querySelector(targetAttr).offsetTop;

        window.scrollTo({
            left: 0,
            top: location - 80,
        });
    } ;

    const toggleMenu = () => menuRef.current.classList.toggle('menu_active')

  return (
    <div>
      <header className='header' ref={headerRef}>
        <div className="container" >
            <div className="nav_wrapper" >
                <div className="logo">
                    <h2>KeDigital</h2>
                    
                </div>
                {/* ====== navigation ====== */}
                <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                    <ul className="menu">
                        {nav_links.map((item, index) =>( 
                            <li className="menu-item" key={index}>
                                <a href={item.path} onClick={handleClick} className='menu-link'>{item.display}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* light/dark-mode */}
                <div className="light_mode">
                    <span onClick={toggleTheme}>
                        {
                            theme === 'light-theme' ? (<span><i class="ri-moon-line"></i>Dark</span>) : (<span><i class="ri-sun-line"></i> Light Mode</span>)
                        }
                        
                    </span>
                </div>
                    <span className="mobile_menu" onClick={toggleMenu}><i class="ri-menu-line"></i></span>
            </div>
        </div>
      </header>
    </div>
  )
}

export default Header
