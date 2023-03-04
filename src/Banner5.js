import React from 'react'
import './Banner5.css'
import { Button } from '@mui/material'
// import Icon from '@mui/material'
import AppleIcon from '@mui/icons-material/Apple';
// import { fontSize } from '@mui/system';
import ShopTwoIcon from '@mui/icons-material/ShopTwo';

function Banner5() {
    return (
        <div id='Banner5'>
            <h1>Sign up and explore the cool around you</h1>
            <Button className='btns' variant='contained' > <AppleIcon className='Appleicon' fontSize='large' marginRight='59px' /> Download for IPhone</Button>
            <Button className='btns' variant='contained'> <ShopTwoIcon className='ShopTwoIcon' fontSize='large'/>  Download for Andriod</Button>
        </div>
    )
}

export default Banner5