const initialState = {
    data: null,
    loading: true,
};
const profileReducer = (state = initialState, action: { type: string; payload: any; }) => {
    if(action.type === 'FETCH_ORDERS') {
        return {
          ...state,
          data: action.payload,
          loading: false,
        };
      }
      else { 
        return state; 
       }
}
export default profileReducer;
