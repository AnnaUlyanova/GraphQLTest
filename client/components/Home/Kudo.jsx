import React, { PropTypes } from 'react'

const Kudo = props => {
  const { content, from, to } = props.kudo
  return (
    <div>
      <p>{from}, {content} - {to}</p>
    </div>
  )
}

Kudo.propTypes = {
  kudo: PropTypes.shape({
    content: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
  }).isRequired
}

export default Kudo
