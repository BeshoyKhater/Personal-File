import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import { buttons, projects } from '../../data/data'
import { AiFillEye } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'
import Heading from '../../common/Heading'

const PortfolioProjects = () => {
    const [active,setActive]=useState('all');
    const [myProjects,setMyProject]=useState(projects);
    const handleActive =(type) =>{
        if(type==='all') {
            setActive('all')
            setMyProject(projects)
        }else {
            setActive(type)
            setMyProject(projects.filter((el)=>el.type===type))
        }
    } 
  return (
    <section id="portfolio" className='container'>
        <Heading title="Portfolio" />
        <div className="projects">
        <div className="buttons">
            {buttons.map(({id,text,type})=>{
                return (
                    <button key={id} className={`${active===type ? "active" : ""} Btn white`} onClick={()=>handleActive(type)}>{text}</button>
                )
            })}
        </div>
            <Row className='g-4'>
                {myProjects.map((pro)=>{
                    return(
                        <div key={pro.id} className="col-lg-6 col-12">
                            <div className="Card">
                                <div className="image">
                                    <img src={pro.image} alt="" />
                                    <div className="buttons__project">
                                        <a href={pro.demo} target="_blank" title='Demo' rel="noreferrer"><AiFillEye/></a>
                                        <a href={pro.github} target="_blank" title='Github' rel="noreferrer"><BsGithub/></a>
                                    </div>
                                </div>
                                <div className="details">
                                    <h3>{pro.title}</h3>
                                    <h6>{pro.date}</h6>
                                    <p>{pro.desc}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Row>
        </div>
    </section>
  )
}

export default PortfolioProjects