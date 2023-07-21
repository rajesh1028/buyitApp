import { URL_LINK as url } from "../link";

const getProducts = ({ dispatch, setLoading }) => {
    fetch(`${url}/products`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("token")
        }
    }).then(res => res.json())
        .then(data => {
            setLoading(false);
            if (data.data) {
                dispatch({ type: "GET_PRODUCTS", payload: data.data });
            } else {
                alert("Login to continue: " + data.msg);
            }
        })
        .catch(error => {
            setLoading(false);
            console.log({ error });
            alert(error.msg);
        });
}

export default getProducts;