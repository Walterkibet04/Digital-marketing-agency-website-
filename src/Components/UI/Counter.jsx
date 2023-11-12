import React from 'react'
import "../../Styles/counter.css"


const counterData = [
    {
        number: '200+',
        text: "Clients"
    },
    {
        number: '100+',
        text: "Completed Projects"
    },
    {
        number: 5,
        text: "Running projects"
    },
]

const Counter = () => {
  return (
    <>
     <section className="counter" id='projects'>
        <div className="container">
            <div className="counter_wrapper">
                {
                    counterData.map((item, index)=>(
                        <div className="counter_item" key={index}>
                          <h3 className="counter_number">{item.number}</h3>
                          <h4 className="counter_title">{item.text}</h4>
                        </div>
                    ))
                }
                
            </div>
        </div>   
     </section> 
    </>
  )
}

export default Counter
