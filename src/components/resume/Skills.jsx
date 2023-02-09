import React from 'react'
import Heading from '../../common/Heading'
import { skills } from '../../data/data'
import Progress from '../side/Progress'

const Skills = () => {
  return (
    <>
        <Heading title="Skills" />
        <div className="skills">
            <div className="bottom_skill">
                {skills.map((item)=>(
                    <div key={item.id} className="skill_box">
                        <Progress title={item.text} done={item.num} back={item.class}/>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default Skills