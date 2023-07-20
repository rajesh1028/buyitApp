const addItem = [];

const addItems = (state = addItem, action) => {
    switch (action.type) {
        case "ADDITEM": return [
            ...state,
            ...action.payload
        ]

        case "DELITEM":
            return state = state.filter((x) => {
                return x !== action.payload._id
            })

        case "SET_CART": return [
            ...action.payload
        ]

        default: return state;

    }
}

export default addItems;