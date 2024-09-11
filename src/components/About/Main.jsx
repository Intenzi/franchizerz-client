import React from 'react';
import './Main.css'; // Rename your CSS file if necessary

import AboutComponent from './AboutComponent';
import TeamComponent from './TeamComponent';
import Values from './Values';
import Services from './Services';
import Timeline from './Timeline';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Counter from './Counter';
import { NewsItem } from './NewsItem';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import LegalAffairs from './LegalAffairs';

function Main() {
  const dummyData = {
    title: "Sample News Title",
    description: "This is a sample description of the news article.",
    imageUrl: "",
    newsUrl: "https://example.com",
    date: "2023-07-23T10:00:00Z",
    author: "John Doe",
    source: "Trending"
  };

  return (
    <div id="main-container" className="bg-gray-100">

      {/* <HeroSection /> */}
      {/* <LegalAffairs /> */}
      <AboutComponent />
      {/* <NewsItem {...dummyData} /> */}
      <Counter />
      <Values />
      <Services />
      <Timeline />
      <TeamComponent />
      {/* <Footer /> */}
    </div>
  );
}

export default Main;
