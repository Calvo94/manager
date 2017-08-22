import {
  EMPLOYEE_UPDATE,
  EMPLOYEECREATE,
  EMPLOYEE_SAVE_SUCESS
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      // actions.payload === { prop: 'name', value: 'jane'}
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_SAVE_SUCESS:
      return INITIAL_STATE;
    case EMPLOYEECREATE:
      return INITIAL_STATE;
    default:
    return state;
  }
};
