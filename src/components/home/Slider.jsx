import React, { useState } from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Heading from '../../common/Heading';
import { slider } from '../../data/data';

const Slider = () => {
    // eslint-disable-next-line no-unused-vars
    const [data,setData]=useState(slider)
    const [curSlide, setCurSlide] = useState(0);
    const checkIndex=(position)=>{
        if(position > data.length - 1) {
            return 0
        } else if (position<0) {
            return data.length -1
        }
        return position
    }
    const nextSlide = ()=>{
        setCurSlide(()=>{
            let newSlide = curSlide +1
            return checkIndex(newSlide)
        })
    }
    const prevSlide = ()=>{
        setCurSlide(()=>{
            let newSlide = curSlide -1
            return checkIndex(newSlide)
        })
    }
  return (
        <div className="about_sider">
            <Heading title='What They Says?' />
            <div className="about_sider_content">
                {data.map((slide, index)=>(
                    <div key={slide.id}>
                        {index === curSlide &&
                            <div  className="Card">
                                <div className="img">
                                    <img src={slide.cover} alt="" />
                                </div>
                                <div className="text">
                                    <p>{slide.desc}</p>
                                    <h3>{slide.name}</h3>
                                    <label>{slide.link}</label>
                                </div>
                            </div>
                        }
                    </div>
                ))}
                <div className="about_sider_content_slideButton">
                    <button className='icon' onClick={nextSlide}>
                        <BsArrowRight />
                    </button>
                    <button className='icon' onClick={prevSlide}>
                        <BsArrowLeft />
                    </button>
                </div>
            </div>
        </div>
  )
}

export default Slider