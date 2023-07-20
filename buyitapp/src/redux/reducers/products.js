const initialState = {
    products: [],
    userID: null
};

const getProducts = (state = initialState, { type, payload }) => {
    switch (type) {
        case "GET_PRODUCTS": return {
            ...state,
            products: [...payload]
        }

        case "SET_TOKEN": return {
            ...state,
            userID: payload
        }

        default: return state;

    }
}

export default getProducts;