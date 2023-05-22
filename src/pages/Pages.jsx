import React from 'react'
import Header from '../common/Header'
import { HashRouter,Routes , Route } from "react-router-dom"
import Home from '../components/Home'
import Resume from '../components/Resume'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import SideContent from '../components/side/SideContent'
import { Row } from 'react-bootstrap'


const Pages = () => {
  return (
    <>
        <div className="main-div">
            <Row className='justify-content-between'>
                <div className='col-lg-4 col-md-4 col-12'>
                    <div className="side">
                        <SideContent />
                    </div>
                </div>

                <div className='col-lg-8 col-md-8'>
                    <main>
                        <HashRouter>
                            <Header/>
                            <Routes>
                                <Route index path='/' element={<Home />} />
                                <Route path='/resume' element={<Resume />} />
                                <Route path='/portfolio' element={<Portfolio />} />
                                <Route path='/contact' element={<Contact />} />
                            </Routes>
                        </HashRouter>
                    </main>
                </div>
            </Row>
        </div>
    </>
  )
}

export default Pages