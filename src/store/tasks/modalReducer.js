const OPEN_MODAL = "OPEN_MODAL";
const CLOSE_MODAL = "CLOSE_MODAL";

const initialState = {
  isOpen: false,
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        isOpen: true,
      };
    case CLOSE_MODAL:
      return {
        isOpen: false,
      };
    default:
      return state;
  }
};

export const openModal = (bool) => ({ type: OPEN_MODAL, payload: bool });
export const closeModal = (bool) => ({ type: CLOSE_MODAL, payload: bool });
