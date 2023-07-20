import { URL_LINK as url } from "../link";


const removeCartItem = ({ dispatch, item, userID }) => {
    fetch(`${url}/cart/update/${userID}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("token")
        },
        body: JSON.stringify({ "product": item._id })
    }).then(res => res.json())
        .then(data => {
            dispatch({ type: "DELITEM", payload: item });
            console.log(data);
        })
        .catch(error => {
            console.log(error)
            alert("Failed to remove data from cart");
        });
}

export default removeCartItem;