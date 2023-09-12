export function fetchItems(page, searchQuery = '') {
    return async (dispatch) => {
      dispatch({ type: 'FETCH_ITEMS_REQUEST' });
  
      try {
        let apiUrl = 'https://api.publicapis.org/entries';
        if (searchQuery) {
          apiUrl += `?title=${encodeURIComponent(searchQuery)}`;
        }
  
        const res = await fetch(apiUrl);
        const data = await res.json();
        dispatch({ type: 'FETCH_ITEMS_SUCCESS', payload: data });
        console.log('Data:', data);
      } catch (err) {
        console.log('error',err)
      }
    };
  }
  
  export const selectItem = (item) => ({
    type: 'SELECT_ITEM',
    payload: item 
  })