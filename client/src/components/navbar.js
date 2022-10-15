import React from 'react'
import { useState,useEffect} from 'react'
import './Bar.css'
import image from "./user3.png"

export default function Navbar(props) {
  const [img,setImg] = useState();
  useEffect(() => {
    if(props.name!=null){
      setImg(image);
    }
  });
  return (
    <div>

<nav class="navbar navbar-expand-lg bg-light" style={{height: '2.8rem',background: 'rgba(217, 217, 217, 0.25)',  boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
        <div class="">
        <img src={img} style={{height:"40px", marginLeft:'5px', marginTop:'-5px'}}/>
            <a class="navbar-brand" style={{color:'#6C5984', fontSize:'18px', marginLeft:'15px', fontWeight:'55px'}} >{props.name}</a>
            
        </div>
    </nav>

    </div>
  )
}