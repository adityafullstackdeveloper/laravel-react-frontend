import Header from "./Header";
import {useEffect} from "react";
import {useHistory} from "react-router-dom";

function UpdateProduct() {
    const history = useHistory();
    useEffect(() => {
        if (!localStorage.getItem('user-info')) {
            history.push('./login')
        }
    }, [])
    return (
        <>
            <Header/>
        <div className="App">
            <h1>Update Product</h1>
        </div>
        </>
    )
}

export default UpdateProduct;