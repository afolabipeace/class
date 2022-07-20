import React from 'react'
import {useParams} from 'react-router-dom'
function MoreDetails() {
    const {id}=useParams()
  return (
    <div>welcome {id}</div>
  )
}

export default MoreDetails