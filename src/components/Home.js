import React from 'react';
import Typewriter from 'typewriter-effect';
import Card from './Card';
import CardData  from './CardData';

const Home=()=>{
    return(
        <>
        <div className="home-section">
            <div className="text-effect">
            {/* <Typewriter
            onInit={(typewriter)=>{
                typewriter.typeString("Welcome to Technopedia").pauseFor(1000).deleteAll().typeString("Think Technology").pauseFor(1000).deleteAll().typeString("Build Technology").pauseFor(1000).deleteAll().start(); }}/> */}
            <Typewriter
            options={{
            strings: ['Welcome to Technopedia','Think Technology', 'Build Technology'],
            autoStart: true,
            loop: true,
          }}
         />
            </div>
        </div>
        <div className="home-card-section">
          
        <h1 className='read-articles-heading'>Read Articles</h1>
          {CardData.map((ele)=>{
            return(
            <Card
            imgSrc={ele.imgSrc}
            imgTitle={ele.imgTitle}
            imgLink={ele.imgLink}  
            />
             ); 
          })}
        </div>
        </>
    );
}
export default Home;