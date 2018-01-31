import { combineReducers } from 'redux';
import AuthReaducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeListReducer from './EmployeeListReducer';

export default combineReducers({
  auth: AuthReaducer,
  employeeForm: EmployeeFormReducer,
  employees: EmployeeListReducer
});
