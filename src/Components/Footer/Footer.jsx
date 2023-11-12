import React from 'react'
import "./footer.css"

const quickLinks01 = [
    {
        path: "#",
        display: "Marketing"
    },
    {
        path: "#",
        display: "Analytics"
    },
    {
        path: "#",
        display: "Commerce"
    },
]


const Footer = () => {

    const year = new Date().getFullYear()

  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer_wrapper">
            <div className="footer_logo">
                <h2>Kedigital</h2>
                <p className="description">Grow with us</p>
                <p className="small_text description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat vel quas libero natus quis animi non, voluptatum dolores excepturi ipsa.</p>
            </div>

            <div className="footer_quick-links">
                <h3 className="quick_links-title">Solutions</h3>
                <ul className="quick_links">
                    {
                        quickLinks01.map((item, index)=>(
                            <li className="quick_link-item" key={index}>
                                <a href={item.path}>{item.display}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className="footer_quick-links">
                <h3 className="quick_links-title">Solutions</h3>
                <ul className="quick_links">
                    {
                        quickLinks01.map((item, index)=>(
                            <li className="quick_link-item" key={index}>
                                <a href={item.path}>{item.display}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>

        </div>
        <p className="copyright">Copyright {year}, developed by Walter kibet. All rights reserved. {" "}</p>
      </div>
    </footer>
  )
}

export default Footer
