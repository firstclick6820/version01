import React from 'react'

import {Routes, Route} from 'react-router-dom'


// import pages
import ProfilePage from './ProfilePage'
import WorkExperiences from './WorkExperiences'
import Certificates from './Certificates'




const index = () => {
  return (
    <Routes>
        <Route exact path="/" element={<ProfilePage />} />
        <Route exact path="/work-experiences" element={<WorkExperiences />} />
        <Route exact path="/certificates" element={<Certificates />} />
    </Routes>
  )
}

export default index