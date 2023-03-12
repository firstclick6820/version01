import React from 'react'

import {Routes, Route} from 'react-router-dom'


// import pages
import Home from './Home'



const index = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Home />} />
    </Routes>
  )
}

export default index