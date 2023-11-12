import '../../Styles/blog.css'
import React from 'react'
import videoImg from '../../Images/video.png'
import articleImg from '../../Images/article.png'
import caseStudy from '../../Images/case-study.png'


const blogData = [
    {
        imgUrl : videoImg,
        title: 'Video',
        desc :  'To know more about our work. Watch video',
        linkUrl : "#"
    },
    {
        imgUrl : articleImg,
        title: 'Articles',
        desc :  'Do you want to improve the way your brand interacts with customer? Lets talk ...',
        linkUrl : "#"
    },
    {
        imgUrl : caseStudy,
        title: 'Case study',
        desc :  'Boost your conversation rate with us ...',
        linkUrl : "#"
    },
]

const Blog = () => {
  return (
    <section id='blog' className='blog'>
        <div className="container">
            <div className="blog_top-content">
                <h6 className="subtitle">Our Blog</h6>
                <h2>Let's have a look from our <span className="highlight">recent blog</span> </h2>
            </div>
            <div className="blog_wrapper">
                {
                    blogData.map((item, index)=>(
                        <div className="blog_item" key={index}>
                           <h3>{item.title}</h3>
                           <div className="blog_img">
                           <img src={item.imgUrl} alt="" />
                           </div>
                            <p className="description blog_desc">
                            {item.desc}
                            </p>
                            <div>
                            <a href={item.linkUrl} className="learn_more"> <i class="ri-arrow-right-line"></i></a>
                            </div>
                         </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Blog
