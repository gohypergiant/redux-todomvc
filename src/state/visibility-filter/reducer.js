import { handleActions } from 'redux-actions';
import { SHOW_ALL } from './constants';

import {
  VISIBILITY_FILTER_SET,
} from '../action-types';

const visibilityFilter = handleActions({
  [VISIBILITY_FILTER_SET]: (state, { payload }) => payload,
}, SHOW_ALL);

export default visibilityFilter;
