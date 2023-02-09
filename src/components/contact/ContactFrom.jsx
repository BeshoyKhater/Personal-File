import React from 'react'
import ImageContact from "../../assets/images/contact.svg"
import { FiPhoneCall } from 'react-icons/fi'
import { MdEmail } from 'react-icons/md'
import { MdLocationPin } from 'react-icons/md'
import Heading from "../../common/Heading"
import { Row } from 'react-bootstrap'
import { socialIcon } from '../../data/data'

const ContactFrom = () => {
  return (
        <section id="contact" className="container">
          <Heading  title="Contact Us"/>
          <div className="container__contact">
            <div className="side__contact">
              <Row className='align-items-center g-3'>
                <div className="col-md-6 col-12">
                  <div className="aside__image">
                    <img src={ImageContact} alt=""/>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <ul className="contact__details">
                      <li>
                          <FiPhoneCall/>
                          <h5>01202268298</h5>
                      </li>
                      <li>
                          <MdEmail />
                          <h5>BeshoyKhater@gmail.com</h5>
                      </li>
                      <li>
                          <MdLocationPin/>
                          <h5>Cairo, Egypt</h5>
                      </li>
                  </ul>
                  <hr />
                  <ul className="contact__socials">
                    {socialIcon.map((icon)=>{
                      return(
                        <li key={icon.id}><a href={icon.link} target="_blank" rel="noreferrer">{icon.icon}</a></li>
                      )
                    })}
                  </ul>
                </div>
              </Row>
            </div>

            <div className="container__form">
              <form action="https://formspree.io/f/mzbwnpbv"  method="POST" className="contact__form" >
                  <div className="form__name">
                      <input type="text" name="First Name" placeholder="First Name" required/>
                      <input type="text" name="Last Name" placeholder="Last Name" required/>
                  </div>
                  <input type="email" name="Email Address" placeholder="Your Email Address" required/>
                  <textarea name="Message"  rows="7" placeholder="Message" required></textarea>
                  <button type="submit" className="button"><span>Send Message</span></button>
              </form>
            </div>
          </div>
    </section>
  )
}

export default ContactFrom