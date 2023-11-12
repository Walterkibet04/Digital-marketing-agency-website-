import React,{useState, useEffect} from "react";

import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/UI/Hero";
import Counter from "./Components/UI/Counter";
import Services from "./Components/UI/Services";
import About from "./Components/UI/About";
import Team from "./Components/UI/Team";
import Blog from "./Components/UI/Blog"
import Testimonial from "./Components/UI/Testimonial";
import Newsletter from "./Components/UI/Newsletter";
import Footer from "./Components/Footer/Footer";


function App(){

  const [theme, setTheme] = useState('')

  const toggleTheme = ()=>{
    theme === '' ? setTheme('light-theme') : setTheme('')
  }

  useEffect(()=>{
    document.body.className = theme
  },[theme])

    return (
      <>
         <Header theme={theme} toggleTheme={toggleTheme}/>
         <Hero theme={theme}/>
         <Counter />
         <Services /> 
         <About />
         <Team />
         <Blog />
         <Testimonial/>
         <Newsletter/>
         <Footer/>
      </>
    )
}

export default App;


