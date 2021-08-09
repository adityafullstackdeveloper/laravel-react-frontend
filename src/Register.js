import Button from "react-bootstrap/Button";
import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import Header from "./Header";

function Register() {
    const history = useHistory();
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push('./add')
        }
    }, [])
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function signUp() {
        let items = {name, email, password};
        let result = await fetch("http://localhost:8000/api/register", {
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
                                User Registration
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="">Full Name</label>
                                            <input type="text" className="form-control" value={name}
                                                   onChange={(e) => setName(e.target.value)}/>
                                        </div>
                                    </div>
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
                                <Button variant="primary" type="button" onClick={signUp}>Register</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;