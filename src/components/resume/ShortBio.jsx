import React from 'react'
import Heading from '../../common/Heading'
import { bio } from '../../data/data'
import Row from 'react-bootstrap/esm/Row'

const ShortBio = () => {
  return (
    <>
        <Heading title='Short Bio' />
        <div className="about_details_bio">
            {bio.map((val)=>(
                    <div key={val.id} className="about_details_bio_box">
                        <Row className='g-lg-4 g-md-2'>
                            <div className='col-md-6 col-12'>
                                <div className="about_details_bio_box_item">
                                    <p>{val.para1}</p>
                                </div>
                            </div>
                            <div className='col-md-6 col-12'>
                                <div className="about_details_bio_box_item">
                                    <p>{val.para2}</p>
                                </div>
                            </div>
                            <div className='col-md-6 col-12'>
                                <div className="about_details_bio_box_item">
                                    <p>{val.para3}</p>
                                </div>
                            </div>
                            <div className='col-md-6 col-12'>
                                <div className="about_details_bio_box_image">
                                    <img src={val.img} alt="" />
                                </div>
                            </div>
                        </Row>
                    </div>
            ))}
        </div>
    </>
  )
}

export default ShortBio