import { SET_VISIBILITY_FILTER, VISIBILITY_FILTERS } from '../../actions/constants'
import visibilityFilter from '../../reducers/visibilityFilterReducer'

describe('visibility filter reducer', () => {
  it('updates the visibility filter', () => {
    const stateBefore = VISIBILITY_FILTERS.SHOW_ALL
    const action = {
      type: SET_VISIBILITY_FILTER,
      filter: VISIBILITY_FILTERS.SHOW_COMPLETE
    }
    const stateAfter = VISIBILITY_FILTERS.SHOW_COMPLETE

    expect(
      visibilityFilter(stateBefore, action)
    ).toEqual(stateAfter)
  })
})
