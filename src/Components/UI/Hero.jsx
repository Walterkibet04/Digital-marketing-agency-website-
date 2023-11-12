import React from 'react'
import "../../Styles/hero.css"
import heroDarkImg from "../../Images/hero-img.png"
import lightImg from "../../Images/light-hero-bg.jpg"

const Hero = ({theme}) => {
  return (
    <>
      <section className='hero_section' id='home'>
        <div className="container">
            <div className="hero_wrapper">
                <div className="hero_content">
                    <div>
                       <h2>We're creating perfect</h2>
                       <h2>Digital Products To</h2>
                       <h2 className='highlight'>Promote Your Brand</h2>
                    </div>
                    <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum vero tenetur architecto alias! Aliquam, fuga!</p>

                    <div className="hero_btns">
                        <button className="primary_btn">Get started now</button>
                        <button className="secondary_btn">Discover More</button>
                    </div>
                </div>
                <div className="hero_img">
                    <img src={ theme ==='light-theme' ? lightImg : heroDarkImg} alt="" />
                </div>
            </div>
        </div>
      </section> 
    </>
  )
}

export default Hero
