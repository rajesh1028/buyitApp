import { URL_LINK as url } from "../link";


const addCartItem = ({ dispatch, user, products }) => {
    fetch(`${url}/cart/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("token")
        },
        body: JSON.stringify({ "user": user, "products": products })
    }).then(res => res.json())
        .then(data => {
            console.log(data);
            dispatch({ type: "ADDITEM", payload: products });
        })
        .catch(error => {
            console.log(error)
            alert("Failed to add to cart");
        });
}

export default addCartItem;