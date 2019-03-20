// Reducers

// 1st param sets initial state
const claimsHistory = (oldListOfClaims = [], action) => {
    if (action.type === 'CREATE_CLAIM') {
        // Takes original array and then creates new array by joining it with new data
        return [...oldListOfClaims, action.payload];
    }

    return oldListOfClaims;
};