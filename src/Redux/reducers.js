const initialState = {
  items: [],
  selectedItem: null,
  loading: false,
  error: null
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_ITEMS_REQUEST':
      return {
        ...state,
        loading: true
      };
    case 'FETCH_ITEMS_SUCCESS':
      return {
        ...state,
        loading: false,
        items: action.payload
      };
    case 'SELECT_ITEM':
      return {
        ...state,
        selectedItem: action.payload
      }

    default:
      return state;
  }
}