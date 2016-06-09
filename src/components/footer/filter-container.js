import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { setVisibilityFilter } from '../../state/visibility-filter/actions';
import { getVisibilityFilter } from '../../state/visibility-filter/selectors';
import Filter from './filter';

const FilterContainer = connect(
  createSelector(
    getVisibilityFilter,
    (state, { filter, title }) => ({
      filter,
      title,
    }),
    (activeFilter, props) => ({
      title: props.title,
      active: props.filter === activeFilter,
    })
  ),
  (dispatch, { filter }) => ({
    onClick(e) {
      e.preventDefault();
      dispatch(setVisibilityFilter(filter));
    },
  })
)(Filter);

export default FilterContainer;
