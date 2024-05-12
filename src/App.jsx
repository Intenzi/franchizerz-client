import React from 'react'
import Navbar from './components/Navbar/Navbar'
import "./App.css"
import Hero from './components/Hero/Hero'
import Card from './components/Card/Card'
import CustomCard from './components/CustomizedCard/CustomCard'
import { data1 , data2 } from './data/db'

const App = () => {

 
  return (
    <div>
      <Navbar/>
      <Hero/>
      <CustomCard heading="What's On Your Mind" data={data1}/>
      <Card/>
      <CustomCard  heading = "Categories!" data={data2}/>

    </div>
  )
}

export default App
