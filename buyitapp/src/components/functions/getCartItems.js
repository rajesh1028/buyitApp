import { URL_LINK as url } from "../link";

const getCartItems = ({ userID, dispatch }) => {
    fetch(`${url}/cart/${userID}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("token")
        }
    }).then(res => res.json())
        .then(data => {
            if (data.data.length === 0) {
                console.log("no items found");
            } else {
                dispatch({ type: "SET_CART", payload: data.data[0].products });
            }
        })
        .catch(error => {
            console.log(error);
            console.log("Failed to fetch data");
        });
}

export default getCartItems;