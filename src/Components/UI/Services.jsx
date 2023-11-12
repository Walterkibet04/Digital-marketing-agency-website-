import React from 'react'
import  "../../Styles/services.css"


const serviceData = [
    {
        icon: 'ri-apps-line',
        title: 'App Development',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit amet explicabo, ad atque aut dignissimos architecto quas dolorem expedita cum.'
    },
    {
        icon: 'ri-code-s-slash-line',
        title: 'Web Design',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit amet explicabo, ad atque aut dignissimos architecto quas dolorem expedita cum.'
    },
    {
        icon: 'ri-landscape-line',
        title: 'Graphic Design',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit amet explicabo, ad atque aut dignissimos architecto quas dolorem expedita cum.'
    },
    {
        icon: 'ri-rocket-line',
        title: 'Digital Marketing',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit amet explicabo, ad atque aut dignissimos architecto quas dolorem expedita cum.'
    },
]



const Services = () => {
  return (
    <>
        <section id='services'>
            <div className="container">
                <div className="services_top-content">
                    <h6 className="subtitle">Our services</h6>
                    <h2>Save time managing your business with </h2>
                    <h2 className="highlight">our best services</h2>
                </div>

                <div className="service_item-wrapper">
                    {
                        serviceData.map((item, index)=>(
                            <div className="services_item" key={index}>
                               <span className='service_icon'><i class={item.icon}></i></span>
                               <h3 className='service_title'>{item.title}</h3>
                               <p className='description'>{item.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section> 
    </>
  )
}

export default Services
