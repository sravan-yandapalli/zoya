"use client";

import Header from '@/pages/nav';
import { Console } from '@/pages/corosole';
import { NextPage } from 'next';
import "../app/globals.css";
import   Desktop  from '@/pages/hero';
import {PediatricsCover} from '@/pages/cover';
import HorizontalScrollingSection from '@/pages/mscroll';
import DiseaseSlider from '@/pages/disease';
import  Footer from '@/pages/fotter'
import QuoteCard from '@/pages/quot';



const Main: NextPage = () => {
  return (
    <div className="w-full relative bg-white h-[1024px] overflow text-left text-xl text-white font-inter">
     
      <div>

      <div><Header /></div>
      <div><PediatricsCover/></div>
      <div><Desktop/></div>
      
      <div><HorizontalScrollingSection/></div>
      <div><DiseaseSlider/></div>
      <div><Console/></div>
      <div><QuoteCard/></div>
      <div><Footer/></div>
      
      
      </div>

      
    </div>
  );
};

export default Main;
