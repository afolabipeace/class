import React from 'react'
import {useNavigate} from 'react-router-dom'
function About() {
  const navigate = useNavigate()
    const transfer = ()=>{
      alert( `successful`)
      navigate('/')
    }

  return (
    <>
       <h3> About about about about about about about about</h3>
       <button onClick={transfer}>Transfer</button>
    </>
  )
}

export default About