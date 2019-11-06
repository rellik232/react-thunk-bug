// export default () =>
// {
	// return 123;
// }
export default (state = [],action) => {
	switch(action.type)
	{
		case 'FETCH_POST':
			return action.payload;
		default:
			return state;
	};
	// console.log("insidePaylod",state);
	// if(action.type === 'FETCH_POST')
	// {
		// return action.payload;
		
	// }
	// return state;
	//if(action.type === undefined) return state;
	
	//return state;
	
};