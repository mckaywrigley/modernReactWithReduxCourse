/* 

Redux Flow

1. To change state we call an action creator.
2. Which produces an action.
3. That gets fed to dispatch.
4. Which forwards the action to reducers.
5. Which creates new state.

 */




// Action Creators

const createPolicy = (name, amount) => {
    return {
        // Pay attention to naming convention
        type: 'CREATE_POLICY',
        // Values come from parameterss
        payload: {
            name: name,
            amount: amount
        }
    };
}

const deletePolicy = (name) => {
    return {
        type: 'DELETE_POLICY',
        payload: {
            name: name
        }
    }
}

const createClaim = (name, amountToCollect) => {
    return {
        type: 'CREATE_CLAIM',
        payload: {
            name: name,
            amountToCollect: amountToCollect
        }
    }   
}







// Reducers

// 1st param sets initial state
const claimsHistory = (oldListOfClaims = [], action) => {
    if (action.type === 'CREATE_CLAIM') {
        // Takes original array and then creates new array by joining it with new data
        return [...oldListOfClaims, action.payload];
    }

    return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
    if (action.type === 'CREATE_CLAIM') {
        return bagOfMoney - action.payload.amountToCollect;
    } else if (action.type === 'CREATE_POLICY') {
        return bagOfMoney + action.payload.amount;
    }

    return bagOfMoney;
};

const policies = (listOfPolicies = [], action) => {
    if (action.type === 'CREATE_POLICY') {
        return [...listOfPolicies, action.payload.name];
    } else if (action.type === 'DELETE_POLICY') {
        return listOfPolicies.filter(name => {
            return name !== action.payload.name;
        });
    }

    return listOfPolicies;
}




// Pulls from Redux
const { createStore, combineReducers } = Redux;

// Combines Reducers
const ourDepartments = combineReducers({
    accounting: accounting,
    claimsHistory: claimsHistory,
    policies, policies
});

// Creates store passing in combined reducers
const store = createStore(ourDepartments); 





// Creates action from createPolicy action creator
const action = createPolicy('Mckay', 20);

store.dispatch(action);
console.log(store.getState());