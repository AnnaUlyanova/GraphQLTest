import React, { PropTypes } from 'react'

import AddKudo from './AddKudo'
import Kudo from './Kudo'

const Home = props => {
  const kudos = props.kudos.map((kudo, index) => <Kudo key={index} kudo={kudo} />)
  return (
    <div>
      <AddKudo />
      {kudos}
    </div>
  )
}

Home.propTypes = {
  kudos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Home
