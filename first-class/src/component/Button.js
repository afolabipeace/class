import React from 'react'

const Button =({title,color,myFunc}) => {
  // console.log(props)
  return (
    <>
        <button onClick={myFunc} className={color}>{title}</button>
        <h1>{color}</h1>
    </>
  )
}

export default Button