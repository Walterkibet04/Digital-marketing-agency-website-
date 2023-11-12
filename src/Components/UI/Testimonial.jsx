import React from 'react'
import "../../Styles/testimonial.css"
import Slider from 'react-slick'
import avatar from "../../Images/images.png"

const Testimonial = () => {

    const settings ={
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true
    }

  return (
    <section>
      <div className="container">
        <div className="slider_content-top">
            <h6 className="subtitle">Testimonials</h6>
            <h2>Trusted by more than <span className="highlight">2,000 customers</span></h2>
        </div>

     <div className="slider_wrapper">
        <Slider {...settings}>
          <div className="slider_item">
            <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
               Quasi consequuntur provident in, neque molestias voluptates quidem velit ducimus 
               illum? Quia eos molestiae eveniet quam, quod expedita deserunt sint, corporis 
               dolores repellat repudiandae, dolorum explicabo error. Deleniti voluptas pariatur
                ea voluptatibus!</p>

              <div className="customer_details">
                <div className="customer_img">
                    <img src={avatar} alt="" />
                </div>
                 <div>
                    <h5 className="customer_name">John Doe</h5>
                    <p className="description">CEO, AirGarage</p>
                 </div>
              </div>
          </div>
        </Slider>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
