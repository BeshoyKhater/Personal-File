import React from 'react'
import Row from 'react-bootstrap/esm/Row'
import Heading from '../../common/Heading'
import { info } from '../../data/data'

const Info = () => {
  return (
    <>
        <Heading title='about info' />
        <div className="about_details_content">
            <Row className='gy-5 gx-4'>
                {info.map((val)=>(
                    <div key={val.id} className="col-md-6 col-12">
                        <div className="about_details_content_box">
                            <div className="icon">
                                <span>{val.icon}</span>
                            </div>
                            <div className="about_details_content_box_text">
                                <h4>{val.text}</h4>
                                <span>{val.value}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </Row>
        </div>
    </>
  )
}

export default Info