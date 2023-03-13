import React, { useState } from 'react'

import Navbar from './components/General/Navbar'

import Pages from './pages'


function App() {

  return (
      <React.Fragment>
          <Navbar />
          <Pages />
      </React.Fragment>
  )
}

export default App
