import React from 'react'
import './card.css'
import Image from '../Image'
function Card({id,StatusIcon,PriorityIcon,NameIcon,title,group}) {
  console.log(group)
  return (
    <div id='card'>
      <div id='upper-part'>
        <div >
          {id}
        </div>
        {
          group==='User'? (
            <div></div>
          ): (
            <div className='card-image'>
              <Image/>
            </div>
        )
        }
      </div>
      <div id='middle-part'>
        {
          group==='Status'? (
            <div></div>
          ): (
            <div  id='statusicon'>
              <StatusIcon/>
            </div>
          )
        }
        <div id='title'>
          {title}
        </div>
      </div>

      <div id='lower-part'>
          {
            group==='Priority'? (
              <div></div>
            ): (
              <div id='box'>
                <PriorityIcon />
              </div>
            )
          }
          <div id='feature-request'>
            <div id='circle'>

            </div>
            <div id='feature-request-text'>
              Feature Request
            </div>
          </div>
      </div>
    </div>
  )
}

export default Card
