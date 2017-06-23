import React from 'react'
import FilterButton from '../containers/FilterButton'
import { VISIBILITY_FILTERS } from '../actions/constants'

const FilterButtons = () =>
  <div>
    <FilterButton filter={VISIBILITY_FILTERS.SHOW_ALL} text='ALL' />
    <FilterButton filter={VISIBILITY_FILTERS.SHOW_COMPLETE} text='COMPLETED' />
    <FilterButton filter={VISIBILITY_FILTERS.SHOW_INCOMPLETE} text='INCOMPLETE' />
  </div>

export default FilterButtons
