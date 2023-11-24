const OPEN_MODAL = "OPEN_MODAL";
const CLOSE_MODAL = "CLOSE_MODAL";

const initialState = {
  isOpen: false,
  content: null,
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        isOpen: true,
        content: action.payload.content,
      };
    case CLOSE_MODAL:
      return {
        isOpen: false,
        content: null,
      };
    default:
      return state;
  }
};

export const openModal = (bool) => ({ type: OPEN_MODAL, payload: bool });
export const closeModal = (bool) => ({ type: CLOSE_MODAL, payload: bool });
