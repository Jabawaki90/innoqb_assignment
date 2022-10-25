import React from 'react'
import './features.css'

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Features =(props)=>{
    return <div className='features_main_container'>
        <div className='features_single_container'>
            <FavoriteBorderIcon fontSize='large' style={{ color: 'yellow' }}/>
            <h4>Whish List</h4>
        </div>
        <div className='features_single_container'>
            <PersonOutlineOutlinedIcon fontSize='large' style={{ color: 'yellow' }} />
            <div className='text_container'>

            <h4>Sign In</h4>
            </div>
        </div>
        <div className='features_single_container'>
            <ShoppingCartOutlinedIcon fontSize='large' style={{ color: 'yellow' }}/>
            <h4>Cart</h4>
        </div>
    </div>
}

export default Features;