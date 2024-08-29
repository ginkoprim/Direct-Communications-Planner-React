import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Direct Communications Planner</title>
        <meta property="og:title" content="Direct Communications Planner" />
      </Helmet>
    </div>
  )
}

export default Home
