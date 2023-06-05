import {signup, signin, logout} from '../actions/index';

const initialState = {
  token: '',
  auth: false,
  email: '',
  contactNo: '',
  FirstName: '',
  lastName: '',
  addres: '',
  id: '',
};

const User = (state = initialState, action) => {
  switch (action.type) {
    case signup:
      return {
        ...state,
        ...action.data,
      };
    case signin:
      return {
        ...state,
        ...action.data,
      };
    case logout:
      return {
        ...state,
        token: '',
        auth: false,
        email: '',
        contactNo: '',
        FirstName: '',
        lastName: '',
        addres: '',
        id: '',
      };
    default:
      return state;
  }
};

export default User;
