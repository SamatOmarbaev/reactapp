const AUTH_LOGIN = "AUTH_LOGIN";
const AUTH_LOGOUT = "AUTH_LOGOUT";
const AUTH_LOADING = "AUTH_LOGOUT";

const initialState = {
  isAuth: false,
  isLoading: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return { isAuth: action.payload };
      // return { isAuth: action.payload, isLoading: false };
    case AUTH_LOGOUT:
      return { isAuth: action.payload };
      // return { isAuth: action.payload, isLoading: action.payload };
    case AUTH_LOADING:
      return { isLoading: action.payload };
    default:
      return state;
  }
};

export const authLogin = (bool) => ({ type: AUTH_LOGIN, payload: bool });
export const authLogout = (bool) => ({ type: AUTH_LOGOUT, payload: bool });
export const authLoading = (bool) => ({ type: AUTH_LOADING, payload: bool });
