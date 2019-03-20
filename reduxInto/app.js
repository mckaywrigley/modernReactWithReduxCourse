// Action Creator
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