//import jasonPlaceholder from '../apis/jasonPlaceholder';
// export const fetchPosts = () =>
// {
	// return async function (dispatch,getState)
	// {
		// const response = await jasonPlaceholder.get('/posts');
		// dispatch({type: 'FETCH_POSTS', payload:response});	
	// }
// };

// export const fetchPosts = () =>
// {
	// return async function(dispatch,getState)
	// {
		// const response = await jasonPlaceholder.get('/posts');
		// dispatch({
			// type:'FETCH_POST',
			// payload:response
		// });
		// //console.log("insideActionCreatorfetch:",response.data);
	// }
	
// };

import jsonPlaceHolder from '../apis/jasonPlaceholder';
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceHolder.get('/posts')
    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    })
};

