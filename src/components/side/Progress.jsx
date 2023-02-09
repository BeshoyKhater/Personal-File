import React from 'react'

const Progress = ({done,title,back}) => {
  return (
      <div className='Progress'>
            <div className={`Progress_done ${back}`} style={{opacity:1,width:`${done}%`}} ></div>
            <div className='Progress_num'>
                <h4>{done}.</h4>
            </div>
            <div className='Progress_title'>
                <h3>{title}.</h3>
            </div>
        </div>
  )
}

export default Progress