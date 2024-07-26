import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
gsap.registerPlugin(useGSAP);
function App() {
  const menuRef = useRef(null);
  const iconRef = useRef(null);
  var elems=document.querySelectorAll("#full h4");
  var icon=document.querySelector("#full .hello2");
  var tl=gsap.timeline();
  useGSAP(()=>{
    tl.to(menuRef.current,{
       right:0,
       duration:0.8
    })
    tl.to(elems,{
      y:-20,
      stagger:0.1,
      duration:0.3
    })
    tl.from(icon,{
      opacity:0,
      duration:0.2
    })
  })
  tl.pause();
  var menu=document.querySelector("#main .hello");
  menu.addEventListener("click",function()
{
  tl.play();
})
var cross=document.querySelector("#full .hello2");
cross.addEventListener("click",function(){
  tl.reverse();
})
  return (
    <>
    <div id="main">
        <h1>Sheriyans</h1>
        <AiOutlineMenu className='hello'/>
    </div>
    <div id="full" ref={menuRef}>
      <h4>About</h4>
      <h4>Work</h4>
      <h4>Services</h4>
      <h4>Products</h4>
      <h4>Cart</h4>
      <AiOutlineClose ref={iconRef} className='hello2'/>
    </div>
    </>
  )
}

export default App