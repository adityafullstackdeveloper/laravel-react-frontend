import Button from "react-bootstrap/Button";
import Header from "./Header";
import {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";

function Login() {
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push('./add')
        }
    }, [])
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory();

    async function login() {
        let items = {email, password};
        let result = await fetch("http://localhost:8000/api/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(items)
        });
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result));
        history.push('/add');
    }

    return (
        <>
            <Header/>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-6 offset-3">
                        <div className="card">
                            <div className="card-header">
                                User Login
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="">Email Address</label>
                                            <input type="email" className="form-control" value={email}
                                                   onChange={(e) => setEmail(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="">Password</label>
                                            <input type="password" className="form-control" value={password}
                                                   onChange={(e) => setPassword(e.target.value)}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <Button variant="primary" type="button" onClick={login}>Login</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;