import React from 'react'
import PropTypes from 'prop-types'

const FilterButton = ({ active, onClick, text }) =>
  <button className={active ? 'active-filter' : ''} onClick={onClick}>{text}</button>

FilterButton.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default FilterButton
