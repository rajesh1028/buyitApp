const initialState = {
    products: []
};

const getProducts = (state = initialState, { type, payload }) => {
    switch (type) {
        case "GET_PRODUCTS": return {
            ...state,
            products: [...payload]
        }

        default: return state;

    }
}

export default getProducts;