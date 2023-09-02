import React from 'react'
import Button from '@mui/material/Button';
import AppleIcon from '@mui/icons-material/Apple';
import ShopTwoIcon from '@mui/icons-material/ShopTwo';
import './Home.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function Home() {
    return (
        <>
            <Navbar />
            <div className='Banner1'>
                <div id='Bannerleft'>
                    <h1 id='Bannertxt'>Discover cool places, restaurants, parties & hotspots in a city</h1>
                    <h4 id='Bannersmall'>Welcome to our city exploration product. Your one-stop solution for discovering all the cool places, events and parties in your city</h4>



                    {/* <h4 id='Bannersmall'>Welcome to our city exploration product. Your one-stop solution for discovering all the cool places, events and parties in your city</h4> */}
                    <Button className='btns' variant='contained'>Start Exploring</Button>
                </div>
                <div id='Bannerright'>
                    <img src='./Banner1Img.jpg' loading='lazy' alt='' />
                    {/* Photo by <a href="https://unsplash.com/@bluespit?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Shingi Rice</a> on <a href="https://unsplash.com/photos/kUmzO9mKLDk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}
                </div>
            </div >
            <div id='Banner2'>
                <div id='banner2left'>
                    <h1>Whether you're a local or a tourist</h1></div>
                <div id='banner2middle'>
                    <img src="./Banner2Img.jpg" loading='lazy' alt="" />
                </div>
                <div id='banner2right'>
                    <h1>find the latest and greatest happenings in town</h1>
                </div>
            </div>
            <div id='Banner3'>
                <h1>From trendy cafes to bustling bars, browse through a curated list of the best places to eat, drink and be merry in the city</h1>
                <Button className='btns' variant='contained'>GET STARTED</Button>
            </div>
            <div id='Banner4'>
                <div id='Banner4left'>
                    <img src="../Banner4Img1.jpg" loading='lazy' alt="" />
                </div>
                <div id='Banner4middle'>
                    <h1>Filter by location, price, and even the type of cuisine or music that you're in the mood for.</h1>
                </div>
                <div id='Banner4right'>
                    <img src="../Banner4Img2.jpg" loading='lazy' alt="" />
                </div>
            </div>
            <div id='Banner5'>
                <h1>Sign up and explore the cool around you</h1>
                <Button className='btns' variant='contained' > <AppleIcon className='Appleicon' fontSize='large' marginRight='59px' /> Download for IPhone</Button>
                <Button className='btns' variant='contained'> <ShopTwoIcon className='ShopTwoIcon' fontSize='large' />  Download for Andriod</Button>
            </div>
            <Footer />
        </>
    )
}

export default Home