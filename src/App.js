import {Route, BrowserRouter} from "react-router-dom";
import './App.css';
// import Header from './Header';
import Login from "./Login";
import Register from "./Register";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import Protected from "./Protected";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                {/*<Header/>*/}
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>
                <Route path="/add">
                    <Protected Cmp={AddProduct}/>
                </Route>
                <Route path="/update">
                    <Protected Cmp={UpdateProduct}/>
                </Route>
            </BrowserRouter>
        </div>
    );
}

export default App;
