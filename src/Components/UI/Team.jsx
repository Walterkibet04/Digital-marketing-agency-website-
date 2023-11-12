import React from 'react'
import "../../Styles/team.css"
import Home from "../../Images/home.png"


const teamMembers = [
    {
        imgUrl: Home,
        name: 'Walter kibet',
        position: 'CEO'
    },
    {
        imgUrl: Home,
        name: 'Walter kibet',
        position: 'Software engineer'
    },
    {
        imgUrl: Home,
        name: 'Walter kibet',
        position: 'UI/UX Designer'
    },
    {
        imgUrl: Home,
        name: 'Walter kibet',
        position: 'Digital Marketer'
    },
]

const Team = () => {
  return (
    <>
        <section className='our_team'>
        <div className="container">
            <div className="team_content">
                <h6 className="subtitle">Our Team</h6>
                <h2>Meet with <span className="highlight">our team</span></h2>
            </div>
            <div className="team_wrapper">
                {
                    teamMembers.map((item, index)=>(
                        <div className="team_item">
                            <div className="team_img">
                              <img src={item.imgUrl} alt="" />
                            </div>
                            <div className="team_details">
                                <h4>{item.name}</h4>
                                <p className="description">{item.position}</p>
                            </div>
                            <div className="team_member-socials">
                                <span><i class="ri-linkedin-line"></i></span>
                                 <span><i class="ri-twitter-line"></i></span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        </section> 
    </>
  )
}

export default Team
