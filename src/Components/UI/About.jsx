import React from 'react'
import "../../Styles/about.css"
import aboutImg from '../../Images/about_us.jpg'


const chooseData = [
  {
    icon: 'ri-wifi-line',
    title: 'First working process',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem placeat sequi perspiciatis a, officiis odit non vero atque saepe .'
  },
  {
    icon: 'ri-team-line',
    title: 'Dedicated Team',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem placeat sequi perspiciatis a, officiis odit non vero atque saepe .'
  },
  {
    icon: 'ri-customer-service-2-line',
    title: '24/7 Support',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem placeat sequi perspiciatis a, officiis odit non vero atque saepe .'
  },
]


const About = () => {
  return (
    <>
        <section id="about">
          <div className="container">
             <div className="about_wrapper">
                <div className="about_content"> 
                    <h6 className="subtitle">Why choose us</h6>
                    <h2>We make your business visible online </h2>
                    <h2 className="highlight">Who we are</h2>
                    <p className="description about_content-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Dicta ipsa vel, necessitatibus minima porro a quod aliquam amet iure omnis labore doloribus 
                    illum laborum voluptate recusandae sunt. Labore, ab quidem.</p>

                    <div className="choose_item-wrapper">
                          {
                            chooseData.map((item, index)=>(
                              <div className="choose_us-item" key={index}>
                                <span className='choose_us-icon'> <i class={item.icon}></i> </span>
                                  <div>
                                      <h4 className="choose_us-title">{item.title}</h4>
                                      <p className="description">{item.desc}</p>
                                  </div>
                                </div>
                            ))
                          }
                     </div>
                </div>
                <div className="about_img">
                  <img src={aboutImg} alt="" />
                </div>
             </div>
          </div>  
        </section> 
    </>
  )
}

export default About
