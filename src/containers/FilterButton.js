import { connect } from 'react-redux'
import FilterButton from '../components/FilterButton'
import { setVisibilityFilter } from '../actions/visibilityFilterActions'

const mapStateToProps = (state, ownProps) => ({
  active: state.visibilityFilter === ownProps.filter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterButton)
