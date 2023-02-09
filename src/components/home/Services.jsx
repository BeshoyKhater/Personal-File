import React from 'react'
import { Row } from 'react-bootstrap'
import Heading from '../../common/Heading'
import { service } from '../../data/data'

const Services = () => {
  return (
        <div className="about_services">
            <Heading title='What I Do?' />
            <div className="about_services_boxs">
                <Row className='g-4'>
                    {service.map((item)=>(
                        <div key={item.id} className="col-lg-4 col-md-6 col-12">
                            <div key={item.text} className="Card">
                                <div className="icon">
                                    <span>{item.icon}</span>
                                </div>
                                <div className="text">
                                    <h3>{item.title}</h3>
                                    <label htmlFor="">{item.text}</label>
                                    <p>{item.decs}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Row>
            </div>
        </div>
  )
}

export default Services