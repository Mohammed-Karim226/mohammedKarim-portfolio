import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons';
const InfoBox = ({text, link, btnText})=>(
        <div className='info-box' >
               <p className='font-medium sm:text-xl text-center' >
               {text}
               </p>
                <Link to={link} className='neo-brutalism-white neo-btn' >{btnText}  <img src={arrow} className='w-4 h-4 object-contain' /></Link>
               
        </div>
)

const renderContent = {
    1:(
        <h1
        className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'
        >
          Hi, I am  <span className='font-semibold'> Mohammed Karim</span>👋
          <br/>
          Software Engineer | React Developer
        </h1>
    ),
    2:(
        <InfoBox text='Worked on many projects and picked up many skills along the way' link='/about' btnText='learn more...' />
    ),
    3:(
        <InfoBox text='I have led multiple projects to success throughout my journey, Curious about the impact they have made?' link='/projects' btnText='Visit my portfolio' />
    ),
    4:(
        <InfoBox text="Need a project done or looking for a dev? I'm just a few keystrokes away" link='/contact' btnText="Let's talk" />
    ),
}
const HomeInfo = ({currentStage}) => {


  return renderContent[currentStage] || null;
}

export default HomeInfo;