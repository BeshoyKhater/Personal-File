import React from 'react'
import sideImg from "../../assets/images/Beshoy.jpg"
import { side, socialIcon } from '../../data/data'
import { FiDownloadCloud } from 'react-icons/fi'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import Progress from './Progress'


const SideContent = () => {
  return (
    <>
    <section className="sideContent">

        <div className="sideContent_top">
            <div className="sideContent_top_img">
                <img src={sideImg} alt="" />
                <div className="sideContent_top_img_name">
                    <h3>Beshoy Khater</h3>
                    <span>FE. Developer</span>
                </div>
                <div className="sideContent_top_social">
                    {socialIcon.map((icons)=>(
                        <div key={icons.class} className={icons.class}>
                            <a href={icons.link} target="_blank" rel="noreferrer">{icons.icon}</a>
                        </div>
                    ))}
                </div>
            </div>

            <div className="sideContent_bottom">
                <div className="sideContent_bottom_skill">
                    {side.map((item)=>(
                        <div key={item.num} className="sideContent_skill_box">
                            <Progress title={item.text} done={item.num} back={item.class}/>
                        </div>
                    ))}
                </div>
            </div>

            <div className="sideContent_bottom_buttonGroup">
                    <a download href='https://drive.google.com/u/0/uc?id=1SrNrCbPKiqxVn182sAHgWRZxF0isnkNJ&export=download'>
                        <button id='down' className="sm_button">
                            <FiDownloadCloud className='button_bic'/>
                        </button>
                    </a>
                    <a href='https://drive.google.com/file/d/1SrNrCbPKiqxVn182sAHgWRZxF0isnkNJ/view'target="_blank" rel="noreferrer" >
                        <button className="button">
                            <RiMoneyDollarCircleLine className='button_bic'/>
                            <span >HIRE ME</span>
                        </button>
                    </a>
            </div>
        </div>
    </section>
    </>
  )
}

export default SideContent