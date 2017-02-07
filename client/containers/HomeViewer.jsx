import { connect } from 'react-redux'

import Home from '../components/Home'

const mapStateToProps = state => {
  const { kudos, users } = state
  return {
    kudos: kudos.map(kudo => {
      return {
        content: kudo.content,
        from: users.find(user => user.id === kudo.fromId).name,
        timestamp: kudo.timestamp,
        to: users.find(user => user.id === kudo.toId).name
      }
    })
  }
}

export default connect(mapStateToProps)(Home)
