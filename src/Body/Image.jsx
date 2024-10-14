import React from 'react'
import Myimage from '../assets/profile.png'
function Image() {
  return (
    <>
<div className="image-container">
      <img src={Myimage} alt="" className="image" />
      <div className="circle"></div>
    </div>
    </>

  )
}

export default Image
