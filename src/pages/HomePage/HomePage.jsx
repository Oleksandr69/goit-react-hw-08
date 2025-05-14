import React from 'react'
import css from './HomePage.module.css'

const HomePage = () => {
  return (
    <div className={css.home}>
    <h2> Contact manager welcome page{' '}</h2>
      <span role="img" aria-label="Greeting icon" width='50'><br/>
            💁‍♀️
      </span>
    
    </div>
  )
}

export default HomePage;
