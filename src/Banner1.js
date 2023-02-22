import React from 'react';
import { Button } from '@mui/material';
import './Banner1.css';

function Banner1() {
  return (
    <div className='Banner1'>
      <div id='Bannerleft'>
        <h1 id='Bannertxt'>Discover all the cool places, restaurants, parties & hotspots in a city</h1>
        <h4 id='Bannersmall'>Welcome to our city exploration product your one-stop solution for discovering all the cool places, events and parties in your city</h4>
        <Button className='btns' variant='contained'>I Want To Explore</Button>
        </div>
      <div id='Bannerright'>
        <img src='./Banner1Img.jpg'/>
        {/* Photo by <a href="https://unsplash.com/@bluespit?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Shingi Rice</a> on <a href="https://unsplash.com/photos/kUmzO9mKLDk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}
        </div>
    </div>
  )
}

export default Banner1;